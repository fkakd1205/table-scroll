import React from "react";
import { TableBox, TableWrapper } from "./style/Home.styled";
import { AutoSizer, Column, Table } from "react-virtualized";
import 'react-virtualized/styles.css';

const TH_SIZE = 40;
const TD_SIZE = 100;

export default function HomeV10() {
    const thList = createTableHeader();
    const tdList = createTableData();

    return (
        <TableWrapper>
            <TableBox>
                <Table
                    rowClassName='table-row'
                    headerClassName='table-header'
                    width={180 * (thList.length + 1)}
                    height={500}
                    headerHeight={50}
                    rowCount={tdList.length}
                    rowHeight={45}
                    rowGetter={({ index }) => tdList[index]}
                    style={{ position: 'relative' }}
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

                    <Column
                        key={'123123'}
                        label={'고정값'}
                        cellDataGetter={() => "고정값"}
                        dataKey={'고정값'}
                        width={150}
                        height={50}
                        style={{ minWidth: '80px', position: 'sticky', right: 0, zIndex: 11 }}
                    />
                </Table>
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

