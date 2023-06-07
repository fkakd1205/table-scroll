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
                                    "--tablePaddingTop": (style?.paddingTop ?? 0) + "px",
                                    "--tablePaddingBottom": (style?.paddingBottom ?? 0) + "px"
                                }}
                                cellSpacing="0"
                            >
                                <thead>
                                    {headerField}
                                </thead>

                                {/* Observer를 등록할 곳에 ref 설정 */}
                                <tbody ref={ref}>
                                    {children}
                                </tbody>
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