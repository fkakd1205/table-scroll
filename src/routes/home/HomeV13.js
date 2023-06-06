import React from "react";
import ResizableTh from "../../components/table/th/v1/ResizableTh";
import { TableFieldWrapper } from "./style/HomeV13.styled";
import CustomTableVirtuoso from "../../components/table/virtualization/virtuoso/v2/CustomTableVirtuoso";

const TH_SIZE = 40;
const TD_SIZE = 100;

export default function HomeV13() {
    const thList = createTableHeader();
    const tdList = createTableData();

    const createVirtualizedRows = (params) => {
        const index = params["data-index"];

        return (
            <TableBodyRow
                index={index}
                row={tdList[index]}
                header={thList}
                viewIndexInfo={params}
            />
        )
    }

    return (
        <TableFieldWrapper>
            <div className='table-box'>
                <CustomTableVirtuoso
                    height={300}
                    totalCount={tdList.length}
                    headerField={<TableHeader header={thList} />}
                    createVirtualizedRows={createVirtualizedRows}
                />
            </div>
        </TableFieldWrapper>
    )
}

function TableHeader({ header }) {
    return(
        <tr>
            <th
                className="fixed-header"
                scope="col"
                style={{ width: '50px'}}
            >
                No.
            </th>
            {header?.map((r, index) => (
                <ResizableTh
                    className="fixed-header"
                    scope="col"
                    key={r.headerName + index}
                >
                    {r.headerName}
                </ResizableTh>
            ))}
            <th
                className="fixed-header fixed-col-right"
                scope="col"
                style={{ minWidth: '45px', zIndex: 1 }}     // fixed-col : z-index 1
            >
                고정
            </th>
        </tr>
    )
}

function TableBodyRow({ index, row, header, viewIndexInfo }) {
    return (
        <tr {...viewIndexInfo}>
            <td>
                {index + 1}
            </td>
            {header?.map((r) => (
                <td key={'tr_' + r.headerName}>{row[r.headerName]}</td>
            ))}
            <td
                className="fixed-col-right"
                style={{ minWidth: '45px', zIndex: 0 }}     // fixed-col: z-index 0
            >
                고정
            </td>
        </tr>
    )
}

const createTableHeader = () => {
    let thList = [];
    let th = {};
    for (var i = 0; i < TH_SIZE; i++) {
        th = {
            index: i,
            headerName: "header" + (i + 1),
        }
        thList.push(th);
    }

    return thList;
}

const createTableData = () => {
    let tdList = [];
    let td = {};
    for (var i = 0; i < TD_SIZE; i++) {
        for (var j = 0; j < TH_SIZE; j++) {
            let th = "header" + (j + 1);
            td = {
                ...td,
                [th]: "data" + (i + 1) + "_" + th
            }
        }
        tdList.push(td);
    }

    return tdList;
}

