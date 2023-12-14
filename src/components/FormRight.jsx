import React from 'react'
import { useState } from 'react';

const FormRight = () => {
    const [formData, setFormData] = useState({
        requisitionCompletedBy: "",
        requisitionDate: "",
        orderingPhysicianLastFirst: "",
        orderingPhysicianNPI: "",
        treatingPhysicianLastFirst: "",
        treatingPhysicianNPI: "",
        authorizedSignature: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
  return (
    <div className="client-form forms" >
    <div className="flex">
      <div className="form-row half">
        <label htmlFor="requisitionCompletedBy">
          Requisition Completed by:
        </label>
        <input
          className="border-bottom"
          type="text"
          id="requisitionCompletedBy"
          name="requisitionCompletedBy"
          value={formData.requisitionCompletedBy}
          onChange={handleChange}
        />
      </div>
      <div className="form-row half">
        <label htmlFor="requisitionDate">Date:</label>
        <input
          className="border-bottom"
          type="text"
          id="requisitionDate"
          name="requisitionDate"
          value={formData.requisitionDate}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="flex">
      <div className="form-row half">
        <label htmlFor="orderingPhysicianLastFirst"  className="bold">
          Ordering<br/> Physician <br/>(Last, First):
        </label>
        <input
          className="border-bottom light "
          type="text"
          
          id="orderingPhysicianLastFirst"
          name="orderingPhysicianLastFirst"
          value={formData.orderingPhysicianLastFirst}
          onChange={handleChange}
        />
      </div>
      <div className="form-row half">
        <label htmlFor="orderingPhysicianNPI" className="bold">
          NPI #:
        </label>
        <input
          className="border-bottom light"
          type="text"
          id="orderingPhysicianNPI"
          name="orderingPhysicianNPI"
          value={formData.orderingPhysicianNPI}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="flex">
      <div className="form-row half">
        <label htmlFor="treatingPhysicianLastFirst">
          Treating Physician (Last, First):
        </label>
        <input
          className="border-bottom "
          type="text"
          id="treatingPhysicianLastFirst"
          name="treatingPhysicianLastFirst"
          value={formData.treatingPhysicianLastFirst}
          onChange={handleChange}
        />
      </div>
      <div className="form-row half">
        <label htmlFor="treatingPhysicianNPI">NPI #:</label>
        <input
          className="border-bottom light"
          type="text"
          id="treatingPhysicianNPI"
          name="treatingPhysicianNPI"
          value={formData.treatingPhysicianNPI}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="form-row">
      <p>
        By completing this section, the undersigned certifies that he/she is
        licensed to order the test(s) listed below and that such test(s) are
        medically necessary for the care/treatment of this patient.
      </p>
    </div>
    <div className="flex">
      <div className="form-row half">
        <label htmlFor="authorizedSignature" className="bold">
          Authorized Signature:
        </label>
        <input
          className="border-bottom light"
          type="text"
          id="authorizedSignature"
          name="authorizedSignature"
          value={formData.authorizedSignature}
          onChange={handleChange}
        />
      </div>
      <div className="form-row half">
        <label htmlFor="requisitionDate">Date:</label>
        <input
          className="border-bottom"
          type="text"
          id="requisitionDate2"
          name="requisitionDate"
          value={formData.requisitionDate}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
  )
}

export default FormRight