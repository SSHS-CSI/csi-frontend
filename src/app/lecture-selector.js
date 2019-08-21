const React = require("react");
const { useState } = React;

const List = require("@material-ui/core/List").default;

const Subject = require("./subject.js");

module.exports = ({ subjects, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <List disablePadding {...props}>
            {subjects.map(subject => (
                <Subject {...subject} key={subject.name}
                    onClick={() => setIsOpen(true)} />
            ))}

      </List>
    );
};
