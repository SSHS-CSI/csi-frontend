const React = require("react");

const { makeStyles } = require("@material-ui/core/styles");

const clsx = require("clsx").default;

const frGetter = value => typeof value === "number" ? `repeat(${value}, 1fr)` : value;
const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");

const useStyles = makeStyles({ grid: ({
    height, flow, autoRows, rows, columns, gap, columnGap, rowGap, areas, justifyContent, alignContent
}) => ({
    display: "grid",
    height,
    gridAutoFlow: flow,
    gridAutoRows: autoRows,
    gridTemplateRows: rows && frGetter(rows),
    gridTemplateColumns: frGetter(columns),
    gridGap: gap,
    columnGap,
    rowGap,
    gridTemplateAreas: areas && formatAreas(areas),
    justifyContent,
    alignContent
}) });

module.exports = ({
    className, columns = 12, gap, columnGap, rowGap, height = "auto", minRowHeight, flow, rows, areas, justifyContent, alignContent, ...props
}) => {
    const classes = useStyles({
        className,
        columns,
        gap,
        columnGap,
        rowGap,
        height,
        minRowHeight,
        flow,
        rows,
        areas,
        justifyContent,
        alignContent
    });
    return <div className={clsx(classes.grid, className)} {...props} />;
};
