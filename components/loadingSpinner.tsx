// components/loadingSpinner.tsx
import React from 'react';
import './loadingSpinner.css'; // Ensure you have this CSS file for styling

const LoadingSpinner = () => (
  <div className="loading-overlay">
    <div className="spinner"></div>
  </div>
);

export default LoadingSpinner;
