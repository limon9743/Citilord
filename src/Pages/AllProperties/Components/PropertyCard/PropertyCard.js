import React from "react";
import { Link } from "react-router-dom";
import "./PropertyCard.css";
import PropertyImg1 from "./property1.jpg";
import { KingBed } from "@material-ui/icons";

const PropertyCard = () => {
  return (
    <div className="property-card">
      <div className="property-card-img">
        <img src={PropertyImg1} alt="" />
      </div>
      <div className="property-card-info">
        <div className="property-card-date">
          <span>Sunday</span>
          <span>October 27 2222</span>
        </div>
        <h1 className="property-card-title">Property Title/Name</h1>
        <p className="property-card-desc">
          Single Room available in a 5 bedrooms property (females only) opposite
          Mile End Park and Close to Mile End Station.
        </p>
        {/* bottom icon container start */}
        <div className="card-icon-container">
          <div className="card-icon-container-bed">
            <KingBed style={{ marginRight: "10px" }} />
            <label style={{ fontWeight: "bold" }}>4 Bed</label>
          </div>
          <div className="card-icon-contaner-bed">
            <i
              className="fas fa-pound-sign"
              style={{ marginRight: "10px" }}
            ></i>
            <label style={{ fontWeight: "bold" }}>400/PM</label>
          </div>
        </div>
        {/* bottom icon container end */}
        <Link to="/single-property" className="property-card-btn">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
