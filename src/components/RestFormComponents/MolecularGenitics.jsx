import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Input,
} from "@mui/material";
import React from "react";

const MolecularGenitics = () => {
  const textareaStyle = {
    borderColor: "#e0e0e0",
    fontSize: "12px",
    height: "15px",
    width: "100%",
    marginBottom: "5px",

    padding: "8px",
  };
  const row = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    whiteSpace: "noWrap",

    justifyContent: "center",
    marginLeft: "10px",
  };
  const formPara = {
    fontSize: "13px",
  };
  const formHeading = {
    color: "black",
    fontSize: "14px",
    marginTop: "4px",
  };

  const specimenHoldOpt = {
    gap: "6px",
    fontSize: "11px",
    display: "flex",
    alignItems: "center",

    flexDirection: "row ",
  };

  const option = {
    marginBottom: "5px",
    fontSize: "12px",
    whiteSpace: "noWrap",
    fontWeight: "bold",
    display: "flex",
    gap: "5px",
    alignItems: "center",
  };

  const labelStyle = {
    fontSize: "12px",
    marginBottom: "0px",
    padding: "0px",
    marginLeft: "10px",
  };

  const inputStyle = {
    fontSize: "12px", // Adjust the font size for the input field
  };

  const fragmentStyle = {
    display: "flex",

    alignItems: "center",
    marginLeft: "1px",
    // marginBottom: "1px",
    whiteSpace: "Wrap",
    "!important": "true",
  };
  const checkboxStyle = {
    width: "1px",
    height: "1px",
    marginBottom: "2px",
    "!important": "true",
  };
  const dataOne = [
    "ABL1 Kinase Domain (Gleevec® resistance)*",
    "B-Cell Gene Rearrangement",
    "BCR-ABL1 Standard p210, p190* with reflex to ABL1 Kinase Domain if positive",
    "BCR-ABL1 Standard p210, p190* with reflex to BCR-ABL1 Non-Standard p230 if negative",
    "BCR-ABL1 Non-Standard p230*",
    "BRAF Mutation Analysis",
    "BTK Inhibitor Acquired Resistance Panel",
    "Calreticulin (CALR)",
    "CEBPA Mutation Analysis",
  ];
  const dataTwo = [
    "ABL1 Kinase Domain (Gleevec® resistance)*",
    "B-Cell Gene Rearrangement",
    "BCR-ABL1 Standard p210, p190* with reflex to ABL1 Kinase Domain if positive",
    "BCR-ABL1 Standard p210, p190* with reflex to BCR-ABL1 Non-Standard p230 if negative",
    "BCR-ABL1 Non-Standard p230*",
    "BRAF Mutation Analysis",
    "BTK Inhibitor Acquired Resistance Panel",
    "Calreticulin (CALR)",
    "CEBPA Mutation Analysis",
    "CXCR4 Mutation Analysis",
    "FLT3 Mutation Analysis",
    "IDH1/IDH2 by PCR*",
    "IgH Clonality by NGS • Baseline testing of original primary sample required",
    "IgVH Mutation Analysis*",
    "inv(16) CBFB-MYH11*",
    "JAK2 V617F - Qualitative* □ If negative, reflex to JAK2 Exon 12-13 □ If negative, reflex to CALR □ If negative, reflex to MPL",
    "JAK2 V617F - Quantitative",
    "JAK2 Exon 12-13*",
    "KIT (c-KIT) Mutation Analysis",
    "MPL Mutation Analysis",
  ];
  const dataThree = [
    "ABL1 Kinase Domain (Gleevec® resistance)*",
    "B-Cell Gene Rearrangement",
    "BCR-ABL1 Standard p210, p190* with reflex to ABL1 Kinase Domain if positive",
    "BCR-ABL1 Standard p210, p190* with reflex to BCR-ABL1 Non-Standard p230 if negative",
    "BCR-ABL1 Non-Standard p230*",
    "BRAF Mutation Analysis",
    "BTK Inhibitor Acquired Resistance Panel",
    "Calreticulin (CALR)",
    "CEBPA Mutation Analysis",
    "CXCR4 Mutation Analysis",
    "FLT3 Mutation Analysis",
    "IDH1/IDH2 by PCR*",
    "IgH Clonality by NGS • Baseline testing of original primary sample required",
    "IgVH Mutation Analysis*",
    "inv(16) CBFB-MYH11*",
    "JAK2 V617F - Qualitative* □ If negative, reflex to JAK2 Exon 12-13 □ If negative, reflex to CALR □ If negative, reflex to MPL",
    "JAK2 V617F - Quantitative",
    "JAK2 Exon 12-13*",
    "KIT (c-KIT) Mutation Analysis",
    "MPL Mutation Analysis",
    "MPN JAK2 V617F with Sequential Reflex to JAK2 Exon 12-13, CALR, & MPL*",
    "MYD88 Mutation Analysis",
    "NPM1 Mutation Analysis",
    "NPM1 MRD Analysis",
    "PML-RARA, t(15;17)*",
    "Rapid AML Therapeutic Panel",
    "Molecular only",
    "RUNX1-RUNX1T1 (AML1-ETO), t(8;21)*",
    "T-Cell Receptor Gamma",
    "T-Cell Receptor Beta",
    "TP53 Mutation Analysis",
    "Other__________________",
  ];
  const boxStyle = {
  display: "flex",
  flexDirection: "row",
  // justifyContent:"space-around",
  alignItems: "center",
  bgcolor: "#f0f0f0", //  color
  p: 2, //
};
const typographyStyle = {
  fontWeight: "700",
  fontSize: "18px", //  12px
  color: "blue",
};





  return (
    <>
    <Box style={boxStyle}>
<Typography variant="h6" style={typographyStyle}>
Molecular Genetics</Typography>
</Box>
    <Grid container spacing={1}>
      <Grid item md={4}>
        {dataOne.map((label, index) => (
          <FormControlLabel
            key={index}
            style={fragmentStyle}
            control={
              <React.Fragment>
                <Checkbox size="10px" style={checkboxStyle} />
                <Checkbox size="10px" style={checkboxStyle} />
              </React.Fragment>
            }
            label={<span style={labelStyle}>{label}</span>}
            labelPlacement="end"
          />
        ))}
      </Grid>

      <Grid item md={4}>
        {dataTwo.map((label, index) => (
          <FormControlLabel
            key={index}
            style={fragmentStyle}
            control={
              <React.Fragment>
                <Checkbox size="small" style={checkboxStyle} />
                <Checkbox size="small" style={checkboxStyle} />
              </React.Fragment>
            }
            label={<span style={labelStyle}>{label}</span>}
            labelPlacement="end"
          />
        ))}
      </Grid>
      <Grid item md={4}>
        {dataThree.map((label, index) => (
          <FormControlLabel
            key={index}
            style={fragmentStyle}
            control={
              <React.Fragment>
                <Checkbox size="small" style={checkboxStyle} />
                <Checkbox size="small" style={checkboxStyle} />
              </React.Fragment>
            }
            label={<span style={labelStyle}>{label}</span>}
            labelPlacement="end"
          />
        ))}
                {<Input style={textareaStyle} type="text"/>}
                {<Input style={textareaStyle} type="text"/>}


      </Grid>

      <div style={row}>
        <h2 style={formHeading}>Specimen Hold Options :-</h2>
        <div style={specimenHoldOpt}>
          <label style={option}>
            <input type="checkbox" name="freeze-hold" style={inputStyle} />{" "}
            Freeze & Hold
          </label>
          <label style={option}>
            <input type="checkbox" name="extract-hold" style={inputStyle} />{" "}
            Extract and Hold for possible
            <Input type="text" style={textareaStyle} />
          </label>
        </div>
      </div>
            
      <Grid sx={{ marginLeft: "20px" }} md={11}>
        <Typography style={formPara} component="p">
          If no Possible test is indicated for Extract and Hold option,then
          Freeze and Hold option will be automatically selected.
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Test is not validated for Freeze & Hold option.
          </span>{" "}
        </Typography>
      </Grid>
      {/* <Box>
          <Typography component="p">
          <label style={option}>
          <input type="checkbox" name="extract-hold" style={inputStyle} />
          <input type="checkbox" name="extract-hold" style={inputStyle} />

           Other
          <Input type="text" style={inputStyle} />
          <Input type="text" style={inputStyle} />

        </label>
          </Typography>
          </Box> */}
    </Grid>
    </>
  );
};

export default MolecularGenitics;
