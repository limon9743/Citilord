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
    <div className="quick-response-div">
      <h3>Get A Quick Response</h3>
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
