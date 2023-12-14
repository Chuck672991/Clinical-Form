import { Grid, Input } from "@mui/material";
import React, { useState } from "react";

const PatientInfo = () => {
  const containerStyle = {
    display: "flex",
    border: "1px solid red",
    padding: "2px",
    alignItems: "center",
    fontSize: "13px",
  };
  const containerStyleWithOutBorder = {
    display: "flex",
    padding: "1px",
    fontWeight: "600",
    whiteSpace:"noWrap",
    alignItems: "center",
    fontSize: "13px",
  };
  const checkboxContainerStyle = {
    display: "flex",
    fontWeight: "600",

    gap: "4px",
    alignItems: "center",
  };

  const textareaStyle = {
    borderColor: "#e0e0e0",
    fontSize: "12px",
    height: "15px",
    width: "100%",
    marginBottom: "5px",

    padding: "8px",
  };
  const heading = {
    backgroundColor: 'rgb(79, 149, 214)',
    fontWeight: 900,
    width: '50%',
    color: 'white',
    marginLeft: '10px',
    fontSize: '12px',
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    padding: '6px',
    letterSpacing: '2px',
    /* marginBottom: '1px !important', */
    position: 'relative',
  };
  

  const checkboxStyle = {
    fontSize: "12px", // Set the font size for checkboxes
  };
  const [formData, setFormData] = useState({
    lastName: "",
    genderMale: false,
    genderFemale: false,
    firstName: "",
    middleInitial: "",
    otherPtId: "",
    dateOfBirth: {
      month: "",
      day: "",
      year: "",
    },
    medicalRecordNumber: "",
    hasInformedConsent: false,
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
    <>
    <h3  style={heading}>Patient Information</h3>

    <Grid marginLeft={1.2} container md={11} style={containerStyle}>
      <Grid item container md={12} className="form-section">
        <Grid md={9} style={containerStyleWithOutBorder}>
          <Grid md={2.4}>
            <label>Last Name:</label>
          </Grid>

          <Input
            style={textareaStyle}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid style={checkboxContainerStyle} md={1}>
          <label>Male</label>

          <input
            type="checkbox"
            name="genderMale"
            checked={formData.genderMale}
            onChange={handleChange}
          />
        </Grid>
        <Grid style={checkboxContainerStyle} md={1}>
          <label>Female</label>

          <input
            type="checkbox"
            name="genderFemale"
            checked={formData.genderFemale}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid item container md={12} className="form-section">
        <Grid item md={6} style={containerStyleWithOutBorder}>
          <Grid container>
            <Grid style={containerStyleWithOutBorder} item md={12}>
              <Grid md={4}>
                <label>First Name:</label>
              </Grid>
              <Input
                type="text"
                style={textareaStyle}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={2} style={containerStyleWithOutBorder}>
          <Grid container>
            <Grid style={containerStyleWithOutBorder} item md={12}>
              <label>M.I.:</label>
              <Input
                style={textareaStyle}
                type="text"
                name="middleInitial"
                value={formData.middleInitial}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={4} style={containerStyleWithOutBorder}>
          <Grid container>
            <Grid style={containerStyleWithOutBorder} item md={12}>
              <Grid md={5}>
                <label>Other Pt ID/Acct #:</label>
              </Grid>

              <Input
                style={textareaStyle}
                type="text"
                name="otherPtId"
                value={formData.otherPtId}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={1} className="form-section">
  <Grid item xs={12} md={6}>
    <Grid style={containerStyleWithOutBorder} container spacing={1} alignItems="center">
      <Grid item xs={3}>
        <label>Date of Birth:</label>
      </Grid>
      <Grid item xs={2.4}>
        <Input
          type="text"
          style={textareaStyle}
          name="dateOfBirth.month"
          placeholder="mm"
          value={formData.dateOfBirth.month}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <Input
          type="text"
          style={textareaStyle}

          name="dateOfBirth.day"
          placeholder="dd"
          value={formData.dateOfBirth.day}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <Input
          type="text"
          style={textareaStyle}

          name="dateOfBirth.year"
          placeholder="yyyy"
          value={formData.dateOfBirth.year}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  </Grid>

  <Grid item xs={12} md={6}>
    <Grid style={containerStyleWithOutBorder} container spacing={1} alignItems="center">
      <Grid  item xs={4}>
        <label>Medical Record #:</label>
      </Grid>
      <Grid item xs={8}>
        <Input
          type="text"
          name="medicalRecordNumber"
          style={textareaStyle}
          value={formData.medicalRecordNumber}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  </Grid>
</Grid>

      <Grid className="form-section">
        <label  style={ checkboxContainerStyle } >
          <input
            type="checkbox"
            name="hasInformedConsent"
            checked={formData.hasInformedConsent}
            onChange={handleChange}
          />
          Client represents it has obtained informed consent from the patient to
          perform the services described herein
        </label>
      </Grid>
    </Grid>
    </>
  );
};

export default PatientInfo;
