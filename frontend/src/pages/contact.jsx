import React, { useState } from 'react';
import './contact.css'; // Adjust the path as necessary

const Contact = () => {
  

  return (
    <div className="parent-container">
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p><strong>Phone Number:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
    </section>
  </div>
  );
};

export default Contact;
