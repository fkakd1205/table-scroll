import React from "react";
import ResizableTh from "../../components/table/th/v1/ResizableTh";
import { TableFieldWrapper } from "./style/HomeV8.styled";
import CustomTableVirtuoso from "../../components/table/virtualization/virtuoso/v1/CustomTableVirtuoso";

const TH_SIZE = 40;
const TD_SIZE = 100;

export default function HomeV12() {
    const thList = createTableHeader();
    const tdList = createTableData();

    return (
        <TableFieldWrapper>
            <div className='table-box'>
                <CustomTableVirtuoso
                    style={{ height: 300 }}
                    totalCount={tdList.length}
                    data={tdList}
                    fixedHeaderContent={() => (
                        <tr>
                            {thList?.map((r, index) => (
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
                    )}
                    itemContent={(index, row) => (
                        <>
                            {thList?.map((r, idx) => (
                                <td key={'tr_' + index + r.headerName}>{row[r.headerName]}</td>
                            ))}
                            <td
                                className="fixed-col-right"
                                style={{ minWidth: '45px', zIndex: 0 }}     // fixed-col: z-index 0
                            >
                                고정
                            </td>
                        </>
                    )}
                />
            </div>
        </TableFieldWrapper>
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

