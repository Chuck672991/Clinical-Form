import React, { useState } from "react";
import parse from "html-react-parser";

import { consultation, consultationDataTwo } from "../../Data";

const Consultation = () => {
  const [formData, setFormData] = useState(consultation);
  const [formDataTwo, setFormDataTwo] = useState(consultationDataTwo);
  const handleCheckboxChangeTwo = (index) => {
    setFormDataTwo((prevFormData) => {
      const updatedFormDataTwo = [...prevFormData];
      updatedFormDataTwo[index] = {
        ...updatedFormDataTwo[index],  
        checkboxes: [
          {
            ...updatedFormDataTwo[index].checkboxes[0],
            checked: !updatedFormDataTwo[index].checkboxes[0].checked,
          },
        ],
      };
      return updatedFormDataTwo;
    });
  };


  const handleCheckboxChange = (sectionIndex, fieldIndex) => {
    const updatedFormData = [...formData];
    updatedFormData[sectionIndex].fields[fieldIndex].checked =
      !updatedFormData[sectionIndex].fields[fieldIndex].checked;
    setFormData(updatedFormData);
  };

  const handleNestedCheckboxChange = (
    sectionIndex,
    fieldIndex,
    checkboxIndex
  ) => {
    const updatedFormData = [...formData];
    updatedFormData[sectionIndex].fields[fieldIndex].checkboxes[
      checkboxIndex
    ].checked =
      !updatedFormData[sectionIndex].fields[fieldIndex].checkboxes[
        checkboxIndex
      ].checked;
    setFormData(updatedFormData);
  };

  return (
    <>
      <div className="flex">
        <div>
          <h3 className="heading_blue">Consultation</h3>
          {formData.map((section, index) => (
            <div key={index} className="flex-container">
              <div className="flex heading">{parse(section.label)}</div>
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <label className="form2_checkbox-label flex">
                    <input
                      type="checkbox"
                      checked={field.checked}
                      onChange={() => handleCheckboxChange(index, fieldIndex)}
                    />
                    {field.label}
                  </label>
                  {field.description && (
                    <p className="description red">
                      {parse(field.description)}
                    </p>
                  )}
                  {field.checkboxes && (
                    <div className="nested-checkbox-group">
                      {field.checkboxes.map((checkbox, checkboxIndex) => (
                        <label
                          className="nested-checkbox-label flex"
                          key={checkboxIndex}
                        >
                          <input
                            type="checkbox"
                            checked={checkbox.checked}
                            onChange={() =>
                              handleNestedCheckboxChange(
                                index,
                                fieldIndex,
                                checkboxIndex
                              )
                            }
                          />
                          {parse(checkbox.label)}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="custom-separator"></div>;

        <div >
        {consultationDataTwo.map((item, index) => (
  <div key={index} className="flex-container">
    {item.label && (
      <div className="flex heading">{parse(item.label)}</div>
    )}
    <div>
      {item.description && (
        <p className="description red">{parse(item.description)}</p>
      )}
      {item.checkboxes && (
        <label className="form2_checkbox-label flex">
          <input
            type="checkbox"
            checked={item.checkboxes[0].checked}
            onChange={() => handleCheckboxChangeTwo(index)}
          />
          {parse(item.checkboxes[0].label)}
        </label>
      )}
    </div>
  </div>
))}

        </div>
      </div>
    </>
  );
};

export default Consultation;
