import "../styles/track.css";
import "../styles/app.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "./construct";
function TrackPage() {
  return (
    <>
      <div className="page-overview">
        <div className="header">
          <div className="intro">
            <p>🚇Award-winning services</p>
          </div>

          <div className="hero-sect1">
            <h1>OTAX SERVICES</h1>
          </div>

          <div className="trackin">
            <h3>PRODUCT TRACKING</h3>
            <p>Track your product & see the current condition.</p>
          </div>
        </div>

        <div className="hero">
          <div className="combine-search">
            <div className="comm">
              <div className="track">
                <h2>
                  Track Your Product{" "}
                  <span className="now">
                    Now you can track your product easily
                  </span>
                </h2>
              </div>

              <div className="search">
                <input
                  title="Please fill out this form"
                  type="text"
                  placeholder="Enter your product ID"
                />
                <button>TRACK YOUR PRODUCT</button>
              </div>
            </div>
          </div>

          <div className="track-details">
            <img src="/Images/product-1.jpg" alt="product-image" />
            <div className="product-info">
              <ul>
                <li>
                  PRODUCT NAME: <span>iPhone 6 Boxed</span>
                </li>
                <li>
                  PRODUCT ID: <span>9034214</span>
                </li>
                <li>
                  ORDER DATE: <span>21st Feb 2019</span>
                </li>
                <li>
                  ORDER STATUS: <span className="on">On Process</span>
                </li>
                <li>
                  WEIGHT KG: <span>0.85 KG</span>
                </li>
                <li>
                  ORDER TYPE: <span>Basic ($50)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <footer>
          <div className="combine-foot">
            <div className="Otax">
              <h1> OTAX TECH </h1>
              <p className="our">
                Our altimate goal is to provide customers with <br /> the
                ultimate satisfaction they deserve and giving them <br /> a nice
                value for their money.
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
                {" "}
                <img src="/Images/PAYMENT-2.png" alt="" />
              </Link>

              <img src="/Images/PAYMENT-1.png" alt="" />
            </div>
          </div>
          <p>Copyrights &copy; 2024 OTAXY. Buld by Chris Tech</p>
        </footer>
      </div>
    </>
  );
}

export default TrackPage;
