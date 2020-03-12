/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="dark"
    >
      <div
        className="section parallax dark nomargin"
        style={{
          backgroundImage: 'url("images/services/home-testi-bg.jpg")',
          padding: '100px 0',
        }}
        data-bottom-top="background-position:0px 300px;"
        data-top-bottom="background-position:0px -300px;"
      >

        <div className="heading-block center">
          <h3>What Clients Say?</h3>
        </div>

        <div className="fslider testimonial testimonial-full" data-animation="fade" data-arrows="false">
          <div className="flexslider">
            <div className="slider-wrap">
              <div className="slide">
                <div className="testi-image">
                  <a href="#"><img src="images/testimonials/1.jpg" alt="Customer Testimonails" /></a>
                </div>
                <div className="testi-content">
                  <p>Similique fugit repellendus expedita excepturi iure perferendis provident quia eaque. Repellendus, vero numquam?</p>
                  <div className="testi-meta">
                    Steve Jobs
                    <span>Apple Inc.</span>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="testi-image">
                  <a href="#"><img src="images/testimonials/1.jpg" alt="Customer Testimonails" /></a>
                </div>
                <div className="testi-content">
                  <p>Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.</p>
                  <div className="testi-meta">
                    Collis Ta'eed
                    <span>Envato Inc.</span>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="testi-image">
                  <a href="#"><img src="images/testimonials/1.jpg" alt="Customer Testimonails" /></a>
                </div>
                <div className="testi-content">
                  <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!</p>
                  <div className="testi-meta">
                    John Doe
                    <span>XYZ Inc.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div id="copyrights">

        <div className="container clearfix">

          <div className="col_half">
            Copyrights &copy; 2014 All Rights Reserved by Canvas Inc.<br />
            <div className="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
          </div>

          <div className="col_half col_last tright">
            <div className="fright clearfix">
              <a href="#" className="social-icon si-small si-borderless si-facebook">
                <i className="icon-facebook"></i>
                <i className="icon-facebook"></i>
              </a>

              <a href="#" className="social-icon si-small si-borderless si-twitter">
                <i className="icon-twitter"></i>
                <i className="icon-twitter"></i>
              </a>

              <a href="#" className="social-icon si-small si-borderless si-gplus">
                <i className="icon-gplus"></i>
                <i className="icon-gplus"></i>
              </a>

              <a href="#" className="social-icon si-small si-borderless si-pinterest">
                <i className="icon-pinterest"></i>
                <i className="icon-pinterest"></i>
              </a>

              <a href="#" className="social-icon si-small si-borderless si-vimeo">
                <i className="icon-vimeo"></i>
                <i className="icon-vimeo"></i>
              </a>

              <a href="#" className="social-icon si-small si-borderless si-github">
                <i className="icon-github"></i>
                <i className="icon-github"></i>
              </a>

              <a href="#" className="social-icon si-small si-borderless si-yahoo">
                <i className="icon-yahoo"></i>
                <i className="icon-yahoo"></i>
              </a>

              <a href="#" className="social-icon si-small si-borderless si-linkedin">
                <i className="icon-linkedin"></i>
                <i className="icon-linkedin"></i>
              </a>
            </div>

            <div className="clear"></div>

            <i className="icon-envelope2"></i> info@canvas.com <span className="middot">&middot;</span> <i className="icon-headphones"></i> +91-11-6541-6369 <span className="middot">&middot;</span> <i className="icon-skype2"></i> CanvasOnSkype
					</div>

        </div>

      </div>
    </footer>
  )
}
