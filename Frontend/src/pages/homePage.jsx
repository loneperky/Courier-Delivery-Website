import Product, { Deliver } from "./construct";
import { Test } from "./construct";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useId, useState } from "react";
import "../styles/app.css";
import { Perk } from "./construct";
import { Cost } from "./construct";
import axios from "axios";

function HomePage() {
  const [name, setName] = useState("Brand Design");

  const Change = () => {
    const myserve = ["UI/UX Design", "Web Design", "Web Dev", "Brand Design"];
    const int = Math.floor(Math.random() * myserve.length);
    setName(myserve[int]);
  };

  return (
    <>
      <div className="first-page">
        <div className="hero-section1">
          <div className="intro">
            <p>🚍Award-winning Courier services</p>
          </div>
          <div className="hero-sect1">
            <h1 className="change">OTAX SERVICES </h1>
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

        <div className="hero-img">
          <img src="/Images/product-1.jpg" alt="" />
        </div>
      </div>

      <div className="combine-section1">
        <div className="pic-slide">
          <img src="/Images/02(3).jpg" alt="" />
          <div className="count-imgg">
            <div className="count">
              <div className="ten">
                <h1>5+</h1>
                <p>
                  Years <br />
                  Active
                </p>
              </div>
              <div className="twelve">
                <h1>1.2K</h1>
                <p>
                  Happy <br />
                  Customers
                </p>
              </div>
            </div>
            <img src="/Images/01(3).jpg" alt="" />
          </div>
        </div>

        <div className="talky-sect">
          <p className="intro gate">😎 Your gateway to fast delivery </p>
          <h1>Defining the future of Courier Services!</h1>
          <p className="embrace">
            Embrace a new era of courier services with OTAX. Our team work all
            round the clock to take your package to any part of the world!.
          </p>

          <ul>
            <li>Emphasis on ROI-driven solutions</li>
            <li>Expert team with diverse skills</li>
            <li>Proven track record of delivering goods in good qualty</li>
          </ul>
        </div>
      </div>
      <div className="courier-man">
        <img src="/Images/Courier-Man.png" alt="" />
        <div className="cal-cost">
          <h3 className="cal">CALCULATE YOUR COST</h3>
          <div className="">
            <p className="we">
              We Provide's simple cost calculate which helps you calculate the
              cost of transporting your goods.
            </p>
          </div>
          <div className="cost-val">
            <Cost val=" " place="HEIGHT (CM):" />
            <Cost val="" place="WIDTH (CM):" />
            <Cost val=":" place="DEPTH (CM)" />
            <Cost val="" place="WEIGHT (KG):" />
            <Cost val="" place="LOCATION:" />
          </div>
          <button>CALCULATE</button>
        </div>
      </div>

      <div className="deliver-process">
        <div className="dell">
          <Deliver
            num="1."
            do="ORDER"
            why="We make sure to take all your orders."
            whyy=""
          />
          <Deliver
            num="2."
            do="WAIT"
            why="After your order has been process sit back and watch"
            whyy=""
          />
          <Deliver
            num="3."
            do="DELIVER"
            why="Check in and see your number fulfiled your."
            whyy=" "
          />
        </div>
        <div className="">
          <img src="/Images/step-img.png" alt="" />
        </div>
      </div>

      <div className="man-truck">
        <div className="exp">
          <h2>
            GET THE <span> FASTEST</span> PRODUCT DELIVERY
          </h2>
          <p>
            With OTAX Delivery services we make sure your goods are in safe
            hands ensuring qulaity packagindg and distribution to our client,
            our delivery scheme is one of the fastest in the city and industry
            after all our motto is <q>Early To Bed Early To Rise.</q>
          </p>
        </div>
        <img src="/Images/delivery.png" alt="" />
      </div>

      <div className="perks">
        <h1>All the perks,all included.</h1>
        <Perk
          img="/Images/7_days.png"
          head="7-day delivery"
          details="That's 365 days a year, rain or shine."
        />
        <Perk
          img="/Images/notify.png"
          head="Customer notifications"
          details="Both shipper and recipient receive notifications."
        />
        <Perk
          img="/Images/support.png"
          head="Customer support"
          details="Our billingual call center is standing by."
        />
        <Perk
          img="/Images/tracking.png"
          head="Real-time tracking"
          details="Follow every parcel right to customer's door."
        />
        <Perk
          img="/Images/location.png"
          head="Remote or alternative locations"
          details="Ship to counters, smart parcel lockers, you name it."
        />
        <Perk
          img="/Images/bus.png"
          head="7-day delivery"
          details="That's 365 days a year, rain or shine"
        />
      </div>

      <div className="email-collect">
        <div className="first-collect">
          <p className="intro connect">Connect with us 🛹</p>
          <h1>
            Let's talk about your digital <br /> agency goals
          </h1>
          <div className="collect collect-ema">
            <input
              type="text"
              className="email"
              placeholder="Your email address"
            />
            <button className="btn1">Subcribe</button>
          </div>
        </div>

        <ul>
          <li>Call on: 09126785031 </li>
          <li>Time: 9am to 5pm (Sunday close)</li>
          <li>Email: info@Otax.com</li>
        </ul>
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

export default HomePage;
