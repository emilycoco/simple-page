import React, { Component } from 'react';
import styles from './DisplayTable.styl';

export class DisplayTable extends Component {
    renderTableRow(data, rowId) {

        let cells = data.map((el, index) => {
            return <td key={index}>{el}</td>
        });

        return (
            <tr key={rowId}>
                {cells}
            </tr>
        )
    }
    render() {
        var header = this.renderTableRow(this.props.columns.map((column) => {
            return column.title;
        }), 'header');

        var rows = this.props.rows.map((row, index) => {
            return this.renderTableRow(this.props.columns.map((column) => {
                return row[column.key];
            }), index);
        });

        return (
            <table className="display-table top-margin">
                <thead>{header}</thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}