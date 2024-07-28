import React, { useEffect } from 'react';

const RequestNotificationPermission = () => {
  useEffect(() => {
    const requestPermission = async () => {
      if ('Notification' in window && navigator.serviceWorker) {
        const status = await Notification.requestPermission();
        console.log('Notification permission status:', status);
      }
    };

    requestPermission();
  }, []);

  return null;
};

export default RequestNotificationPermission;
