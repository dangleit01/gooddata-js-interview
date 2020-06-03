// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import ReactDOM from 'react-dom';
import GrossProfitInMonth, { fromDay, toDay } from './grossProfitInMonth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GrossProfitInMonth />, div);
});

it('get from day', () => {
  expect(fromDay('01')).toEqual('2016-01-01');
  expect(fromDay('02')).toEqual('2016-02-01');
  expect(fromDay('03')).toEqual('2016-03-01');
  expect(fromDay('04')).toEqual('2016-04-01');
  expect(fromDay('05')).toEqual('2016-05-01');
  expect(fromDay('06')).toEqual('2016-06-01');
  expect(fromDay('07')).toEqual('2016-07-01');
  expect(fromDay('08')).toEqual('2016-08-01');
  expect(fromDay('09')).toEqual('2016-09-01');
  expect(fromDay('10')).toEqual('2016-10-01');
  expect(fromDay('11')).toEqual('2016-11-01');
  expect(fromDay('12')).toEqual('2016-12-01');
});

it('get to day', () => {
  expect(toDay('01')).toEqual('2016-01-31');
  expect(toDay('02')).toEqual('2016-02-29');
  expect(toDay('03')).toEqual('2016-03-31');
  expect(toDay('04')).toEqual('2016-04-30');
  expect(toDay('05')).toEqual('2016-05-31');
  expect(toDay('06')).toEqual('2016-06-30');
  expect(toDay('07')).toEqual('2016-07-31');
  expect(toDay('08')).toEqual('2016-08-31');
  expect(toDay('09')).toEqual('2016-09-30');
  expect(toDay('10')).toEqual('2016-10-31');
  expect(toDay('11')).toEqual('2016-11-30');
  expect(toDay('12')).toEqual('2016-12-31');
});