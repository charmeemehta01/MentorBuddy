-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2020 at 08:24 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `the_mentor_buddy`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `password`) VALUES
('admin', 'admin'),
('root', 'root'),
('admin@mentormania.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blog_id` int(11) NOT NULL,
  `blog_title` text NOT NULL,
  `blog_desc` text NOT NULL,
  `blog_img` text NOT NULL,
  `blog_abstract` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blog_id`, `blog_title`, `blog_desc`, `blog_img`, `blog_abstract`) VALUES
(1, 'GMAT vs GRE', 'Now that we have our reasons to study abroad, next comes the question of how.\r\nTwo major examinations to assess your performance internationally are\r\n•	GRE – Global Record Examination\r\n•	GMAT – Graduate Management Admission Test\r\n\r\nThese two examinations will be taken into consideration by universities all over the world. The choice of taking which of these examinations is fairly simple.  Rather, it used to be fairly simple.\r\nGMAT, if you want to get into a business school or a get an MBA from a University and GRE for all the other courses. \r\n\r\nRemember, the “used to be fairly simple” part? Well, that is because, currently GRE is also considered for the admission in B-schools and for courses in management in some of the universities.\r\n\r\n Back to the confusion mode? Don’t worry. We’ll break it down for you.\r\n\r\n If you have decided to do an MBA or a management related course and do not have a technical background, GMAT would be the better option. Otherwise, GRE is preferable as GRE gives you access to a varied range post-graduation courses, be it technical or non-technical. If a university accepts both the examinations for a course, then make the choice based on your skills.\r\n\r\nGMAT gives higher chances of demonstrating your math skills and there is not much scope for vocabulary. If that doesn’t sound like you, you should probably choose GRE which has comparatively an easier quant section and verbal sections with a higher standard.\r\n\r\nAnother scenario to face a similar situation would be while applying to a MS-MBA dual degree. Though a very few colleges provide this degree, it is better to go for GRE as GRE is a must to be eligible for MS. This would be the better option instead of going through the hardship of taking both the tests.\r\n\r\n \r\n EXAM PATTERNS:\r\nGRE and GMAT have a similar test pattern with minute differences and not-so-similar scoring methods.\r\nGMAT:\r\n\r\nGMAT has four sections:\r\n•	Analytical Writing Assessment (AWA) – Tests your critical thinking and the ability to articulate your thoughts in an efficient way.\r\n\r\n•	Integrated Reasoning – Multiple choice questions are given which test the ability to understand and solve problems in different formats such as charts, graphs and tables. Requires both quantitative and verbal knowledge.\r\n\r\n\r\n•	Quantitative section – Questions which test your basic math concepts like arithmetic, geometry and algebra. It has two types of questions:\r\no	Data sufficiency \r\no	Problem Solving\r\n\r\n\r\n•	Verbal section – Tests your capability of comprehending written English and understanding of the standard conventions of English. In this section you may come across three types of questions:\r\no	Reading Comprehension\r\no	Critical Reasoning\r\no	Sentence Correction\r\n\r\nSection	Number of Questions	Score\r\nAnalytical Writing	1 essay	0 – 6\r\n(in increments of 0.5)\r\nIntegrated Reasoning	12	1 – 8 \r\n(in increments of 1)\r\nQuantitative Section	31	6 – 51 \r\n(in increments of 1)\r\nVerbal Section	36	6 – 51\r\n(in increments of 1) \r\nAll the four sections are separately timed with an option of taking two eight-minute breaks. Without the breaks, the exam will go on for 3 hours and 7 minutes. \r\nThe usual order of the sections is:\r\n•	AWA – 30 minutes\r\n•	Integrated Reasoning – 30 minutes\r\n•	Quantitative – 62 minutes\r\n•	Verbal – 65 minutes \r\nGMAT scoring methods:\r\nThe total score ranges from 200-800. This is a cumulative score of Quantitative, Verbal and Integrated reasoning sections. Once you finish your test, an unofficial test report will be shown to you immediately and you’ll be given 2 minutes to decide whether to accept the scores. If not, the scores will automatically be cancelled.\r\n\r\nGRE: \r\n GRE consists of 3 sections:\r\n•	Analytical Reasoning – This section has two essay questions with 30 minutes allotted to complete each task to test your written proficiency in English. The essay questions are of two types:\r\n\r\no	Analyzing an issue\r\no	Analyzing an argument\r\n•	Verbal Reasoning – This section determines how accurately you can draw conclusions and understand the fundamentals of English\r\n•	Quantitative Reasoning – Assesses your ability to solve problems, analyze quantitative information using elementary level arithmetic, geometry and data analysis.\r\nSection	Number of questions	Score\r\nAnalytical Writing 	2	essays	1 – 6  \r\nQuantitative 	40 \r\n(divided into two sections of 20 questions each)	130 – 170\r\nVerbal 	40\r\n(divided into two sections into 20 questions each)	130 – 170 \r\n\r\nThere is another section called the “unidentified section” apart from these. This section may be of verbal or quantitative questions and is allocated randomly. The questions are split up into 6 sections in total. The time duration of the exam is 3 hours and 45 minutes with one ten-minute break after the first one hour, that is after the analytical writing section.\r\n•	Analytical Writing – 60 minutes (30 minutes for each question)\r\n•	Quantitative section 1 – 35 minutes \r\n•	Quantitative section 2 – 35 minutes\r\n•	Verbal section 1 – 30 minutes\r\n•	Verbal section 2 – 30 minutes\r\n•	Unidentified section – 25 minutes\r\nThe scores of 4 sections of all the quantitative and verbal sections, unidentified included, will only be considered. The plot twist here is that the sections which will be considered for scoring are not announced beforehand. To obtain good scores, it will be clever not to neglect any of the sections.\r\n\r\nGRE scoring methods:\r\nGRE’s final score ranges from 260 to 340. AWA section is not taken into account while calculating the total score. However, a separate score will be provided for this section which may be asked by some of the universities at the time of admission.\r\nRE-TAKE OF EXAM:\r\n\r\nScores of both, GRE and GMAT are valid up to five years from the date of the examination. While GRE can be written any number of times throughout the year with a 21-day gap, GMAT is restricted to write only five times with a minimum gap of 16 days between each try.\r\nTaking multiple tests to get good grades will not diminish your chances of admission into the universities or B schools.\r\n\r\nDIFFICULTY LEVELS:\r\n\r\nBoth the exams are computer adaptive. In simple words, the level of difficulty of every question is determined by your answer to previous question. So, if you answer the question correctly, the next one you get will be tougher, else you’ll get an easy question. This, in turn says that you cannot go back to the questions, once you have answered them or even skip some questions.\r\nGMAT, since it is conducted exclusively for the admission into business schools or to pursue a management course, has a higher need for the math skillset compared to GRE which focuses more on vocabulary and language.\r\nTherefore, the difficulty of the exam depends on the individual. If someone is pretty comfortable with logical reasoning and arithmetic, GMAT might seem easier, while to those with a high proficiency in English would opt to go for GRE.\r\n\r\nPREPARATION TIPS:\r\n\r\nThough GRE and GMAT tests only the fundamentals of English and basic Math concepts, preparation and practice is necessary to get a higher percentile. It’d be highly advisable to start planning in this order:\r\n•	Start by choosing the course you want to get your Master’s degree\r\n•	Search and finalize the institution which is offering your desired course\r\n•	Decide on when you’d want to join the college. Most of the institutions start their semesters either in Spring or in Fall. \r\n•	Once you have put your foot up on the course and the institution, you’ll have a vague range of score to aim for. This will help you to prepare smartly for the exam.\r\n•	Practice the Quantitative questions with a timer running. More the practice, more accuracy will be achieved in shorter time.\r\n•	For verbal sections and the analytical writing part, start slow by learning new words and improving your vocabulary by conversing in English and then pick up the pace to naturally get a grip on the language.  \r\n•	The time of preparation varies from person to person. However, the average duration ranges from a month to 6 months.\r\n\r\n \r\nTOP UNIVERSITIES CONSIDERING GRE AND GMAT SCORES:\r\n\r\nMost of the Indian students who aim to study abroad opt for one among the countries – US, UK and Canada.\r\nHere’s a list of top 5 colleges from each of these countries accepting GRE and GMAT scores:\r\n•	United States of America\r\no	California Institute of Technology (CalTech)\r\no	Stanford University\r\no	Massachusetts Institute of Technology (MIT)\r\no	Princeton University\r\no	Harvard University\r\n•	United Kingdom\r\no	University of Oxford\r\no	University of Cambridge\r\no	Imperial College London\r\no	University College London\r\no	University of Manchester\r\n\r\n•	Canada\r\no	University of Toronto\r\no	University of British Columbia\r\no	McGill University \r\no	McMaster University\r\no	University of Alberta\r\nThese are just a few among the top-notch colleges, while there are many more good colleges where you might end up. \r\nSo get going, and start preparing to enter into your dream university.\r\n \r\n', 'https://', 'Some description here'),
(2, 'US vs UK', 'Some description here', 'https://', ''),
(3, 'MS vs MBA', 'Some text here', 'https://', ''),
(4, 'TOEFL vs IELTS', 'Some decsription here', 'https://', '');

-- --------------------------------------------------------

--
-- Table structure for table `mentee`
--

CREATE TABLE `mentee` (
  `name` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mentee`
--

INSERT INTO `mentee` (`name`, `email`) VALUES
('Ansh Mehta', '8anshmehta@gmail.com'),
('Soham Dave', 'dave.soham2000@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `mentor`
--

CREATE TABLE `mentor` (
  `mentor_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `img` text NOT NULL,
  `field` text NOT NULL,
  `workplace` text NOT NULL,
  `work_exp` text NOT NULL,
  `email` text NOT NULL,
  `contactno` varchar(10) NOT NULL,
  `price` float NOT NULL,
  `Flag` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mentor`
--

INSERT INTO `mentor` (`mentor_id`, `name`, `img`, `field`, `workplace`, `work_exp`, `email`, `contactno`, `price`, `Flag`) VALUES
(4, 'Yashvi Shah', 'https://firebasestorage.googleapis.com/v0/b/ipgm-dea57.appspot.com/o/Neeta-Shankar-Photography-Workshops-Photo-Mentor-2-640x402.jpg?alt=media&token=c69502a2-fe8a-49f8-9b9f-edf406b914a8', 'GRE', 'New York', '2 years', 'yashvi@gmail.com', '9820144882', 300, 1),
(5, 'Jenny Mehta', 'https://firebasestorage.googleapis.com/v0/b/ipgm-dea57.appspot.com/o/Arushi_Headshot.jpg?alt=media&token=8e0dd6b6-b186-4e1e-9e70-89d9e0110494', 'GMAT', 'Delhi', '4 Years', 'jenny@gmail.com', '9888334210', 400, 1),
(6, 'Harshad Mehta', 'https://firebasestorage.googleapis.com/v0/b/ipgm-dea57.appspot.com/o/360_F_380582318_5lJ52eVLcePphpM4pMHdew3wgopfhQSc.jpg?alt=media&token=482b50aa-a0cf-4f33-85dd-36f40af625ba', 'GMAT', 'Australia', '6 Years', 'harshadm@gmail.com', '8799325581', 800, 1),
(7, 'Soham Dave', 'https://firebasestorage.googleapis.com/v0/b/ipgm-dea57.appspot.com/o/filename.png?alt=media&token=4370a8db-c719-4313-882d-553bb5150d93', 'GRE', 'Mumbai', '1 Year', 'dave.soham2000@gmail.com', '9820145991', 250, 1),
(8, 'Akmal Zayed', 'https://firebasestorage.googleapis.com/v0/b/ipgm-dea57.appspot.com/o/Beto-Ruiz-f3f4f7f8-057f-49da-8154-45cc37fc34a2.jpg?alt=media&token=820538a6-3733-43ea-a355-30e42521718d', 'GMAT', 'United Kingdom', '3 Years', 'akmalz@gmail.com', '9213459122', 300, 1),
(10, 'Shree Thakkar', 'https://firebasestorage.googleapis.com/v0/b/ipgm-dea57.appspot.com/o/Business-Professional-Headshots-00019.jpg?alt=media&token=ed598f81-40a6-43d9-a9a3-47289f8e799a', 'GMAT', 'Australia', '5+ Years', 'shree@outlook.com', '1298332156', 500, 1),
(12, 'Soham Patil', 'https://firebasestorage.googleapis.com/v0/b/ipgm-dea57.appspot.com/o/istockphoto-1016761216-612x612.jpg?alt=media&token=46b1db48-6833-47ac-906c-082266ff7d12', 'GRE', 'Mumbai', '5+ Years', 'sp@gm.com', '9820145991', 500, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` int(11) NOT NULL,
  `mentee_email` text NOT NULL,
  `mentor_email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `mentee_email`, `mentor_email`) VALUES
(1, '8anshmehta@gmail.com', 'dave.soham2000@gmail.com'),
(2, '8anshmehta@gmail.com', 'dave.soham2000@gmail.com'),
(3, '8anshmehta@gmail.com', 'dave.soham2000@gmail.com'),
(4, '8anshmehta@gmail.com', 'dave.soham2000@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `mentor`
--
ALTER TABLE `mentor`
  ADD PRIMARY KEY (`mentor_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `mentor`
--
ALTER TABLE `mentor`
  MODIFY `mentor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `session_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
