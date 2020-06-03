// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import GrossProfitInMonth from '../grossProfitInMonth';
import GrossProfitAllMonths from '../grossProfitAllMonths';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <GrossProfitInMonth/>
                <GrossProfitAllMonths/>
            </div>
        );
    }
}

export default App;
