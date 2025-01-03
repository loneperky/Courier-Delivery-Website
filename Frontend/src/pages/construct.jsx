import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Product(props) {
  const [dropDown, setDropdown] = useState(true);
  function HandleClick() {
    setDropdown(false);
  }
  return (
    <>
      <div className="product">
        <h2>{props.head}</h2>
        <p>{props.talk}</p>

        <p className="know">
          <NavLink>Know more</NavLink>
        </p>
      </div>
    </>
  );
}

function Test(props) {
  return (
    <>
      <div className="testimonies">
        <div className="test1">
          <div className="talk-img">
            <img src={props.img} alt={props.alt} />
            <p>{props.who}</p>
          </div>
          <p>{props.talk}</p>
          <p>{props.tak}</p>
        </div>
      </div>
    </>
  );
}


function Drop() {
  return (
    <>
      <div className="dropdown">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/tracking">Tracking</Link>
          </li>
          <li>
            <Link to="/pricing-plans">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
// { dropDown ? <Drop /> : null}

function Footer() {
  return (
    <>
      <footer>
        <div className="combine-foot">
          <div className="Otax">
            <h1> OTAX TECH </h1>
            <p className="our">
              Our altimate goal is to provide customers with the ultimate
              satisfaction they deserve and giving them a nice value for their
              money.
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

function Perk(props) {
  return (
    <>
      <div className="service">
        <img src={props.img} alt="" />
        <p> {props.head}</p>
        <p>{props.details}</p>
      </div>
    </>
  );
}
function Prod(props) {
  return (
    <>
      <div className="product-list">
        <h4>{props.name}</h4>
        <p>{props.list}</p>
      </div>
    </>
  );
}

function Cost(props) {
  return (
    <>
      <div className="cost">
        <input type="text" placeholder={props.place} />
      </div>
    </>
  );
}

function Deliver(props) {
  return (
    <>
      <div className="deli">
        <h1>{props.num}</h1>
        <div className="">
          <h3>{props.do}</h3>
          <p>{props.why}</p>
          <p>{props.whyy}</p>
        </div>
      </div>
    </>
  );
}

function Line(props) {
  return (
    <>
      <div className="linn">
        <div className="line">
          <div className="">
            <h4>{props.cont}</h4>
          </div>

          <div className="numbs">
            <p>{props.num1}</p>
            <p>{props.num2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function What(props) {
  return (
    <>
      <div className="what">
        <div
          className="wedo
      "
        >
          <div className="com">
            <img src={props.img} alt={props.alt} />
          </div>
          <div className="">
            <h3>{props.we}</h3>
            <p>{props.do}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Plan(props) {
  return (
    <>
      <div className="plan">
        <div className="chan">
          <h2>{props.price}</h2>
          <p>{props.for}</p>
          <button className="btn1">{props.type}</button>
        </div>

        <h5>PRODUCT WEIGHT: {props.kg}</h5>
        <h5>COUNTRY:{props.cotry}</h5>
        <h5>DURATION:{props.time}</h5>
        <h5>SUPPORT:Yes</h5>
        <button className="ord">ORDER NOW</button>
      </div>
    </>
  );
}

export { Test, Drop, Footer, Perk, Prod, Cost, Deliver, Line, What, Plan };
export default Product;
