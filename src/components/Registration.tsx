import React from 'react';
import 'Registration.css'; // Create a CSS file for specific styles if needed

const Registration: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white flex items-center justify-center">
      <div className="container mx-auto p-6 bg-black/40 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Register for CogniHacks 2025</h1>
        <iframe
          src="https://form.jotform.com/jsform/251738591254059"
          title="CogniHacks Registration Form"
          width="100%"
          height="600px"
          frameBorder="0"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Registration;