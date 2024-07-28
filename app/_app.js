import React from 'react';
import App from 'next/app';
import usePushSubscription from '@/hooks/usePushSubscription';
import RequestNotificationPermission from '@/components/RequestNotificationPermission';

const PUBLIC_VAPID_KEY = 'BAshMW87Lf3O9k6EykwMCoBlKbCgfyVcADbldWUb28g2YJpcvDxDOwBeE8p9gHxh8gELiv12MG7lx6Xnlq1NX7c';

const MyApp = (props) =>{
    const {Component, pageProps} = props;
    usePushSubscription(PUBLIC_VAPID_KEY);
    return <>
    <RequestNotificationPermission />
    <Component {...pageProps} />
  </>
}
export default MyApp;
