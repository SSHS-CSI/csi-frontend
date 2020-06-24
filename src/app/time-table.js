const React = require("react");

const CssGrid = require("./css-grid.js");
const TimeTableCell = require("./time-table-cell.js");

module.exports = ({
    timeTable, setTimeTable, currentClass, setCurrentClass, ...props
}) => (
    <CssGrid rows={8} columns={6} gap={8} {...props}>
        {timeTable.map(({
            name, times, subject, teacher, students
        }) => times.map(({
            weekday, start, end
        }) => (
            <TimeTableCell
                key={name + weekday + start + end} name={name}
                weekday={weekday} start={start} end={end} subject={subject}
                onClick={() => setCurrentClass({
                    name,
                    times,
                    subject,
                    teacher,
                    students
                })} />
        )))}
    </CssGrid>
);
