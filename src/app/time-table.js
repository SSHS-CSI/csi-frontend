const React = require("react");

const CssGrid = require("./css-grid.js");

const TimeTableCell = require("./time-table-cell.js");

module.exports = ({
    timeTable, ...props
}) => (
    <CssGrid rows={7} columns={5} gap={8} {...props}>
        {timeTable.map(({
            name, subject, times
        }) => times.map(({
            weekday, start, end
        }) => <TimeTableCell key={name + weekday + start + end} name={name} weekday={weekday} start={start} end={end} subject={subject} />))}
    </CssGrid>
);
