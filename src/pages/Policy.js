import React,{useState} from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <Layout title="Privacy Policy - Ecommerce app">
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="images/Policy.jpeg"
           
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">About Us</h1>
          <p className="text-justify mt-2">
            Protecting your privacy is of utmost importance to us at [Your Ecommerce Website Name]. We are committed to safeguarding the personal information you provide while using our website. Our Privacy Policy outlines how we collect, use, and protect your data.
            {showMore ? (
              <>
                We collect only necessary information to process your orders and improve your shopping experience. Rest assured, we do not sell or share your personal information with third parties without your consent.
                <br /><br />
                We utilize industry-standard security measures to ensure the safety of your data. Our website is encrypted to protect your sensitive information, such as credit card details. We also employ strict internal protocols to restrict unauthorized access.
                <br /><br />
                Your privacy rights are respected, and you have control over your personal information. You can access, update, or delete your data by contacting our support team. We adhere to applicable data protection laws and regulations to maintain the privacy and confidentiality of your information.
                <br /><br />
                By using our website, you consent to our Privacy Policy. We recommend reviewing it periodically for any updates. Your trust is important to us, and we are committed to maintaining the highest standards of privacy and data protection.
                <br /><br />
                If you have any questions or concerns regarding our Privacy Policy, please contact our dedicated support team. Thank you for choosing [Your Ecommerce Website Name]. Your privacy is our priority.
              </>
            ) : (
              <>
                We collect only necessary information to process your orders and improve your shopping experience. Rest assured, <span id="dots">...</span>
              </>
            )}
          </p>
          <button onClick={toggleText} id="myBtn">
            {showMore ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </Layout>
  );
};



export default Policy;