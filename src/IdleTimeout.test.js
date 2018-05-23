import React from 'react';
import ReactDOM from 'react-dom';
import IdleTimeout from './IdleTimeout';

it('renders IdleTimeout without crashing', () => {
  const div = document.createElement('div');
  const testFunction = () => console.log('called IdleTimeout function');
  ReactDOM.render(<IdleTimeout 
    timeout={5000}
    onTimeout= {testFunction}
    events= {['mousedown','keydown']}
    elementId={'root'} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
