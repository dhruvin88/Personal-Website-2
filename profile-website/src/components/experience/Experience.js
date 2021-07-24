import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Professional, Software Developer <span>July 2019-present</span></h2>
                        <p>I currently work for Corelogic|FNC as a Software Developer on the Integrations team. My major part of the work has been enables communication between mutiple applications from external clients to internal applications. Recently, I help design and develop a centralized payment services for mutiple applications and different teams that uses a thrid parties API.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master's in Engineering Science Emphasis in Computer Science <span>August 2017 - May 2019</span></h2>
                        <p>I recieved my Master's in Engineering Science Emphasis in Computer Science from University of Mississippi in May 2019.  I focused majority of the time studying and researching in Machine Learning. In particular, I was researching how using pretrained weights on a CNN helps improve performance.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor Science in Computer Science <span>August 2013 - May 2017</span></h2>
                        <p>I recieved my Bachelor of Science in Computer Science from the University of Mississippi in May 2017. While attending, I took classs in Artificial Intelligence, Digital Image Processing, Natural Language Processing, Cloud Computing, and more.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Ops Intern <span>June 2016 - August 2016</span></h2>
                        <p>I work as a Web Ops Intern for C Spire. In two months, I got to develop an application String Boot application that would display statistics for internal uses. I also got to make an application that would clean up old logs and help imporve their SEO (Search Engine Optimization).</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}