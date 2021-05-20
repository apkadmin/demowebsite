<?php
/**
 * Cấu hình cơ bản cho WordPress
 *
 * Trong quá trình cài đặt, file "wp-config.php" sẽ được tạo dựa trên nội dung 
 * mẫu của file này. Bạn không bắt buộc phải sử dụng giao diện web để cài đặt, 
 * chỉ cần lưu file này lại với tên "wp-config.php" và điền các thông tin cần thiết.
 *
 * File này chứa các thiết lập sau:
 *
 * * Thiết lập MySQL
 * * Các khóa bí mật
 * * Tiền tố cho các bảng database
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Thiết lập MySQL - Bạn có thể lấy các thông tin này từ host/server ** //
/** Tên database MySQL */
define( 'DB_NAME', 'demowebsite' );

/** Username của database */
define( 'DB_USER', 'demoweb' );

/** Mật khẩu của database */
define( 'DB_PASSWORD', 'bofudb9qnzjGaeW9v' );

/** Hostname của database */
define( 'DB_HOST', '35.235.77.112' );

/** Database charset sử dụng để tạo bảng database. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Kiểu database collate. Đừng thay đổi nếu không hiểu rõ. */
define('DB_COLLATE', '');

/**#@+
 * Khóa xác thực và salt.
 *
 * Thay đổi các giá trị dưới đây thành các khóa không trùng nhau!
 * Bạn có thể tạo ra các khóa này bằng công cụ
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Bạn có thể thay đổi chúng bất cứ lúc nào để vô hiệu hóa tất cả
 * các cookie hiện có. Điều này sẽ buộc tất cả người dùng phải đăng nhập lại.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'klyDg_=<v+?Cnec?X.H#X$-NN]HpF|&EwliA CB-mh)AtL^x+=T??|lVcOJfNgbQ' );
define( 'SECURE_AUTH_KEY',  'g6fs6K4zSx0$0b`e!}^udppsSLMhMN@{TA$`g-(SKW wobf^cMM/0]<9Yir@W9#s' );
define( 'LOGGED_IN_KEY',    ':t8N70%UC3HCd3,i+%w]o1A/]_Ic%!r|B=|i87?I<9,8tb>KyOoJ=!><s%^>mf`:' );
define( 'NONCE_KEY',        '_GI-Xw0UO*0!.GY/v]DEFa7vd6s_>1-]}arBm1$M=|m)$QfP~^~8*uEQ-(kr{YZ(' );
define( 'AUTH_SALT',        'mf6L*NPQUO=APnW-L2w6N@(#7qp[PcY?K amyg4X/(9pi MyLO{^^n4w=!D(_(%b' );
define( 'SECURE_AUTH_SALT', 'k>/DJ0:5NSUDOfN=D8QEl(1ENe-0OOV=wH3XW%U 8sE5-[.0T~A*]+lb+jNsir5G' );
define( 'LOGGED_IN_SALT',   'g<>@.G`bBkVyqS(?(}R;904ev4MD|G=|a%V3&)RgM,V5!X5gO}A._Z[d(e7C&Z$I' );
define( 'NONCE_SALT',       ',xsqAJ%d,hJ52pJ5v_s]yiv*LWCa^GcGF PxM-|&9>+TMHhGBA?-+sB0>[F`H>.6' );

/**#@-*/

/**
 * Tiền tố cho bảng database.
 *
 * Đặt tiền tố cho bảng giúp bạn có thể cài nhiều site WordPress vào cùng một database.
 * Chỉ sử dụng số, ký tự và dấu gạch dưới!
 */
$table_prefix = 'wp_';

/**
 * Dành cho developer: Chế độ debug.
 *
 * Thay đổi hằng số này thành true sẽ làm hiện lên các thông báo trong quá trình phát triển.
 * Chúng tôi khuyến cáo các developer sử dụng WP_DEBUG trong quá trình phát triển plugin và theme.
 *
 * Để có thông tin về các hằng số khác có thể sử dụng khi debug, hãy xem tại Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Đó là tất cả thiết lập, ngưng sửa từ phần này trở xuống. Chúc bạn viết blog vui vẻ. */

/** Đường dẫn tuyệt đối đến thư mục cài đặt WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Thiết lập biến và include file. */
require_once(ABSPATH . 'wp-settings.php');
