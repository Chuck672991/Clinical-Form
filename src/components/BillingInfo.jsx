import React, { useState } from "react";
import "./BillingInfo.css";
const BillingInfo = () => {
  const [formData, setFormData] = useState({
    patientStatus: "",
    billTo: [],
    splitBilling: false,
    opMolecularToMCRallOtherTestingToClient: false,
    billChargesTo: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === "checkbox") {
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            [name]: [...prevData[name], value],
          };
        } else {
          return {
            ...prevData,
            [name]: prevData[name].filter((item) => item !== value),
          };
        }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  return (
    <div className="forms">
      <header>Billing Information</header>
      <p className="red m-left">
        Required: Please include face sheet and front/back of patient's
        insurance card.
      </p>

      <div className="client-form forms">
        <div className="form-section flex">
          <label className="patient-status-label">
            Patient Status(Must Choose 1):
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="patientStatus"
                value="Hospital Patient (in)"
                checked={formData.patientStatus === "Hospital Patient (in)"}
                onChange={handleChange}
              />
              Hospital Patient (in)
            </label>

            <label>
              <input
                type="radio"
                name="patientStatus"
                value="Hospital Patient (out)"
                checked={formData.patientStatus === "Hospital Patient (out)"}
                onChange={handleChange}
              />
              Hospital Patient (out)
            </label>
            <label>
              <input
                type="radio"
                name="patientStatus"
                value="Non-Hospital Patient"
                checked={formData.patientStatus === "Non-Hospital Patient"}
                onChange={handleChange}
              />
              Non-Hospital Patient
            </label>
          </div>
        </div>

        <div className="form-section flex">
          <div className="checkbox-label">Bill to:</div>

          <div className="checkbox-group">
            <label>
              <input
                 type="checkbox"
                 name="billTo"
                 value="Client Bill"
                 checked={formData.billTo.includes("Client Bill")}
                 onChange={handleChange}
              />
              Client Bill
            </label>
            <label>
              <input
                type="checkbox"
                name="billTo"
                value="Insurance"
                checked={formData.billTo.includes("Insurance")}
                onChange={handleChange}
              />
              Insurance
            </label>
            <label>
              <input
                type="checkbox"
                name="billTo"
                value="Medicare"
                checked={formData.billTo.includes("Medicare")}
                onChange={handleChange}
              />
              Medicare
            </label>
            <label>
              <input
                type="checkbox"
                name="billTo"
                value="Medicaid"
                checked={formData.billTo.includes("Medicaid")}
                onChange={handleChange}
              />
              Medicaid
            </label>
            <label>
              <input
                type="checkbox"
                name="billTo"
                value="Patient/Self-Pay"
                checked={formData.billTo.includes("Patient/Self-Pay")}
                onChange={handleChange}
              />
              Patient/Self-Pay
            </label>
          </div>
        </div>

        <div className="form-section checkbox-group  flex">
          <label>
            <input
              type="checkbox"
              name="splitBilling"
              checked={formData.splitBilling}
              onChange={handleChange}
            />
            Split Billing - Client (TC) and Insurance (PC)
          </label>
          <label>
            <input
              type="checkbox"
              name="opMolecularToMCRallOtherTestingToClient"
              checked={formData.opMolecularToMCRallOtherTestingToClient}
              onChange={handleChange}
            />
            OP Molecular to MCR All other testing to client
          </label>
        </div>

        <div className="form-section checkbox-group  flex ">
          <label>Bill charges to other Hospital/Facility:</label>
          <input
            type="text"
            className="border-bottom"
            name="billChargesTo"
            value={formData.billChargesTo}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
