import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill();

// Add error handling
const root = ReactDOM.createRoot(document.getElementById('root'));

try {
  console.log('Starting application...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('Application rendered successfully');
} catch (error) {
  console.error('Error rendering application:', error);
  root.render(
    <div className="bg-primary w-full h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Application Error</h1>
        <p className="text-gray-300">{error.message}</p>
      </div>
    </div>
  );
}
