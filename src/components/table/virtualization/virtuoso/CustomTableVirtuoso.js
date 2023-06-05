import { TableVirtuoso } from "react-virtuoso";

export default function CustomTableVirtuoso({
    style,
    totalCount = 0,
    data = [],
    fixedHeaderContent = () => {},
    itemContent = () => {},
    ...props
}) {
    return (
        <TableVirtuoso
            style={style}
            totalCount={totalCount}
            data={data}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={itemContent}
            {...props}
        />
    )
}