import React, { Component } from 'react';
import styles from './DisplayTable.styl';

export class DisplayTable extends Component {
    renderTableRow(dataArr, key) {
        var cells = dataArr.map((data) => {
            if (key) {
                return <td key={data[key]}>{data[key]}</td>;
            } else {
                return <td key={data}>{data}</td>
            }
        });
        return (
            <tr>
                {cells}
            </tr>
        )
    }
    render() {
        var header = this.renderTableRow(this.props.header);
        return (
            <table className="display-table">
                <thead>{header}</thead>
            </table>
        )
    }
}