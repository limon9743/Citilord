import React from "react";
import "./QueueDiv.css";
import { Link } from "react-router-dom";
import QuickResponseCard from "../QuickResponseCard/QuickResponseCard";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
const queueDiv = (props) => {
  const { title, buttonName, cardIcon, buttonLink } = props;
  return (
    <div className="divcontainer">
      <div className="queue-div-heading-container">
        <h3 className="queue-div-heading">Get A Quick Response</h3>
      </div>
      {/* <div className="buttonContainer">
        <div className="buttonContainerSingle">
          <span>Get Call First</span>
          <Link to="/buyer-request">
            <button className="custom-btn btn-5">
              <span>Buyer</span>
            </button>
          </Link>
        </div>
        <div className="buttonContainerSingle">
          <span>Get Email Alerts</span>
          <Link to="/landlord-renter">
            <button className="custom-btn btn-5">
              <span>Renter Landlord</span>
            </button>
          </Link>
        </div>
        <div className="buttonContainerSingle">
          <span>Get Price Reductions</span>
          <Link to="/landlord-seller">
            <button className="custom-btn btn-5">
              <span>Seller Landlord</span>
            </button>
          </Link>
        </div>
      </div> */}
      <div className="quick-response-fancy-card-div">
        <div className="quick-response-fancy-card-each">
          <QuickResponseCard
            title="Get Call First"
            buttonName="Buyer"
            cardIcon={<CallIcon className="fancy-card-icon-each" />}
            buttonLink="/buyer-request"
          />
        </div>
        <div className="quick-response-fancy-card-each">
          <QuickResponseCard
            title="Get Email Alerts"
            buttonName="Renter Landlrd"
            cardIcon={<EmailIcon className="fancy-card-icon-each" />}
            buttonLink="/landlord-renter"
          />
        </div>
        <div className="quick-response-fancy-card-each">
          <QuickResponseCard
            title="Get Price Reductions"
            buttonName="Seller Landlrd"
            cardIcon={<MoneyOffIcon className="fancy-card-icon-each" />}
            buttonLink="/landlord-seller"
          />
        </div>
      </div>
    </div>
  );
};

export default queueDiv;
