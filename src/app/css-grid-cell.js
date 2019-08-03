const React = require("react");

const { makeStyles } = require("@material-ui/core/styles");

const clsx = require("clsx").default;

const useStyles = makeStyles({
    cell: ({ width, height, top, left, center, area }) => ({
        height: "100%",
        minWidth: 0,
        gridColumnEnd: [["span", width]],
        gridRowEnd: [["span", height]],
        gridColumnStart: left,
        gridRowStart: top,
        textAlign: center,
        gridArea: area,
    }),
    cellMiddle: {
        display: "inline-flex",
        flexFlow: ["column", "wrap"],
        justifyContent: "center",
        justifySelf: "stretch"
    }
});

module.exports = ({ className, width = 1, height = 1, top, left, middle, center, area, ...props }) => {
    const classes = useStyles({ className, width, height, top, left, middle, center, area });
    return <div className={clsx(classes.cell, middle && classes.cellMiddle, className)} {...props} />;
};
