const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const CssBaseline = require("@material-ui/core/CssBaseline").default;
const Grid = require("@material-ui/core/Grid").default;
const Paper = require("@material-ui/core/Paper").default;
const Fab = require("@material-ui/core/Fab").default;

const AddIcon = require("@material-ui/icons/Add").default;

const AppBar = require("./appbar.js");
const Drawer = require("./drawer.js");
const Class = require("./class.js");
const LectureSelector = require("./lecture-selector.js");
const AssignmentAdder = require("./assignment-adder.js");
const TimeTable = require("./time-table.js");

const useStyles = makeStyles(theme => ({
    root: {
        display: "relative",
        padding: theme.spacing(2)
    },
    mainArea: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(1),
        minHeight: `calc(100vh - ${theme.spacing(8)}px)`
    },
    fullHeightPaper: {
        height: "100%",
        position: "relative"
    },
    fullHeightTimeTable: { height: "100%" },
    timeTableTile: { padding: theme.spacing(2) },
    addIcon: {
        position: "absolute",
        bottom: theme.spacing(2),
        left: theme.spacing(2)
    }
}));

const subjects = [{
    name: "수학",
    lectures: [{
        name: "수학 IV",
        subject: "수학",
        classes: [{
            times: [{
                weekday: 1,
                start: 1,
                end: 3
            }, {
                weekday: 4,
                start: 5,
                end: 6
            }],
            teacher: "노창균",
            students: ["조성빈", "신기준", "권현우"],
            assignments: [{
                title: "우왕",
                deadline: new Date()
            }]
        }, {
            times: [{
                weekday: 2,
                start: 1,
                end: 2
            }, {
                weekday: 3,
                start: 1,
                end: 2
            }],
            teacher: "김지애",
            students: ["박정환", "정현석", "박정민"],
            assignments: []
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "노창균",
            students: ["김성민", "이창민", "김시환"],
            assignments: []
        }]
    }, {
        name: "미적분학 I",
        subject: "수학",
        classes: [{ times: [{
            weekday: 1,
            start: 3,
            end: 4
        }, {
            weekday: 3,
            start: 3,
            end: 4
        }] }, { times: [{
            weekday: 2,
            start: 3,
            end: 4
        }, {
            weekday: 3,
            start: 1,
            end: 2
        }] }]
    }]
}];

const App = () => {
    const classes = useStyles();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    // const [isClassSelect, setClassSelect] = useState(false);
    const [timeTable, setTimeTable] = useState([]);
    const [currentClass, setCurrentClass] = useState(null);
    const [isAssignmentAdderOpen, setIsAssignmentAdderOpen] = useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar onMenuClick={() => setIsDrawerOpen(true)} setIsEditMode={setIsEditMode} isEditMode={isEditMode} />
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Grid container spacing={3} className={classes.mainArea}>
                {isEditMode ? (
                    <Grid item xs={3}>
                        <Paper className={classes.fullHeightPaper}>
                            <LectureSelector subjects={subjects} timeTable={timeTable} setTimeTable={setTimeTable} />
                        </Paper>
                    </Grid>
                ) : (
                    <Grid item xs={3}>
                        <Paper className={classes.fullHeightPaper}>
                            <Class
                                open={!!currentClass} title={currentClass && currentClass.name} {...currentClass}
                                onClose={() => setCurrentClass(null)} />
                            <Fab
                                color="primary"
                                className={classes.addIcon}
                                onClick={() => setIsAssignmentAdderOpen(isAssignmentAdderOpen => !isAssignmentAdderOpen)}
                                size="small">
                                <AddIcon />
                            </Fab>
                            <AssignmentAdder
                                title="과제 추가" open={isAssignmentAdderOpen} setTimeTable={setTimeTable}
                                onClose={() => setIsAssignmentAdderOpen(false)} />
                        </Paper>
                    </Grid>
                )}
                <Grid item xs={9}>
                    <div className={classes.fullHeightPaper}>
                        <TimeTable
                            className={classes.fullHeightTimeTable}
                            timeTable={timeTable}
                            setTimeTable={setTimeTable}
                            currentClass={currentClass}
                            setCurrentClass={setCurrentClass} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

module.exports = App;
