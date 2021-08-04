# screen-wake-lock.js

React library to prevent device from entering sleep mode when app is in active tab.

## Installation

```bash
# Install using npm
npm install screen-wake-lock
```

```bash
# Install using yarn
yarn add screen-wake-lock
```

## Usage

### Prevent device from entering sleep app-wide using ScreenWakeLock component

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import ScreenWakeLock from 'screen-wake-lock';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ScreenWakeLock />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

### Prevent device from entering sleep mode when a specific component is rendered using ScreenWakeLock component

```typescript
import React from 'react';
import ScreenWakeLock from 'screen-wake-lock';

const SpecificComponent = () => {
  return (
    <>
      <ScreenWakeLock />
      <div>Sleepless in Seattle</div>
    </>
  );
};

export default SpecificComponent;
```

### Prevent device from entering sleep mode when a specific component is rendered using useScreenWakeLock hook

```typescript
import React from 'react';
import { useScreenWakeLock } from 'screen-wake-lock';

const SpecificComponent = () => {
  useScreenWakeLock();
  return <div>Sleepless in Seattle</div>;
};

export default SpecificComponent;
```

### Use useScreenWakeLock in debug mode

`useScreenWakeLock` takes an optional parameter `debug`. When passed `true` it will print the status of the wake lock to the console whenever it gets locked or released. for instance when navigating away from the browser tab where the app is running and back. This can be a convenient way to test that the hook is working.

```typescript
import React from 'react';
import { useScreenWakeLock } from 'screen-wake-lock';

const SpecificComponent = () => {
  useScreenWakeLock(true);
  return <div>Sleepless in Seattle</div>;
};

export default SpecificComponent;

// Screen Wake Lock released: true
// Screen Wake Lock released: false
```

## For contributors

### Publishing a new version

Check that linting, formatting, build and tests pass

```bash
npm run lint
npm run format
npm run build
npm test
```

Bump version

```bash
npm version [major | minor | patch]
```

Publish to NPM

```bash
npm publish
```
