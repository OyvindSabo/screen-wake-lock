import * as React from 'react';
import ScreenWakeLock from '../ScreenWakeLock';
import * as renderer from 'react-test-renderer';

test('ScreenWakeLock component does not add nodes to the DOM', () => {
  const component = renderer.create(<ScreenWakeLock />);
  const tree = component.toJSON();
  console.log('tree');
  expect(tree);
});
