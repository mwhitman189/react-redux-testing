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

it('contains a textarea and a button', () => {
  expect(component.find('button').length).toEqual(1);
  expect(component.find('textarea').length).toEqual(1);
});
  
describe('the comment box textarea', () => {
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: {value: "burritos"}
    });
    component.update();
  });

  it('accepts user input', () => {
    expect(component.find('textarea').prop('value')).toEqual("burritos");
  });

  it('is cleared when the form is submitted', () => {
    expect(component.find('textarea').prop('value')).toEqual("burritos");

    component.find('form').simulate('submit');
    component.update();

    expect(component.find('textarea').prop('value')).toEqual("");
  });
})
