import React from "react";
import { TableBox, TableWrapper } from "./style/Home.styled";
import { AutoSizer, Column, Table } from "react-virtualized";
import 'react-virtualized/styles.css';

const TH_SIZE = 40;
const TD_SIZE = 100;

export default function HomeV9() {
    const thList = createTableHeader();
    const tdList = createTableData();

    return (
        <TableWrapper>
            <TableBox>
                <AutoSizer>
                    {({ width, height }) => (
                        <Table
                            rowClassName='table-row'
                            headerClassName='table-header'
                            width={width}
                            height={height}
                            headerHeight={50}
                            rowCount={tdList.length}
                            rowHeight={45}
                            rowGetter={({ index }) => tdList[index]}
                        >
                            {thList?.map((r) => (
                                <Column
                                    key={r.headerName}
                                    label={r.headerName}
                                    cellDataGetter={({ rowData }) => rowData[r.headerName]}
                                    dataKey={r.headerName}
                                    width={150}
                                    height={50}
                                    style={{ minWidth: '150px' }}
                                />
                            ))}
                        </Table>
                    )}
                </AutoSizer>
            </TableBox>
        </TableWrapper>
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

