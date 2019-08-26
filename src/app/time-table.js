const React = require("react");
const { useState } = React;

const CssGrid = require("./css-grid.js");
const TimeTableCell = require("./time-table-cell.js");
const Class = require("./class.js");

module.exports = ({
    timeTable, ...props
}) => {
    const [currentClass, setCurrentClass] = useState(null);

    return (
        <>
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
            <Class
                open={!!currentClass} title={currentClass && currentClass.name} {...currentClass}
                onClose={() => setCurrentClass(null)} />
        </>
    );
};
