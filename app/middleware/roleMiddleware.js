// // app/middleware/roleMiddleware.js
// exports.isAdmin = (req, res, next) => {
//   console.log(req.user); // Log the user object

//   if (req.user.role === "admin") {
//     next();
//     return;
//   }

//   res.status(403).send({ message: "Require Admin Role!" });
// };
// // controllers/user.controller.js

// // Middleware to check if the user is an admin
// exports.checkAdmin = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res.status(403).send({ message: "Insufficient permissions" });
//   }
//   next();
// };

// // Middleware to check if the user has the required role
// exports.checkUserRole = (requiredRole) => {
//   return (req, res, next) => {
//     if (req.user.role !== requiredRole) {
//       return res.status(403).send({ message: "Insufficient permissions" });
//     }
//     next();
//   };
// };

// // Rest of your controller functions...

// app/middleware/roleMiddleware.js

exports.isAdmin = (req, res, next) => {
  const userRole = req.user && req.user.role;

  if (userRole === "admin") {
    next();
  } else {
    res.status(403).send({ message: "Require Admin Role!" });
  }
};

exports.checkAdminOrPermission = (requiredPermissions) => {
  return (req, res, next) => {
    const userRole = req.user && req.user.role;

    if (userRole === "admin") {
      next();
    } else {
      const userPermissions = (req.user && req.user.permissions) || [];
      console.log("User Role:", userRole);
      console.log("User Permissions:", userPermissions);
      console.log("Required Permissions:", requiredPermissions);

      // Ensure userPermissions is an array
      let parsedUserPermissions = userPermissions;

      if (typeof userPermissions === "string") {
        try {
          parsedUserPermissions = JSON.parse(userPermissions);
        } catch (error) {
          console.error("Error parsing user permissions:", error);
          parsedUserPermissions = [];
        }
      }

      const hasRequiredPermissions = requiredPermissions.every((permission) =>
        parsedUserPermissions.includes(permission)
      );

      if (hasRequiredPermissions) {
        next();
      } else {
        res.status(403).send({ message: "Insufficient permissions" });
      }
    }
  };
};
