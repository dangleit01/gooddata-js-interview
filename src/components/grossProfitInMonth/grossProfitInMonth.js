import React, { Component } from 'react';
import { ColumnChart } from '@gooddata/react-components';
import moment from 'moment';
import './grossProfitInMonth.css';

const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';
const monthHaving31Days = [1, 3, 5, 7, 8, 10, 12];
const year2016 = 2016;

class GrossProfitInMonth extends Component {
    
    constructor(pros) {
        super(pros);
        this.handleMonthDropdownChange = this.handleMonthDropdownChange.bind(this);
        this.state = {
            selectedMonth: 1
        };
    }

    getFromDay() {
        return moment(year2016 + '-' + this.state.selectedMonth.toString() + '-01').format('YYYY-MM-DD');
    }

    getToDay() {
        let endDayOfMonth = 30;
        const selectedMonth = this.state.selectedMonth;
        
        if(selectedMonth == 2) {
            endDayOfMonth = 29;
        } else if (monthHaving31Days.some(item => {
            return selectedMonth == item;})) {
            endDayOfMonth = 31;
        }
        return moment(year2016 + '-' + this.state.selectedMonth.toString() + '-' + endDayOfMonth).format('YYYY-MM-DD');
    }
    
    getMonthFilter() {
        return {
            absoluteDateFilter: {
                dataSet: {
                    uri: dateAttribute
                },
                from: this.getFromDay(),
                to: this.getToDay()
            }
        }
    }

    handleMonthDropdownChange(event) {
        this.setState({
            selectedMonth: event.target.value
        });
    }

    renderDropdown() {
        return (
            <select defaultValue="1" onChange={this.handleMonthDropdownChange}>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
        )
    }

    render() {
        const projectId = this.props.projectId;
        const filters = [this.getMonthFilter()];
        const measures = this.props.measures;
        return (
            <div className='GrossProfitInMonth'>
                <h1>$ Gross Profit in month {this.renderDropdown()} 2016</h1>
                <div>
                    <ColumnChart
                        measures={measures}
                        filters={filters}
                        projectId={projectId}
                    />
                </div>
            </div>
        );
    }
}

export default GrossProfitInMonth;