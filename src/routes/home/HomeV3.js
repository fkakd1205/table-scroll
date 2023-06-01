import { useEffect, useState } from "react";
import { TableBox, TableWrapper } from "./style/Home.styled";
import { Skeleton } from "@mui/material";

const TH_SIZE = 40;
const TD_SIZE = 1000;

const VIEW_SIZE = 50;
const ADD_VIEW_SIZE = 30;

export default function HomeV3 () {
    const [prevViewLastIndex, setPrevViewLastIndex] = useState(0);
    const [viewSize, setViewSize] = useState(VIEW_SIZE);
    const thList = createTableHeader();
    const tdList = createTableData();

    // viewData 하단 스크롤 감지
    const [target, setTarget] = useState(null);
    // viewData 상단 스크롤 감지
    const [topTarget, setTopTarget] = useState(null);
    // 최상단 ~ viewData 상단 내의 스크롤 감지
    const [topTarget2, setTopTarget2] = useState(null);
    // 최상단 스크롤 감지
    const [topTarget3, setTopTarget3] = useState(null);

    const onIntersect = async (entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio <= 0) return;
            if(!entry.isIntersecting) return;
            
            console.log("scroll down intersecting")
            addViewSize();
            observer.unobserve(entry.target);
        })
    }
    
    const onIntersect2 = async (entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio <= 0) return;
            if(!entry.isIntersecting) return;

            console.log("scroll up intersecting")
            subViewSize();
            // observer.unobserve(entry.target);
        })
    }

    const onIntersect4 = async (entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio <= 0) return;
            if (!entry.isIntersecting) return;

            console.log("scroll up intersecting 2")
            initViewSize2();
            // observer.unobserve(entry.target);
        })
    }

    const onIntersect3 = async (entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio <= 0) return;
            if (!entry.isIntersecting) return;

            console.log("scroll top")
            initViewSize();
            // observer.unobserve(entry.target);
        })
    }

    useEffect(() => {
        let observer;

        if(target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0
            });

            observer.observe(target);
        }
        return () => observer?.disconnect();
    }, [onIntersect, target])

    useEffect(() => {
        let observer;

        if(topTarget) {
            observer = new IntersectionObserver(onIntersect2, {
                threshold: 0,
            });

            observer.observe(topTarget);
        }
        
        return () => observer?.disconnect();
    }, [onIntersect2, topTarget])

    useEffect(() => {
        let observer;

        if(topTarget3) {
            observer = new IntersectionObserver(onIntersect3, {
                threshold: 0,
            });

            observer.observe(topTarget3);
        }
        return () => observer?.disconnect();
    }, [onIntersect3, topTarget3])

    useEffect(() => {
        let observer;

        if(topTarget2) {
            observer = new IntersectionObserver(onIntersect4, {
                threshold: 0,
            });

            observer.observe(topTarget2);
        }

        // topTarget2 모든 요소들의 관찰을 멈추면 안되기 때문에 주석처리
        // return () => observer?.disconnect();
    }, [onIntersect4, topTarget2])

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

    const initViewSize2 = () => {
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
                        {prevViewLastIndex !== 0 &&
                            <tr ref={setTopTarget3}>
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

                        {tdList?.slice(0, viewSize)?.map((r, index) => {
                            if ((index < prevViewLastIndex) && (index % ADD_VIEW_SIZE === 0)) {
                                return (
                                    <tr ref={setTopTarget2} key={'tr_' + index}>
                                        <td>{index + 1}</td>
                                        {/* {thList?.map(r => {
                                                return (
                                                    <td key={'first_skeleton_' + r.headerName}>
                                                        <Skeleton variant="rounded" width={40} height={10} />
                                                    </td>
                                                )
                                            })} */}
                                    </tr>
                                )
                            }

                            if (index < prevViewLastIndex) {
                                return (
                                    <tr key={'tr_' + index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                    </tr>
                                )
                            }

                            if (index === prevViewLastIndex && prevViewLastIndex !== 0) {
                                return (
                                    <tr ref={setTopTarget} key={'tr_' + index}>
                                        <td>...</td>
                                        {thList?.map(r => {
                                            return (
                                                <td key={'first_skeleton_' + r.headerName}>
                                                    <Skeleton variant="rounded" width={40} height={10} />
                                                </td>
                                            )
                                        })}
                                    </tr>
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

