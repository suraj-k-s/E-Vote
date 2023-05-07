-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 06, 2023 at 05:35 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_evote`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

DROP TABLE IF EXISTS `tbl_admin`;
CREATE TABLE IF NOT EXISTS `tbl_admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(50) NOT NULL,
  `admin_email` varchar(50) NOT NULL,
  `admin_password` varchar(50) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`) VALUES
(1, 'krishna', 'kpp099@gmail.com', 'krishna');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_assignagent`
--

DROP TABLE IF EXISTS `tbl_assignagent`;
CREATE TABLE IF NOT EXISTS `tbl_assignagent` (
  `assign_id` int(11) NOT NULL AUTO_INCREMENT,
  `assign_date` varchar(50) NOT NULL,
  `election_id` int(11) NOT NULL,
  `electionagent_id` int(11) NOT NULL,
  `ward_id` int(11) NOT NULL,
  PRIMARY KEY (`assign_id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_assignagent`
--

INSERT INTO `tbl_assignagent` (`assign_id`, `assign_date`, `election_id`, `electionagent_id`, `ward_id`) VALUES
(29, '2023-04-29', 3, 38, 16),
(30, '2023-05-01', 3, 39, 17),
(31, '2023-05-01', 3, 40, 18);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_campaigning`
--

DROP TABLE IF EXISTS `tbl_campaigning`;
CREATE TABLE IF NOT EXISTS `tbl_campaigning` (
  `campaigning_id` int(11) NOT NULL AUTO_INCREMENT,
  `campaigning_datetime` varchar(50) NOT NULL,
  `campaigning_details` varchar(100) NOT NULL,
  `campaigning_file` varchar(100) NOT NULL,
  `candidate_id` int(11) NOT NULL,
  PRIMARY KEY (`campaigning_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_campaigning`
--

INSERT INTO `tbl_campaigning` (`campaigning_id`, `campaigning_datetime`, `campaigning_details`, `campaigning_file`, `candidate_id`) VALUES
(13, '04 29 23, 10:03 PM', 'hi', 'http://localhost/e-vote/api/Campainingphoto/1.png', 27),
(14, '04 29 23, 10:03 PM', 'helo', 'http://localhost/e-vote/api/Campainingphoto/3.png', 27);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_candidate`
--

DROP TABLE IF EXISTS `tbl_candidate`;
CREATE TABLE IF NOT EXISTS `tbl_candidate` (
  `candidate_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `election_id` int(11) NOT NULL,
  `submission_date` varchar(50) NOT NULL,
  `ward_id` int(11) NOT NULL,
  `candidate_status` varchar(50) NOT NULL DEFAULT 'Pending',
  `candidate_vstatus` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`candidate_id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_candidate`
--

INSERT INTO `tbl_candidate` (`candidate_id`, `user_id`, `election_id`, `submission_date`, `ward_id`, `candidate_status`, `candidate_vstatus`) VALUES
(27, 13, 3, '2023-04-29', 16, 'payment completed', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comment`
--

DROP TABLE IF EXISTS `tbl_comment`;
CREATE TABLE IF NOT EXISTS `tbl_comment` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `campaigning_id` int(11) NOT NULL,
  `comment_content` varchar(100) NOT NULL,
  `comment_datetime` varchar(50) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_comment`
--

INSERT INTO `tbl_comment` (`comment_id`, `user_id`, `campaigning_id`, `comment_content`, `comment_datetime`) VALUES
(4, 15, 14, 'hello', '04 29 23, 10:11 PM');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_complaint`
--

DROP TABLE IF EXISTS `tbl_complaint`;
CREATE TABLE IF NOT EXISTS `tbl_complaint` (
  `complaint_id` int(11) NOT NULL AUTO_INCREMENT,
  `complaint_date` varchar(50) NOT NULL,
  `complaint_content` varchar(100) NOT NULL,
  `complaint_reply` varchar(100) NOT NULL DEFAULT 'Not Yet Viewed',
  `user_id` int(11) NOT NULL,
  `complaint_status` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`complaint_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_complaint`
--

INSERT INTO `tbl_complaint` (`complaint_id`, `complaint_date`, `complaint_content`, `complaint_reply`, `user_id`, `complaint_status`) VALUES
(4, '2023-05-01', 'tydregrdtfhgyj', 'hai', 15, '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

DROP TABLE IF EXISTS `tbl_district`;
CREATE TABLE IF NOT EXISTS `tbl_district` (
  `district_id` int(11) NOT NULL AUTO_INCREMENT,
  `district_name` varchar(50) NOT NULL,
  PRIMARY KEY (`district_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(13, 'Kottayam'),
(12, 'Ernakulam'),
(11, 'Idukki');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_election`
--

DROP TABLE IF EXISTS `tbl_election`;
CREATE TABLE IF NOT EXISTS `tbl_election` (
  `election_id` int(11) NOT NULL AUTO_INCREMENT,
  `election_date` varchar(50) NOT NULL,
  `election_for_date` varchar(50) NOT NULL,
  `election_details` varchar(100) NOT NULL,
  PRIMARY KEY (`election_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_election`
--

INSERT INTO `tbl_election` (`election_id`, `election_date`, `election_for_date`, `election_details`) VALUES
(3, '2023-05-02', '2023-05-03', 'Election will be conducted on ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_electionagent`
--

DROP TABLE IF EXISTS `tbl_electionagent`;
CREATE TABLE IF NOT EXISTS `tbl_electionagent` (
  `electionagent_id` int(11) NOT NULL AUTO_INCREMENT,
  `electionagent_name` varchar(50) NOT NULL,
  `electionagent_address` varchar(100) NOT NULL,
  `electionagent_phonenumber` int(15) NOT NULL,
  `place_id` int(11) NOT NULL,
  `electionagent_email` varchar(50) NOT NULL,
  `electionagent_password` varchar(100) NOT NULL,
  `electionagent_voteridno` varchar(50) NOT NULL,
  `electionagent_employementidno` varchar(50) NOT NULL,
  `electionagent_aadharcardno` varchar(50) NOT NULL,
  `electionagent_photo` varchar(200) NOT NULL,
  `electionagent_doj` varchar(50) NOT NULL,
  `electionagent_gender` varchar(50) NOT NULL,
  `assign_status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`electionagent_id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_electionagent`
--

INSERT INTO `tbl_electionagent` (`electionagent_id`, `electionagent_name`, `electionagent_address`, `electionagent_phonenumber`, `place_id`, `electionagent_email`, `electionagent_password`, `electionagent_voteridno`, `electionagent_employementidno`, `electionagent_aadharcardno`, `electionagent_photo`, `electionagent_doj`, `electionagent_gender`, `assign_status`) VALUES
(38, 'Saji', 'kunnath house', 1235678898, 15, 'saji@gmaill.com', 'saji', '1234567898765', '1234567898765', '764534234', 'http://localhost/e-vote/api/Electionagentphoto/saji.jpg', '2023-04-29', 'male', 1),
(39, 'vishnu', 'kunam house', 1431243545, 16, 'vishnu@gmaill.com', 'vishnu', '1245354645', '14356576545', '1343653456', 'http://localhost/e-vote/api/Electionagentphoto/vishnu.jpg', '2023-04-29', 'male', 1),
(40, 'Minu', 'edakattu house', 1341435353, 19, 'minu@gmaill.com', 'minu', '12345464', '325365346', '1345265344', 'http://localhost/e-vote/api/Electionagentphoto/minu.jpg', '2023-04-29', 'female', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback`
--

DROP TABLE IF EXISTS `tbl_feedback`;
CREATE TABLE IF NOT EXISTS `tbl_feedback` (
  `feedback_id` int(11) NOT NULL AUTO_INCREMENT,
  `feedback_content` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`feedback_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_feedback`
--

INSERT INTO `tbl_feedback` (`feedback_id`, `feedback_content`, `user_id`) VALUES
(2, 'good service', 15);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_like`
--

DROP TABLE IF EXISTS `tbl_like`;
CREATE TABLE IF NOT EXISTS `tbl_like` (
  `like_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `campaigning_id` int(11) NOT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_like`
--

INSERT INTO `tbl_like` (`like_id`, `user_id`, `campaigning_id`) VALUES
(48, 15, 14);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

DROP TABLE IF EXISTS `tbl_place`;
CREATE TABLE IF NOT EXISTS `tbl_place` (
  `place_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_name` varchar(50) NOT NULL,
  `sectionpart_id` int(11) NOT NULL,
  `district_id` int(11) NOT NULL,
  PRIMARY KEY (`place_id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`place_id`, `place_name`, `sectionpart_id`, `district_id`) VALUES
(16, 'Udumbannoor', 27, 11),
(17, 'Arakkuklam', 27, 11),
(15, 'Karimannoor', 27, 11),
(14, 'Adimaly', 27, 11),
(18, 'Muttom', 27, 11),
(19, 'Kattapana', 28, 11),
(20, 'Thodupuzha', 28, 11),
(21, 'Kalady', 27, 12),
(22, 'Malayattoor', 27, 12),
(23, 'Vypin', 27, 12),
(24, 'Piravom', 28, 12),
(25, 'Muvatupuzha', 28, 12),
(26, 'Koothattukulam', 28, 12),
(27, 'Piravom', 28, 12);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_polling`
--

DROP TABLE IF EXISTS `tbl_polling`;
CREATE TABLE IF NOT EXISTS `tbl_polling` (
  `polling_id` int(11) NOT NULL AUTO_INCREMENT,
  `polling_datetime` varchar(50) NOT NULL,
  `polling_status` varchar(50) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `candidate_id` int(11) NOT NULL,
  PRIMARY KEY (`polling_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_polling`
--

INSERT INTO `tbl_polling` (`polling_id`, `polling_datetime`, `polling_status`, `user_id`, `candidate_id`) VALUES
(6, '05 03 23, 10:50 AM', '1', 18, 27);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sectionpart`
--

DROP TABLE IF EXISTS `tbl_sectionpart`;
CREATE TABLE IF NOT EXISTS `tbl_sectionpart` (
  `sectionpart_id` int(11) NOT NULL AUTO_INCREMENT,
  `sectionpart_name` varchar(50) NOT NULL,
  PRIMARY KEY (`sectionpart_id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_sectionpart`
--

INSERT INTO `tbl_sectionpart` (`sectionpart_id`, `sectionpart_name`) VALUES
(28, 'Municipality'),
(27, 'Panchayath');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `user_gender` varchar(50) NOT NULL,
  `user_phonenumber` int(15) NOT NULL,
  `ward_id` int(11) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(50) NOT NULL,
  `user_voteridno` varchar(50) NOT NULL,
  `user_photo` varchar(200) NOT NULL,
  `user_aadharcardno` varchar(50) NOT NULL,
  `user_vstatus` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_address`, `user_gender`, `user_phonenumber`, `ward_id`, `user_email`, `user_password`, `user_voteridno`, `user_photo`, `user_aadharcardno`, `user_vstatus`) VALUES
(15, 'achu', 'asad house', 'male', 1324343254, 16, 'achu@gmail.com', 'achu', '13245675432', 'http://localhost/e-vote/api/Userphoto/achu.jpg', '2134564321', 2),
(16, 'mathews', 'thotunpurath', 'male', 23456754, 16, 'mathews@gmail.com', 'mathews', '2345678654', 'http://localhost/e-vote/api/Userphoto/mathews.jpg', '234564321145', 2),
(13, 'krishna', 'karakunnel house', 'male', 561653456, 16, 'krishna@gmail.com', 'krishna', '2132435454645', 'http://localhost/e-vote/api/Userphoto/krishna.jpg', '234353454', 0),
(14, 'ammu', 'kottakal house', 'female', 986754678, 23, 'ammu@gmail.com', 'ammu', '78654324678', 'http://localhost/e-vote/api/Userphoto/ammu.jpg', '9876543256', 0),
(17, 'hari', 'karakunnel house', 'male', 897876757, 16, 'hari@gmail.com', 'hari', '9786543245678', 'http://localhost/e-vote/api/Userphoto/ammu.jpg', '897654325678', 2),
(18, 'harik ', 'karakunnel ', 'male', 897654332, 16, 'harik@gmail.com', 'hari123', '12345678', 'http://localhost/e-vote/api/Userphoto/vishnu.jpg', '12345678', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ward`
--

DROP TABLE IF EXISTS `tbl_ward`;
CREATE TABLE IF NOT EXISTS `tbl_ward` (
  `ward_id` int(11) NOT NULL AUTO_INCREMENT,
  `ward_name` varchar(50) NOT NULL,
  `place_id` int(11) NOT NULL,
  PRIMARY KEY (`ward_id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_ward`
--

INSERT INTO `tbl_ward` (`ward_id`, `ward_name`, `place_id`) VALUES
(20, 'Ward 5', 15),
(17, 'Ward 2', 15),
(18, 'Ward 3', 15),
(19, 'Ward 4', 15),
(16, 'Ward 1', 15),
(21, 'Ward 1', 16),
(22, 'Ward 2', 16),
(23, 'Ward 3', 16),
(24, 'Ward 1', 20),
(25, 'Ward 2', 20),
(26, 'Ward 3', 20);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
