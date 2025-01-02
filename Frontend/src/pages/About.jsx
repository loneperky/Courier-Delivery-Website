import "../styles/app.css";
import "../styles/about.css";
import { What } from "./construct";
import { NavLink, Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="first-page">
        <div className="hero-section">
          <div className="intro">
            <p>🚍Award-winning Courier services</p>
          </div>

          <div className="hero-sect1">
            <h1 className="change">OTAX SERVICES</h1>
          </div>

          <div className="hero-sect2">
            <p>
              We Offer Quality and breath taking services to our customer which
              has earned us our position in the industry,We secure,we deliver
              and we transport.
            </p>
            <div className="collect">
              <input
                type="email"
                className="email"
                placeholder="Enter your tracking number"
              />
              <button className="btn">Search</button>
            </div>
          </div>
        </div>

        <div className="hero_img">
          <img src="/Images/stock-driver (3).jpg" alt="" />
        </div>
      </div>

      <div className="about-portal">
        <div className="what-over">
          <div className="what_we_do">
            <div className="">
              <h2>ABOUT US</h2>
              <p>
                With Years of experience in the logistics industry, Otax
                Delivery Services has established itself as a trusted leader in
                courier services. Our expert team understands the importance of
                timely delivery, and we utilise cutting-edge technology to
                ensure seamless tracking snd monitoring.{" "}
              </p>
            </div>
            <What
              img="/Images/icon-2 (1).png"
              we="FAST DELIVERY"
              do="We operate the fastest courier service"
            />
            <What
              img="/Images/icon-1.png"
              we="SECURE SERVICE"
              do="We use cutting edge technology for maximum security"
            />

            <What
              img="/Images/icon-4.png"
              we="WORLDWIDE SHIPPING"
              do="We offer authentic delivery service all over the world"
            />
          </div>

          <div className="">
            <img src="/Images/about-img.png" alt="" />
          </div>
        </div>
      </div>

      <footer>
        <div className="combine-foot">
          <div className="Otax">
            <h1> OTAX SERVICES </h1>
            <p className="our">
              Our altimate goal is to provide customers with <br /> the ultimate
              satisfaction they deserve and giving them <br /> a nice value for
              their money.
            </p>
          </div>
          <div className="quick">
            <h2>Quick links</h2>
            <li>
              <NavLink>About us</NavLink>
            </li>
            <li>
              <NavLink>Contact us</NavLink>
            </li>
            <li>
              <NavLink>Careers</NavLink>
            </li>
            <li>
              <NavLink>Become a partner</NavLink>
            </li>
          </div>
          <div className="community">
            <h2>Documents</h2>
            <li>
              <NavLink>Supports</NavLink>
            </li>
            <li>
              <NavLink>Faqs</NavLink>
            </li>
            <li>
              <NavLink>Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink>Terms & condition</NavLink>
            </li>
          </div>
          <div className="follow">
            <NavLink>
              <img src="/Images/PAYMENT-3.png" alt="" />
            </NavLink>
            <Link>
              <img src="/Images/PAYMENT-2.png" alt="" />
            </Link>

            <img src="/Images/PAYMENT-1.png" alt="" />
          </div>
        </div>
        <p>Copyrights &copy; 2024 OTAXY. Buld by Chris Tech</p>
      </footer>
    </>
  );
}

export default About;
