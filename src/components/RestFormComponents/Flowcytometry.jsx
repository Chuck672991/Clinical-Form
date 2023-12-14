import React from 'react';
import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';

const diagnosticData = [
  'Standard L/L Panel (24 Markers)',
  'Extended L/L Panel (31 Markers)',
  'N/A CD4/CD8 Ratio for BAL',
  'High Sensitivity PNH',
  'T&B Tissue Panel',
  'TRBC1/T-Cell Lymphoma Companion',
];

const DiagnosticForm = () => {
  const labelStyle = { fontSize: '11px' };
  const checkboxStyle = {  width: '10px', height: '10px',marginBottom:"2px", '!important': 'true' };
  const fragmentStyle = {marginLeft:"5px" ,marginBottom:"2px",'!important':'true'}

  return (
    <div>
       <div class="heading_blue">Flow Cytometry</div>
    <p class="description" id='sixty-width'>Please attach CBC with all flow requests on blood or bone marrow (required)</p>
   <span>Follow-Up/Add-On panels are available in conjunction with, or after, a Main Panel result has been reported by NeoGenomics or client.</span>
      <Typography variant="h5" className='blue_heading'>Diagnostic/Prognostic Panels</Typography>
      <Grid container spacing={2}>

        {diagnosticData.map((label, index) => (
          <Grid item xs={12} key={index}>
            <FormControlLabel  style={fragmentStyle}
              control={
                <React.Fragment >
                  <Checkbox  size='small' style={checkboxStyle } />
                  <Checkbox size='small' style={checkboxStyle } />
                </React.Fragment>
              }
              label={<span style={labelStyle}>{`${label} (G T)`}</span>}
              labelPlacement=""
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DiagnosticForm;
