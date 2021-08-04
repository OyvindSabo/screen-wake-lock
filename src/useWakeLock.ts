import { useState } from 'react';
import useOnce from './useOnce';

const getWakeLockSentinel = async (debug?: boolean) => {
  try {
    const wakeLockSentinel = await navigator.wakeLock.request('screen');
    if (debug) {
      wakeLockSentinel.addEventListener('release', () => {
        // tslint:disable-next-line:no-console
        console.log('Screen Wake Lock released:', wakeLockSentinel.released);
      });
      // tslint:disable-next-line:no-console
      console.log('Screen Wake Lock released:', wakeLockSentinel.released);
    }
    return wakeLockSentinel;
  } catch (err) {
    if (debug) {
      // tslint:disable-next-line:no-console
      console.error(`${err.name}, ${err.message}`);
    }
    return null;
  }
};

const useWakeLock = (debug?: boolean) => {
  const [
    wakeLockSentinel,
    setWakeLockSentinel,
  ] = useState<WakeLockSentinel | null>(null);

  const handleVisibilityChange = () => {
    if (document.visibilityState !== 'visible') return;
    getWakeLockSentinel(debug).then(setWakeLockSentinel);
  };

  useOnce(() => {
    getWakeLockSentinel().then(setWakeLockSentinel);
    return () => {
      wakeLockSentinel?.release();
    };
  });

  useOnce(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  });
};

export default useWakeLock;
