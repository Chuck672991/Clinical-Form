import { Grid,Input,TextareaAutosize } from "@mui/material";
import React, { useState } from "react";

const ClinicalInfo = () => {
  const Item = ({ children }) => <div className="custom-item">{children}</div>;
  const containerStyle = {
    display: 'flex',
    border:'1px solid red',
    padding:'5px',
    alignItems: 'center',
    fontSize: '13px', 
  };
  const containerStyleWithOutBorder = {
    display: 'flex',
    padding:'5px',
    alignItems: 'center',
    fontSize: '13px', 
  };
  const checkboxContainerStyle = {
    display: 'flex',
    gap:"4px",
    alignItems: 'center',
  };

  const textareaStyle = {
    borderColor: '#e0e0e0',
    fontSize: '12px',
    height:"15px" ,
    backgroundColor:" rgba(38, 165, 182, 0.1)",

    width: '100%', 
    marginBottom:"5px",

    padding: '8px', 
  };

  const checkboxStyle = {
    fontSize: '12px', // Set the font size for checkboxes
  };
  const [formData, setFormData] = useState({
    pathologyReport: false,
    ICDdiagnosis: false,
    Autologous:false,
    Allogeneic:false,
    clinicalHistory: false,
    otherReports: false,
    icd10CodeNarrative: "",
    reasonForReferral: "",
    newDiagnosis: false,
    relapseRefractory: false,
    monitoring: false,
    mrd: false,
    boneMarrowTransplant: "None", // Default value is "None"
    sexMismatch: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          [name]: checked,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  return (
    <div className="forms">
      <header>Clinical Information</header>
      <p className="red m-left">
        Required: Please attach patient's pathology report (required), clinical
        history, and other applicable report(s).
      </p>
<div className="m-left">
<div className="form-section flex ">
      <input
            type="checkbox"
            name="ICDdiagnosis"
            checked={formData.ICDdiagnosis}
            onChange={handleChange}
            style={checkboxStyle}
          />
        <label style={{ fontSize: '12px' }}>ICD 10 (Diagnosis) Code/Narrative (Required):</label>
        <Input
          className="border-bottom"
          type="text"
          name="icd10CodeNarrative"
          style={textareaStyle}

          value={formData.icd10CodeNarrative}
          onChange={handleChange}
        />
      </div>
      <Grid container style={containerStyle} alignItems="center">
      <Grid item xs={12}>
        <div className="flex">
        <label style={{ fontSize: '14px' }}>Reason for Referral:</label>
        <Input
          name="reasonForReferral"
          value={formData.reasonForReferral}
          onChange={handleChange}
          className="border-bottom"
          style={textareaStyle}
          rowsMin={1} // Set the minimum number of rows
        />
        </div>
        
      </Grid>

      {/* Checkboxes */}
      <Grid item  container spacing={0}>
        <Grid item xs={12} md={3}>
        <div style={checkboxContainerStyle}>
          <label style={{ fontSize: '12px' }}>New Diagnosis</label>
          <input
            type="checkbox"
            name="newDiagnosis"
            checked={formData.newDiagnosis}
            onChange={handleChange}
            style={checkboxStyle}
          />
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div style={checkboxContainerStyle}>
          <label style={{ fontSize: '12px' }}>Relapse/Refractory</label>
          <input
            type="checkbox"
            name="relapseRefractory"
            checked={formData.relapseRefractory}
            onChange={handleChange}
            style={checkboxStyle}
          />
          </div>
         
        </Grid>

        <Grid  item xs={12} md={3}>
        <div style={checkboxContainerStyle}>

        <label style={{ fontSize: '12px' }}>Monitoring</label>

          <input
            type="checkbox"
            name="monitoring"
            checked={formData.monitoring}
            onChange={handleChange}
            style={checkboxStyle}
          />
          </div>

        </Grid>

        <Grid item xs={12} md={3}>
        <div style={checkboxContainerStyle}>

          <input
            type="checkbox"
            name="mrd"
            checked={formData.mrd}
            onChange={handleChange}
            style={checkboxStyle}
          />
          <label style={{ fontSize: '12px' }}>MRD</label>
</div>
        </Grid>
      </Grid>
    </Grid>

      <Grid item container spacing={0} style={containerStyleWithOutBorder}>
        <Grid md={12}>
        <p>
          Bone Marrow Transplant (required information for Oncology
          Cytogenetics):
        </p>
        </Grid>
       <Grid container style={containerStyleWithOutBorder} spacing={0} item>
        <Grid md={3}>
        <div style={checkboxContainerStyle}>

        <label>None</label>
        <input
          type="checkbox"
          name="boneMarrowTransplant"
          value="None"
          checked={formData.boneMarrowTransplant === "None"}
          onChange={handleChange}
        />
        </div>
        </Grid>
        <Grid md={3}>
        <div style={checkboxContainerStyle}>

        <label>Autologous</label>
        <input
          type="checkbox"
          name="Autologous"
          value="Autologous"
          checked={formData.Autologous }
          onChange={handleChange}
        />
        </div>
        </Grid>

        <Grid md={3}>
        <div style={checkboxContainerStyle}>

        <label>Allogeneic</label>
        <input
          type="checkbox"
          name="Allogeneic"
          value="Allogeneic"
          checked={formData.Allogeneic }
          onChange={handleChange}
        />
        </div>
        </Grid>
        <Grid md={3}>
        <div style={checkboxContainerStyle}>

        <label>Sex Mismatch</label>
        <input
          type="checkbox"
          name="sexMismatch"
          checked={formData.sexMismatch}
          onChange={handleChange}
        />
        </div>
        </Grid>
       </Grid>
       

      

     

      
      </Grid>
</div>
     
    </div>
  );
};

export default ClinicalInfo;
