import React from 'react';
import './service.css'; // Adjust the path as necessary

const service = () => {
  return (
    <div className="parent-container">
      <section className="services">
        <h2>Our Services</h2>
        <p>
          At ShopEase, we provide a variety of services to enhance your shopping experience:
        </p>
        <ul>
          <li>
            <strong>Product Delivery:</strong> Fast and reliable delivery services to ensure your products arrive on time.
          </li>
          <li>
            <strong>Customer Support:</strong> Dedicated support team available to assist you with inquiries and issues.
          </li>
          <li>
            <strong>Easy Returns:</strong> Hassle-free return policy to make your shopping experience worry-free.
          </li>
          <li>
            <strong>Gift Wrapping:</strong> Optional gift wrapping services for special occasions.
          </li>
          <li>
            <strong>Loyalty Programs:</strong> Exclusive deals and discounts for our loyal customers.
          </li>
        </ul>
        <p>
          We are committed to providing exceptional services that cater to your needs and enhance your shopping experience.
        </p>
      </section>
    </div>
  );
};

export default service;
