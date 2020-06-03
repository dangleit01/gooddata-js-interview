import React, { Component } from 'react';
import { ColumnChart } from '@gooddata/react-components';
import moment from 'moment';
import './grossProfitInMonth.css';
import { ProjectId, Measures } from '../../utils/gooddataUtils';

const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';
const monthHaving31Days = ['01', '03', '05', '07', '08', '10', '12'];
const year2016 = 2016;

export const fromDay = (selectedMonth) => {
    return moment(year2016 + '-' + selectedMonth + '-01').format('YYYY-MM-DD');
}

export const toDay = (selectedMonth) => {
    let endDayOfMonth = 30;
    
    if(selectedMonth === '02') {
        endDayOfMonth = 29;
    } else if (monthHaving31Days.some(item => {
        return selectedMonth === item;})) {
        endDayOfMonth = 31;
    }
    return moment(year2016 + '-' + selectedMonth + '-' + endDayOfMonth).format('YYYY-MM-DD');
}

export const getMonthFilter = (selectedMonth) => {
    return {
        absoluteDateFilter: {
            dataSet: {
                uri: dateAttribute
            },
            from: fromDay(selectedMonth),
            to: toDay(selectedMonth)
        }
    }
}

class GrossProfitInMonth extends Component {
    
    constructor(pros) {
        super(pros);
        this.handleMonthDropdownChange = this.handleMonthDropdownChange.bind(this);
        this.state = {
            selectedMonth: '01'
        };
    }

    handleMonthDropdownChange(event) {
        this.setState({
            selectedMonth: event.target.value
        });
    }

    renderDropdown() {
        return (
            <select defaultValue="01" onChange={this.handleMonthDropdownChange}>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        )
    }

    render() {
        const filters = [getMonthFilter(this.state.selectedMonth)];
        
        return (
            <div className='GrossProfitInMonth'>
                <h1>$ Gross Profit in month {this.renderDropdown()} 2016</h1>
                <div>
                    <ColumnChart
                        measures={Measures}
                        filters={filters}
                        projectId={ProjectId}
                    />
                </div>
            </div>
        );
    }
}

export default GrossProfitInMonth;