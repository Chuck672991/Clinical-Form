export const consultation = [
    {
      label: " <h4> COMPASS® </h4> <p> Comprehensive evaluation including morphology </p> ",
      fields: [
        {
          label: "Blood and/or Bone Marrow",
          checkboxes: [
            { label: "Paraffin block for Morphology to follow", checked: false },
          ],
        },
      ],
    },
    {
      label: "<h4> COMPASS® Select </h4> <p> (Without morphology) </p> ",
      fields: [
        {
          label: "Blood and/or Bone Marrow – Morphology performed by client",
          description: '<h5>Morphology report required. Please fax to avoid testing delays.</h5>',
          checked: false,
        },
      ],
    },
    {
      label: "<h4> Lymphoma Consult</h4>",
      fields: [
        {
          label: "Lymph Node/Tissue for Lymphoma*  ",
          description: "<p> *Split fresh specimens to RPMI and formalin</p>",
          checkboxes: [
            { label: "<p>Paraffin block for Morphology to follow </p>", checked: false },
          ],
        },
      ],
    },
  ];
 
  export const consultationDataTwo = [
    {
      description:"A NeoGenomics pathologist will select medically <br/> necessarytests (with any exceptions noted or marked by the client) to <br/> provide comprehensive analysis  and professionalinterpretation for the <br/> materials submitted."
        },
        {
          description:"Please attach CBC for Blood and Bone Marrow"
        },
        {
          
          checkboxes: [
            { label: "Do not add NGS Profile without prior approval", checked: false },
          ],
        },
      
  ];
  
  
  // export const cytogeneticsData = {
  //   oncologyChromosomeAnalysis: false,
  //   reflexToFISH: false,
  //   reflexToFISHIncomplete: false,
  //   MDSStandardFISH: {
  //     G: false,
  //     T: false
  //   },
  //   MDSExtendedFISH: {
  //     G: false,
  //     T: false
  //   },
  //   other: '',
  //   specimenHoldOption: false
  // };