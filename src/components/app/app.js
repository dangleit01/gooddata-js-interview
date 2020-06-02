// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import GrossProfitInMonth from '../grossProfitInMonth';
import GrossProfitAllMonths from '../grossProfitAllMonths';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';

class App extends Component {

    getMeasures() {
        return [
            {
                measure: {
                    localIdentifier: 'm1',
                    definition: {
                        measureDefinition: {
                            item: {
                                uri: grossProfitMeasure
                            }
                        }
                    },
                    alias: '$ Gross Profit'
                }
            }
        ]
    }

    render() {
        const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
        const measures = this.getMeasures();
        
        return (
            <div className="App">
                <GrossProfitInMonth projectId={projectId} measures={measures}/>
                <GrossProfitAllMonths projectId={projectId} measures={measures}/>
            </div>
        );
    }
}

export default App;
