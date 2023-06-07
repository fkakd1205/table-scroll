import React from "react";
import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

const TableWrapper = styled.div`
    tbody::before {
        display: block;
        padding-top: var(--tablePaddingTop);
        content: "";
    }

    tbody::after {
        display: block;
        padding-bottom: var(--tablePaddingBottom);
        content: "";
    }
`;

export default function CustomTableVirtuoso({
    height = 300,
    rows = [],
    columns = [],
    totalCount = 0,
    headerField = {},
    bodyField = {},
    style,
    ...props
}) {
    const List = React.forwardRef(({ children, style }, ref) => {
        return (
            <table
                style={{
                    "--tablePaddingTop": (style?.paddingTop ?? 0) + "px",
                    "--tablePaddingBottom": (style?.paddingBottom ?? 0) + "px"
                }}
                cellSpacing="0"
            >
                <thead>
                    {{...headerField,
                        props: {
                            ...headerField.props,
                            header: columns
                        }
                    }}
                </thead>

                <tbody ref={ref}>
                    {children}
                </tbody>
            </table>
        )
    })

    const Item = (params) => {
        if(!(params && rows.length > 0)) return;
        
        let index = params["data-index"];
        let data = rows[index];

        return {
            ...bodyField,
            props: {
                ...bodyField.props,
                rowIndex: index,
                rowData: data,
                rowConfig: params,
                header: columns
            }
        };
    }

    return (
        <TableWrapper>
            <Virtuoso
                style={{ ...style, height }}
                totalCount={totalCount}
                components={{ List, Item }}
                {...props}
            />
        </TableWrapper>
    )
}