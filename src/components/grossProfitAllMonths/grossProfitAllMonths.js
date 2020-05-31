import React, { Component } from 'react';
import { ColumnChart } from '@gooddata/react-components';
import './grossProfitAllMonths.css';

const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';

class GrossProfitAllMonths extends Component {

    constructor(props) {
        super(props);
    }

    getViewBy() {
        return {
            visualizationAttribute:
            {
                displayForm: {
                    uri: dateAttributeInMonths
                },
                localIdentifier: 'a1'
            }
        }
    }

    render () {
        const projectId = this.props.projectId;
        const measures = this.props.measures;
        const viewBy = this.getViewBy();
        
        return (
            <div className='GrossProfitAllMonth'>
                <h1>$ Gross Profit - All months</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        viewBy={viewBy}
                        projectId={projectId}
                    />
                </div>
            </div>
        );
    }
}

export default GrossProfitAllMonths;