/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './styles.css';

export const Header = () => {
  return (
    <header id="header" className="full-header">
      <div id="header-wrap">
        <div className="container clearfix">
          <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

          <div id="logo">
            <a href="#" className="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo.png" alt="Canvas Logo" /></a>
            <a href="#" className="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo" /></a>
          </div>

          <nav id="primary-menu">
            <ul>
              <li className="current"><a href="#"><div>Home</div></a>
                <ul>
                  <li><a href="#"><div>Home - Corporate</div></a>
                    <ul>
                      <li><a href="#"><div>Corporate - Layout 1</div></a></li>
                      <li><a href="#"><div>Corporate - Layout 2</div></a></li>
                      <li><a href="#"><div>Corporate - Layout 3</div></a></li>
                      <li><a href="#"><div>Corporate - Layout 4</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Home - Portfolio</div></a>
                    <ul>
                      <li><a href="#"><div>Portfolio - Layout 1</div></a></li>
                      <li><a href="#"><div>Portfolio - Layout 2</div></a></li>
                      <li><a href="#"><div>Portfolio - Masonry</div></a></li>
                      <li><a href="#"><div>Portfolio - AJAX</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Home - Blog</div></a>
                    <ul>
                      <li><a href="#"><div>Blog - Layout 1</div></a></li>
                      <li><a href="#"><div>Blog - Layout 2</div></a></li>
                      <li><a href="#"><div>Blog - Layout 3</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Home - Shop</div></a>
                    <ul>
                      <li><a href="#"><div>Shop - Layout 1</div></a></li>
                      <li><a href="#"><div>Shop - Layout 2</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Home - Magazine</div></a>
                    <ul>
                      <li><a href="#"><div>Magazine - Layout 1</div></a></li>
                      <li><a href="#"><div>Magazine - Layout 2</div></a></li>
                      <li><a href="#"><div>Magazine - Layout 3</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Home - Landing Page</div></a>
                    <ul>
                      <li><a href="#"><div>Landing Page - Layout 1</div></a></li>
                      <li><a href="#"><div>Landing Page - Layout 2</div></a></li>
                      <li><a href="#"><div>Landing Page - Layout 3</div></a></li>
                      <li><a href="#"><div>Landing Page - Layout 4</div></a></li>
                      <li><a href="#"><div>Landing Page - Layout 5</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Home - Full Screen</div></a>
                    <ul>
                      <li><a href="#"><div>Full Screen - Image</div></a></li>
                      <li><a href="#"><div>Full Screen - Slider</div></a></li>
                      <li><a href="#"><div>Full Screen - Video</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Home - One Page</div></a>
                    <ul>
                      <li><a href="#"><div>One Page - Default</div></a></li>
                      <li><a href="#"><div>One Page - Submenu</div></a></li>
                      <li><a href="#"><div>One Page - Dots Style</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Home - Wedding</div></a></li>
                  <li><a href="#"><div>Home - Restaurant</div></a></li>
                  <li><a href="#"><div>Home - Events</div></a></li>
                  <li><a href="#"><div>Home - Parallax</div></a></li>
                  <li><a href="#"><div>Home - App Showcase</div></a></li>
                  <li><a href="#"><div>Home - Boxed Layout</div></a></li>
                </ul>
              </li>
              <li><a href="#"><div>Features</div></a>
                <ul>
                  <li><a href="#"><div><i className="icon-stack"></i>Sliders</div></a>
                    <ul>
                      <li><a href="#"><div>Revolution Slider</div></a>
                        <ul>
                          <li><a href="#"><div>Premium Templates</div></a></li>
                          <li><a href="#"><div>Full Screen</div></a></li>
                          <li><a href="#"><div>Full Width</div></a></li>
                          <li><a href="#"><div>Kenburns Effect</div></a></li>
                          <li><a href="#"><div>HTML5 Video</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Canvas Slider</div></a>
                        <ul>
                          <li><a href="#"><div>Full Width</div></a></li>
                          <li><a href="#"><div>Fade Transition</div></a></li>
                          <li><a href="#"><div>Autoplay Feature</div></a></li>
                          <li><a href="#"><div>Custom Video Event</div></a></li>
                          <li><a href="#"><div>Pagination Navigation</div></a></li>
                          <li><a href="#"><div>3 Columns</div></a></li>
                          <li><a href="#"><div>4 Columns</div></a></li>
                          <li><a href="#"><div>5 Columns</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Flex Slider</div></a>
                        <ul>
                          <li><a href="#"><div>Default Layout</div></a></li>
                          <li><a href="#"><div>with Thumbs</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Owl Slider</div></a>
                        <ul>
                          <li><a href="#"><div>Full Width</div></a></li>
                          <li><a href="#"><div>Boxed Width</div></a></li>
                          <li><a href="#"><div>Video Slider</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Static Media</div></a>
                        <ul>
                          <li><a href="#"><div>Static - Parallax</div></a></li>
                          <li><a href="#"><div>Static - Image</div></a></li>
                          <li><a href="#"><div>Static - Thumb Gallery</div></a></li>
                          <li><a href="#"><div>Static - HTML5 Video</div></a></li>
                          <li><a href="#"><div>Static - Embedded Video</div></a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-gift"></i>Widgets</div></a>
                    <ul>
                      <li><a href="#"><div>Links</div></a></li>
                      <li><a href="#"><div>Flickr Photostream</div></a></li>
                      <li><a href="#"><div>Dribbble Shots</div></a></li>
                      <li><a href="#"><div>Instagram Feed</div></a></li>
                      <li><a href="#"><div>Posts List</div></a></li>
                      <li><a href="#"><div>Twitter Feed</div></a></li>
                      <li><a href="#"><div>Tabbed Widgets</div></a></li>
                      <li><a href="#"><div>Carousel</div></a></li>
                      <li><a href="#"><div>Subscribers</div></a></li>
                      <li><a href="#"><div>Social Icons</div></a></li>
                      <li><a href="#"><div>Testimonials</div></a></li>
                      <li><a href="#"><div>Quick Contact</div></a></li>
                      <li><a href="#"><div>Tags Cloud</div></a></li>
                      <li><a href="#"><div>Video Embeds</div></a></li>
                      <li><a href="#"><div>Raw Text/HTML</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-umbrella"></i>Headers</div></a>
                    <ul>
                      <li><a href="#"><div>Light Version</div></a></li>
                      <li><a href="#"><div>Dark Version</div></a></li>
                      <li><a href="#"><div>Transparent</div></a></li>
                      <li><a href="#"><div>Semi Transparent</div></a>
                        <ul>
                          <li><a href="#"><div>Light Version</div></a></li>
                          <li><a href="#"><div>Dark Version</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Left Side Header</div></a>
                        <ul>
                          <li><a href="#"><div>Fixed Position</div></a></li>
                          <li><a href="#"><div>OnClick Open</div></a></li>
                          <li><a href="#"><div>Push Content</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Right Side Header</div></a>
                        <ul>
                          <li><a href="#"><div>Fixed Position</div></a></li>
                          <li><a href="#"><div>OnClick Open</div></a></li>
                          <li><a href="#"><div>Push Content</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Floating Version</div></a></li>
                      <li><a href="#"><div>Static Sticky</div></a></li>
                      <li><a href="#"><div>Responsive Sticky</div></a></li>
                      <li><a href="#"><div>Alternate Logos</div></a></li>
                      <li><a href="#"><div>Alternate Mobile Menu</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-wpforms"></i>Forms</div></a></li>
                  <li><a href="#"><div><i className="icon-line-layout"></i>Side Panel</div></a>
                    <ul>
                      <li><a href="#"><div>Left Overlay</div></a></li>
                      <li><a href="#"><div>Left Push</div></a></li>
                      <li><a href="#"><div>Right Overlay</div></a></li>
                      <li><a href="#"><div>Right Push</div></a></li>
                      <li><a href="#"><div>Light Background</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-line-columns"></i>Mega Menu</div></a></li>
                  <li><a href="#"><div><i className="icon-align-justify2"></i>Menu Styles</div></a>
                    <ul>
                      <li><a href="#"><div>Menu - Style 1</div></a></li>
                      <li><a href="#"><div>Menu - Style 2</div></a></li>
                      <li><a href="#"><div>Menu - Style 3</div></a></li>
                      <li><a href="#"><div>Menu - Style 4</div></a></li>
                      <li><a href="#"><div>Menu - Style 5</div></a></li>
                      <li><a href="#"><div>Menu - Style 6</div></a></li>
                      <li><a href="#"><div>Menu - Style 7</div></a></li>
                      <li><a href="#"><div>Menu - Style 8</div></a></li>
                      <li><a href="#"><div>Menu - Style 9</div></a></li>
                      <li><a href="#"><div>Menu - Overlay</div></a></li>
                      <li><a href="#"><div>Menu - Split Layout</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-ok-sign"></i>Page Titles</div></a>
                    <ul>
                      <li><a href="#"><div>Left Align</div></a></li>
                      <li><a href="#"><div>Right Align</div></a></li>
                      <li><a href="#"><div>Center Align</div></a></li>
                      <li><a href="#"><div>Dark Style</div></a></li>
                      <li><a href="#"><div>Pattern Background</div></a></li>
                      <li><a href="#"><div>Parallax Background</div></a>
                        <ul>
                          <li><a href="#"><div>Default Header</div></a></li>
                          <li><a href="#"><div>Transparent Header</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>HTML5 Video</div></a></li>
                      <li><a href="#"><div>No Background</div></a></li>
                      <li><a href="#"><div>Mini Version</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-envelope-alt"></i>Contact Pages</div></a>
                    <ul>
                      <li><a href="#">Contact 1</a></li>
                      <li><a href="#">Contact 2</a></li>
                      <li><a href="#">Contact 3</a></li>
                      <li><a href="#">Contact 4</a></li>
                      <li><a href="#">Contact 5</a></li>
                      <li><a href="#">Contact 6</a></li>
                      <li><a href="#">Contact 7</a></li>
                    </ul>
                  </li>
                  <li><a href="#" data-scrollto="#footer"><div><i className="icon-th"></i>Footers</div></a>
                    <ul>
                      <li><a href="#"><div>Sticky Footer</div></a></li>
                      <li><a href="#" data-scrollto="#footer"><div>Footer - Layout 1</div></a></li>
                      <li><a href="#"><div>Footer - Layout 2</div></a></li>
                      <li><a href="#"><div>Footer - Layout 3</div></a></li>
                      <li><a href="#"><div>Footer - Layout 4</div></a></li>
                      <li><a href="#"><div>Footer - Layout 5</div></a></li>
                      <li><a href="#"><div>Footer - Layout 6</div></a></li>
                      <li><a href="#"><div>Footer - Layout 7</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-calendar3"></i>Events</div></a>
                    <ul>
                      <li><a href="#"><div>Full Width Calendar</div></a></li>
                      <li><a href="#"><div>Events List</div></a>
                        <ul>
                          <li><a href="#"><div>Right Sidebar</div></a></li>
                          <li><a href="#"><div>Left Sidebar</div></a></li>
                          <li><a href="#"><div>Both Sidebar</div></a></li>
                          <li><a href="#"><div>Full Width</div></a></li>
                          <li><a href="#"><div>Parallax List</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Single Event</div></a>
                        <ul>
                          <li><a href="#"><div>Right Sidebar</div></a></li>
                          <li><a href="#"><div>Left Sidebar</div></a></li>
                          <li><a href="#"><div>Both Sidebar</div></a></li>
                          <li><a href="#"><div>Full Width</div></a></li>
                        </ul>
                      </li>
                      <li><a href="#"><div>Single Event - Full</div></a>
                        <ul>
                          <li><a href="#"><div>Parallax Image</div></a></li>
                          <li><a href="#"><div>Google Map</div></a></li>
                          <li><a href="#"><div>Slider Gallery</div></a></li>
                          <li><a href="#"><div>HTML5 Video</div></a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-line-expand"></i>Modal OnLoad</div></a>
                    <ul>
                      <li><a href="#"><div>Simple Layout</div></a></li>
                      <li><a href="#"><div>Video iFrame</div></a></li>
                      <li><a href="#"><div>Subscription Form</div></a></li>
                      <li><a href="#"><div>Common Height</div></a></li>
                      <li><a href="#"><div>Cookies Enabled</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-time"></i>Coming Soon</div></a>
                    <ul>
                      <li><a href="#"><div>Simple Layout</div></a></li>
                      <li><a href="#"><div>Parallax Image</div></a></li>
                      <li><a href="#"><div>HTML5 Video</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div><i className="icon-user"></i>User Profile</div></a></li>
                </ul>
              </li>
              <li className="mega-menu"><a href="#"><div>Pages</div></a>
                <div className="mega-menu-content style-2 clearfix">
                  <ul className="mega-menu-column col-lg-3">
                    <li className="mega-menu-title"><a href="#"><div>Introduction</div></a>
                      <ul>
                        <li><a href="#"><div>About Us</div></a></li>
                        <li><a href="#"><div>About Us - Layout 2</div></a></li>
                        <li><a href="#"><div>About Me</div></a></li>
                        <li><a href="#"><div>Team Members</div></a></li>
                        <li><a href="#"><div>Careers</div></a></li>
                        <li><a href="#"><div>Side Navigation</div></a></li>
                        <li><a href="#"><div>Page Submenu</div></a></li>
                        <li><a href="#"><div>Sitemap</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3">
                    <li className="mega-menu-title"><a href="#"><div>Utility</div></a>
                      <ul>
                        <li><a href="#"><div>Services - Layout 1</div></a></li>
                        <li><a href="#"><div>Services - Layout 2</div></a></li>
                        <li><a href="#"><div>Services - Layout 3</div></a></li>
                        <li><a href="#"><div>FAQs - Layout 1</div></a></li>
                        <li><a href="#"><div>FAQs - Layout 2</div></a></li>
                        <li><a href="#"><div>FAQs - Layout 3</div></a></li>
                        <li><a href="#"><div>FAQs - Layout 4</div></a></li>
                        <li><a href="#"><div>Maintenance Page</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3">
                    <li className="mega-menu-title"><a href="#"><div>Layout Grids</div></a>
                      <ul>
                        <li><a href="#"><div>Full Width</div></a></li>
                        <li><a href="#"><div>Full Width - Wide</div></a></li>
                        <li><a href="#"><div>Right Sidebar</div></a></li>
                        <li><a href="#"><div>Left Sidebar</div></a></li>
                        <li><a href="#"><div>Both Sidebar</div></a></li>
                        <li><a href="#"><div>Both Right Sidebar</div></a></li>
                        <li><a href="#"><div>Both Left Sidebar</div></a></li>
                        <li><a href="#"><div>Blank Page</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3">
                    <li className="mega-menu-title"><a href="#"><div>Miscellaneous</div></a>
                      <ul>
                        <li><a href="#"><div>Login/Register</div></a></li>
                        <li><a href="#"><div>Login/Register - Style 2</div></a></li>
                        <li><a href="#"><div>Login/Register - Style 3</div></a></li>
                        <li><a href="#"><div>Login - Style 1</div></a></li>
                        <li><a href="#"><div>Login - Style 2</div></a></li>
                        <li><a href="#"><div>404 - Simple Layout</div></a></li>
                        <li><a href="#"><div>404 - Parallax Image</div></a></li>
                        <li><a href="#"><div>404 - HTML5 Video</div></a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mega-menu"><a href="#"><div>Portfolio</div></a>
                <div className="mega-menu-content style-2 clearfix">
                  <ul className="mega-menu-column col-5">
                    <li className="mega-menu-title"><a href="#"><div>Grids</div></a>
                      <ul>
                        <li><a href="#"><div>1 Column</div></a></li>
                        <li><a href="#"><div>2 Columns</div></a></li>
                        <li><a href="#"><div>3 Columns</div></a></li>
                        <li><a href="#"><div>4 Columns</div></a></li>
                        <li><a href="#"><div>5 Columns</div></a></li>
                        <li><a href="#"><div>6 Columns</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-5">
                    <li className="mega-menu-title"><a href="#"><div>Masonry</div></a>
                      <ul>
                        <li><a href="#"><div>Mixed Columns</div></a></li>
                        <li><a href="#"><div>2 Columns</div></a></li>
                        <li><a href="#"><div>3 Columns</div></a></li>
                        <li><a href="#"><div>4 Columns</div></a></li>
                        <li><a href="#"><div>5 Columns</div></a></li>
                        <li><a href="#"><div>6 Columns</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-5">
                    <li className="mega-menu-title"><a href="#"><div>Loading Styles</div></a>
                      <ul>
                        <li><a href="#"><div>jQuery Filter</div></a></li>
                        <li><a href="#"><div>jQuery Pagination</div></a></li>
                        <li><a href="#"><div>Infinity Scroll</div></a></li>
                        <li><a href="#"><div>AJAX In Page</div></a></li>
                        <li><a href="#"><div>AJAX In Modal</div></a></li>
                        <li><a href="#"><div>Filter Styles</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-5">
                    <li className="mega-menu-title"><a href="#"><div>Single Project</div></a>
                      <ul>
                        <li><a href="#"><div>Extended Item</div></a></li>
                        <li><a href="#"><div>Parallax Image</div></a></li>
                        <li><a href="#"><div>Slider Gallery</div></a></li>
                        <li><a href="#"><div>HTML5 Video</div></a></li>
                        <li><a href="#"><div>Masonry Thumbs</div></a></li>
                        <li><a href="#"><div>Embed Video</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-5">
                    <li className="mega-menu-title"><a href="#"><div>Layouts</div></a>
                      <ul>
                        <li><a href="#"><div>Default</div></a></li>
                        <li><a href="#"><div>Right Sidebar</div></a></li>
                        <li><a href="#"><div>Left Sidebar</div></a></li>
                        <li><a href="#"><div>Both Sidebar</div></a></li>
                        <li><a href="#"><div>100% Width</div></a></li>
                        <li><a href="#"><div>Parallax</div></a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mega-menu"><a href="#"><div>Blog</div></a>
                <div className="mega-menu-content style-2 clearfix">
                  <ul className="mega-menu-column col-lg-3">
                    <li className="mega-menu-title"><a href="#"><div>Default</div></a>
                      <ul>
                        <li><a href="#"><div>Right Sidebar</div></a></li>
                        <li><a href="#"><div>Left Sidebar</div></a></li>
                        <li><a href="#"><div>Both Sidebar</div></a></li>
                        <li><a href="#"><div>Full Width</div></a></li>
                      </ul>
                    </li>
                    <li className="mega-menu-title"><a href="#"><div>Timeline</div></a>
                      <ul>
                        <li><a href="#"><div>Right Sidebar</div></a></li>
                        <li><a href="#"><div>Left Sidebar</div></a></li>
                        <li><a href="#"><div>Full Width</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3">
                    <li className="mega-menu-title"><a href="#"><div>Masonry</div></a>
                      <ul>
                        <li><a href="#"><div>4 Columns</div></a></li>
                        <li><a href="#"><div>3 Columns</div></a></li>
                        <li><a href="#"><div>2 Columns</div></a></li>
                        <li><a href="#"><div>100% Width</div></a></li>
                      </ul>
                    </li>
                    <li className="mega-menu-title"><a href="#"><div>Grid</div></a>
                      <ul>
                        <li><a href="#"><div>4 Columns</div></a></li>
                        <li><a href="#"><div>3 Columns</div></a></li>
                        <li><a href="#"><div>2 Columns</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3">
                    <li className="mega-menu-title"><a href="#"><div>Small Thumbs</div></a>
                      <ul>
                        <li><a href="#"><div>Left Sidebar</div></a></li>
                        <li><a href="#"><div>Right Sidebar</div></a></li>
                        <li><a href="#"><div>Both Sidebar</div></a></li>
                        <li><a href="#"><div>Full Width</div></a></li>
                        <li><a href="#"><div>Alternate Layout</div></a></li>
                      </ul>
                    </li>
                    <li className="mega-menu-title"><a href="#"><div>Item Splitting</div></a>
                      <ul>
                        <li><a href="#"><div>Pagination</div></a></li>
                        <li><a href="#"><div>Infinite Scroll</div></a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="mega-menu-column col-lg-3">
                    <li className="mega-menu-title"><a href="#"><div>Single</div></a>
                      <ul>
                        <li><a href="#"><div>Default Layout</div></a></li>
                        <li><a href="#"><div>Left Sidebar</div></a></li>
                        <li><a href="#"><div>Full Width</div></a></li>
                        <li><a href="#"><div>Small Image</div></a></li>
                        <li><a href="#"><div>Split Layout</div></a></li>
                      </ul>
                    </li>
                    <li className="mega-menu-title"><a href="#"><div>Comments Module</div></a>
                      <ul>
                        <li><a href="#"><div>Facebook Comments</div></a></li>
                        <li><a href="#"><div>Disqus Comments</div></a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a href="#"><div>Shop</div></a>
                <ul>
                  <li><a href="#"><div>4 Columns</div></a></li>
                  <li><a href="#"><div>3 Columns</div></a>
                    <ul>
                      <li><a href="#"><div>Full Width</div></a></li>
                      <li><a href="#"><div>Right Sidebar</div></a></li>
                      <li><a href="#"><div>Left Sidebar</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>2 Columns</div></a>
                    <ul>
                      <li><a href="#"><div>Right Sidebar</div></a></li>
                      <li><a href="#"><div>Left Sidebar</div></a></li>
                      <li><a href="#"><div>Both Sidebar</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>1 Columns</div></a>
                    <ul>
                      <li><a href="#"><div>Full Width</div></a></li>
                      <li><a href="#"><div>Right Sidebar</div></a></li>
                      <li><a href="#"><div>Left Sidebar</div></a></li>
                      <li><a href="#"><div>Both Sidebar</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Categories - Parallax</div></a></li>
                  <li><a href="#"><div>Combination Filter</div></a></li>
                  <li><a href="#"><div>Single Product</div></a>
                    <ul>
                      <li><a href="#"><div>Full Width</div></a></li>
                      <li><a href="#"><div>Right Sidebar</div></a></li>
                      <li><a href="#"><div>Left Sidebar</div></a></li>
                      <li><a href="#"><div>Both Sidebar</div></a></li>
                    </ul>
                  </li>
                  <li><a href="#"><div>Cart</div></a></li>
                  <li><a href="#"><div>Checkout</div></a></li>
                </ul>
              </li>
              <li className="mega-menu"><a href="#"><div>Shortcodes</div></a>
                <div className="mega-menu-content clearfix">
                  <ul className="mega-menu-column col-5">
                    <li><a href="#"><div><i className="icon-magic"></i>Animations</div></a></li>
                    <li><a href="#"><div><i className="icon-link"></i>Buttons</div></a></li>
                    <li><a href="#"><div><i className="icon-heart3"></i>Carousel</div></a></li>
                    <li><a href="#"><div><i className="icon-bar-chart"></i>Charts</div></a></li>
                    <li><a href="#"><div><i className="icon-apple"></i>Clients</div></a></li>
                    <li><a href="#"><div><i className="icon-th-large"></i>Columns</div></a></li>
                    <li><a href="#"><div><i className="icon-time"></i>Counters</div></a></li>
                    <li><a href="#"><div><i className="icon-table"></i>Data Tables</div></a></li>
                    <li><a href="#"><div><i className="icon-calendar3"></i>Date &amp; Time Pickers</div></a></li>
                  </ul>
                  <ul className="mega-menu-column col-5">
                    <li><a href="#"><div><i className="icon-indent-right"></i>Dividers</div></a></li>
                    <li><a href="#"><div><i className="icon-lightbulb"></i>Icon Boxes</div></a></li>
                    <li><a href="#"><div><i className="icon-picture"></i>Galleries</div></a></li>
                    <li><a href="#"><div><i className="icon-pencil2"></i>Heading Styles</div></a></li>
                    <li><a href="#"><div><i className="icon-list-alt"></i>Icon Lists</div></a></li>
                    <li><a href="#"><div><i className="icon-plus-sign"></i>Labels</div></a></li>
                    <li><a href="#"><div><i className="icon-resize-full"></i>Lightbox</div></a></li>
                    <li><a href="#"><div><i className="icon-edit"></i>Form Elements</div></a></li>
                    <li><a href="#"><div><i className="icon-line-upload"></i>File Uploads</div></a></li>
                  </ul>
                  <ul className="mega-menu-column col-5">
                    <li><a href="#"><div><i className="icon-th-list"></i>Lists &amp; Cards</div></a></li>
                    <li><a href="#"><div><i className="icon-map-marker2"></i>Maps</div></a></li>
                    <li><a href="#"><div><i className="icon-play"></i>Media Embeds</div></a></li>
                    <li><a href="#"><div><i className="icon-move"></i>Modal Boxes</div></a></li>
                    <li><a href="#"><div><i className="icon-align-justify2"></i>Navigations</div></a></li>
                    <li><a href="#"><div><i className="icon-cogs"></i>Pagination</div></a></li>
                    <li><a href="#"><div><i className="icon-tasks"></i>Pies &amp; Skills</div></a></li>
                    <li><a href="#"><div><i className="icon-line-move"></i>Range Slider</div></a></li>
                    <li><a href="#"><div><i className="icon-star3"></i>Star Ratings</div></a></li>
                  </ul>
                  <ul className="mega-menu-column col-5">
                    <li><a href="#"><div><i className="icon-dollar"></i>Pricing Boxes</div></a></li>
                    <li><a href="#"><div><i className="icon-thumbs-up"></i>Process Steps</div></a></li>
                    <li><a href="#"><div><i className="icon-rocket"></i>Promo Boxes</div></a></li>
                    <li><a href="#"><div><i className="icon-quote-left"></i>Blockquotes</div></a></li>
                    <li><a href="#"><div><i className="icon-laptop2"></i>Responsive</div></a></li>
                    <li><a href="#"><div><i className="icon-folder-open"></i>Sections</div></a></li>
                    <li><a href="#"><div><i className="icon-facebook2"></i>Social Icons</div></a></li>
                    <li><a href="#"><div><i className="icon-select"></i>Select Picker</div></a></li>
                    <li><a href="#"><div><i className="icon-line-columns"></i>Select Boxes</div></a></li>
                  </ul>
                  <ul className="mega-menu-column col-5">
                    <li><a href="#"><div><i className="icon-exclamation-sign"></i>Alert Boxes</div></a></li>
                    <li><a href="#"><div><i className="icon-flag2"></i>Styled Icons</div></a></li>
                    <li><a href="#"><div><i className="icon-table"></i>Tables</div></a></li>
                    <li><a href="#"><div><i className="icon-star3"></i>Tabs</div></a></li>
                    <li><a href="#"><div><i className="icon-user4"></i>Testimonials</div></a></li>
                    <li><a href="#"><div><i className="icon-camera3"></i>Thumbnails</div></a></li>
                    <li><a href="#"><div><i className="icon-ok-circle"></i>Toggles</div></a></li>
                    <li><a href="#"><div><i className="icon-line-square-check"></i>Radios &amp; Switches</div></a></li>
                    <li><a href="#"><div><i className="icon-refresh"></i>Flip Cards</div></a></li>
                  </ul>
                </div>
              </li>
            </ul>

            <div id="top-cart">
              <a href="#" id="top-cart-trigger"><i className="icon-instagram"></i></a>
            </div>

            <div id="top-search">
              <a href="#" id="top-search-trigger"><i className="icon-facebook"></i></a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
