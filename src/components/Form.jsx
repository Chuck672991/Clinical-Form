import React, { useState } from "react";
import FormLeft from "./FormLeft";
import "./Form.css";
import html2pdf from "html2pdf.js";
import FormRight from "./FormRight";
import BillingInfo from "./BillingInfo";
import ClinicalInfo from "./ClinicalInfo";
import PatientInfo from "./PatientInfo";
import Speciment from "./Speciment";
import CbcReport from "./CbcReport";
import SecondForm from "./RestForm/SecondForm";
import { Grid } from "@mui/material";
// import FormRight from "./FormRight";

const Form = () => {
  const handleDownloadPDF = () => {
    const content = document.getElementById("pdf-content");

    if (content) {
      const options = {
        margin: [10, 10, 10, 10],
        pagebreak: {
          mode: "avoid-all",
        },
        filename: "myfile.pdf",
        jsPDF: { unit: "pt",  format: "b3", orientation: "portrait" },
      };
      html2pdf().set(options).from(content).save();
    }
  };

  return (
    <>

      <Grid item container paddingX={5}  xs={12}  justifyContent={"space-between"} md={12} padding={0} id="pdf-content">
        <Grid xs={12} md={5} spacing={4} className="column_left">

          <FormLeft />
          <FormRight/>
          <BillingInfo/>
          <ClinicalInfo/>
          
        </Grid>

        <Grid md={6} className="column_right">
        <PatientInfo />
          <Speciment/>
          <CbcReport/>
          
        </Grid>
         <SecondForm/>

      </Grid>
      <button onClick={handleDownloadPDF}>Download PDF</button>
      
    </>
  );
};

export default Form;
