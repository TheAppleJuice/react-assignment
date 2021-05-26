import React, {Component} from "react";

class TableBodyComponent extends Component {

    state = {
        categories: [
            {
                id:1,
                name: "Cars"
            },
            {
                id:2,
                name: "Planes"
            },
        ],
    };

    render() {
        const tableRows = this.state.categories.map((row) => (
            <tr key={row.id}>
                <td>{row.name}</td>
                <td></td>

            </tr>
        ));
        return <tbody>{tableRows}</tbody>
    }
}

export default TableBodyComponent;