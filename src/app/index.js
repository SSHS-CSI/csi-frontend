const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const CssBaseline = require("@material-ui/core/CssBaseline").default;
const Grid = require("@material-ui/core/Grid").default;
const Paper = require("@material-ui/core/Paper").default;
const Fab = require("@material-ui/core/Fab").default;

const EditIcon = require("@material-ui/icons/Edit").default;
const ClearIcon = require("@material-ui/icons/Clear").default;

const AppBar = require("./appbar.js");
const Drawer = require("./drawer.js");
const Class = require("./class.js");
const Assignment = require("./assignment.js");
const LectureSelector = require("./lecture-selector.js");
const TimeTable = require("./time-table.js");

const subjects = require("./subjects.json");

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
    fullHeightPaper: { height: "100%" },
    fullHeightTimeTable: { height: "100%" },
    timeTableTile: { padding: theme.spacing(2) },
    editIcon: {
        position: "absolute",
        bottom: theme.spacing(4),
        right: theme.spacing(4)
    }
}));

const App = () => {
    const classes = useStyles();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(true);
    const [isClassDialogOpen, setIsClassDialogOpen] = useState(false);
    const [isAssignmentDialogOpen, setIsAssignmentDialogOpen] = useState(false);
    const [timeTable, setTimeTable] = useState([]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar onMenuClick={() => setIsDrawerOpen(true)} />
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Class
                title="객체지향" open={isClassDialogOpen}
                onClose={() => setIsClassDialogOpen(false)} teacher="박미영"
                students={["조성빈", "신기준", "권현우"]} assignments={[{
                    title: "연습문제 1",
                    deadline: new Date("Sun Jul 30 2019")
                }]} />
            <Assignment
                open={isAssignmentDialogOpen} title="과제" onClose={() => setIsAssignmentDialogOpen(false)}
                assignment={{
                    title: "연습문제 1",
                    content: "연습문제 1의 3번 문제부터 16번 문제까지 풀기",
                    deadline: new Date("Sun Jul 30 2019"),
                    author: "조성빈"
                }} />
            <Fab color="primary" className={classes.editIcon} onClick={() => setIsEditMode(isEditMode => !isEditMode)}>
                {isEditMode ? <ClearIcon /> : <EditIcon />}
            </Fab>
            <Grid container spacing={3} className={classes.mainArea}>
                {isEditMode && (
                    <Grid item xs={3}>
                        <Paper className={classes.fullHeightPaper}>
                            <LectureSelector subjects={subjects} timeTable={timeTable} setTimeTable={setTimeTable} />
                        </Paper>
                    </Grid>
                )}
                <Grid item xs={isEditMode ? 9 : 12}>
                    <div className={classes.fullHeightPaper}>
                        <TimeTable className={classes.fullHeightTimeTable} timeTable={timeTable} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

module.exports = App;
