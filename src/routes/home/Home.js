import { useEffect, useState } from "react";
import { TableBox, TableWrapper } from "./style/Home.styled";
import { useInView } from "react-intersection-observer";

const TH_SIZE = 40;
const TD_SIZE = 5000;

const VIEW_SIZE = 10;
const ADD_VIEW_SIZE = 20;

export default function Home () {
    const [target, inView] = useInView({
        threshold: 0,
    });
    const [viewSize, setViewSize] = useState(VIEW_SIZE);
    const thList = createTableHeader();
    const tdList = createTableData();

    const addViewSize = () => {
        let size = viewSize + ADD_VIEW_SIZE;
        if(size > TD_SIZE) {
            size = TD_SIZE;
        }
        setViewSize(size);
    }

    useEffect(() => {
        if(inView) {
            addViewSize();
        }
    }, [inView])

    return (
        <TableWrapper>
            <TableBox>
                <table cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>#</th>
                            {thList?.map((r, index) => (
                                <th key={r.headerName + index}>{r.headerName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tdList?.map((r, index) => {
                            if(index < viewSize)
                            return (
                                <tr key={'tr_' + index}>
                                    <td>{index+1}</td>
                                    {thList?.map((r2, index2) => {
                                        return (
                                            <td key={'tr_' + index + 'td_' + index2}>{r[r2.headerName]}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        <tr ref={target} style={{ height: '20px' }}></tr>
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

