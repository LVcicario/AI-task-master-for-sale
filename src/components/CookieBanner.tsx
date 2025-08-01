import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Shield, Settings } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <Shield className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">We respect your privacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                By clicking "Accept All", you consent to our use of cookies. 
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-blue-600 hover:text-blue-700 underline ml-1"
                >
                  Learn more
                </button>
              </p>
            </div>
          </div>
          <button 
            onClick={rejectAll}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {showDetails && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg text-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Cookie Categories:</h4>
            <div className="space-y-2">
              <div>
                <strong>Necessary Cookies:</strong> Essential for website functionality (always active)
              </div>
              <div>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </div>
              <div>
                <strong>Marketing Cookies:</strong> Used to deliver personalized advertisements
              </div>
            </div>
            <p className="mt-3 text-gray-600">
              For more information, please read our{' '}
              <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/cookie-policy" className="text-blue-600 hover:text-blue-700 underline">
                Cookie Policy
              </Link>
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={acceptAll}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Accept All Cookies
          </button>
          <button
            onClick={acceptNecessary}
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Necessary Only
          </button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center text-gray-600 hover:text-gray-800 px-3 py-2 transition-colors"
          >
            <Settings className="w-4 h-4 mr-2" />
            Customize
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;