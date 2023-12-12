import React,{useState} from "react";

import "./Form.css";
import html2pdf from "html2pdf.js";

const Form = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    accountName: "",
    streetAddress: "",
    city: "",
    phone: "",
    fax: "",
    additionalFax: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
   
  const handleDownloadPDF = () => {
    const content = document.getElementById("pdf-content");
  
    html2pdf(content, {
      margin: 10,
      filename: "formData.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };
 

  return (
    <>
    <div className="form_main" id="pdf-content">
      <div className="forms" >
        <header>Client Information</header>

        <div className="client-form">
          <div className="required-information">
            <p className="red">Required Information</p>
            <div className="flex">
              <div className="half">
                <div className="form-row">
                  <label htmlFor="accountNumber">Account#:</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
              <div className="half">
                <div className="form-row">
                  <label htmlFor="accountName"> Account Name:</label>
                  <input
                    type="text"
                    id="accountName"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="streetAddress">Street Address:</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>

            <div className="form-row">
              <label htmlFor="city">City, ST, ZIP:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>
            <div className="flex">
              <div className="half">
                <div className="form-row">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
              <div className="half">
                <div className="form-row">
                  <label htmlFor="fax">Fax:</label>
                  <input
                    type="text"
                    id="fax"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                    className=" border-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="additionalFax">Additional Reporting Fax:</label>
              <input
                type="text"
                id="additionalFax"
                name="additionalFax"
                value={formData.additionalFax}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>
          </div>
      
        </div>

      </div>
    
      <div className="forms" >
        <header>Client Information</header>

        <div className="client-form">
          <div className="required-information">
            <p className="red">Required Information</p>
            <div className="flex">
              <div className="half">
                <div className="form-row">
                  <label htmlFor="accountNumber">Account#:</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
              <div className="half">
                <div className="form-row">
                  <label htmlFor="accountName"> Account Name:</label>
                  <input
                    type="text"
                    id="accountName"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="streetAddress">Street Address:</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>

            <div className="form-row">
              <label htmlFor="city">City, ST, ZIP:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>
            <div className="flex">
              <div className="half">
                <div className="form-row">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
              <div className="half">
                <div className="form-row">
                  <label htmlFor="fax">Fax:</label>
                  <input
                    type="text"
                    id="fax"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                    className=" border-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="additionalFax">Additional Reporting Fax:</label>
              <input
                type="text"
                id="additionalFax"
                name="additionalFax"
                value={formData.additionalFax}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>
          </div>
      
        </div>

      </div>
      <div className="forms" >
        <header>Client Information</header>

        <div className="client-form">
          <div className="required-information">
            <p className="red">Required Information</p>
            <div className="flex">
              <div className="half">
                <div className="form-row">
                  <label htmlFor="accountNumber">Account#:</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
              <div className="half">
                <div className="form-row">
                  <label htmlFor="accountName"> Account Name:</label>
                  <input
                    type="text"
                    id="accountName"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="streetAddress">Street Address:</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>

            <div className="form-row">
              <label htmlFor="city">City, ST, ZIP:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>
            <div className="flex">
              <div className="half">
                <div className="form-row">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
              <div className="half">
                <div className="form-row">
                  <label htmlFor="fax">Fax:</label>
                  <input
                    type="text"
                    id="fax"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                    className=" border-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="additionalFax">Additional Reporting Fax:</label>
              <input
                type="text"
                id="additionalFax"
                name="additionalFax"
                value={formData.additionalFax}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>
          </div>
      
        </div>

      </div>
      <div className="forms" >
        <header>Client Information</header>

        <div className="client-form">
          <div className="required-information">
            <p className="red">Required Information</p>
            <div className="flex">
              <div className="half">
                <div className="form-row">
                  <label htmlFor="accountNumber">Account#:</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
              <div className="half">
                <div className="form-row">
                  <label htmlFor="accountName"> Account Name:</label>
                  <input
                    type="text"
                    id="accountName"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="streetAddress">Street Address:</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>

            <div className="form-row">
              <label htmlFor="city">City, ST, ZIP:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>
            <div className="flex">
              <div className="half">
                <div className="form-row">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-bottom"
                  />
                </div>
              </div>
              <div className="half">
                <div className="form-row">
                  <label htmlFor="fax">Fax:</label>
                  <input
                    type="text"
                    id="fax"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                    className=" border-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="additionalFax">Additional Reporting Fax:</label>
              <input
                type="text"
                id="additionalFax"
                name="additionalFax"
                value={formData.additionalFax}
                onChange={handleChange}
                className="border-bottom"
              />
            </div>
          </div>
      
        </div>

      </div>



      <div className="column_right"></div>

    </div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
      </>

  )
}

  
export default Form;
  
