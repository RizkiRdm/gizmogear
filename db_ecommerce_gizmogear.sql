-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 27, 2023 at 02:54 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ecommerce_gizmogear`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_10_24_031346_create_products_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '9739073f614918bb177a6548d6b2c2072316d114048640e328af2aa1a9e8c451', '[\"*\"]', NULL, NULL, '2023-11-19 05:14:26', '2023-11-19 05:14:26'),
(2, 'App\\Models\\User', 2, 'auth_token', 'f833daf123e8120849f33ec0836b46333baa456f32895e185d082b86cffc6cf9', '[\"*\"]', NULL, NULL, '2023-11-19 05:14:38', '2023-11-19 05:14:38'),
(3, 'App\\Models\\User', 1, 'auth_token', '5a5cc685bd7890e8c2c3067dce9c95dda47081e638990010e3b31f42d349d782', '[\"*\"]', NULL, NULL, '2023-11-19 08:15:04', '2023-11-19 08:15:04'),
(4, 'App\\Models\\User', 1, 'auth_token', '07f90e9c7b1299f567645f663f6d166bae1ffa2ad97abea3c92b935f70068a86', '[\"*\"]', NULL, NULL, '2023-11-19 08:15:38', '2023-11-19 08:15:38'),
(5, 'App\\Models\\User', 1, 'auth_token', 'e14c84af42bacf9e5022bb287d1d5764eec9d39d2f8456feb475b978951441ff', '[\"*\"]', NULL, NULL, '2023-11-19 10:14:08', '2023-11-19 10:14:08'),
(6, 'App\\Models\\User', 1, 'auth_token', '63cd0d4ea3bbbe14edf29bc5292822558ffa62a4cce502fa07f8dd2d9b6a6d6c', '[\"*\"]', NULL, NULL, '2023-11-19 10:18:23', '2023-11-19 10:18:23'),
(7, 'App\\Models\\User', 1, 'auth_token', 'de2c59e70cbcc5de7a659122120bb40c21ed39a11bc65f7dbc1f42db9a1e3761', '[\"*\"]', NULL, NULL, '2023-11-19 10:18:24', '2023-11-19 10:18:24'),
(8, 'App\\Models\\User', 1, 'auth_token', 'df2404d0692bf2f5301b81f76baae563093a50935074c49e516b2549f594f24d', '[\"*\"]', NULL, NULL, '2023-11-19 10:22:26', '2023-11-19 10:22:26'),
(9, 'App\\Models\\User', 1, 'auth_token', 'ed217d23ff7aba1e3e1ee0fa5627c759938cd0fee8ca0a44d92cbc37586d4848', '[\"*\"]', NULL, NULL, '2023-11-19 10:22:33', '2023-11-19 10:22:33'),
(10, 'App\\Models\\User', 1, 'auth_token', '80a9005a1c5bb96474deb7b4320ee6b16d90a2134b6bbf08e1ee51054ccf3d8f', '[\"*\"]', NULL, NULL, '2023-11-19 10:22:33', '2023-11-19 10:22:33'),
(11, 'App\\Models\\User', 1, 'auth_token', 'a282dc4c1bc418196a2e2d7f2fb10667fa32d0251c757e21f1bcdab205845673', '[\"*\"]', NULL, NULL, '2023-11-19 10:22:34', '2023-11-19 10:22:34'),
(12, 'App\\Models\\User', 1, 'auth_token', '495a4d45cf9dbbc229757755de8d4ac8a59112659337e4d81ea342e526596e3e', '[\"*\"]', NULL, NULL, '2023-11-19 10:22:34', '2023-11-19 10:22:34'),
(13, 'App\\Models\\User', 1, 'auth_token', '433d251ad73c9c1684301356f3a5728829f5163df9dc9c7c50febcff9fea462a', '[\"*\"]', NULL, NULL, '2023-11-19 10:22:34', '2023-11-19 10:22:34'),
(14, 'App\\Models\\User', 1, 'auth_token', 'ea7b8d32b1520d6f384c3914a3ee4357d6d7b32e2f65ba700111c2c73ebf02d5', '[\"*\"]', NULL, NULL, '2023-11-19 10:23:18', '2023-11-19 10:23:18'),
(15, 'App\\Models\\User', 1, 'auth_token', '29fcfeb1d4c595463c1cd90dd894a87fccd9be81e189e2d64a143fe7e541c0a1', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:26', '2023-11-19 10:31:26'),
(16, 'App\\Models\\User', 1, 'auth_token', 'c28c60c6bdda7f887120f59c0059c6115861e57f5eb1dc55055cb4f50225a909', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:30', '2023-11-19 10:31:30'),
(17, 'App\\Models\\User', 1, 'auth_token', '917cb0a71b1ab1a76ce4072f8fbff7fce07fb28ea64890c8081f30f04855710f', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:35', '2023-11-19 10:31:35'),
(18, 'App\\Models\\User', 1, 'auth_token', 'eaa263cb86e4dd37710f255131a18ed6d59968c5fc14fcc83625151c387f96ea', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:36', '2023-11-19 10:31:36'),
(19, 'App\\Models\\User', 1, 'auth_token', 'a379d1339a75fc5ef45fbbeee4252fb08042b4b6ad84b604107f532c15050097', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:36', '2023-11-19 10:31:36'),
(20, 'App\\Models\\User', 1, 'auth_token', '6a4022bee44cb3b2f8333a919a040f4462ee58044e4c8414582a7458e7b2a28d', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:36', '2023-11-19 10:31:36'),
(21, 'App\\Models\\User', 1, 'auth_token', '62c81e03c5dd306f7935361f2bff149562bc319cca2d7c97eec99e05c66c8ebc', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:37', '2023-11-19 10:31:37'),
(22, 'App\\Models\\User', 1, 'auth_token', 'eaf1d2efb581b14d47037bb3fa94e5c8d65e49d1b0455b76e9a4b1c0cb60c362', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:37', '2023-11-19 10:31:37'),
(23, 'App\\Models\\User', 1, 'auth_token', '6b5ea94e97c3ab8096de613bbf2c65a20dd632f6eab23cb6bdf75f11a86d4f82', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:37', '2023-11-19 10:31:37'),
(24, 'App\\Models\\User', 1, 'auth_token', 'cfb38180a2ce217c056fca1a644664bb24c33cd00e859e360d3284d2175f4c13', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:37', '2023-11-19 10:31:37'),
(25, 'App\\Models\\User', 1, 'auth_token', '416c80cce212a64e7b7cdd0f6b968f947e812a522b5c60423f7c5c543a2c0a54', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:38', '2023-11-19 10:31:38'),
(26, 'App\\Models\\User', 1, 'auth_token', '6ac754dc520bf2fd57979b48730d20cf22a0585d54802229c405a6ac77bccf05', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:38', '2023-11-19 10:31:38'),
(27, 'App\\Models\\User', 1, 'auth_token', '9b0f9fa03324a2d773bd9f26ac8c2619abf7d0c3091898398ca9649497701b72', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:38', '2023-11-19 10:31:38'),
(28, 'App\\Models\\User', 1, 'auth_token', '0f3b8a9f2267138b2e13058c62a2646feb905035bf674d351165ab551ee61639', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:38', '2023-11-19 10:31:38'),
(29, 'App\\Models\\User', 1, 'auth_token', 'e59c152279de025c036ae547eba87e9d545cc669b829e85d20f6363e2f2aad33', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:39', '2023-11-19 10:31:39'),
(30, 'App\\Models\\User', 1, 'auth_token', 'b811e2143b4a992fd9dcf799ad4976fed839569eeb9b804e25acfc8a57c0268b', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:39', '2023-11-19 10:31:39'),
(31, 'App\\Models\\User', 1, 'auth_token', 'becbe72ffbbaa88c4aca9d7504be11b4732aa3f2eda97b672e4244cb083fd821', '[\"*\"]', NULL, NULL, '2023-11-19 10:31:49', '2023-11-19 10:31:49'),
(32, 'App\\Models\\User', 1, 'auth_token', '3327131841665dc0a4a8da7b13aad41f1a23d04c53db9230acdd9a2f68e40b0c', '[\"*\"]', NULL, NULL, '2023-11-19 10:34:05', '2023-11-19 10:34:05'),
(33, 'App\\Models\\User', 1, 'auth_token', 'ed77d6f2f9663ffc8a4e468b891ff666b190a325b573689c3077b26827309cf5', '[\"*\"]', NULL, NULL, '2023-11-19 10:34:22', '2023-11-19 10:34:22'),
(34, 'App\\Models\\User', 1, 'auth_token', 'c2eb7a3845f534cc59597e0dc32121587a32dc6a69bf5b3da4e895c3149b32ac', '[\"*\"]', NULL, NULL, '2023-11-19 10:34:35', '2023-11-19 10:34:35'),
(35, 'App\\Models\\User', 1, 'auth_token', 'a611278418e79c624d1abac3b8d4d63197d99f187957c6871e2a7286a2e43ab7', '[\"*\"]', NULL, NULL, '2023-11-19 10:34:40', '2023-11-19 10:34:40'),
(36, 'App\\Models\\User', 1, 'auth_token', 'f66a6542cd1655dc15e7cdcd57a5cdc63931ffab6ec751cbc699364526fba665', '[\"*\"]', NULL, NULL, '2023-11-19 10:34:51', '2023-11-19 10:34:51'),
(37, 'App\\Models\\User', 1, 'auth_token', '7a5a1c7308db0d9d4e56954ab005b5bd95c2b74cbf24c05975b7d1d87a1deb64', '[\"*\"]', NULL, NULL, '2023-11-19 10:35:45', '2023-11-19 10:35:45'),
(38, 'App\\Models\\User', 1, 'auth_token', '0a37228814c5232aea839642059921d4e76a65fb18e91557f9d2504d9d16be50', '[\"*\"]', NULL, NULL, '2023-11-19 10:36:17', '2023-11-19 10:36:17'),
(39, 'App\\Models\\User', 1, 'auth_token', 'aea3b37bf42ddcb9b0800af121af52063087fc1d4fc9ba0ca37320eddc92d073', '[\"*\"]', NULL, NULL, '2023-11-19 10:36:20', '2023-11-19 10:36:20'),
(40, 'App\\Models\\User', 1, 'auth_token', '6c27e95603cc7f672d48a849847a101b4c209d961420d2be7a1ec110cb5f1275', '[\"*\"]', NULL, NULL, '2023-11-19 10:36:36', '2023-11-19 10:36:36'),
(41, 'App\\Models\\User', 1, 'auth_token', '7d787760f1b28c753bc57b04dd4d4494006bf330e7e65eead437a4bd7e3c974a', '[\"*\"]', NULL, NULL, '2023-11-19 10:36:38', '2023-11-19 10:36:38'),
(42, 'App\\Models\\User', 1, 'auth_token', '74596c7588138f5cda31852a1448556d94ce5c3318536b7deefdea88c44cb59a', '[\"*\"]', NULL, NULL, '2023-11-19 10:36:40', '2023-11-19 10:36:40'),
(43, 'App\\Models\\User', 1, 'auth_token', '9798fab0874f896ad1c22112dc4539a370dbd9f3c7d41ca148d0a816a75736b5', '[\"*\"]', NULL, NULL, '2023-11-19 10:36:40', '2023-11-19 10:36:40'),
(44, 'App\\Models\\User', 1, 'auth_token', '0837cfe288b90eb01fde1b7b1e3caec22a28eb1acd19ba4491d7f2b143fadab5', '[\"*\"]', NULL, NULL, '2023-11-19 10:36:41', '2023-11-19 10:36:41'),
(45, 'App\\Models\\User', 1, 'auth_token', '445f18b56bdec22f45bb648374e16941fc23f6063cc0d667b750c148e9deb6f1', '[\"*\"]', NULL, NULL, '2023-11-19 10:36:50', '2023-11-19 10:36:50'),
(46, 'App\\Models\\User', 1, 'auth_token', '6a7bbfa4dfe5fc92f64f220366cb2e130bfbcffd1c4206c3a89961bbd14f07f8', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:41', '2023-11-19 10:37:41'),
(47, 'App\\Models\\User', 1, 'auth_token', 'acaaf76c49b780e87daee8d1b965c5db140000fc686c5d22175fccae8691c9a6', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:46', '2023-11-19 10:37:46'),
(48, 'App\\Models\\User', 1, 'auth_token', '0907d6f188583c1f59c4dbcff770c78afdd589bd60d3cea5f17817baae0fc5bd', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:47', '2023-11-19 10:37:47'),
(49, 'App\\Models\\User', 1, 'auth_token', '84ab5f42d49d0aa4fc1010dea695f2409a6453db1af3bcee3a96db8374d957ae', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:48', '2023-11-19 10:37:48'),
(50, 'App\\Models\\User', 1, 'auth_token', 'ba31ecc5d9dfec39741687449172e0547371232db3f3f1f084d4cc2aa473557a', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:48', '2023-11-19 10:37:48'),
(51, 'App\\Models\\User', 1, 'auth_token', '12be1df4b789b6407b73ac654bc92f814eb5becbb2a328e500371f3b674e8275', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:48', '2023-11-19 10:37:48'),
(52, 'App\\Models\\User', 1, 'auth_token', '2e42ba3abe54be6e1d0949864b429142cefa686c42f33b99efb5e1ea58a2b356', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:48', '2023-11-19 10:37:48'),
(53, 'App\\Models\\User', 1, 'auth_token', '33454590710fb9b4704a832f59fbc73cd087a207c6e7f81bae6190d000b7f7af', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:49', '2023-11-19 10:37:49'),
(54, 'App\\Models\\User', 1, 'auth_token', '9837ac6f2caa408be1472343207ca4f0995718a60687040fdd51b582298facc6', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:49', '2023-11-19 10:37:49'),
(55, 'App\\Models\\User', 1, 'auth_token', '7653fea53ee3f343554d2cc3e91087e15f6b65d3efc96e503603b96958513e9e', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:50', '2023-11-19 10:37:50'),
(56, 'App\\Models\\User', 1, 'auth_token', '334feebd885a253b38f0ab3bd2392540d7ead5fcdaf92dec61eb1dbc17cf04c3', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:50', '2023-11-19 10:37:50'),
(57, 'App\\Models\\User', 1, 'auth_token', '5a370fe2b1d95d04e5ab60ae53df7dc7ec8c20d9873d4153cc4461c9e23cd1e7', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:50', '2023-11-19 10:37:50'),
(58, 'App\\Models\\User', 1, 'auth_token', 'a3a7137d7582d9a334d7afe1b6b998042be4aabbe39ddc8f8a11d6d0a311ba9f', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:51', '2023-11-19 10:37:51'),
(59, 'App\\Models\\User', 1, 'auth_token', '81a72a62ca382cd1799de6acaebefaaccf560f9cab71df87e66bf2f94991c3b8', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:51', '2023-11-19 10:37:51'),
(60, 'App\\Models\\User', 1, 'auth_token', '0e4c21ce2b3dc53754a6996364763cf2a9647a58ecc58358fa817e9377a8fa9b', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:52', '2023-11-19 10:37:52'),
(61, 'App\\Models\\User', 1, 'auth_token', '1caeef1226b48cc0d824afe0954bca5405debc21215e1266df2970adb6c728df', '[\"*\"]', NULL, NULL, '2023-11-19 10:37:52', '2023-11-19 10:37:52'),
(62, 'App\\Models\\User', 1, 'auth_token', '407f6c5d2f40310ea04188203ae9e543a0aec11bd73e29e332c3ed5dcc827521', '[\"*\"]', NULL, NULL, '2023-11-19 10:38:30', '2023-11-19 10:38:30'),
(63, 'App\\Models\\User', 1, 'auth_token', 'f980a7a2e8309d900ebd0e5ffad0e64bd1ca44410477259c865e0eaa4806d1fe', '[\"*\"]', NULL, NULL, '2023-11-19 10:38:32', '2023-11-19 10:38:32'),
(64, 'App\\Models\\User', 1, 'auth_token', '56c20250e4295eefdf08fa21031672f1651bbe78214dbb4344dede4849010357', '[\"*\"]', NULL, NULL, '2023-11-19 10:38:55', '2023-11-19 10:38:55'),
(65, 'App\\Models\\User', 1, 'auth_token', '19dde998e13620382f2eeb4295460ace521fd86549e8639d067be6b0d6d9504a', '[\"*\"]', NULL, NULL, '2023-11-19 10:38:56', '2023-11-19 10:38:56'),
(66, 'App\\Models\\User', 1, 'auth_token', 'f412e1e7ff05cb78fc36ce5e7e004d93a7b658f67a906c04f26f846e316e88e7', '[\"*\"]', NULL, NULL, '2023-11-19 10:38:57', '2023-11-19 10:38:57'),
(67, 'App\\Models\\User', 1, 'auth_token', '353a665b51b046dce63d8be5e2c6ddf91bc8c288ebedac75b39bf5ff6bc38293', '[\"*\"]', NULL, NULL, '2023-11-19 10:38:58', '2023-11-19 10:38:58'),
(68, 'App\\Models\\User', 1, 'auth_token', '5910dd2d3560b1b97d804fef1f5f22bb892220490ccb93c3634e30efbe87f109', '[\"*\"]', NULL, NULL, '2023-11-19 10:38:58', '2023-11-19 10:38:58'),
(69, 'App\\Models\\User', 1, 'auth_token', '8498c0ce267613b9824324a9ecf985e77e1df39774ed6a64fbb29a98d209e91c', '[\"*\"]', NULL, NULL, '2023-11-19 10:38:59', '2023-11-19 10:38:59'),
(70, 'App\\Models\\User', 1, 'auth_token', '1ead87f2691444f3d181667aa937cd5e7a0697b75bdd5aace21bc2ac653fcb9f', '[\"*\"]', NULL, NULL, '2023-11-19 10:39:02', '2023-11-19 10:39:02'),
(71, 'App\\Models\\User', 1, 'auth_token', '17ea31484a8adde88acf2e5069938fa7c96b66ea14afd1962d0cc57dd3f9513a', '[\"*\"]', NULL, NULL, '2023-11-19 10:39:10', '2023-11-19 10:39:10'),
(72, 'App\\Models\\User', 1, 'auth_token', 'cc7f8ed82894a0c1b297cdf1d2cdb95bdc374d9067dbb9cd0072637088af2129', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:48', '2023-11-19 10:40:48'),
(73, 'App\\Models\\User', 1, 'auth_token', '5d94f9227f119c0dc38e72e27d06d3944cb280a39dca636c62c82d2693108d40', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:49', '2023-11-19 10:40:49'),
(74, 'App\\Models\\User', 1, 'auth_token', 'b6dfcfd13df78e0dfb506ecab1da3e611c2683d7777c2cab2818e27e49d2a5cd', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:50', '2023-11-19 10:40:50'),
(75, 'App\\Models\\User', 1, 'auth_token', '659c516e69914f67a3d0daa3ab58a888c7a4832d7f48bab23b70ce7baeabc74e', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:50', '2023-11-19 10:40:50'),
(76, 'App\\Models\\User', 1, 'auth_token', '33739e47da144ac343d6199ebaf50fd438339614d61325b20e3098fe86acd766', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:50', '2023-11-19 10:40:50'),
(77, 'App\\Models\\User', 1, 'auth_token', 'f7005af34b4fe20469b3f6dddfe234c7af2a504616f920a13f6409965a09d7ef', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:56', '2023-11-19 10:40:56'),
(78, 'App\\Models\\User', 1, 'auth_token', '90bf0e09c52e77b9ab82246964d2daa19be04325cd9ba881bd796e55152f4af7', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:57', '2023-11-19 10:40:57'),
(79, 'App\\Models\\User', 1, 'auth_token', '6654e421baf19d4a2994643475682916dacdee6e07d09176208fcf5de7b601c7', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:57', '2023-11-19 10:40:57'),
(80, 'App\\Models\\User', 1, 'auth_token', '8a3cd14dcddf08449439b3ed74a05de224c8f1c195efac0b55abc6f3147432fc', '[\"*\"]', NULL, NULL, '2023-11-19 10:40:57', '2023-11-19 10:40:57'),
(81, 'App\\Models\\User', 1, 'auth_token', '7ea7be48d71851275bc1fab9ea7c20c38817f8602585127f0b658e9617b7ae16', '[\"*\"]', NULL, NULL, '2023-11-19 10:42:29', '2023-11-19 10:42:29'),
(82, 'App\\Models\\User', 2, 'auth_token', 'eea26f67ca00bbf3a34e2893ec21c2edc369d11a82eaef20e83ee921380b0532', '[\"*\"]', NULL, NULL, '2023-11-19 10:43:01', '2023-11-19 10:43:01'),
(83, 'App\\Models\\User', 1, 'auth_token', 'fbeb781c4e837037354af626ffca22e1dea8c2f3dbb4eff11ec018f8ce72ce2b', '[\"*\"]', NULL, NULL, '2023-11-20 07:34:07', '2023-11-20 07:34:07'),
(84, 'App\\Models\\User', 1, 'auth_token', 'aa7de6c4e2977ab0d9f951084ba9ecfba598aaa73f5dfa8146a04058efa2911c', '[\"*\"]', NULL, NULL, '2023-11-20 07:37:08', '2023-11-20 07:37:08'),
(85, 'App\\Models\\User', 1, 'auth_token', 'ff5b25656988d821bf6da9cde7eb3acaddd4d92007b42fe30632a45121ab5b4b', '[\"*\"]', NULL, NULL, '2023-11-21 07:18:50', '2023-11-21 07:18:50'),
(86, 'App\\Models\\User', 2, 'auth_token', '06443bda6457f738c10bac301c00883d1551d505630a769b315bac68a31c1a3c', '[\"*\"]', NULL, NULL, '2023-11-21 07:19:06', '2023-11-21 07:19:06'),
(87, 'App\\Models\\User', 1, 'auth_token', '5ee8939571609e9a848798860f7dbcf41213266f22c96a048cad30a1ed7270e1', '[\"*\"]', NULL, NULL, '2023-11-21 07:50:16', '2023-11-21 07:50:16'),
(88, 'App\\Models\\User', 2, 'auth_token', '8733f7766aa7e9bb53884588d422f081a826b457cf46b36bbac728c26a1d0290', '[\"*\"]', NULL, NULL, '2023-11-21 07:51:43', '2023-11-21 07:51:43'),
(89, 'App\\Models\\User', 2, 'auth_token', '656e8ac48bea2cb85c0497936a7548707d82f53795e395d10e5b9584a182aa12', '[\"*\"]', NULL, NULL, '2023-11-21 07:52:12', '2023-11-21 07:52:12'),
(90, 'App\\Models\\User', 2, 'auth_token', 'c428f7658604d53bbce3d54ce87c530b4064c19e58beb055e9ecb2621e9ff7e3', '[\"*\"]', NULL, NULL, '2023-11-21 07:54:22', '2023-11-21 07:54:22'),
(91, 'App\\Models\\User', 1, 'auth_token', '9669d330ec43ffcc10a670b06bd36afa7bbe817be3077c1bbc588a233d20bc96', '[\"*\"]', NULL, NULL, '2023-11-21 07:55:46', '2023-11-21 07:55:46'),
(92, 'App\\Models\\User', 2, 'auth_token', '3a32ac4e99469a265012cadc9b22e1aa65cb09c54f1eec4b856b8025cef4a40a', '[\"*\"]', NULL, NULL, '2023-11-21 07:58:42', '2023-11-21 07:58:42'),
(93, 'App\\Models\\User', 1, 'auth_token', 'f25639a4785527380e9302469c1d1264ceca5032fdeda651ec9f9525d162f76b', '[\"*\"]', NULL, NULL, '2023-11-21 08:00:28', '2023-11-21 08:00:28'),
(94, 'App\\Models\\User', 2, 'auth_token', 'a64ab5c245f92ddab298eb7118f55f0aa90bfa3877cada578b5a1d376a58e3dd', '[\"*\"]', NULL, NULL, '2023-11-21 08:02:48', '2023-11-21 08:02:48'),
(95, 'App\\Models\\User', 2, 'auth_token', '15fcebaca47a5ca677f873ed7358afbd984fc0cc3cc3f691d6cbe2bb12afda83', '[\"*\"]', NULL, NULL, '2023-11-21 08:03:40', '2023-11-21 08:03:40'),
(96, 'App\\Models\\User', 2, 'auth_token', '1665f338994e8f5fc66bd41dae811820b1de7ce5ab140135cb8103587c032bfb', '[\"*\"]', NULL, NULL, '2023-11-21 08:04:51', '2023-11-21 08:04:51'),
(97, 'App\\Models\\User', 3, 'auth_token', '3180389a707615df592a9aa46afddd281e45f2eaa672e4c1fb75b87fcdd8b997', '[\"*\"]', NULL, NULL, '2023-11-21 08:19:18', '2023-11-21 08:19:18'),
(98, 'App\\Models\\User', 4, 'auth_token', '16ff2e514131dd209f270a816741f9ecb8df7b3ff5e80cfd0d05ee025cea3707', '[\"*\"]', NULL, NULL, '2023-11-21 08:34:25', '2023-11-21 08:34:25'),
(99, 'App\\Models\\User', 5, 'auth_token', 'f706ed892561a6cb628ebaa1dfec59165917aea18bbfa50abce40a3e80c28585', '[\"*\"]', NULL, NULL, '2023-11-21 08:34:59', '2023-11-21 08:34:59'),
(100, 'App\\Models\\User', 6, 'auth_token', '9cd449b0954c11c9a254cdf1728743a13ec76ef5e05104da8daee9b60a16bde0', '[\"*\"]', NULL, NULL, '2023-11-21 08:39:48', '2023-11-21 08:39:48'),
(101, 'App\\Models\\User', 7, 'auth_token', 'fdd128d522a73fc658a3d7e0dce9f3f75efa1bd0bf301c33c125b106b8b948b9', '[\"*\"]', NULL, NULL, '2023-11-21 08:40:36', '2023-11-21 08:40:36'),
(102, 'App\\Models\\User', 8, 'auth_token', '226f3fdb24978c06f40ad3c2be7a20f5fe8f234618674a4f7a42f823bf788721', '[\"*\"]', NULL, NULL, '2023-11-21 08:43:31', '2023-11-21 08:43:31'),
(103, 'App\\Models\\User', 8, 'auth_token', '919f980bbceb2543fb4822a6f074ac2693c9aec4270be83c768666b5000bec6b', '[\"*\"]', NULL, NULL, '2023-11-21 08:45:02', '2023-11-21 08:45:02'),
(104, 'App\\Models\\User', 1, 'auth_token', '28f4dc71fd1022e5cac224cfc90dba7196e5c35f5e7a3e930c22d08e7abc210f', '[\"*\"]', NULL, NULL, '2023-11-23 07:48:50', '2023-11-23 07:48:50');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `slug`, `category`, `description`, `price`, `image`, `created_at`, `updated_at`) VALUES
(1, 'xbox series s', 'xbox-series-s-jwAmebUl50', 'console', 'LOOKS BETTER, SOUNDS BETTER, PLAYS BETTER\nEmbark on new adventures the way they’re meant to be experienced on Xbox Series S.', 500, '5XLoSq4JO9xknLP4ga3JoqFW2oPBVRtoIeqRGQ7I.jpg', '2023-11-19 05:09:49', '2023-11-19 05:09:49'),
(2, 'xbox series x', 'xbox-series-x-087oYxNk84', 'console', 'LOOKS BETTER, SOUNDS BETTER, PLAYS BETTER\nEmbark on new adventures the way they’re meant to be experienced on Xbox Series X.', 799, 'tbvweVMG9FmC3NpchhiwBFehcH6Z0pdL9IG809Ey.jpg', '2023-11-19 05:10:19', '2023-11-19 05:10:19'),
(3, 'Samsung S23 +', 'samsung-s23-QXngPWRswT', 'smartpone', 'Looks Good with new Technology and something new for Samsung S23 +', 1999, 'ZZqbllCQysuHskiCwWm3gN2XIlTPHdx8ChUMpFHI.jpg', '2023-11-19 05:11:35', '2023-11-19 05:11:35');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'rizki romdhoni', '$2y$10$33uZwEab6xX6JSjThSxaRetbFFC90aZBEBQZTpVym0Qb7/jKgMszS', 'admin', '2023-11-19 05:14:26', '2023-11-19 05:14:26'),
(2, 'rizki', '$2y$10$dLDQER7MNDqydKErIA1wkeb2VZcmLWKXSAWbTFb6FYE/v/M..gd4m', 'user', '2023-11-19 05:14:38', '2023-11-19 05:14:38'),
(3, 'ujang', '$2y$10$eqyyzU5iDHyJyVhJznVrTe9yssRxhkx67DuNHhanpd.gAi/yuqq6K', 'user', '2023-11-21 08:19:17', '2023-11-21 08:19:17'),
(4, 'rizki kopling', '$2y$10$gBdtSjB1OnK/fzmOgCdC1.mLzwYBwjM.jj6uL.KfpxvylZVOft2dO', 'user', '2023-11-21 08:34:25', '2023-11-21 08:34:25'),
(5, 'johan', '$2y$10$sE8OFzNa6q8f5KnVVhFfa.6yvr6NBtfvKgMSHcA9vewKCaV8S2Kne', 'user', '2023-11-21 08:34:59', '2023-11-21 08:34:59'),
(6, 'asep', '$2y$10$Ov9hmSb/CRxWmQCVlVbML.PYd46kwvxPjxKJYlPEkTlV80om1Gizu', 'user', '2023-11-21 08:39:48', '2023-11-21 08:39:48'),
(7, 'loki', '$2y$10$97W379xrgF0r3HpF36fKjuTPb7Sqlsro7OAhuRtz5Onk5zqRwWOCO', 'user', '2023-11-21 08:40:36', '2023-11-21 08:40:36'),
(8, 'thor', '$2y$10$eFDB1tbgZfMrIc/XXYvOG.MQqhzdqoMUtPZ9QPYoASjNIn06SV/yW', 'user', '2023-11-21 08:43:31', '2023-11-21 08:43:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_slug_unique` (`slug`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
