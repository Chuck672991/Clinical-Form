import { Grid } from "@mui/material";
import React, { useState } from "react";

const Cytogenics = () => {
  const Item = ({ children }) => <div className="custom-item">{children}</div>;

  const [data, setData] = useState({
    oncologyChromosomeAnalysis: false,
    reflexToFISH: false,
    reflexToFISHIncomplete: false,
    MDSStandardFISH: { G: false, T: false },
    MDSExtendedFISH: { G: false, T: false },
    other: "",
    specimenHoldOption: false,
  });

  const handleCheckboxChange = (fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: !prevData[fieldName],
    }));
  };

  return (
    <div>
      <h3 className="heading_blue">Cytogenetics</h3>
      {[
        {
          label: "Oncology Chromosome Analysis",
          name: "oncologyChromosomeAnalysis",
        },
        {
          label:
            "Reflex to FISH if cytogenetics is normal (reflex FISH panel must be marked)",
          name: "reflexToFISH",
        },
        {
          label:
            "Reflex to FISH if cytogenetics is incomplete (<20 metaphases)",
          name: "reflexToFISHIncomplete",
        },

        { label: "G MDS Standard FISH", name: "MDSStandardFISH_G" },

        { label: "T MDS Standard FISH", name: "MDSStandardFISH_T" },
        { label: "G MDS Extended FISH", name: "MDSExtendedFISH_G" },
        { label: "T MDS Extended FISH", name: "MDSExtendedFISH_T" },
        { label: "Other:", name: "other" },
        {
          label:
            "Specimen Hold Option: Culture and Hold (liquid samples & lymph nodes; n/a for solid tissues)",
          name: "specimenHoldOption",
        },
      ].map((field, index) => (
        <div key={index} className="flex-container ">
          {field.name !== "other" ? (
            <Grid md={6}>
              <Item>
              <label className="form2_checkbox-label flex">
                <input
                  type="checkbox"
                  checked={data[field.name]}
                  onChange={() => handleCheckboxChange(field.name)}
                />
                {field.label}
              </label>
              </Item>
              
            </Grid>
          ) : (
            <div className="flex">
              {field.label}
              <input
                type="text"
                className="border-bottom"
                value={data.other}
                onChange={(e) => setData({ ...data, other: e.target.value })}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cytogenics;
