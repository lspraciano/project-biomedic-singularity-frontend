import {DataGrid} from '@mui/x-data-grid';
import "./counter-cells-datagrid.css";
import {blankRows, columns} from "./columns.js";


const translateCellName = (name) => {
    const baseName = {
        basofi: "Basófilo",
        eosino: "Eosinófilo",
        linfo: "Linfócito",
        mono: "Monócito",
        neutro: "Neutrófilo",
        verificar: "Outras",
        images: "Total",
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
            initialState={
                {
                    pagination: {
                        paginationModel: {
                            page: 0,
                            pageSize: 10
                        },
                    },
                }
            }
            className={"counter-cells-datagrid"}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            columnVisibilityModel={
                {
                    id: false,
                }
            }
        />
    );
}