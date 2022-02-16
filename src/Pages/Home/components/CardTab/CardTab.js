import React, { useState } from "react";
import "./CardTab.css";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Button, makeStyles, Tab } from "@material-ui/core";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  tabText: {
    fontSize: "17px",
    fontWeight: "bold",
    color: "black",
    margin: "0px 10px",
    // borderRadius: "5px",
  },
}));

const CardTab = (props) => {
  const classes = useStyle();
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="CardTabcontainer">
      <div className="text">Available Properties</div>

      {/* Card Tab */}

      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="SHORT LET" value="1" className={classes.tabText} />
          <Tab label="LONG LET" value="2" className={classes.tabText} />
          <Tab label="SELL" value="3" className={classes.tabText} />
        </TabList>

        <TabPanel value="1">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Cards name="To Let" />
            <Cards name="To Let" />
            <Cards name="To Let" />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Cards name="To Let" />
            <Cards name="To Let" />
            <Cards name="To Let" />
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Cards name="Sell" />
            <Cards name="Sell" />
            <Cards name="Sell" />
          </div>
        </TabPanel>
      </TabContext>

      {/* Card Tab End*/}
      <Link to="/all-properties" style={{ textDecoration: "none" }}>
        <Button
          style={{
            width: "200px",
            height: "50px",
            color: "black",
            fontWeight: "bold",
            backgroundColor: "lightgreen",
            marginBottom: "20px",
          }}
        >
          View All Properties
        </Button>
      </Link>
    </div>
  );
};

export default CardTab;
