import Footer from '@/components/Footer';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <><div className="p-6 md:p-12 bg-black  lg:ml-28 lg:mr-28   text-white text-justify mt-28">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Privacy & Policy</h1>
      <p className="mb-4">
        Welcome to our Privacy & Policy page. Your privacy and the security of your personal information are of utmost
        importance to us. Below is an overview of our policies to ensure transparency and trust.
      </p>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Customization & Personalization</h2>
        <p>
          As mentioned in our introduction, one of the strengths of our platform is the ability to customize your
          experience. From layout design to content preferences, everything can be tailored to create a unique,
          user-centric environment. We ensure that all customizations respect your privacy and data protection.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Data Collection & Usage</h2>
        <p className="mb-2">We collect only the necessary data to provide a seamless user experience. Examples include:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>User Preferences:</strong> To ensure you are not stuck with generic profiles.
          </li>
          <li>
            <strong>Activity Tracking:</strong> To enhance the layout and design for a personalized touch.
          </li>
          <li>
            <strong>Optional Inputs:</strong> You may provide additional details for improved customization.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Commitment to Security</h2>
        <p>
          We employ the latest security measures to safeguard your information. These include secure data storage,
          encrypted communications, and strict access controls.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">User Rights</h2>
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Access:</strong> Request details of the data we collect.
          </li>
          <li>
            <strong>Customize:</strong> Adjust your settings for layout and design preferences.
          </li>
          <li>
            <strong>Erase:</strong> Request deletion of personal data from our system.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Content Policy</h2>
        <p>
          We value the integrity and quality of the information on our platform. Your interactions, including posts and
          customizations, align with our goal of fostering a positive environment.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Additional Information</h2>
        <p>
          For any concerns or questions, please contact our support team. We are committed to ensuring your privacy is
          respected and maintained.
        </p>
      </section>
    </div><Footer /></>
  );
};

export default PrivacyPolicyPage;
