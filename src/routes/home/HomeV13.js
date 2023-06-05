import React, { useMemo } from "react";
import ResizableTh from "../../components/table/th/v1/ResizableTh";
import { TableFieldWrapper } from "./style/HomeV13.styled";
import { TableVirtuoso, Virtuoso } from "react-virtuoso";

const TH_SIZE = 40;
const TD_SIZE = 100;

export default function HomeV13() {
    const thList = createTableHeader();
    const tdList = createTableData();

    return (
        <TableFieldWrapper>
            <div className='table-box'>
                <Virtuoso
                    style={{ height: 300 }}
                    totalCount={tdList.length}
                    components={{
                        List: React.forwardRef(({ children, style }, ref) => {
                            return (
                                <table
                                    style={{
                                        "--virtuosoPaddingTop": (style?.paddingTop ?? 0) + "px",
                                        "--virtuosoPaddingBottom": (style?.paddingBottom ?? 0) + "px"
                                    }}
                                >
                                    <thead style={{ position: 'sticky', top: 0, zIndex: 2 }}>
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
                                    </thead>
                                    <tbody ref={ref}>{children}</tbody>
                                </table>
                            )
                        }),
                        Item: (props) => {
                            const row = tdList[props["data-index"]];

                            return (
                                <tr {...props}>
                                    {thList?.map((r) => (
                                        <td key={'tr_' + r.headerName}>{row[r.headerName]}</td>
                                    ))}
                                    <td
                                        className="fixed-col-right"
                                        style={{ minWidth: '45px', zIndex: 0 }}     // fixed-col: z-index 0
                                    >
                                        고정
                                    </td>
                                </tr>
                            );
                        }
                    }}
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

