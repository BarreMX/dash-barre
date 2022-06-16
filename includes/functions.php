<?php

function get_author_uri() {
	$author_uri = 'https://jb.code-coffee.net';
	return $author_uri;
}

function get_site_url() {
	$site_url = 'https://phpstack-742831-2494985.cloudwaysapps.com';
	return $site_url;
}

function is_page_active( $get_var ) {
	$is_active = '';
	if ( isset( $_GET['page'] ) ) {
		if ( $_GET['page'] == $get_var ) {
			$is_active = ' mm-active';
		}
	}
	return $is_active;
}

function get_current_role() {
	if ( isset( $_COOKIE['role'] ) ) {
		$role = $_COOKIE['role'];
	} else {
		$role = false;
	}
	return $role;
}

function is_admin() {
	$user_role = get_current_role();
	if ( $user_role == 'administrator' ) {
		$is_admin = true;
	} else {
		$is_admin = false;
	}
	return $is_admin;
}

function get_page_title() {
	$get_page_title = 'Inicio';
	if ( isset( $_GET['page'] ) ) {
		$url_parse = parse_url( $_SERVER["REQUEST_URI"] );
		parse_str( $url_parse['query'], $responds );
		$page_title = str_replace( '-', ' ', $responds['page'] );
	}
	if ( isset( $_GET['page'] ) ) {
		$get_page_title = $page_title;
	} else {
		$get_page_title = 'Inicio';
	}
	return $get_page_title;
}

function get_breadcumbs_page() {
	$site_title = 'BarreMX';
	if ( isset( $_GET['page'] ) ) {

		$url_parse = parse_url( $_SERVER["REQUEST_URI"] );
		parse_str( $url_parse['query'], $responds );
		$page_title = str_replace( '-', ' ', $responds['page'] );

	}
	if ( isset( $_GET['page'] ) ) {
		$text = '<div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0 page-title">' . get_page_title() . '</h4>
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="' . get_site_url() . '">' . $site_title . '</a></li>
                                <li class="breadcrumb-item active">' . $page_title . '</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>';

	} else {
		$text = '<div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0 page-title">' . get_page_title() . '</h4>
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="' . get_site_url() . '">' . $site_title . '</a></li>
                                <li class="breadcrumb-item active">Inicio</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>';

	}
	return $text;
}

function isset_page() {
	if ( isset( $_GET['page'] ) ) {
		$page = $_GET['page'];
	} else {
		$page = false;
	}
	return $page;
}