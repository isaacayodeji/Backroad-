import logo from "./images/logo.svg";
import {PageLinks, ServiceLink, SocialLinks, Tours} from "./Data";
import AboutImg from "./images/about.jpeg";

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <img
                src={logo}
                className="nav-logo"
                alt="backroads"
              />
              <button type="button" className="nav-toggle" id="nav-toggle">
                <i className="fas fa-bars"></i>
              </button>
            </div>
            {/* <!-- left this comment on purpose --> */}
            <ul className="nav-links" id="nav-links">
              {PageLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.href} className="nav-link">
                      {link.text}
                    </a>
                  </li>
                );
              })}
             </ul>

            <ul className="nav-icons">
              {SocialLinks.map((link) =>{
                const {id,href,icon} = link
                return (
                  <li key={id}>
                    <a
                      href={href}
                      target="_blank"
                      className="nav-icon"
                      rel="noopener"
                    >
                      <i className={icon}></i>
                    </a>
                  </li>
                );
              })}
              
            </ul>
          </div>
        </nav>

        <section className="hero" id="home">
          <div className="hero-banner">
            <h1>continue exploring</h1>
            <p>
              Book a flight ticket with us, we offer the service
            </p>
            <a href="#tours" className="btn hero-btn">
              explore tours
            </a>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-title">
            <h2>
              about <span>us</span>
            </h2>
          </div>

          <div className="section-center about-center">
            <div className="about-img">
              <img
                src={AboutImg}
                className="about-photo"
                alt="awesome beach"
              />
            </div>
            <article className="about-info">
              <h3>explore the difference</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur quisquam harum nam cumque temporibus explicabo
                dolorum sapiente odio unde dolor?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur quisquam harum nam cumque temporibus explicabo
                dolorum sapiente odio unde dolor?
              </p>
              <a href="#about" className="btn">
                read more
              </a>
            </article>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-title">
            <h2>
              our <span>services</span>
            </h2>
          </div>

          <div className="section-center services-center">
          {ServiceLink.map((service) => {
            const {id,icon,title,text} = service
            return (
              <article className="service" key={id}>
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}

            {/* <article className="service">
              <span className="service-icon">
                <i className="fas fa-tree fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">endless hiking</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>

            <article className="service">
              <span className="service-icon">
                <i className="fas fa-socks fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">amazing comfort</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article> */}
          </div>
        </section>

        <section className="section" id="tours">
          <div className="section-title">
            <h2>
              featured <span>tours</span>
            </h2>
          </div>

          <div className="section-center featured-center">
            {Tours.map((link) => {
              const {id,image,info,title,date,location,duration,cost}=link
              return(

            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  {info}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
              )
            })}
          </div>
        </section>

        <footer className="section footer">

          <ul className="footer-links">
            {PageLinks.map((link) => {
              const{id,href,text} =link
              return (
                <li key={id}>
                  <a href={href}
                   rel="noreferrer"
                   className="footer-link">
                    {" "}
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date"> {new Date().getFullYear()}</span> all rights reserved
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
