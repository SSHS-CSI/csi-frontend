const React = require("react");
const { useState } = React;

const List = require("@material-ui/core/List").default;

const Subject = require("./subject.js");
const ClassSelector = require("./class-selector.js");

module.exports = ({ subjects, ...props }) => {
    const [lecture, setLecture] = useState("");
    const [currentLectures, setCurrentLectures] = useState([]);

    return (
        <>
            <List disablePadding {...props}>
                {subjects.map(subject => (
                    <Subject {...subject} key={subject.name}
                             onClick={(_, lecture) => setLecture(lecture)} />
                ))}
            </List>
            <ClassSelector open={!!lecture} lecture={lecture}
                           currentLectures={currentLectures}
                           setCurrentLectures={setCurrentLectures}
                           onClose={() => setLecture("")} />
        </>
    );
};
