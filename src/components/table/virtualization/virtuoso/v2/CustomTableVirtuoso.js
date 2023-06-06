import React from "react";
import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

const TableWrapper = styled.div`
    tbody::before {
        display: block;
        padding-top: var(--virtuosoPaddingTop);
        content: "";
    }

    tbody::after {
        display: block;
        padding-bottom: var(--virtuosoPaddingBottom);
        content: "";
    }
`;

export default function CustomTableVirtuoso({
    height = 300,
    totalCount = 0,
    headerField = {},
    createVirtualizedRows = () => {},
    style,
    ...props
}) {
    return (
        <TableWrapper>
            <Virtuoso
                style={{ ...style, height }}
                totalCount={totalCount}
                components={{
                    List: React.forwardRef(({ children, style }, ref) => {
                        return (
                            <table
                                style={{
                                    "--virtuosoPaddingTop": (style?.paddingTop ?? 0) + "px",
                                    "--virtuosoPaddingBottom": (style?.paddingBottom ?? 0) + "px"
                                }}
                                cellSpacing="0"
                            >
                                <thead style={{ position: 'sticky', top: 0, zIndex: 2 }}>
                                    {headerField}
                                </thead>
                                <tbody ref={ref}>{children}</tbody>
                            </table>
                        )
                    }),
                    Item: (props) => createVirtualizedRows(props)
                }}
                {...props}
            />
        </TableWrapper>
    )
}