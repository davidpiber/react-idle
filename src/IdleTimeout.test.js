import React from 'react';
import ReactDOM from 'react-dom';
import IdleTimeout from './IdleTimeout';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('IdleTimeout', () => {
    const testFunction = () => console.log('onTimeout function.');
    const idleTimeout = shallow(<IdleTimeout 
        timeout={5000}
        onTimeout= {testFunction}
        events= {['mousedown','keydown']}
        elementId={'root'} />);
    
    it('Should render a empty component', () => {
        expect(idleTimeout.text()).toEqual('');
    });
});
