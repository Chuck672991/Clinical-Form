import React from "react";
import { Grid } from "@mui/material";
import "./SecondForm.css";
import Consultation from "../RestFormComponents/Consultation";
import Cytogenics from "../RestFormComponents/Cytogenics";
import FlowCytometry from "../RestFormComponents/Flowcytometry";

const SecondForm = () => {
  const Item = ({ children }) => <div className="custom-item">{children}</div>;
  return (
    <>
      <Grid container border={2} spacing={0} className="main-border">
        <Grid item xs={6} md={7} border={1} className="consultation">
        <Item>
        <Consultation />
          </Item> 

        </Grid>
        <Grid item xs={6} border={1} md={5} className="cytogenics">
        <Item>
        <Cytogenics />
          </Item> 
        </Grid>
        <Grid item xs={6} border={1} md={7} className="flowcytometry">
          <FlowCytometry/>
        </Grid>
        <Grid item xs={6} border={1} md={5} className="moleculargenitics">
          moleculargenitics
        </Grid>
        <Grid item xs={6} border={1} md={7} className="fish">
          fish
        </Grid>
        <Grid item xs={6} border={2} md={5} className="neotype">
          nellooo
          <Grid item xs={6} border={1} md={12} className="flexReport">
            po;ooo
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SecondForm;
