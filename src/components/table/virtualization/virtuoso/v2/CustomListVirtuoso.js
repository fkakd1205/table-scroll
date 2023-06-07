import React from "react";
import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

const ListWrapper = styled.div`
    .list-el::before {
        display: block;
        padding-top: var(--listPaddingTop);
        content: "";
    }

    .list-el::after {
        display: block;
        padding-bottom: var(--listPaddingBottom);
        content: "";
    }
`;

export default function CustomListVirtuoso({
    height = 300,
    rows = [],
    totalCount = 0,
    bodyField = {},
    style,
    ...props
}) {
    const List = React.forwardRef(({ children, style }, ref) => {
        return (
            <div
                className='list-el'
                style={{
                    "--listPaddingTop": (style?.paddingTop ?? 0) + "px",
                    "--listPaddingBottom": (style?.paddingBottom ?? 0) + "px"
                }}
            >
                <div ref={ref}>
                    {children}
                </div>
            </div>
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
                rowConfig: params
            }
        };
    }

    return (
        <ListWrapper>
            <Virtuoso
                style={{ ...style, height }}
                totalCount={totalCount}
                components={{ List, Item }}
                {...props}
            />
        </ListWrapper>
    )
}