import React, { useState } from "react";
// import "./CbcReport.css"; 

const CbcReport = () => {
  const [formData, setFormData] = useState({
    boneMarrow: {
      provideCBC: false,
      pathReport: false,
      greenTops: 0,
      purpleTops: 0,
      coreBiopsy: false,
      clot: false,
    },
    peripheralBlood: {
      greenTops: 0,
      purpleTops: 0,
      other: "",
    },
    freshTissue: {
      mediaType: "",
    },
    fluid: {
      csf: false,
      pleural: false,
      other: "",
    },
    fnaCellBlock: "",
    smears: {
      airDried: false,
      fixed: false,
      stained: "",
      typeOfStain: "",
    },
    slides: {
      number: 0,
      unstained: false,
      stained: false,
      type: "",
    },
    paraffinBlocks: "",
    bestBlock: {
      forGlobalMolecularTesting: false,
      submitBlocks: 0,
      combineBlocks: false,
      specifyBlocks: "",
    },
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData };

      // Handle nested fields
      if (name.includes(".")) {
        const [parentField, childField] = name.split(".");
        updatedData[parentField][childField] =
          type === "checkbox" ? checked : value;
      } else {
        updatedData[name] = type === "checkbox" ? checked : value;
      }

      return updatedData;
    });
  };

  return (
    <div className="your-form">
      <div className="form-section">
        <label>
          <input
            type="checkbox"
            name="boneMarrow.provideCBC"
            checked={formData.boneMarrow.provideCBC}
            onChange={handleChange}
          />
          Bone Marrow [must provide CBC and Path Report]:
        </label>
        <div>
          <label>Green Top(s):</label>
          <input
            type="text"
            name="boneMarrow.greenTops"
            value={formData.boneMarrow.greenTops}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Purple Top(s):</label>
          <input
            type="text"
            name="boneMarrow.purpleTops"
            value={formData.boneMarrow.purpleTops}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Core Biopsy:</label>
          <input
            type="checkbox"
            name="boneMarrow.coreBiopsy"
            checked={formData.boneMarrow.coreBiopsy}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Clot:</label>
          <input
            type="checkbox"
            name="boneMarrow.clot"
            checked={formData.boneMarrow.clot}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Add similar structures for other sections of the form */}

      <div className="form-section">
        <label>Comments:</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default CbcReport;
