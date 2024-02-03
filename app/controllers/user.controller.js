const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

const authenticateUser = (username, password) => {
  return User.findOne({ where: { username: username } }).then((user) => {
    console.log("User Object:", user);

    if (user && user.password === password && user.permissions) {
      return user;
    } else {
      return null;
    }
  });
};

const hasPermission = (user, permission) => {
  return user && user.permissions && user.permissions.includes(permission);
};
// Create and Save a new User

exports.create = (req, res) => {
  // Ensure the requesting user has the "admin" role

  // Extract user data from the request body
  const { username, password, role } = req.body;

  // Validate request
  if (!username || !password || !role) {
    return res
      .status(400)
      .send({ message: "Username, password, and role are required!" });
  }

  // Validate role (add your role validation logic here)
  const validRoles = ["admin", "employee", "user"]; // Add your valid roles here

  if (!validRoles.includes(role)) {
    return res.status(400).send({
      message: "Invalid role! Valid roles are: " + validRoles.join(", "),
    });
  }

  // Create a new user
  User.create({
    username,
    password,
    role,
  })
    .then((user) => {
      res.status(201).send({ message: "User registered successfully.", user });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error registering user.", error: err.message });
    });
};
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username
    ? { username: { [Op.like]: `%${username}%` } }
    : null;
  // Check if the requesting user has the necessary permissions
  if (!hasPermission(req.user, "viewUsers")) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }
  User.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Authenticate the user
  authenticateUser(username, password)
    .then((user) => {
      if (user) {
        // Generate JWT token
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username, // Include username in the payload
            role: user.role, // Include role in the payload
            // permissions: user.permissions, // Include permissions in the payload
            permissions: JSON.parse(user.permissions),
            // permissions: ,
          },
          config.secret,
          {
            expiresIn: 86400, // expires in 24 hours
          }
        );

        // Include user data in the response
        res.send({
          user: {
            id: user.id,
            username: user.username,
            role: user.role,
            permissions: user.permissions, // Include permissions in the payload

            // permissions: JSON.parse(user.permissions),
            // Add other user data properties as needed
          },
          accessToken: token,
        });
      } else {
        res.status(401).send({
          message: "Invalid credentials",
        });
      }
    })
    .catch((err) => {
      console.error(err); // Log the error for debugging
      res.status(500).send({
        message: "Error during user authentication",
      });
    });
};
// Hypothetical authentication function (replace with your actual authentication logic)
// function authenticateUser(username, password) {
//   return new Promise((resolve, reject) => {
//     // Implement your authentication logic here
//     // For example, query the database to find the user by username and check the password
//     User.findOne({ where: { username: username } })
//       .then((user) => {
//         if (user && user.password === password && user.permissions) {
//           resolve(user);
//         } else {
//           resolve(null);
//         }
//       })
//       .catch((err) => {
//         console.error(err); // Log the error for debugging
//         reject(err);
//       });
//   });
// }

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Check if the user has the necessary permissions to update user data
  if (!hasPermission(req.user, "updateUser")) {
    return res.status(403).send({ message: "Insufficient permissions" });
  }

  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  // Check if the user has the necessary permissions to delete a user
  if (!hasPermission(req.user, "deleteUser")) {
    return res.status(403).send({ message: "Insufficient permissions" });
  }
  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    });
};

// Find all Users with a specific role
exports.findAllByRole = (req, res) => {
  const role = req.params.role;

  User.findAll({ where: { role: role } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// controllers/user.controller.js

exports.adminRoute = (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).send({ message: "Insufficient permissions" });
  }

  // Your logic for the admin route
  res.send({ message: "Admin route logic" });
};

exports.userEmployeeRoute = (req, res) => {
  const allowedRoles = ["user", "employee"];

  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).send({ message: "Insufficient permissions" });
  }

  // Your logic for the userEmployee route
  res.send({ message: "User and Employee route logic" });
};

exports.allRolesRoute = (req, res) => {
  // Your logic for the allRoles route
  res.send({ message: "All roles route logic" });
};
// ...

// Assign role dynamically
exports.assignRole = (req, res) => {
  const { userId, role, permissions } = req.body;

  // Validate request
  if (!userId || !role) {
    return res.status(400).send({
      message: "User ID and role are required!",
    });
  }

  // Check if the requester is an admin
  if (req.user.role !== "admin") {
    return res.status(403).send({ message: "Insufficient permissions" });
  }

  // Update the user's role and permissions in the database
  User.update({ role, permissions }, { where: { id: userId } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User role and permissions updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update user role and permissions. Maybe user was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating user role and permissions.",
      });
    });
};

// Function to check if a user has a specific permission
// function hasPermission(user, permission) {
//   // Check if the user object is defined and has a 'permissions' property
//   if (user && user.permissions) {
//     return user.permissions.includes(permission);
//   } else {
//     return false; // Return false if 'user' is undefined or 'permissions' is not present
//   }
// }
