const React = require("react");
const {
    useState, useEffect
} = React;

const { makeStyles } = require("@material-ui/core/styles");

const CssBaseline = require("@material-ui/core/CssBaseline").default;
const Grid = require("@material-ui/core/Grid").default;
const Paper = require("@material-ui/core/Paper").default;
const CircularProgress = require("@material-ui/core/CircularProgress").default;

const jsonApi = require("./api.js");

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
    fullPaper: {
        height: "100%",
    },
    fullTimeTable: { height: "100%" },
    timeTableTile: { padding: theme.spacing(2) },
    leftGrid: {
        position: "relative",
    },
    circularProgress: {
        position: "absolute",
        top: "calc(50% - 20px)",
        left: "calc(50% - 20px)"
    }
}));

const App = () => {
    const classes = useStyles();

    const [subjects, setSubjects] = useState([]);
    const [isSubjectLoading, setIsSubjectLoading] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isClassDialogOpen, setIsClassDialogOpen] = useState(false);
    const [isAssignmentDialogOpen, setIsAssignmentDialogOpen] = useState(false);
    const [timeTable, setTimeTable] = useState([]);

    useEffect(() => { (async () => {
        setIsSubjectLoading(true);
        setSubjects((await jsonApi.findAll("subjects", { include: "lectures.classes" })).data);
        setIsSubjectLoading(false);
    })(); }, []);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar onMenuClick={() => setIsDrawerOpen(true)} />
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Class title="객체지향" open={isClassDialogOpen}
                onClose={() => setIsClassDialogOpen(false)} teacher="박미영"
                students={["조성빈", "신기준", "권현우"]} assignments={[{
                    title: "연습문제 1",
                    deadline: new Date("Sun Jul 30 2019")
                }]}/>
            <Assignment open={isAssignmentDialogOpen} title="과제" onClose={() => setIsAssignmentDialogOpen(false)}
                assignment={{
                    title: "연습문제 1",
                    content: "연습문제 1의 3번 문제부터 16번 문제까지 풀기",
                    deadline: new Date("Sun Jul 30 2019"),
                    author: "조성빈"
                }} />
            <Grid container spacing={3} className={classes.mainArea}>
                <Grid item xs={3} className={classes.leftGrid}>
                    {isSubjectLoading && <CircularProgress className={classes.circularProgress} />}
                    <Paper className={classes.fullPaper}>
                        <LectureSelector subjects={subjects} timeTable={timeTable} setTimeTable={setTimeTable} />
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <div className={classes.fullPaper}>
                        <TimeTable className={classes.fullTimeTable} timeTable={timeTable} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

module.exports = App;
