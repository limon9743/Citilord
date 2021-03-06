import React from "react";
import TenantsBannerImg from "./bannerImg.jpg";
import "./TenantsBanner.css";

const TenantsBanner = () => {
  return (
    <div>
      <div data-aos="zoom-in" data-aos-once="true" className="tenants-banner">
        <img src={TenantsBannerImg} className="tenants-banner-img" alt="..." />
      </div>
    </div>
  );
};

export default TenantsBanner;
