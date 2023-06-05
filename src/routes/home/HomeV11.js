import React from "react";
import { TableBox, TableWrapper } from "./style/Home.styled";
import { AutoSizer, Column, MultiGrid, Table } from "react-virtualized";
import 'react-virtualized/styles.css';

const TH_SIZE = 40;
const TD_SIZE = 100;

export default function HomeV11() {
    const thList = createTableHeader();
    const tdList = createTableData();

    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
        if(rowIndex === 0) {
            return (
                <div
                    key={key}
                    style={style}
                >
                    {thList[columnIndex].headerName}
                </div>
            )
        }
        else {
            return (
                <div
                    key={key}
                    style={style}
                >
                    {tdList[rowIndex-1][thList[columnIndex]?.headerName]}
                </div>
            )
        }
    }

    return (
        <TableWrapper>
            <TableBox>
                <AutoSizer>
                    {({ width }) => (
                        <>
                            <MultiGrid
                                cellRenderer={cellRenderer}
                                fixedRowCount={1}
                                height={500}
                                width={width}
                                columnCount={thList.length}
                                rowCount={tdList.length + 1}
                                rowHeight={50}
                                columnWidth={150}
                            />

                        </>

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

