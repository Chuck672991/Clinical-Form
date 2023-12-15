import React from "react";
import { Grid } from "@mui/material";
import "./SecondForm.css";
import Consultation from "../RestFormComponents/Consultation";
import Cytogenics from "../RestFormComponents/Cytogenics";
import FlowCytometry from "../RestFormComponents/Flowcytometry";
import MolecularGenitics from "../RestFormComponents/MolecularGenitics";
import Fish from "../RestFormComponents/Fish";
import Neotype from "../RestFormComponents/Neotype";
import FlexReport from "../RestFormComponents/FlexReport";

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
<MolecularGenitics/>       
 </Grid>
        <Grid item xs={6} border={1} md={7} className="fish">
          <Fish/>
        </Grid>
        <Grid item xs={6} border={2} md={5} className="neotype">
          <Neotype/>
          <Grid item xs={6} border={1} md={12} className="flexReport">
<FlexReport/>          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SecondForm;
