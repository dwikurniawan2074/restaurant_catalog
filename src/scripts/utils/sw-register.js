// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  // if ('serviceWorker' in navigator) {
  //   await runtime.register();
  //   return;
  // }
  // console.log('Service worker not supported in this browser');
  // navigator.serviceWorker.register('./sw.bundle.js');
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }
 
  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};
export default swRegister;