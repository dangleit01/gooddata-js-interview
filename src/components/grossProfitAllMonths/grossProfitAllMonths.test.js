// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import ReactDOM from 'react-dom';
import GrossProfitAllMonths from './grossProfitAllMonths';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GrossProfitAllMonths />, div);
});