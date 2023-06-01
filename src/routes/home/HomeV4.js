import { useEffect, useRef, useState } from "react";
import { TableBox, TableWrapper } from "./style/Home.styled";
import { Skeleton } from "@mui/material";

const TH_SIZE = 40;
const TD_SIZE = 1000;

const VIEW_SIZE = 50;
const ADD_VIEW_SIZE = 30;

export default function HomeV4 () {
    const [prevViewLastIndex, setPrevViewLastIndex] = useState(0);
    const [viewSize, setViewSize] = useState(VIEW_SIZE);
    const thList = createTableHeader();
    const tdList = createTableData();

    const [target, setTarget] = useState(null);
    const [topTarget, setTopTarget] = useState(null);
    const tableRef = useRef(null);

    const onIntersect = async (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log("scroll down intersecting")
                addViewSize();
                observer.unobserve(entry.target);
                tableRef.current.scrollIntoView();
            }   
        })
    }

    const onIntersect2 = async (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log("scroll up intersecting")
                subViewSize();
                observer.unobserve(entry.target);
            }
        })
    }

    useEffect(() => {
        let observer;

        if(target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0,
            });

            observer.observe(target);
        }
        return () => observer?.disconnect();
    }, [onIntersect, target])

    useEffect(() => {
        let observer;

        if(topTarget) {
            observer = new IntersectionObserver(onIntersect2, {
                threshold: 0
            });

            observer.observe(topTarget);
        }
        return () => observer?.disconnect();
    }, [onIntersect2, topTarget])

    useEffect(() => {
        if(viewSize > VIEW_SIZE) {
            setPrevViewLastIndex(viewSize - VIEW_SIZE);
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
                    <tbody ref={tableRef}>
                        {prevViewLastIndex !== 0 &&
                            <tr ref={setTopTarget}>
                                <td>...</td>
                                {thList?.map(r => {
                                    return (
                                        <td key={'first_skeleton_' + r.headerName}>
                                            <Skeleton variant="rounded" width={40} height={10} />
                                        </td>
                                    )
                                })}
                            </tr>
                        }

                        {tdList?.slice(prevViewLastIndex, viewSize)?.map((r, index) => {
                            return (
                                <tr key={'tr_' + index}>
                                    <td>{(index + prevViewLastIndex) + 1}</td>
                                    {thList?.map((r2, index2) => {
                                        return (
                                            <td key={'tr_' + index + 'td_' + index2}>{r[r2.headerName]}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}

                        {viewSize !== tdList.length &&
                            <tr ref={setTarget}>
                                <td>...</td>
                                {thList?.map(r => {
                                    return (
                                        <td key={'last_skeleton_' + r.headerName}>
                                            <Skeleton variant="rounded" width={40} height={10} />
                                        </td>
                                    )
                                })}
                            </tr>
                        }
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

