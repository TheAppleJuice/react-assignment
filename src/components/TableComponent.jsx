import React, {Component} from 'react';
import TableHeadComponent from "./TableHeadComponent";
import TableBodyComponent from "./TableBodyComponent";

class TableComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>Categories</h2>
                    </div>
                    <div className="card-body">
                        <TableHeadComponent/>
                        <TableBodyComponent/>

                    </div>
                </div>

            </div>

        );
    }
}

export default TableComponent;