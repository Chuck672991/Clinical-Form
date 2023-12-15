import { Typography,Grid,Box ,FormControlLabel,Checkbox,Input} from '@mui/material'
import parse from "html-react-parser"
import React from 'react'

const Fish = () => {
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
    // alignItems: "spaceEvenly",
    gap: "4px",
    whiteSpace: "noWrap",

    // justifyContent: "flexStart",
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
  const data1= [
    'Anaplastic Large Cell Lymphoma (ALCL)',
    'ALL - Adult',
    'ALL - Pediatric',
    'ALL, Ph-Like',
    'AML Standard',
  ];
  const data2 = [
    'AML Favorable-Risk',
    'AML Non-Favorable Risk',
    'CLL',
    'Eosinophilia',
    'High-Grade/Large B-Cell Lymphoma w/BCL6 (3q27), MYC (8q24), BCL2 (18q21)',
    'Add MYC/IgH/CEN8 t(8;14)',
  ];
  
  const data3 = [
    'N/A High-Grade B-Cell Lymphoma Reflex',
    'Low-Grade/Small B-Cell Lymphoma',
    'MDS Extended',
    'MDS Standard',
    'MPN',
    'NHL',
  ];
  const data4 = ['Plasma Cell Myeloma -'];
  const data5= ['Do not reflex to IgH Complex'];
  const data6 = [
    'Plasma Cell Myeloma IgH Complex',
    'Plasma Cell Myeloma Prognostic Pane',
  ];
  const data7 = [
    '11q Aberration in NHL',
    '1p36 Deletion',
    'ALK for Lymphoma',
    'BCL6/MYC t(3;8)',
    'BIRC3 (API2)/MALT1 t(11;18)',
    'BCR/ABL1/ASS1 t(9;22)',
  ];
  const data8 = [
    'CDKN2A (p16) Deletion for ALL',
    'DUSP22-IRF4 Rearrangement',
    'IgH/MAFB t(14;20)',
    'IGK/MYC t(2;8)',
    'IGL/MYC t(8;22)',
    'JAK2 (9p24.1)',
  ];
  const CustomInput = () => (
    <Input type="text" style={textareaStyle} placeholder='Other' />
  );
  const data9 = [
  'MYC/IgH/CEN8 t(8;14)',
  'NUP98',
  'TCL1 (14q32.1)',
  'TP63 Rearrangement',
  'PML/RARA t(15;17)',
  
  <CustomInput  key="custom-input" />,

];

  return (
    <>
    <span class="heading_blue"> Fish  <Typography component="span" sx={{ marginLeft: "4px" }}>
    G - Globa
            </Typography>{" "}
            <Typography component="span" sx={{ marginLeft: "4px" }}>
            T - Tech-Only
            </Typography>
    
    </span>
    <span>
  
            </span>
      
    
      <Typography component="h3" variant="h9" >Home Fish Panel</Typography>
    <Grid container spacing>
      <Grid md={4}>
{/* data 1 */}
{data1.map((label, index) => (
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
      <Grid  md={4}>
{/* data 2 */}
{data2.map((label, index) => (
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
      <Grid  md={4}>
{/* data 3 */}
{data3.map((label, index) => (
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
    </Grid>

    <Typography component="h3">
      Plasma Cell Myeloma Panels -
      <span>
      - Plasma Cell Enrichment will be performed on all bone
      </span>
   
    <p>marrow and blood samples having plasma cell FISH tests.</p>

    </Typography>
    <Grid container spacing={1}>
      <Grid md={4}>
      {data4.map((label, index) => (
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
      <Grid md={4}>
      {data5.map((label, index) => (
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
      <Grid  md={4}>
      {data6.map((label, index) => (
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
    </Grid>
    
    <Typography component="h3">
Individual Probes     
    </Typography>
    <Grid container spacing={1}>
      <Grid md={4}>
      {data7.map((label, index) => (
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
      <Grid md={4}>
      {data8.map((label, index) => (
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
      <Grid  md={3}>
      {data9.map((label, index) => (
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
    </>

  )
}

export default Fish