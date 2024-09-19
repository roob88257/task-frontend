
'use client';

import React, { useState, useEffect } from 'react';

const StatusCheck = ({ children }) => {
  const [serviceStatus, setServiceStatus] = useState('up');

  useEffect(() => {
    const checkServiceStatus = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/status');
        const data = await response.json();
        setServiceStatus(data.status);
      } catch (error) {
        console.error('Error checking service status:', error);
        setServiceStatus('down');
      }
    };

    checkServiceStatus();
  }, []);

  if (serviceStatus === 'down') {
    return (
      <div className="bg-[#3D2B24] text-white font-sans h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Site Under Maintenance</h1>
          <p className="text-xl">We'll be back soon. Thank you for your patience!</p>
        </div>
      </div>
    );
  }

  return children;
};

export default StatusCheck;