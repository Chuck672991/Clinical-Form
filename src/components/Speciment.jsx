import { Checkbox, Grid, Input } from "@mui/material";
import React, { useState } from "react";

const Speciment = () => {
  const containerStyle = {
    border: "1px solid red",
    padding: "2px",
    //  margin:"10px 10px 0 10px",
    marginLeft:"10px",
    marginRight:"10px",
    // marginTop:"15px",



    alignItems: "center",
    fontSize: "13px",
  };
  const containerStyleWithOutBorder = {
    display: "flex",
    padding: "1px",
    fontWeight: "600",
    whiteSpace: "noWrap",
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
    width: "100%",
    marginBottom: "5px",
    height:"17px",
    marginLeft:"2px",
    backgroundColor:" rgba(38, 165, 182, 0.1)",

    padding: "8px",
  };
  const heading = {
    backgroundColor: "rgb(79, 149, 214)",
    fontWeight: 900,
    width: "50%",
    color: "white",
    marginLeft: "10px",
    marginTop:"15px",
    fontSize: "12px",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    padding: "6px",
    letterSpacing: "2px",
    // position: "relative",
  };

  const checkboxStyle = {
    fontSize: "12px", // Set the font size for checkboxes
  };
  const [formData, setFormData] = useState({
    specimenId: "",
    blockId: "",
    fixativePreservative: "",
    collectionDate: {
      month: "",
      day: "",
      year: "",
    },
    collectionTime: "",
    am: false,
    pm: false,
    retrievedDate: {
      month: "",
      day: "",
      year: "",
    },
    dischargeDate: {
      month: "",
      day: "",
      year: "",
    },
    bodySite: "",
    isPrimary: false,
    isMetastasis: false,
    primarySite: "",
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
  const handleDateChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Assuming name is "collectionDate"
    }));
  };

  return (
    <>
    <h3  style={heading}>Specimen Information</h3>
    <Grid md={12}  style={containerStyle}>
      <Grid container md={12}>
        <Grid item md={6}>
          <Grid style={containerStyleWithOutBorder} className="form-section">
            <label>Specimen ID:</label>
            <Input
              style={textareaStyle}
              type="text"
              name="specimenId"
              value={formData.specimenId}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid item md={6}>
          <Grid style={containerStyleWithOutBorder} className="form-section">
            <label>Block ID:</label>
            <Input
              style={textareaStyle}
              type="text"
              name="blockId"
              value={formData.blockId}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12}>
        <Grid
          style={containerStyleWithOutBorder}
          md={12}
          className="form-section"
        >
          <label>Fixative/Preservative:</label>
          <Input
            style={textareaStyle}
            type="date"
            name="collectionDate"
            value={formData.collectionDate}
            onChange={handleDateChange}
          />
        </Grid>
      </Grid>
      <Grid container>
        {/* Collection Date */}
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={4}
          className="form-section"
        >
          <label>Collection Date:</label>
          <Input
            style={textareaStyle}
            type="date"
            name="collectionDate"
            value={`${formData.collectionDate.year}-${formData.collectionDate.month}-${formData.collectionDate.day}`}
            onChange={handleDateChange}
          />
        </Grid>

        {/* Collection Time */}
        <Grid container item md={6} className="form-section">
          <Grid style={containerStyleWithOutBorder} item md={8}>
            <label>Collection Time:</label>
            <Input
              style={textareaStyle}
              type="text"
              name="collectionTime"
              value={formData.collectionTime}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2}>
            <label style={checkboxContainerStyle}>
              <Input
                style={checkboxStyle}
                type="checkbox"
                name="am"
                checked={formData.am}
                onChange={handleChange}
              />
              AM
            </label>
          </Grid>
          <Grid item md={2}>
            <label style={checkboxContainerStyle}>
              <Input
                style={checkboxStyle}
                type="checkbox"
                name="pm"
                checked={formData.pm}
                onChange={handleChange}
              />
              PM
            </label>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12}>
        <Grid
          style={containerStyleWithOutBorder}
          md={10}
          className="form-section"
        >
          <label>Retrieved Date:</label>
          <Input
            style={textareaStyle}
            type="text"
            name="retrievedDate.month"
            placeholder="mm"
            value={formData.retrievedDate.month}
            onChange={handleChange}
          />
          <Input
            style={textareaStyle}
            type="text"
            name="retrievedDate.day"
            placeholder="dd"
            value={formData.retrievedDate.day}
            onChange={handleChange}
          />
          <Input
            style={textareaStyle}
            type="text"
            name="retrievedDate.year"
            placeholder="yyyy"
            value={formData.retrievedDate.year}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          style={containerStyleWithOutBorder}
          md={4}
          className="form-section"
        >
          <label>Hospital Discharge Date:</label>
          <Input
            style={textareaStyle}
            type="date"
            name="dischargeDate.month"
            value={formData.dischargeDate}
            onChange={handleDateChange}
          />
    
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Grid
          style={containerStyleWithOutBorder}
          md={12}
          className="form-section"
        >
          <label>Body Site:</label>
          <Input
            style={textareaStyle}
            type="text"
            name="bodySite"
            value={formData.bodySite}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid style={containerStyleWithOutBorder} container >
        <Grid item md={2}>
          <label style={checkboxContainerStyle}>
            <input
              style={checkboxStyle && {  padding: "10px",width:"20px"}}
              type="checkbox"
              name="isPrimary"
              checked={formData.isPrimary}
              onChange={handleChange}
            />
            Primary
          </label>
        </Grid>
        <Grid item md={10}>
          <label style={checkboxContainerStyle }>
            <input
              style={checkboxStyle && {  padding: "10px",width:"20px"}}
              type="checkbox"
              name="isMetastasis"
              checked={formData.isMetastasis}
              onChange={handleChange}
            />
            Metastasis – If Metastasis, list Primary:
            <Input
              style={textareaStyle && { marginTop: "5px", marginBottom: "5px" }}
              type="text"
              name="primarySite"
              value={formData.primarySite}
              onChange={handleChange}
              // disabled={!formData.isMetastasis}
            />
          </label>
        </Grid>
      </Grid>
    </Grid>
    </>
    
  );
};

export default Speciment;
