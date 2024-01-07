import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title="About us - Ecommerce app">
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/AboutUs.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">About US</h1>
          <p className="text-justify mt-2">
            Discover a seamless online shopping experience at [Your Ecommerce Website Name]. We 
            curate a wide selection of high-quality products, ensuring you find exactly what you're 
            looking for. Our dedicated team is here to assist you every step of the way, providing 
            exceptional service and support. Enjoy secure payments, fast shipping, and hassle-free 
            returns. Start exploring our collection today and redefine your online shopping experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
