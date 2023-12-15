import React from 'react'
import {
  Box,
  Checkbox,
  Grid,
  Typography,
  FormControlLabel,
} from "@mui/material";
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

const FlexReport = () => {
  return (
    <>
      <Box style={boxStyle}>
    <Typography variant="h6" style={typographyStyle}>
    FlexREPORT® :-      
    </Typography>
    </Box>
     <FormControlLabel
      control={<Checkbox />}
      label="FlexREPORT: Please add summary report option to this case"
    />
    </>
  
  )
}

export default FlexReport