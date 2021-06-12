import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from "react-dom/test-utils";
import App from '../App'


test('displays a comment box', () => {
  const commentBox = renderer.create(<App />)
});
