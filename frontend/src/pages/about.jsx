import React from 'react';
import './about.css'; // Adjust the path as necessary

const about = () => {
  return (
    <div className="parent-container">
      <section className="about">
        <h2>About ShopEase</h2>
        <p>
          Welcome to <strong>ShopEase</strong>, your one-stop destination for all your shopping needs! Founded with a passion for bringing quality products to our customers at competitive prices, we aim to make online shopping a seamless and enjoyable experience.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower consumers with the best shopping experience by offering a diverse selection of products, exceptional customer service, and a user-friendly interface. We strive to build lasting relationships with our customers, ensuring that they feel valued and appreciated every time they shop with us.
        </p>
        <h3>What We Offer</h3>
        <ul>
          <li><strong>Wide Selection:</strong> Browse through our extensive catalog of products across various categories, ensuring that you find exactly what you’re looking for.</li>
          <li><strong>Competitive Pricing:</strong> Enjoy affordable prices without compromising on quality. We believe that everyone should have access to great products at reasonable prices.</li>
          <li><strong>Easy Navigation:</strong> Our website is designed for simplicity and ease of use, allowing you to find products quickly and effortlessly.</li>
          <li><strong>Secure Shopping:</strong> Shop with confidence knowing that your personal and payment information is protected through our secure checkout process.</li>
          <li><strong>Customer Support:</strong> Our dedicated customer support team is here to assist you with any questions or concerns, ensuring a smooth shopping experience.</li>
        </ul>
        <h3>Join Us</h3>
        <p>
          As we continue to grow and evolve, we invite you to join us on this journey. Whether you’re looking for the latest fashion trends or essential home products, ShopEase is here to serve you. Thank you for choosing us as your preferred shopping partner. Together, let’s redefine the online shopping experience!
        </p>
      </section>
    </div>
  );
};

export default about;
