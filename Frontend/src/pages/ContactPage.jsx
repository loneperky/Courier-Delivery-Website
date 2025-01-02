import React from "react";
import "../styles/index.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Line } from "./construct";
import { Cost } from "./construct";
import "../styles/contact.css";
const ContactPage = () => {
  return (
    <>
      <div className="hero-section1">
        <div className="int">
          <p>🏍Contact us today</p>
        </div>
        <div className="hero-sect1">
          <h1 className="chang">OTAX SERVICES</h1>
        </div>
      </div>

      <div className="contact-us">
        <h3>CONTACT US</h3>
        <p>Get in touch with us easily</p>
      </div>
      <div className="total-contact">
        <div className="number">
          <Line cont="UK NUMBERS:" num1="+001-2463-957" num2="+001-4345-342" />
          <Line cont="USA NUMBERS:" num1="+001-2463-643" num2="+001-4356-643" />
          <Line
            cont="EMAIL ADDRESS:"
            num1="Suppoert@otax.com"
            num2="info@otax.com"
          />
        </div>

        <div className="email_collect">
          <div className="collect-add">
            <h3>SEND US A MESSAGE</h3>
            <Cost val=" " place="FULLNAME" />
            <Cost val="" place="EMAIL" />
            <Cost val=":" place="PHONE" />
            <textarea name="" id="" placeholder="MESSAGE"></textarea>
          </div>
          <button>SEND MESSAGE</button>
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
};

export default ContactPage;
