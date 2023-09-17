import React, { useState, useEffect, useRef } from "react";

import PartnerTextCard from "./PartnerTextCard";

import Partners from "src/Constants/HomePage/Partners.js";

import Baby from "src/Assets/Images/partner-baby.jpg";
import XRay from "src/Assets/Images/partner-x-ray.png";
import Heart from "src/Assets/Images/partner-heart.jpg";
import Massage from "src/Assets/Images/partner-massage.jpg";
import ElectronicHealthRecord from "src/Assets/Images/partner-electronic-health-record.jpg";
import Female from "src/Assets/Images/partner-female.jpg";
import Spa from "src/Assets/Images/partner-spa.jpg";
import Partnership from "src/Assets/Images/partner-partnership.jpg";

import "./index.css";
import PartnerImageContainer from "./PartnerImageContainer";

const Partner = () => {
  return (
    <section id="Home-page-partner-container" className="partner-container">
      <div className="partner-heading-block">
        <h2 className="partner-heading">
          Discover Our Innovative Solutions for Medical and Wellness Practices,
          Providers, and Health Systems
        </h2>
        <img
          className="partnership-img"
          src={Partnership}
          alt="partnership image"
        ></img>
      </div>

      <div className="partner-content-block mobile">
        <div className="partner-img-block">
          <img
            className="partner-mobile-img"
            src={Female}
            alt="female image"
          ></img>
        </div>

        <PartnerTextCard partner={Partners[0]} />
      </div>
      <div className="partner-content-block mobile">
        <div className="partner-img-block">
          <img
            className="partner-mobile-img"
            src={ElectronicHealthRecord}
            alt="female image"
          ></img>
        </div>
        <PartnerTextCard partner={Partners[1]} />
      </div>
      <div className="partner-content-block mobile">
        <img className="partner-mobile-img" src={Baby} alt="baby image"></img>
      </div>

      <div className="partner-content-block tablet desktop">
        <PartnerTextCard partner={Partners[0]} />
        <PartnerImageContainer
          leftImg={Female}
          topRightImg={Baby}
          bottomRightImg={Spa}
        />
      </div>

      <div className="partner-content-block tablet desktop desktop-reverse">
        <PartnerTextCard partner={Partners[1]} />
        <PartnerImageContainer
          leftImg={Heart}
          topRightImg={ElectronicHealthRecord}
          bottomRightImg={XRay}
        />
      </div>

      {/* <div className="partner-with-us-inner left top" ref={slideInLeftRef}>
        <div
          className={`partner-with-us-inner-text-left ${
            slideInLeft ? "slide-in" : ""
          }`}
        >
          <div className="partner-with-us-inner-title-block">
            <h2 className="partner-with-us-inner-title">
              {PartnerWithUsTitle[0].title}
            </h2>
            <p className="partner-with-us-inner-subtitle">
              {PartnerWithUsTitle[0].subtitle}
            </p>
          </div>
          <ul className="partner-with-us-list">
            <li className="partner-with-us-list-item">
              <p>&#10004;</p>
              <p className="partner-with-us-text">
                Reach patients in your area looking for a new health provider
              </p>
            </li>
            <li className="partner-with-us-list-item">
              <p>&#10004;</p>
              <p className="partner-with-us-text">
                Strengthen your online reputation with verified reviews
              </p>
            </li>
            <li className="partner-with-us-list-item">
              <p>&#10004;</p>
              <p className="partner-with-us-text">
                Fill last-minute openings in your schedule.
              </p>
            </li>
          </ul>
          <PartnerWithUsButton />
        </div>
        <div className="partner-with-us-inner-img">
          <img
            className="partner-with-us-inner-img-solo"
            src={partnerFemaleImg}
          ></img>

          <div className="partner-with-us-img-stack">
            <img src={partnerBabyImg}></img>
            <img src={partnerMassageImg}></img>
          </div>
        </div>
      </div>

      <div className="partner-with-us-inner right bottom" ref={slideInRightRef}>
        <div className="partner-with-us-inner-img">
          <div className="partner-with-us-img-stack">
            <img src={partnerElectronicHealthRecordImg}></img>
            <img src={partnerXRayImg}></img>
          </div>
          <img
            className="partner-with-us-inner-img-solo"
            src={partnerHeartImg}
          ></img>
        </div>
        <div
          className={`partner-with-us-inner-text-right ${
            slideInRight ? "slide-in" : ""
          }`}
        >
          <div className="partner-with-us-inner-title-block">
            <h2 className="partner-with-us-inner-title">
              {PartnerWithUsTitle[1].title}
            </h2>
            <p className="partner-with-us-inner-subtitle">
              {PartnerWithUsTitle[1].subtitle}
            </p>
          </div>

          <p className="partner-with-us-text">
            If you are interested in partnering with us, please contact us to
            discuss potential collaboration opportunities. We look forward to
            hearing from you soon.
          </p>

          <p className="partner-with-us-text">
            We are committed to working with health systems in a collaborative
            and transparent manner to achieve our shared goals. We believe that
            by working together, we can create a healthcare system that is more
            efficient, effective, and patient-centered.
          </p>
          <PartnerWithUsButton />
        </div>
      </div>*/}
    </section>
  );
};

export default Partner;
