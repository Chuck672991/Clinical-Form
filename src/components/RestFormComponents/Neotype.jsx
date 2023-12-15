import {
  Box,
  Checkbox,
  Grid,
  Typography,
  FormControlLabel,
} from "@mui/material";

import React from "react";

const Neotype = () => {
  const boxStyle = {
    display: "flex",
    marginLeft: "10px",
    flexDirection: "row",
    // justifyContent:"space-around",
    alignItems: "center",
    bgcolor: "#f0f0f0", //  color
    p: 2, //
    fontSize: "11x",
  };
  const typographyStyle = {
    fontWeight: "bold",
    fontSize: "12px", //  12px
    color: "blue",
  };
  const labelStyle = { fontSize: "11px" };
  const checkboxStyle = {
    width: "10px",
    height: "10px",
    marginBottom: "2px",
    "!important": "true",
  };
  const fragmentStyle = {
    marginLeft: "5px",
    marginBottom: "2px",
    "!important": "true",
  };
  const data1 = [
    "N/A AITL/Peripheral T-Cell Lymphoma",
    "ALL Profile",
    "N/A AML Prognostic Profile",
    "N/A AML Prognostic Profile + FLT3 by PCR*",
    "CLL Profile",
    "Add IgVH Mutation Analysis",
    "N/A Neo Comprehensive™ - Myeloid Disorders",
    "N/A Neo Comprehensive™ - Myeloid Disorders + FLT3 by PCR*",
  ];
  const data2 = [
    "N/A Discovery Profile for Hematologic Cancers",
    "Follicular Lymphoma Profile",
    "N/A Lymphoid Disorders Profile",
    "N/A Lymphoma Profile",
    "N/A MDS/CMML Profile",
    "N/A MDS/CMML Profile + FLT3 by PCR*",
  ];

  return (
    <div>
      <Box style={boxStyle}>
        <Typography variant="h6" style={typographyStyle}>
          NeoTYPE® and Neo Comprehensive™ Cancer Profiles :-
          <span style={{ color: "black", fontWeight: "bold" }}>
            {" "}
            G - Global{" "}
          </span>
          <span style={{ color: "black", fontWeight: "bold" }}>
            {" "}
            T - with Tech-Only FISH
          </span>
        </Typography>
      </Box>
      <Grid spacing={1} marginLeft={"10px"} container>
        
        <Grid md={5}>
          <Box>
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              G
            </Typography>{" "}
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              T
            </Typography>
          </Box>
          {data1.map((label, index) => (
            <FormControlLabel
              key={index}
              style={fragmentStyle}
              control={
                <React.Fragment key={index}>
 {data1.some((item) => item.startsWith("N/A")) ? (
  <>
    <Checkbox size="small" style={checkboxStyle} />
  </>
) : (
  <>
    <Checkbox size="small" style={checkboxStyle} />
    <Checkbox size="small" style={checkboxStyle} />
  </>
)}
</React.Fragment>
              }
              label={<span style={labelStyle}>{label}</span>}
              labelPlacement="end"
            />
          ))}
        </Grid>
        <Grid md={5}>
          <Box>
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              G
            </Typography>{" "}
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              T
            </Typography>
          </Box>
          {data1.map((label, index) => (
            <FormControlLabel
              key={index}
              style={fragmentStyle}
              control={
                <React.Fragment key={index}>
 {data2.some((item) => item.startsWith("N/A")) ? (
  <>
    <Checkbox size="small" style={checkboxStyle} />
  </>
) : (
  <>
    <Checkbox size="small" style={checkboxStyle} />
    <Checkbox size="small" style={checkboxStyle} />
  </>
)}
</React.Fragment>
              }
              label={<span style={labelStyle}>{label}</span>}
              labelPlacement="end"
            />
          ))}
        </Grid>
      </Grid>
      <p style={{fontSize: "13px", fontWeight:"bold"}}>Please see back page for detailed info on Intended Use and Billing for FLT3 by PCR
</p>
    </div>
  );
};

export default Neotype;
