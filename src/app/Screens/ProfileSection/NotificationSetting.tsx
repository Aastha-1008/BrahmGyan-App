import React, { useState } from 'react';

const NotificationSettings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: false,
    sms: false,
    push: false
  });

  const toggleNotification = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const NotificationToggle = ({ 
    label, 
    checked, 
    onToggle 
  }: { 
    label: string, 
    checked: boolean, 
    onToggle: () => void 
  }) => (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-4">
      <span className="text-black font-medium">{label}</span>
      <button 
        onClick={onToggle}
        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
          checked ? 'bg-black' : 'bg-gray-300'
        }`}
      >
        <span 
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4">
        <h1 className="text-2xl font-bold text-center">Notification Settings</h1>
      </header>

      {/* Notification Toggles */}
      <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden">
        <NotificationToggle
          label="Email Notifications"
          checked={notifications.email}
          onToggle={() => toggleNotification('email')}
        />
        <NotificationToggle
          label="SMS Notifications"
          checked={notifications.sms}
          onToggle={() => toggleNotification('sms')}
        />
        <NotificationToggle
          label="Push Notifications"
          checked={notifications.push}
          onToggle={() => toggleNotification('push')}
        />
      </div>

      {/* Footer Note */}
      <div className="max-w-md mx-auto mt-4 px-4">
        <p className="text-gray-600 text-sm text-center">
          You can enable or disable notifications as per your preference.
        </p>
      </div>
    </div>
  );
};

export default NotificationSettings;