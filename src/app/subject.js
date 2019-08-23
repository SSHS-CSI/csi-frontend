const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const List = require("@material-ui/core/List").default;
const ListItem = require("@material-ui/core/ListItem").default;
const ListItemText = require("@material-ui/core/ListItemText").default;
const Collapse = require("@material-ui/core/Collapse").default;

const ExpandLessIcon = require("@material-ui/icons/ExpandLess").default;
const ExpandMoreIcon = require("@material-ui/icons/ExpandMore").default;

const useStyles = makeStyles(theme => ({ nested: { paddingLeft: theme.spacing(4) } }));

module.exports = ({
    subject, onClick, ...props
}) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ListItem button onClick={() => setIsOpen(isOpen => !isOpen)} {...props} divider>
                <ListItemText primary={subject.name} />
                {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List disablePadding>
                    {subject.lectures.map(lecture => (
                        <ListItem button key={lecture.name} onClick={onClick && (e => onClick(e, lecture))} className={classes.nested} divider>
                            <ListItemText primary={lecture.name} />
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    );
};
