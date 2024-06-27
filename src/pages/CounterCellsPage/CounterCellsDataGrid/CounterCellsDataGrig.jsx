import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import "./counter-cells-datagrid.css";

const columns = [
    {field: 'id', headerName: 'ID', width: 70, headerClassName: "counter-cells-datagrid__header"},
    {field: 'cellName', headerName: 'Célula', width: 130, headerClassName: "counter-cells-datagrid__header", flex: 1},
    {
        field: 'absoluteCount',
        headerName: 'Contagem Total',
        width: 130,
        headerClassName: "counter-cells-datagrid__header"
    },
    {field: 'relativeCount', headerName: '%', width: 130, headerClassName: "counter-cells-datagrid__header"},
];

const blankRows = [
    {id: 1, cellName: 'Neutrófilo', absoluteCount: 0, relativeCount: "0%"},
    {id: 2, cellName: 'Linfócito', absoluteCount: 0, relativeCount: "0%"},
    {id: 3, cellName: 'Monócito', absoluteCount: 0, relativeCount: "0%"},
    {id: 4, cellName: 'Eosinófilo', absoluteCount: 0, relativeCount: "0%"},
    {id: 5, cellName: 'Basófilo', absoluteCount: 0, relativeCount: "0%"},
    {id: 6, cellName: 'Outras', absoluteCount: 0, relativeCount: "0%"},
];

const translateCellName = (name) => {
    const baseName = {
        basofi: "Basófilo",
        eosino: "Eosinófilo",
        linfo: "Linfócito",
        mono: "Monócito",
        neutro: "Neutrófilo",
        verificar: "Outras",
    }

    return baseName[name]
}

export const CounterCellsDataGrid = (
    {
        data
    }
) => {
    const keys = Object.keys(data);

    return (
        <DataGrid
            rows={
                keys.length === 0 ?
                    blankRows
                    :
                    keys?.map(
                        (key, index) => {
                            return {
                                id: index + 1,
                                cellName: translateCellName(key),
                                absoluteCount: data[key].size,
                                relativeCount: data[key].size,
                            }
                        }
                    )
            }
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