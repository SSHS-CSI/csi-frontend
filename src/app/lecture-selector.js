const React = require("react");

const List = require("@material-ui/core/List").default;

const Subject = require("./subject.js");

module.exports = ({
    subjects, currentLectures, setCurrentLectures, ...props
}) => (
    <List disablePadding>
        {subjects.map(subject => (
            <Subject {...subject} key={subject.name}
                onClick={(_, lecture) => {
                    if(currentLectures.includes(lecture)) { return; }
                    setCurrentLectures(currentLectures => [lecture, ...currentLectures]);
                }}/>
        ))}
    </List>
);
