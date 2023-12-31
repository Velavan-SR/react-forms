import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

function Form() {

  const [successMessage, setSuccessMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contacts: '',
    },
    
    
    validationSchema: Yup.object({
      firstName: Yup.string().required('Please provide your first name!'),
      lastName: Yup.string().required('Please provide your last name'),
      email: Yup.string().email('Please enter a valid email').required('Email address is required'),
      contacts: Yup.string().required('Please enter your contact information'),
    }),
    
    
    onSubmit: (values) => {
      setSuccessMessage('Registration successful!');
      console.log(values);
    },
  
  });

  return (
    
    <div className='all'>
      
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <form onSubmit={formik.handleSubmit}>
        
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error-message">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div>
          
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error-message">{formik.errors.lastName}</div>
          ) : null}
        
        </div>

        <div>
          
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}
        
        </div>

        <div>
          
          <label htmlFor="contacts">Contacts:</label>
          <input
            type="text"
            id="contacts"
            name="contacts"
            onChange={formik.handleChange}
            value={formik.values.contacts}
          />
          
          {formik.touched.contacts && formik.errors.contacts ? (
            <div className="error-message">{formik.errors.contacts}</div>
          ) : null}
        
        </div>
        
        <button type="submit" className="register-button"> Register </button>
      
      </form>
    
    </div>
  );
}

export default Form;
