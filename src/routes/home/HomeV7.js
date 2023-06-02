import { useRef } from "react";
import { HeaderBox, HeaderTh, TableWrapper, WindowingBox, WindowingList } from "./style/Home.styled";

const TH_SIZE = 40;
const TD_SIZE = 1000;

export default function HomeV7() {
    const thList = createTableHeader();
    const tdList = createTableData();

    const headerRef = useRef();
    const dataRef = useRef();

    const Row = ({ index, style }) => {
        return (
            <div className='windowing-wrapper'>
                <div className='windowing-li'>
                    <div key={'th_' + index} style={{ ...style, display: 'flex' }}>
                        {thList?.map((r2, idx2) => {
                            return <div key={'th_' + index + 'td_' + idx2} style={{ minWidth: '150px' }}>{tdList[index][r2.headerName]}</div>
                        })}
                        <div style={{ ...style, position: 'sticky', minWidth: '45px', left: '', right: 0 }}>
                            <div className='fixed-col-right'>고정</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <TableWrapper>
            <WindowingBox ref={dataRef}>
                <HeaderBox ref={headerRef}>
                    {thList?.map((r, index) => (
                        <HeaderTh key={r.headerName + index}>{r.headerName}</HeaderTh>
                    ))}
                </HeaderBox>
                <WindowingList
                    height={300}
                    width={'100%'}
                    itemCount={TD_SIZE}
                    itemSize={50}
                >
                    {Row}
                </WindowingList>
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

