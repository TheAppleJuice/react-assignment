import React from 'react';

const TableHeadComponent = () => {
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th className="m-4"> NAME</th>
                <th className="m-4"> INFO</th>
                <th className="m-4"> ACTION</th>
            </tr>
            </thead>
        </table>

    );
};

export default TableHeadComponent;