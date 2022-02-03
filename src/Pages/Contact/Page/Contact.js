import React from "react";

import ContactBanner from "../Components/ContactBanner/ContactBanner";
import ContactForm from "../Components/ContactForm/ContactForm";
import Map from "../Components/Map/Map";
import LandlordTanents from "../LandlordTanents/LandlordTanents";

const Contact = () => {
  return (
    <div className="">
      <ContactBanner></ContactBanner>
      <div className="container py-5">
        <ContactForm></ContactForm>
        <Map></Map>
      </div>
      <LandlordTanents></LandlordTanents>
    </div>
  );
};

export default Contact;
