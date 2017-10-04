import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Header extends Component {
    render (){
        return (
            <section className="banner-bg home">

                <header id="header">
                    <section className="container container-fluid">
                        <div className="row">
                            <p className="banner-top-header">
                                The United Republic of Tanzania
                            </p>
                        </div>
                        <div className="row">
                            <p className="banner-center-header">
                                TANZANIA NATIONAL NGO COORDINATION
                            </p>
                        </div>
                        <div className="row">
                            <p className="banner-bottom-header">
                                Ministry Of Health, Community Development Gender, Elderly And Children
                            </p>
                        </div>
                    </section>
                    <section className="nav-holder">
                        <section className="container container-fluid">
                            <ul className="menu menu_blue mega_menu">
                                <li className="fullwidth">
                                    <Link className={this.props.location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
                                </li>
                                <li className="fullwidth">
                                    <Link className="drop" to="/">About Us</Link>
                                    <div className="dropdown_fullwidth first_fullwidth link_id_1">
                                        <div className="col_2 firstcolumn">
                                            <ul className="n_m_list">
                                                <li>
                                                    <Link className={this.props.location.pathname === '/about/background' ? 'active' : ''} to="/about/background">Background</Link>
                                                </li>
                                                <li>
                                                    <Link className={this.props.location.pathname === '/about/mission_vision' ? 'active' : ''} to="/about/mission_vision">Vision & Mission</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="fullwidth">
                                    <Link className={this.props.location.pathname === '/profiles' ? 'active' : ''} to="/profiles">NGO Profiles</Link>
                                </li>
                                <li className="fullwidth">
                                    <Link className={this.props.location.pathname === '/board' ? 'active' : ''} to="/board">NGO Board</Link>
                                </li>
                                <li className="fullwidth">
                                    <Link activeClassName="active" to="/news">News and Events</Link>
                                </li>
                                <li className="fullwidth">
                                    <Link activeClassName="active" to="/gallery">Gallery</Link>
                                </li>
                                <li className="fullwidth">
                                    <Link className={this.props.location.pathname === '/contacts' ? 'active' : ''} to="/contacts">Contact Us</Link>
                                </li>
                            </ul>
                            <nav id="nav" className="has_mega_menu">
                                <div className="navbar navbar-inverse">
                                    <div className="navbar-inner">
                                        <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></button>
                                        <div className="nav-collapse collapse">
                                            <ul className="nav">

                                                <li className="dropdown active"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">Home<b className="caret"></b>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="index.html"> Home Template 1 </a></li>
                                                        <li><a href="index_1.html"> Home Template 2 </a></li>
                                                        <li><a href="index_2.html"> Home Template 3</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">About Us <b className="caret"></b>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="about.html#vision"> Our Vision &amp; Mission </a></li>
                                                        <li><a href="about.html#who"> Who we are? </a></li>
                                                        <li><a href="about.html#wwd"> What we do? </a></li>
                                                        <li><a href="about.html#how_we_work"> How we work? </a></li>
                                                        <li><a href="about.html#future_plans"> Our Plans for the future </a>
                                                        </li>
                                                        <li><a href="about.html#departments"> Our Departments </a></li>
                                                        <li><a href="about.html#testimonials"> Our happy
                                                            Citizens/testimonials </a></li>
                                                        <li><a href="faq.html"> FAQ's </a></li>
                                                        <li><a href="careers.html"> Jobs </a></li>
                                                        <li><a href="contact.html"> Contact Us/Location map </a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">Our Priorities <b className="caret"></b> </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="priorities_arts_culture.html"> Arts &amp; Culture </a></li>
                                                        <li><a href="priorities_business_economy.html"> Business &amp; Economy </a>
                                                        </li>
                                                        <li><a href="priorities_healthcare.html"> Healthcare </a></li>
                                                        <li><a href="priorities_hosing_land.html"> Housing &amp; Land </a></li>
                                                        <li><a href="priorities_transport.html"> Transport </a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">Events <b className="caret"></b> </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="event-listing.html">Event Listing</a></li>
                                                        <li><a href="event-detail.html">Event Detail</a></li>
                                                        <li><a href="event-venue.html">Event Venue</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">Newsroom <b className="caret"></b>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="newsroom_press_release.html">Press Releases</a></li>
                                                        <li><a href="newsroom_city_news.html">City News</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">Explore the city <b className="caret"></b> </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="ec_sv.html">Street View</a></li>
                                                        <li><a href="ec_mv.html">Map view</a></li>
                                                        <li><a href="ec_things_to_do.html">Things To Do</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">Blog <b className="caret"></b> </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-detail.html">Blog Detail</a></li>
                                                        <li><a href="blog-double-sidebar.html">Blog Double Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">Gallery <b className="caret"></b>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="gallery-2col.html">Image Gallery 2 column</a></li>
                                                        <li><a href="gallery-3col.html">Image Gallery 3 column</a></li>
                                                        <li><a href="gallery-4col.html">Image Gallery 4 column</a></li>
                                                        <li><a href="right-bar-gallery.html">Right Bar Image Gallery</a></li>
                                                        <li><a href="video_gallery.html">Video Gallery</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-toggle" href="index.html#" data-toggle="dropdown">Pages <b className="caret"></b> </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="password_protected.html">Password Protected</a></li>
                                                        <li><a href="password_protected2.html">password protected 2</a></li>
                                                        <li><a href="search-result.html">Search Result</a></li>
                                                        <li><a href="shotcodes.html">ShortCodes</a></li>
                                                        <li><a href="404.html">404 Page</a></li>
                                                        <li><a href="left-nav.html">Left Nav</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>

                            </nav>
                        </section>
                    </section>
                </header>
                <section className="container container-fluid home_slider">

                </section>
            </section>
        )
    }
}