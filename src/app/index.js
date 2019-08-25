const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const CssBaseline = require("@material-ui/core/CssBaseline").default;
const Grid = require("@material-ui/core/Grid").default;
const Paper = require("@material-ui/core/Paper").default;

const AppBar = require("./appbar.js");
const Drawer = require("./drawer.js");
const Class = require("./class.js");
const Assignment = require("./assignment.js");
const LectureSelector = require("./lecture-selector.js");
const TimeTable = require("./time-table.js");

const useStyles = makeStyles(theme => ({
    root: { padding: theme.spacing(2) },
    mainArea: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(1),
        minHeight: `calc(100vh - ${theme.spacing(8)}px)`
    },
    fullHeightPaper: { height: "100%" },
    fullHeightTimeTable: { height: "100%" },
    timeTableTile: { padding: theme.spacing(2) }
}));

const subjects = [{
    name: "수학",
    lectures: [{
        name: "수학 IV",
        subject: "수학",
        classes: [{ times: [{
            weekday: 1,
            start: 1,
            end: 2
        }, {
            weekday: 4,
            start: 5,
            end: 6
        }] }, { times: [{
            weekday: 2,
            start: 1,
            end: 2
        }, {
            weekday: 3,
            start: 1,
            end: 2
        }] }, { times: [{
            weekday: 3,
            start: 3,
            end: 4
        }, {
            weekday: 5,
            start: 1,
            end: 2
        }] }]
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
            <Grid container spacing={3} className={classes.mainArea}>
                <Grid item xs={3}>
                    <Paper className={classes.fullHeightPaper}>
                        <LectureSelector subjects={subjects} timeTable={timeTable} setTimeTable={setTimeTable} />
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <div className={classes.fullHeightPaper}>
                        <TimeTable className={classes.fullHeightTimeTable} timeTable={timeTable} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

module.exports = App;
