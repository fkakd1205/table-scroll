import { useEffect, useRef } from "react";
import { HeaderBox, HeaderTh, TableWrapper, WindowingBox } from "./style/Home.styled";
import { FixedSizeGrid } from "react-window";

const TH_SIZE = 40;
const TD_SIZE = 1000;

export default function HomeV6() {
    const thList = createTableHeader();
    const tdList = createTableData();

    const headerRef = useRef();
    const dataRef = useRef();

    const Cell = ({ rowIndex, columnIndex, style }) => {
        return (
            <div style={style} className='grid-el'>
                {tdList[rowIndex][thList[columnIndex].headerName]}
            </div>
        )
    }

    // const Cell = ({ rowIndex, columnIndex, style }) => {
    //     return (
    //         <>
    //             {tdList?.map((r1, idx1) => {
    //                 if (idx1 === rowIndex) {
    //                     return (
    //                         <>
    //                             {thList?.map((r2, idx2) => {
    //                                 if (idx2 === columnIndex) {
    //                                     return (
    //                                         <div style={style} className='grid-el'>
    //                                             {r1[r2.headerName]}
    //                                         </div>
    //                                     )
    //                                 }
    //                             })}
    //                         </>
    //                     )
    //                 }
    //             })}
    //         </>
    //     )
    // }

    const handleActionScroll = () => {
        headerRef.current.scrollLeft = dataRef.current?.scrollLeft;
    }

    return (
        <TableWrapper>
            <WindowingBox>
                <HeaderBox ref={headerRef}>
                    {thList?.map((r, index) => (
                        <HeaderTh key={r.headerName + index}>{r.headerName}</HeaderTh>
                    ))}
                </HeaderBox>
                <FixedSizeGrid
                    height={300}
                    width={2000}
                    rowHeight={50}
                    columnWidth={150}
                    rowCount={TD_SIZE}
                    columnCount={thList.length}
                    outerRef={dataRef}
                    onScroll={() => handleActionScroll()}
                >
                    {Cell}
                </FixedSizeGrid>
            </WindowingBox>
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
                [th]: "data_" + (i + 1) + "_" + th
            }
        }
        tdList.push(td);
    }

    return tdList;
}

