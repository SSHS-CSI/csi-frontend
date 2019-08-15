const React = require("react");

const { makeStyles } = require("@material-ui/core/styles");

const Typography = require("@material-ui/core/Typography").default;

const CssGrid = require("./css-grid.js");
const CssGridCell = require("./css-grid-cell.js");

const TimeTableCell = require("./time-table-cell.js");

const useStyles = makeStyles({
    cell: {
        backgroundColor: "pink",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "violet"
        }
    }
});

module.exports = ({ timeTable, ...props }) => {
    return (
        <CssGrid rows={7} columns={5} gap={8} {...props}>
            {timeTable.map(({ name, subject, times }) => times.map(({ weekday, start, end }) => (
                <TimeTableCell name={name} weekday={weekday} start={start} end={end} subject={subject} />
            )))}
        </CssGrid>
    );
}
