const React = require("react");
const { useState } = React;

const List = require("@material-ui/core/List").default;

const Subject = require("./subject.js");
const ClassSelector = require("./class-selector.js");

module.exports = ({
    subjects, timeTable, setTimeTable, ...props
}) => {
    const [lecture, setLecture] = useState(null);

    return (
        <>
            <List disablePadding {...props}>
                {subjects.map(subject => (
                    <Subject subject={subject} key={subject.name}
                        onClick={(_, lecture) => setLecture(lecture)} />
                ))}
            </List>
            <ClassSelector open={!!lecture} lecture={lecture}
                timeTable={timeTable} setTimeTable={setTimeTable}
                onClose={() => setLecture(null)} />
        </>
    );
};
