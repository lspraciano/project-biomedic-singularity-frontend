import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import "./counter-cells-datagrid.css";

const columns = [
    {field: 'id', headerName: 'ID', width: 70, headerClassName: "counter-cells-datagrid__header"},
    {field: 'cellName', headerName: 'Célula', width: 130, headerClassName: "counter-cells-datagrid__header", flex: 1},
    {field: 'absoluteCount', headerName: 'Contagem Total', width: 130, headerClassName: "counter-cells-datagrid__header"},
    {field: 'relativeCount', headerName: '%', width: 130, headerClassName: "counter-cells-datagrid__header"},
];

const rows = [
    {id: 1, cellName: 'Neutrófilo', absoluteCount: 0, relativeCount: "0%"},
    {id: 2, cellName: 'Linfócito', absoluteCount: 0, relativeCount: "0%"},
    {id: 3, cellName: 'Monócito', absoluteCount: 0, relativeCount: "0%"},
    {id: 4, cellName: 'Eosinófilo', absoluteCount: 0, relativeCount: "0%"},
    {id: 5, cellName: 'Basófilo', absoluteCount: 0, relativeCount: "0%"},
    {id: 6, cellName: 'Outras', absoluteCount: 0, relativeCount: "0%"},
];

export const CounterCellsDataGrid = () => {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {page: 0, pageSize: 10},
                },
            }}
            className={"counter-cells-datagrid"}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    );
}