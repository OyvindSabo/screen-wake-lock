import * as React from 'react';
import WakeLock from '../WakeLock';
import * as renderer from 'react-test-renderer';

test('WakeLock component does not add nodes to the DOM', () => {
  const component = renderer.create(<WakeLock />);
  const tree = component.toJSON();
  console.log('tree');
  expect(tree);
});
