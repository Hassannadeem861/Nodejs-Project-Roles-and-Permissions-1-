/*
Navicat MySQL Data Transfer

Source Server         : motala
Source Server Version : 50144
Source Host           : 41.76.209.175:3306
Source Database       : manufacturing

Target Server Type    : MYSQL
Target Server Version : 50144
File Encoding         : 65001

Date: 2024-01-30 19:44:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tblcounters`
-- ----------------------------
DROP TABLE IF EXISTS `tblcounters`;
CREATE TABLE `tblcounters` (
  `Batch_initials` varchar(50) DEFAULT NULL,
  `Batch_Counter` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tblcounters
-- ----------------------------
INSERT INTO `tblcounters` VALUES ('MOT', '1');

-- ----------------------------
-- Table structure for `tblcounters_tran`
-- ----------------------------
DROP TABLE IF EXISTS `tblcounters_tran`;
CREATE TABLE `tblcounters_tran` (
  `Jobcard_No` varchar(50) DEFAULT NULL,
  `Jobcard_Tran` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tblcounters_tran
-- ----------------------------
INSERT INTO `tblcounters_tran` VALUES ('MOT', '1');

-- ----------------------------
-- Table structure for `tbljobcards`
-- ----------------------------
DROP TABLE IF EXISTS `tbljobcards`;
CREATE TABLE `tbljobcards` (
  `Datetime` datetime DEFAULT NULL,
  `Batch_No` varchar(100) DEFAULT NULL,
  `Tran_No` double DEFAULT NULL,
  `StockCode` varchar(50) DEFAULT NULL,
  `StockDescription` varchar(100) DEFAULT NULL,
  `Batch_Qty` double DEFAULT NULL,
  `Crimping` double DEFAULT NULL,
  `Labeling` double DEFAULT NULL,
  `Boxing` double DEFAULT NULL,
  `Wrapping` double DEFAULT NULL,
  `Start_Date` datetime DEFAULT NULL,
  `End_Date` datetime DEFAULT NULL,
  `Batch_Manager` varchar(50) DEFAULT NULL,
  `Tank_No` varchar(50) DEFAULT NULL,
  `Tank_Description` varchar(100) DEFAULT NULL,
  `Tank_Manager` varchar(50) DEFAULT NULL,
  `Machine_No` varchar(50) DEFAULT NULL,
  `Machine_Description` varchar(100) DEFAULT NULL,
  `Machine_Manager` varchar(100) DEFAULT NULL,
  `Bottle_Wastage` double DEFAULT NULL,
  `Crimp_Wastage` double DEFAULT NULL,
  `Cap_Wastage` double DEFAULT NULL,
  `Label_Wastage` double DEFAULT NULL,
  `Box_Wastage` double DEFAULT NULL,
  `Wrapping_Wastage` double DEFAULT NULL,
  `Override_User` varchar(50) DEFAULT NULL,
  `User` varchar(50) DEFAULT NULL,
  `Tran_Type` varchar(50) DEFAULT NULL,
  `HisDay` varchar(10) DEFAULT NULL,
  `HisMonth` varchar(10) DEFAULT NULL,
  `HisYear` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tbljobcards
-- ----------------------------
INSERT INTO `tbljobcards` VALUES ('2024-01-27 21:52:36', 'MOT1', '0', '121SexyFRAG', '121 Sexy ', '2000', '0', '1', '1', '1', '2024-01-27 21:52:36', '1900-01-01 00:00:01', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '', '', 'Creation', '27', '01', '2024');
INSERT INTO `tbljobcards` VALUES ('2024-01-28 22:50:26', 'MOT1', '0', '212M30ExcFRAG', '212 Man 30ml Exclusive', '200', '1', '1', '1', '1', '2024-01-28 22:50:26', '1900-01-01 00:00:01', '', '', '', '', '', '', '', '0', '0', '0', '0', '0', '0', '', '', 'Creation', '28', '01', '2024');

-- ----------------------------
-- Table structure for `tbljobcards_archive`
-- ----------------------------
DROP TABLE IF EXISTS `tbljobcards_archive`;
CREATE TABLE `tbljobcards_archive` (
  `Datetime` datetime DEFAULT NULL, //
  `Batch_No` varchar(100) DEFAULT NULL,
  `Tran_No` double DEFAULT NULL, //
  `StockCode` varchar(50) DEFAULT NULL,
  `StockDescription` varchar(100) DEFAULT NULL,
  `Batch_Qty` double DEFAULT NULL, //
  `Start_Date` datetime DEFAULT NULL, //
  `End_Date` datetime DEFAULT NULL, //
  `Batch_Manager` varchar(50) DEFAULT NULL,
  `Tank_No` varchar(50) DEFAULT NULL,
  `Tank_Description` varchar(100) DEFAULT NULL,
  `Tank_Manager` varchar(50) DEFAULT NULL,
  `Machine_No` varchar(50) DEFAULT NULL,
  `Machine_Description` varchar(100) DEFAULT NULL,
  `Machine_Manager` varchar(100) DEFAULT NULL,
  `Bottle_Wastage` double DEFAULT NULL,
  `Crimp_Wastage` double DEFAULT NULL,
  `Cap_Wastage` double DEFAULT NULL,
  `Label_Wastage` double DEFAULT NULL,
  `Box_Wastage` double DEFAULT NULL,
  `Warpping_Wastage` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tbljobcards_archive
-- ----------------------------

-- ----------------------------
-- Table structure for `tbljobcards_ingrd`
-- ----------------------------
DROP TABLE IF EXISTS `tbljobcards_ingrd`;
CREATE TABLE `tbljobcards_ingrd` (
  `Batch_No` varchar(100) DEFAULT NULL,
  `MainStockCode` varchar(50) DEFAULT NULL,
  `Main_Description` varchar(100) DEFAULT NULL,
  `Ingrd_StockCode` varchar(50) DEFAULT NULL,
  `Ingrd_Description` varchar(50) DEFAULT NULL,
  `Ingrd_Qty` double DEFAULT NULL,
  `Batch_Qty` double DEFAULT NULL,
  `Ingr_Total_Qty` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tbljobcards_ingrd
-- ----------------------------
INSERT INTO `tbljobcards_ingrd` VALUES (null, '1', 'TANK SILVER', '5000', 'None', null, null, null);

-- ----------------------------
-- Table structure for `tblmachines`
-- ----------------------------
DROP TABLE IF EXISTS `tblmachines`;
CREATE TABLE `tblmachines` (
  `Machine_No` varchar(50) DEFAULT NULL,
  `Machine_Description` varchar(100) DEFAULT NULL,
  `Machine_Capacity` varchar(50) DEFAULT NULL,
  `Machine_Status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tblmachines
-- ----------------------------
INSERT INTO `tblmachines` VALUES ('111', 'labeling', '5000', 'None');
INSERT INTO `tblmachines` VALUES ('222', 'BOTTELING', '500', 'None');

-- ----------------------------
-- Table structure for `tblmachines_tran`
-- ----------------------------
DROP TABLE IF EXISTS `tblmachines_tran`;
CREATE TABLE `tblmachines_tran` (
  `DateTime` datetime DEFAULT NULL,
  `Batch_No` varchar(50) DEFAULT NULL,
  `Tran_No` double DEFAULT NULL,
  `Machine_No` varchar(50) DEFAULT NULL,
  `Machine_Name` varchar(100) DEFAULT NULL,
  `Busy_With` varchar(255) DEFAULT NULL,
  `Start_Date` datetime DEFAULT NULL,
  `End_Date` datetime DEFAULT NULL,
  `Manager` varchar(100) DEFAULT NULL,
  `User` varchar(50) DEFAULT NULL,
  `Operator` varchar(50) DEFAULT NULL,
  `HisDay` varchar(10) DEFAULT NULL,
  `HisMonth` varchar(10) DEFAULT NULL,
  `HisYear` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tblmachines_tran
-- ----------------------------

-- ----------------------------
-- Table structure for `tblmanagers`
-- ----------------------------
DROP TABLE IF EXISTS `tblmanagers`;
CREATE TABLE `tblmanagers` (
  `Manager_No` varchar(50) DEFAULT NULL,
  `Manager_Name` varchar(50) DEFAULT NULL,
  `Manager_Description` varchar(100) DEFAULT NULL,
  `Manager_Cell` varchar(50) DEFAULT NULL,
  `Manager_Section` varchar(100) DEFAULT NULL,
  `Manager_Status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tblmanagers
-- ----------------------------
INSERT INTO `tblmanagers` VALUES ('123', 'jawad rizvi', 'manager', '54545', 'packing', 'N/A');

-- ----------------------------
-- Table structure for `tblmanagers_tran`
-- ----------------------------
DROP TABLE IF EXISTS `tblmanagers_tran`;
CREATE TABLE `tblmanagers_tran` (
  `DateTime` datetime DEFAULT NULL,
  `Batch_No` varchar(50) DEFAULT NULL,
  `Tran_No` double DEFAULT NULL,
  `Manager_Name` varchar(50) DEFAULT NULL,
  `Manager_Description` varchar(100) DEFAULT NULL,
  `Manager_Section` varchar(100) DEFAULT NULL,
  `Busy_With` varchar(255) DEFAULT NULL,
  `Start_Date` datetime NOT NULL,
  `End_Date` datetime DEFAULT NULL,
  `User` varchar(50) DEFAULT NULL,
  `Operator` varchar(50) DEFAULT NULL,
  `HisDay` varchar(10) DEFAULT NULL,
  `HisMonth` varchar(10) DEFAULT NULL,
  `HisYear` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tblmanagers_tran
-- ----------------------------

-- ----------------------------
-- Table structure for `tblsystemsettings`
-- ----------------------------
DROP TABLE IF EXISTS `tblsystemsettings`;
CREATE TABLE `tblsystemsettings` (
  `System_Settings` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tblsystemsettings
-- ----------------------------

-- ----------------------------
-- Table structure for `tbltanks`
-- ----------------------------
DROP TABLE IF EXISTS `tbltanks`;
CREATE TABLE `tbltanks` (
  `Tank_No` varchar(50) DEFAULT NULL,
  `Tank_Name` varchar(100) DEFAULT NULL,
  `Capacity` varchar(50) DEFAULT NULL,
  `Tank_Status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tbltanks
-- ----------------------------
INSERT INTO `tbltanks` VALUES ('1', 'TANK SILVER', '5000', 'None');

-- ----------------------------
-- Table structure for `tbltanks_tran`
-- ----------------------------
DROP TABLE IF EXISTS `tbltanks_tran`;
CREATE TABLE `tbltanks_tran` (
  `DateTime` datetime DEFAULT NULL,
  `Batch_No` varchar(50) DEFAULT NULL,
  `Tran_No` double DEFAULT NULL,
  `Tank_No` varchar(50) DEFAULT NULL,
  `Tank_Name` varchar(100) DEFAULT NULL,
  `Capacity` varchar(50) DEFAULT NULL,
  `Busy_With` varchar(255) DEFAULT NULL,
  `Start_Date` datetime DEFAULT NULL,
  `End_Date` datetime DEFAULT NULL,
  `Manager` varchar(100) DEFAULT NULL,
  `User` varchar(50) DEFAULT NULL,
  `Operator` varchar(50) DEFAULT NULL,
  `HisDay` varchar(10) DEFAULT NULL,
  `HisMonth` varchar(10) DEFAULT NULL,
  `HisYear` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tbltanks_tran
-- ----------------------------
