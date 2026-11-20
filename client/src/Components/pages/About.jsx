import React from 'react'
import teamImage1 from '../../assets/images/team-image1.jpg'
import teamImage2 from '../../assets/images/team-image2.jpg'
import teamImage3 from '../../assets/images/team-image3.jpg'
import testimonialImage1 from '../../assets/images/tst-image1.jpg'
import testimonialImage2 from '../../assets/images/tst-image2.jpg'
import testimonialImage3 from '../../assets/images/tst-image3.jpg'
import '../styles/About.css'

function About() {
  return (
    <>
    <section id="about" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-offset-3 col-md-6 col-sm-12">
                         <div class="section-title">
                              <h1>Professional Team for you</h1>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb">
                              <img src={teamImage1} class="img-responsive" alt="Andrew Orange"/> 
                              <div class="team-info team-thumb-up">
                                    <h2>Andrew Orange</h2>
                                    <small>Art Director</small>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb">
                              <div class="team-info team-thumb-down">
                                    <h2>Catherine Soft</h2>
                                    <small>Senior Manager</small>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                              <img src={teamImage2} class="img-responsive" alt="Catherine Soft"/> 
                         </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                         <div class="team-thumb">
                              <img src={teamImage3} class="img-responsive" alt="Jack Wilson"/> 
                              <div class="team-info team-thumb-up">
                                    <h2>Jack Wilson</h2>
                                    <small>CEO / Founder</small>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     </section>


     <section id="testimonial" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-6 col-sm-12">
                         <div class="testimonial-image"></div>
                    </div>

                    <div class="col-md-6 col-sm-12">
                         <div class="testimonial-info">
                               
                               <div class="section-title">
                                    <h1>What People Say</h1>
                               </div>

                               <div class="owl-carousel owl-theme">
                                    <div class="item">
                                         <h3>Vestibulum tempor facilisis efficitur. Sed nec nisi sit amet nibh pellentesque elementum. In viverra ipsum ornare sapien rhoncus ullamcorper.</h3>
                                         <div class="testimonial-item">
                                              <img src={testimonialImage1} class="img-responsive" alt="Michael"/> 
                                              <h4>Michael</h4>
                                         </div>
                                    </div>

                                    <div class="item">
                                         <h3>Donec pretium tristique elit eget sodales. Pellentesque posuere, nunc id interdum venenatis, leo odio cursus sapien, ac malesuada nisl libero eget urna.</h3>
                                         <div class="testimonial-item">
                                              <img src={testimonialImage2} class="img-responsive" alt="Sofia"/> 
                                              <h4>Sofia</h4>
                                         </div>
                                    </div>

                                    <div class="item">
                                         <h3>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</h3>
                                         <div class="testimonial-item">
                                              <img src={testimonialImage3} class="img-responsive" alt="Monica"/> 
                                              <h4>Monica</h4>
                                         </div>
                                    </div>
                               </div>

                          </div>
                    </div>
                    
               </div>
          </div>
     </section>
     </>
  )
}

export default About
