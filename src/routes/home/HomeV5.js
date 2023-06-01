import { useCallback, useEffect, useState } from "react";
import { TableBox, TableWrapper } from "./style/Home.styled";
import { Skeleton } from "@mui/material";
import CustomIntersectionObserver from "../../components/observer/v1/CustomIntersectionObserver";

const TH_SIZE = 40;
const TD_SIZE = 1000;

const VIEW_SIZE = 50;
const ADD_VIEW_SIZE = 30;

export default function HomeV5 () {
    const [prevViewLastIndex, setPrevViewLastIndex] = useState(0);
    const [viewSize, setViewSize] = useState(VIEW_SIZE);
    const thList = createTableHeader();
    const tdList = createTableData();

    useEffect(() => {
        if(viewSize > VIEW_SIZE) {
            setPrevViewLastIndex(viewSize - VIEW_SIZE)
        }else {
            setPrevViewLastIndex(0);
        }
    }, [viewSize])

    const addViewSize = () => {
        let size = viewSize + ADD_VIEW_SIZE;
        if(size > TD_SIZE) {
            size = TD_SIZE;
        }

        setViewSize(size);
    }

    const subViewSize = () => {
        let size = viewSize - ADD_VIEW_SIZE;
        if(size < VIEW_SIZE) {
            size = VIEW_SIZE;
        }

        setViewSize(size);
    }

    const initViewSize = () => {
        setViewSize(VIEW_SIZE);
    }

    const updateViewSize = () => {
        if(!prevViewLastIndex) return;
    
        setViewSize(prevViewLastIndex);
    }

    return (
        <TableWrapper>
            <TableBox>
                <table cellSpacing={0} style={{ position: 'relative' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            {thList?.map((r, index) => (
                                <th key={'th_' + r.headerName + index}>{r.headerName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {(viewSize === VIEW_SIZE && prevViewLastIndex !== 0) &&
                            <CustomIntersectionObserver
                                totalSize={tdList.length}
                                viewSize={viewSize}
                                callback={initViewSize}
                                wrapperTagType={'tr'}
                                endElement={<td colSpan={thList.length}></td>}
                                threshold={0}
                            />
                        }

                        {tdList?.slice(0, viewSize)?.map((r, index) => {
                            if ((index < prevViewLastIndex) && (index % ADD_VIEW_SIZE === 0)) {
                                return (
                                    <CustomIntersectionObserver
                                        totalSize={tdList.length}
                                        viewSize={viewSize}
                                        callback={updateViewSize}
                                        wrapperTagType={'tr'}
                                        loadingElement={
                                            <td>{index + 1}</td>
                                        }
                                        endElement={<td colSpan={thList.length}></td>}
                                        threshold={0}
                                    />
                                )
                            }

                            if (index < prevViewLastIndex) {
                                return (
                                    <tr key={'tr_' + index}>
                                        <td>{index + 1}</td>
                                    </tr>
                                )
                            }

                            if (index === prevViewLastIndex && prevViewLastIndex !== 0) {
                                return (
                                    <CustomIntersectionObserver
                                        totalSize={tdList.length}
                                        viewSize={viewSize}
                                        callback={subViewSize}
                                        wrapperTagType={'tr'}
                                        loadingElement={
                                            <>
                                                <td>...</td>
                                                {thList?.map(r => {
                                                    return (
                                                        <td key={'first_td_skeleton_' + r.headerName}>
                                                            <Skeleton variant="rounded" width='90%' height={10} style={{ margin: '0 auto' }} />
                                                        </td>
                                                    )
                                                })}
                                            </>
                                        }
                                        endElement={<td colSpan={thList.length}></td>}
                                        threshold={0}
                                    />
                                )
                            }
                            
                            if (index < viewSize && index >= prevViewLastIndex) {
                                return (
                                    <tr key={'tr_' + index}>
                                        <td>{index + 1}</td>
                                        {thList?.map((r2, index2) => {
                                            return (
                                                <td key={'tr_' + index + 'td_' + index2}>{r[r2.headerName]}</td>
                                            )
                                        })}
                                    </tr>
                                )
                            }
                        })}

                        <CustomIntersectionObserver
                            totalSize={tdList.length}
                            viewSize={viewSize}
                            callback={addViewSize}
                            wrapperTagType={'tr'}
                            loadingElement={
                                <>
                                    <td>...</td>
                                    {thList?.map(r => {
                                        return (
                                            <td key={'last_td_skeleton_' + r.headerName}>
                                                <Skeleton variant="rounded" width='90%' height={10} style={{ margin: '0 auto' }} />
                                            </td>
                                        )
                                    })}
                                </>
                            }
                            endElement={
                                <td colSpan={thList.length}>마지막 데이터 입니다.</td>
                            }
                            threshold={0}
                        />
                    </tbody>
                </table>
            </TableBox>
        </TableWrapper>
    )
}

const createTableHeader = () => {
    let thList = [];
    let th = {};
    for(var i = 0; i < TH_SIZE; i++) {
        th = {
            index: i,
            headerName: "header" + (i+1),
        }
        thList.push(th);
    }

    return thList;
}

const createTableData = () => {
    let tdList = [];
    let td = {};
    for(var i = 0; i < TD_SIZE; i++) {
        for(var j = 0; j < TH_SIZE; j++) {
            let th = "header" + (j+1);
            td = {
                ...td,
                [th]: th + "_data" + (i+1)
            }
        }
        tdList.push(td);
    }

    return tdList;
}

