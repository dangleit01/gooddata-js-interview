import React, { Component } from 'react';
import { ColumnChart } from '@gooddata/react-components';
import './grossProfitAllMonths.css';
import { ProjectId, Measures, ViewBy } from '../../utils/gooddataUtils';

class GrossProfitAllMonths extends Component {

    render () {
        return (
            <div className='GrossProfitAllMonth'>
                <h1>$ Gross Profit - All months</h1>
                <div>
                    <ColumnChart
                        measures={Measures}
                        viewBy={ViewBy}
                        projectId={ProjectId}
                    />
                </div>
            </div>
        );
    }
}

export default GrossProfitAllMonths;