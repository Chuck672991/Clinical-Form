import { Grid, Input } from "@mui/material";
import React from "react";

const CbcReport = () => {
  const containerStyle = {
    border: "1px solid red",
    padding: "2px",
    //  margin:"10px 10px 0 10px",
    marginLeft: "10px",
    marginRight: "10px",
    // marginTop:"15px",

    alignItems: "center",
    fontSize: "13px",
  };
  const gridContainer = {
    margin: "10px 30px ",
    gap: "10px",
  };
  const containerStyleWithOutBorder = {
    display: "flex",
    fontWeight: "500",
    whiteSpace: "noWrap",
    alignItems: "center",
    fontSize: "13px",
  };
  const checkboxContainerStyle = {
    display: "flex",
    // fontWeight: "600",
    fontSize: "13px",
    whiteSpace: "noWrap",
    gap: "4px",
    alignItems: "center",
  };

  const textareaStyle = {
    borderColor: "#e0e0e0",
    fontSize: "12px",
    height: "15px",
    width: "100%",
    marginBottom: "5px",

    // padding: "8px",
  };
  const heading = {
    backgroundColor: "rgb(79, 149, 214)",
    fontWeight: 900,
    width: "50%",
    color: "white",
    marginLeft: "10px",
    marginTop: "15px",
    fontSize: "12px",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    padding: "6px",
    letterSpacing: "2px",
    // position: "relative",
  };

  const checkboxStyle = {
    padding: "10px",
    width: "30px",
  };

  return (
    <Grid container spacing={1}>
      <Grid item md={12}>
        <label style={checkboxContainerStyle}>
          <input style={checkboxStyle} type="checkbox" name="isPrimary" />
          Bone Marrow <b> [must provide CBC and Path Report]:</b>
        </label>
      </Grid>
      <Grid style={gridContainer} spacing={1} container>
        {/* Collection text */}
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={2.5}
          className="form-section"
        >
          <label>Collection text:</label>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={2.5}
          className="form-section"
        >
          <label>Collection text:</label>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={2.5}
          className="form-section"
        >
          <label>Collection text:</label>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={3}
          className="form-section"
        >
          <label>Collection text:</label>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
      </Grid>

      {/* Peripheral Blood */}

      <Grid spacing={1} container>
        <Grid item md={4}>
          <label style={checkboxContainerStyle}>
            <input style={checkboxStyle} type="checkbox" name="isPrimary" />
            Peripheral Blood: Green Tops
            <Input style={textareaStyle} type="text" name="collectiontext" />
          </label>
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={3}
          className="form-section"
        >
          <label>Purple Tops : </label>
          <Input style={textareaStyle} type="text" name="purpletops" />
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={3}
          className="form-section"
        >
          <label>Other</label>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
      </Grid>

      {/* fresh Tissue */}

      <Grid item md={10}>
        <label style={checkboxContainerStyle}>
          <input style={checkboxStyle} type="checkbox" name="isPrimary" />
          Fresh Tissue (Media Type required):
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </label>
      </Grid>

      {/* Fluid */}
      <Grid item md={3}>
        <label style={checkboxContainerStyle}>
          <input style={checkboxStyle} type="checkbox" name="isPrimary" />
          Fluid: CSF
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </label>
      </Grid>
      <Grid
        style={containerStyleWithOutBorder}
        item
        md={2}
        className="form-section"
      >
        <label>Pleural </label>
        <Input style={textareaStyle} type="text" name="collectiontext" />
      </Grid>
      <Grid
        style={containerStyleWithOutBorder}
        item
        md={6}
        className="form-section"
      >
        <label>Other</label>
        <Input style={textareaStyle} type="text" name="collectiontext" />
      </Grid>

      {/* FNA Block */}
      <Grid item md={10}>
        <label style={checkboxContainerStyle}>
          <input style={checkboxStyle} type="checkbox" name="isPrimary" />
          FNA cell block:
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </label>
      </Grid>

      {/* Smears Ari dried */}
      <Grid container spacing={1}>
        <Grid item md={3}>
          <label style={checkboxContainerStyle}>
            <input style={checkboxStyle} type="checkbox" name="isPrimary" />
            Smears: Air Dried
            <Input style={textareaStyle} type="text" name="collectiontext" />
          </label>
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={2}
          className="form-section"
        >
          <label>Fixed </label>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={6}
          className="form-section"
        >
          <label>
            Stained<b> (type of stain)</b>{" "}
          </label>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
      </Grid>

      {/* Slides # */}
      <Grid spacing={1} container>
        <Grid item md={3}>
          <label style={checkboxContainerStyle}>
            <input style={checkboxStyle} type="checkbox" name="isPrimary" />
            Slides #
            <Input style={textareaStyle} type="text" name="collectiontext" />
          </label>
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={2}
          className="form-section"
        >
          <label>Unstained</label>
          <Input style={textareaStyle} type="text" name="purpletops" />
        </Grid>
        <Grid
          style={containerStyleWithOutBorder}
          item
          md={2}
          className="form-section"
        >
          <label>Unstained</label>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
        <Grid item md={4}>
          <label style={checkboxContainerStyle}>
            <input style={checkboxStyle} type="checkbox" name="HandE" />
            H&E
            <Input style={textareaStyle} type="text" name="collectiontext" />
          </label>
        </Grid>
      </Grid>
      {/* Parafiin Block */}
      <Grid item md={4}>
        <label style={checkboxContainerStyle}>
          <input style={checkboxStyle} type="checkbox" name="isPrimary" />
          FNA cell block:
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </label>
      </Grid>
      {/* Choose best block */}
      <Grid container spacing={1}>
      <Grid item md={12}>
        <label style={checkboxContainerStyle}>
          <input style={checkboxStyle} type="checkbox" name="isPrimary" />
          <b> Choose best block </b> (for global molecular/NGS testing only) 
        </label>
      </Grid>
      <Grid item md={12}>

      <p style={containerStyleWithOutBorder}>Submit ≤4 blocks. Blocks will be combined for molecular <br/>
      testing when necessary.
For all other testing, specify which block to use for<br/> each if sending multiple blocks. See back for details</p>
      </Grid>
      </Grid>
      <Grid
          style={containerStyleWithOutBorder}
          item
          md={9}
          className="form-section"
        >
          <h3>Comments</h3>
          <Input style={textareaStyle} type="text" name="collectiontext" />
        </Grid>
    </Grid>
  );
};

export default CbcReport;
