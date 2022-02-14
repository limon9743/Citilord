import React from "react";
import ContactBannerImg from "./contactBanner.png";
import "./ContactBanner.css";
import { Button, styled } from "@material-ui/core";
import { Link } from "react-router-dom";

const BannerButton = styled(Button)({
  textTransform: "capitalize",
  fontSize: 16,
  margin: "0px 10px ",
  padding: "10px 16px",
  backgroundColor: "rgb(223, 152, 0)",
  color: "white",

  "&:hover": {
    backgroundColor: "rgb(255,185,29)",
  },
  "&:nth-child(2)": {
    backgroundColor: "rgb(0 110 18)",
  },
  "&:nth-child(2):hover": {
    backgroundColor: "#449637",
  },
});

const ContactBanner = () => {
  return (
    <div>
      <div class="contact-banner">
        <div className="contact-banner-button-div">
          <div className="contact-banner-buttons">
            <Link to={"/free-valuation"} style={{ textDecoration: "none" }}>
              <BannerButton
                variant="contained"
                style={{ background: "green", fontWeight: "bold" }}
              >
                Free Valuation
              </BannerButton>
            </Link>
            <Link to={"/quick-response"} style={{ textDecoration: "none" }}>
              <BannerButton
                variant="contained"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Quick-response
              </BannerButton>
            </Link>
          </div>
        </div>
        <img src={ContactBannerImg} className="contact-banner-img" alt="..." />
      </div>
    </div>
  );
};

export default ContactBanner;
