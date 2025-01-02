import React from "react";
import { Plan } from "./construct";
import "../styles/pricing.css";
import { Footer } from "./construct";
import { Cost } from "./construct";
const Pricing = () => {
  return (
    <>
      <div className="first-page">
        <div className="hero-section1">
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

        <div className="hero-img">
          <img src="/Images/product-1.jpg" alt="" />
        </div>
      </div>

      <div className="pricing-div">
        <div className="ppl">
          <h2>PRICING & PLANS</h2>
          <p>Know about our pricing and plans.</p>
        </div>
        <div className="avail-plan">
          <Plan
            price="$50"
            for="For single product"
            type="BASIC"
            kg="< 3KG"
            cotry="ALL"
            time="7-14 DAYS"
          />
          <Plan
            price="$500"
            for="For package product"
            type="PREMIUN"
            kg="< 20KG"
            cotry="ALL"
            time="7-14 DAYS"
          />
          <Plan
            price="$150"
            for="For multiple product"
            type="STANDARD"
            kg="< 10KG"
            cotry="ALL"
            time="7-14 DAYS"
          />
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

      <Footer />
    </>
  );
};

export default Pricing;
