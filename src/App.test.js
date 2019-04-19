
import React from 'react';
    import { shallow, mount } from 'enzyme';
    import App from './App';
    import Counter from "./counter";

    // to match the  text //
    describe('App component', () => {
      it('To check the headline', () => {
        const wrapper = shallow(<App />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('first test message');
      });
    });


// // to match the  click counter //

describe('click on Increment button', ()=>{
  it('To check the click handle', () => {
    const wrapper = mount(<Counter />);
    const btnIncrement = wrapper.find('button.btnIncre');
    btnIncrement.simulate('click');
    //console.log(btnIncrement);
    const text = wrapper.find('p.para').text();
    //console.log(text);
   expect(text).toEqual('Count: 1');

  })
})