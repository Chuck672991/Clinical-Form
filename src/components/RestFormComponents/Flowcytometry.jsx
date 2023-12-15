import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";

const diagnosticData = [
  "Standard L/L Panel (24 Markers)",
  "Extended L/L Panel (31 Markers)",
  "N/A CD4/CD8 Ratio for BAL",
  "High Sensitivity PNH",
  "T&B Tissue Panel",
  "TRBC1/T-Cell Lymphoma Companion",
];
const addonTubeData = [
  
  'AML',
  'B-ALL',
  'CLL/Mantle Cell Companion',
  'Erythroid-Mega',
  'Hairy Cell',
  'Mast Cell',
  'Plasma Cell',
  'T-ALL',
  'TRBC1/LGL',
  
];
const followUpPanelsData = [
  ['AML'],
  [ 'B-ALL'],
  [ 'Plasma Cell'],
  ['Hairy Cell'],
  ['T-ALL'],
];
const MRDPanelData = [
  'N/A B-ALL MRD Panel (BM)',
  'N/A B-ALL MRD Panel (PB)',
  'N/A CLL MRD Panel',
  'N/A Myeloma MM MRD Panel',
];



const DiagnosticForm = () => {
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

  return (
    <div>
      <div class="heading_blue">Flow Cytometry</div>
      <p class="description" id="sixty-width">
        Please attach CBC with all flow requests on blood or bone marrow
        (required)
      </p>
      <span>
        Follow-Up/Add-On panels are available in conjunction with, or after, a
        Main Panel result has been reported by NeoGenomics or client.
      </span>
      <Typography component="h3" variant="h9" >Diagnostic/Prognostic Panels</Typography>

      <Grid container spacing={1}>
        <Grid item md={4}>
          <Box>
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              G
            </Typography>{" "}
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              T
            </Typography>
          </Box>
          {diagnosticData.map((label, index) => (
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
        labelPlacement="end"       />
          ))}
        </Grid>
        <Grid item md={5}>
        <Typography component="h3" variant="h9" >Add-On Tubes</Typography>

          <Box>
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              G
            </Typography>{" "}
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              T
            </Typography>
          </Box>
          {addonTubeData.map((label, index) => (
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
        labelPlacement="end"       />
          ))}
        </Grid>
        <Grid item md={2}>
        <Typography component="h3" variant="h9" >Follow-Up Panels</Typography>

          <Box>
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              G
            </Typography>{" "}
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              T
            </Typography>
          </Box>
          {followUpPanelsData.map((label, index) => (
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
        labelPlacement="end"       />
          ))}
        </Grid>
        <Grid item md={4} sx={{ marginLeft: "90vh" }}>
        <Typography component="h3" variant="h9" >MRD Panels</Typography>
          <Box>
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              G
            </Typography>{" "}
            <Typography component="span" sx={{ marginLeft: "4px" }}>
              T
            </Typography>
          </Box>
          {MRDPanelData.map((label, index) => (
            <FormControlLabel
              key={index}
              style={fragmentStyle}
              control={
                <React.Fragment>
                  <Checkbox size="small" style={checkboxStyle} />
                </React.Fragment>
              }
              label={<span style={labelStyle}>{label}</span>}
        labelPlacement="end"       />
          ))}
        </Grid>
      </Grid>
      <Box>
        <Typography>
          <strong>G</strong> - Global <strong>T</strong> - Tech-Only
        </Typography>
      </Box>
      <Box>
      Specimen Hold Option:{' '}
      <FormControlLabel
        style={fragmentStyle}
        control={
          <Checkbox size="small" style={checkboxStyle} />
        }
        label={<span style={labelStyle}>Refrigerate and Hold</span>}
        labelPlacement="end"   />
    </Box>
      <Box>
        <Typography>
          Tech-Only Opt Out Option: To avoid delay in patient care and as
          medically necessary for an individual patient, additional markers will
          be added by the flow lab when abnormal populations are detected.
          Please refer to NeoGenomics Flow Cytometry Guidelines for additional
          information on tech-only add-on medical necessity criteria. Tech-only
          clients may instruct NeoGenomics to not follow this stated criteria by
          checking this box.
          <FormControlLabel
            style={fragmentStyle}
            control={
              <React.Fragment>
                <Checkbox size="small" style={checkboxStyle} />
              </React.Fragment>
            }
            label={<span style={labelStyle}>{``}</span>}
            labelPlacement=""
          />
        </Typography>
      </Box>
    </div>
  );
};

export default DiagnosticForm;