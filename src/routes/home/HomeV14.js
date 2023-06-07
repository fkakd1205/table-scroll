import React from "react";
import ResizableTh from "../../components/table/th/v1/ResizableTh";
import { ListFieldWrapper } from "./style/HomeV14.styled";
import CustomListVirtuoso from "../../components/table/virtualization/virtuoso/v2/CustomListVirtuoso";

const TH_SIZE = 40;
const TD_SIZE = 100;

export default function HomeV14() {
    const thList = createTableHeader();
    const tdList = createTableData();

    return (
        <ListFieldWrapper>
            <div className='list-box'>
                <CustomListVirtuoso
                    height={500}
                    rows={tdList}
                    totalCount={tdList.length}
                    bodyField={<TableBodyRow header={thList}/>}
                />
            </div>
        </ListFieldWrapper>
    )
}

function TableBodyRow({
    rowIndex,
    rowData,
    rowConfig,
    header
}) {
    return (
        <div {...rowConfig}>
            <div>--- {rowIndex + 1} ---</div>
            {header?.map((r) => (
                <div key={'tr_' + r.headerName}>{rowData[r.headerName]}</div>
            ))}
        </div>
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

