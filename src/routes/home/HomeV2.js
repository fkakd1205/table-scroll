import { TableBox, TableWrapper, WindowingBox } from "./style/Home.styled";
import { FixedSizeGrid, FixedSizeList } from "react-window";

const TH_SIZE = 40;
const TD_SIZE = 1000;

export default function HomeV2() {
    const thList = createTableHeader();
    const tdList = createTableData();

    const Row = ({ index, style }) => {
        return tdList?.map((r, idx) => {
            if (idx === index) {
                return (
                    <div key={'th_' + index} style={style}>
                        <span style={{ marginRight: '10px' }}>{index + 1}.</span>
                        {thList?.map((r2, idx2) => {
                            return <span key={'th_' + index + 'td_' + idx2}>{tdList[index][r2.headerName]}</span>
                        })}
                    </div>
                )
            }
        })
    }

    const Cell = ({ rowIndex, columnIndex, style }) => {
        return (
            <div style={style}>
                {tdList[rowIndex][thList[columnIndex].headerName]}
            </div>
        )
    }

    return (
        <TableWrapper>
            <WindowingBox>
                <FixedSizeList
                    height={300}
                    width={'100%'}
                    itemCount={TD_SIZE}
                    itemSize={50}
                >
                    {Row}
                </FixedSizeList>
            </WindowingBox>

            <WindowingBox>
                <FixedSizeGrid
                    height={300}
                    width={2000}
                    rowHeight={50}
                    columnWidth={150}
                    rowCount={TD_SIZE}
                    columnCount={thList.length}
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

