import { useEffect } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
const useOnce = (effect: React.EffectCallback) => useEffect(effect, []);

export default useOnce;
