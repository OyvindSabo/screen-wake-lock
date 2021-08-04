# insomniac.js

React library to prevent device from entering sleep mode when app is in active tab.

## Installation

```bash
# Install using npm
npm install insomniac
```

```bash
# Install using yarn
yarn add insomniac
```

## Usage

### Prevent device from entering sleep app-wide using WakeLock component

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import WakeLock from 'insomniac';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <WakeLock />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

### Prevent device from entering sleep mode when a specific component is rendered using WakeLock component

```typescript
import React from 'react';
import WakeLock from 'insomniac';

const SpecificComponent = () => {
  return (
    <>
      <WakeLock />
      <div>Sleepless in Seattle</div>
    </>
  );
};

export default SpecificComponent;
```

### Prevent device from entering sleep mode when a specific component is rendered using useWakeLock hook

```typescript
import React from 'react';
import { useWakeLock } from 'insomniac';

const SpecificComponent = () => {
  useWakeLock();
  return <div>Sleepless in Seattle</div>;
};

export default SpecificComponent;
```

### Use useWakeLock in debug mode

`useWakeLock` takes an optional parameter `debug`. When passed `true` it will print the status of the wake lock to the console whenever it gets locked or released. for instance when navigating away from the browser tab where the app is running and back. This can be a convenient way to test that the hook is working.

```typescript
import React from 'react';
import { useWakeLock } from 'insomniac';

const SpecificComponent = () => {
  useWakeLock(true);
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
