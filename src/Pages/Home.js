import React from "react";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Kyrylo Nikolaiev</b>
                          <b className="is-hidden">Designer</b>
                          <b className="is-visible">Developer</b>
                        </span>
                      </h1>
                      <div className="about-social-icon text-center">
                        <ul className="about-social">
                          <li className="wow fadeIn" data-wow-delay=".4s">
                            <a
                              href="https://www.linkedin.com/in/kyrylo-nikolaiev-341b6a283/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".2s">
                            <a
                              href="https://github.com/KyryloNikolaiev"
                              target="newtab"
                            >
                              <i
                                className="fa fa-github"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">

                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Working Hard</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Always believe in hard-work in my profession</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-file-image-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>UI/UX Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Love to do UI/UX design for new product</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Web Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Passionate about Web Design from start</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                      <h3>Web Development</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Created all types of modern web development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="assets/img/kyrylo.jpg"
                        alt="Kyrylo Nikolaiev"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>Hello! This is Kyrylo</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                      I’m a ex-Microsoft Full-Stack Developer with expertise in React, Laravel, Shopify, WordPress, Angular, Vue, Django, Node.js, JavaScript, TypeScript and C#/.NET. At Microsoft, I worked as a React/React Native/Full Stack Engineer for the Xbox Experience team. I developed and maintained custom components using React and React Native SDKs, resulting in improved frontend UI performance and better user experiences for worldwide payments applications. I utilized C#/.NET and Jest testing for code verification and employed React Context API and React Hooks for efficient event-driven state management.{" "}
                        <br />
                        <br />
                        <b>Main Stack:</b> React, Laravel, Shopify, WordPress, Django, React Native, Angular, Vue.js
                        <br />
                        <br />
                        <b>Languages:</b> JavaScript (ES6+), TypeScript, C#, PHP, Python, Java, Shell/Bash
Frontend: React.js (Router, Hooks, Context API), Redux.js, Shopify, WordPress, Angular, Vue, Next.js/Gatsby, React Native, Visx/D3, HTML/CSS/SASS, MaterialUI/ChakraUI/AntD/FluentUI
Backend: Node.js, Express.js, Laravel, GraphQL, ASP.NET, Django, Laravel, SQL (PostgreSQL), NoSQL (MongoDB/Mongoose), Websockets, REST, Webpack, Redis
DevOps/Cloud: AWS, Azure, Kubernetes, Docker, Git/GitHub, CI/CD, Jenkins
Testing: TDD (Jest/Enzyme, Mocha/Chai), Unit Testing
Tools/Frameworks: Visual Studio 2019, Kusto, Jira, Scrum, Agile, Blockchain
                        </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <!-- =================================== Work Portfolio ========================= -->  */}
        <div id="Word Experience">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Work Experience</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I developed many Web and Mobile applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <a href="https://www.uconnected.com.au/" target="_blank">
                          <img
                            src="assets/img/portfolio/mern2.png"
                            alt="design-development"
                          />
                        </a>
                      </div>
                      <div className="service-bottom">
                        
                        <h3>MERN (React, Express, MongoDB, Node)</h3>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <a href="https://bit.ly/2Sz65ce" target="_blank">
                          <img
                            src="assets/img/portfolio/laravel1.png"
                            alt="e-commarce"
                          />
                        </a>
                      </div>
                      <div className="service-bottom">
                        
                        <h3>Laravel</h3>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <a href="https://www.contractingontario.ca/" target="_blank">
                        <img
                          src="assets/img/portfolio/wordpress1.png"
                          alt="analytics"
                        />
                        </a>
                      </div>
                      <div className="service-bottom">
                        
                        <h3>WordPress</h3>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <a href="https://www.smithtea.com/" target="_blank">
                          <img
                            src="assets/img/portfolio/Shopify1.png"
                            alt="mobile-friendly"
                          />
                        </a>
                      </div>
                      <div className="service-bottom">
                        <h3>Shopify</h3>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <a href="https://www.digitalliteracyassessment.org/" target="_blank">
                          <img
                            src="assets/img/portfolio/Django.png"
                            alt="website-audit"
                          />
                        </a>
                      </div>
                      <div className="service-bottom">
                       
                        <h3>Django</h3>
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <a href="https://play.google.com/store/apps/details?id=com.paisa.flying.horse" target="_blank">
                          <img
                            src="assets/img/portfolio/React Native.png"
                            alt="content-management"
                          />
                        </a>
                      </div>
                      <div className="service-bottom">
                        
                        <h3>React Native</h3>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <!-- ================================ Skill =============================== --> */}

        <div id="skill">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Skills</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      React/Redux, Laravel, Shopify, WordPress, Django, React Native, Node, Express, Angular, Vue.js
                    </p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-6">
                <div className="skill-details">
                    <div className="content">
                      <div className="col">
                        <ul id="skill-main">
                          <li>
                            <h3>HTML / CSS - 97%</h3>
                          </li>
                          <li>
                            <h3>UI / UX - 78%</h3>
                          </li>
                          <li>
                            <h3>React/Redux - 95%</h3>
                          </li>
                          <li>
                            <h3>Laravel - 93%</h3>
                          </li>
                          <li>
                            <h3>Django - 85%</h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-details">
                    <div className="content">
                      <div className="col">
                        <ul id="skill-main">
                          <li>
                            <h3>Shopify - 91%</h3>
                          </li>
                          <li>
                            <h3>WordPress - 88%</h3>
                          </li>
                          <li>
                            <h3>React Native - 80%</h3>
                          </li>
                          <li>
                            <h3>Angular - 75%</h3>
                          </li>
                          <li>
                            <h3>Vue.js - 96%</h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        {/* <!-- ================================ WORK =============================== --> */}

        {/* <div id="work">
          <div className="work-content">
            <div className="work-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Work Portfolio</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Here are a few design projects I've worked on recently.
                        Want to see more?{" "}
                        <a className="underline2" href="#contact">
                          contact me.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="gallery" style={{ paddingTop: "80px" }}>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <div className="gallery-item">
                    <img
                      className="gallery-image"
                      src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                      alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                    />
                  </div>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
                        alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
                        alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
                        alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Service List</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I always want to make things that make a difference.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/design-development.jpg"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-edit service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Design + Development</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Clean, modern designs - optimized for performance,
                          search engines, and converting users to customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/e-commarce.jpg"
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-cart-plus exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>eCommerce</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Integration of eCommerce platforms, payment gateways,
                          custom product templates, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/analytics.jpg"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-tachometer service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Analytics</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Get insights into who is browsing your site so that
                          you can make smarter business decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/mobile-friendly.jpg"
                          alt="mobile-friendly"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-desktop exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Mobile-friendly</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          A responsive design makes your website accessible to
                          all users, regardless of their device.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/website-audit.jpg"
                          alt="website-audit"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-search exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Website Rank</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Looking to improve your page performance, SEO, or user
                          experience? Request a free site audit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/content-management.jpg"
                          alt="content-management"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-file exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Content Management</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Custom theme and plugin development. Easily update
                          site content with knowledge of powerful code.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            People I've worked with have said some nice things
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      “Kyrylo was a real pleasure to work with
                                      and we look forward to working with him
                                      again. He’s definitely the kind of
                                      developer you can trust with a project
                                      from start to finish.”
                                      <br />
                                      <span>Ishrak Chaudhury</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Kyrylo's a clear communicator with the
                                      tenacity and confidence to really dig in
                                      to tricky design scenarios and the
                                      collaborative friction that's needed to
                                      produce excellent work.”
                                      <br />
                                      <span>Kamrul Roy</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Kyrylo has done a fantastic job overall.
                                      Not only the site is to design, but the
                                      code is also very clean and slick. Love
                                      the way he achieved the translations
                                      portion of the site.”
                                      <br />
                                      <span>Shahadat Mahapatra</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Me</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I’m always open to discussing project development work or
                          partnership opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  {/* <div className="row contact-row">
                    <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                      <h3>Write Your Message Here</h3>
                      <div className="contact-form">
                        <form
                          action="https://herokuapp.us6.list-manage.com/subscribe/post?u=870e1b447d1f93893227a9c52&amp;id=85d6c939a5"
                          method="post"
                          id="mc-embedded-subscribe-form contactForm"
                          name="mc-embedded-subscribe-form"
                          className="contact-form shake validate"
                          target="_blank" 
                          data-toggle="validator"
                          novalidate
                        >
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="text"
                                name="FLNAME"
                                id="mce-FLNAME"
                                className="required form-control"
                                placeholder="Your Name"
                                required
                                data-error="Please enter your name"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="email"
                                className="email required form-control"
                                name="EMAIL"
                                id="mce-EMAIL"
                                placeholder="Your Email"
                                required
                                data-error="Please enter your email"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="phone"
                                name="PHONE"
                                className="phone form-control"
                                id="phone mce-PHONE"
                                placeholder="Your Phone"
                                required
                                data-error="Please enter your phone"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <textarea
                                id="message mce-MESSAGE"
                                rows="7"
                                placeholder="Your Massage"
                                name="MESSAGE"
                                className="required form-control"
                                required
                                data-error="Please enter your message"
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div id="mce-responses" class="clear">
                            <div
                              class="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              class="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                              tabindex="-1"
                              value=""
                            />
                          </div>
                          <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="submit mc-embedded-subscribe"
                            className="btn btn-success"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-4 col-sm-12 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p>st. Kurska, buil. 103
Odesa, Odesa 65069
Ukraine</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:contact.kyrylonikolaiev277@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          kyrylonikolaiev277@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Phone</h3>
                        <a
                          href="tel:8372876775"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          +380 960745296
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
