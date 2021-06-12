import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';


let component;
beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
})

describe('the comment box', () => {
  it('contains a textarea and a button', () => {
    expect(component.find('button').length).toEqual(1);
    expect(component.find('textarea').length).toEqual(1);
  });
  
  it('has a textarea that accepts user input', () => {
    component.find('textarea').simulate('change', {
      target: {value: "burritos"}
    });
    component.update();

    expect(component.find('textarea').prop('value')).toEqual('burritos');
  });
})
