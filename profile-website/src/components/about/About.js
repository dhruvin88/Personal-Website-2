import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Hello! I'm currently a Professional Software Developer
                        for Corelogic|FNC. I enjoy being challenged and engaging
                        with projects that require me to work outside my comfort
                        and knowledge set, as continuing to learn new languages
                        and development techniques are important to me.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="fa fa-stack-exchange" />
                  </span>
                  <div className="desc">
                    <h3>Full Stack Developer</h3>
                    <p>
                      I have experience building applications from front-end to
                      back-end. I build applications using .Net Core and Angular.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="fa fa-cloud" />
                  </span>
                  <div className="desc">
                    <h3>Microservice Applications</h3>
                    <p>
                      While working for Corelogic, I have got to work on
                      building, developing, and support microservice
                      applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="fa fa-leanpub" />
                  </span>
                  <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>
                      For my Master's Degree, I got to research and making
                      machine learning applications. I'm currently interested in CNNs and GANs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
