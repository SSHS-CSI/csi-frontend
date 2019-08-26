const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const FormControl = require("@material-ui/core/FormControl").default;
const InputLabel = require("@material-ui/core/InputLabel").default;
const Select = require("@material-ui/core/Select").default;
const MenuItem = require("@material-ui/core/MenuItem").default;

const ClosableDialog = require("./closable-dialog.js");

const useStyles = makeStyles({ paper: { minWidth: 180 } });

module.exports = ({
    lecture, timeTable, setTimeTable, ...props
}) => {
    const [classNumber, setClassNumber] = useState(0);
    const classes = useStyles();

    return (
        <ClosableDialog
            title="분반 선택" onConfirm={() => {
                const idx = timeTable.findIndex(({ name }) => name == lecture.name);
                const time = {
                    name: lecture.name,
                    subject: lecture.subject,
                    times: lecture.classes[classNumber].times,
                    teacher: lecture.classes[classNumber].teacher,
                    students: lecture.classes[classNumber].students,
                    assignments: lecture.assignments
                };

                if(idx != -1 && timeTable[idx].times === lecture.classes[classNumber].times) { props.onClose(); return; }
                setTimeTable(timeTable => idx != -1 ? [...timeTable.slice(0, idx), time, ...timeTable.slice(idx + 1)] : [...timeTable, time]);
                props.onClose();
            }} classes={{ paper: classes.paper }} {...props}>
            <FormControl>
                <InputLabel>분반</InputLabel>
                <Select
                    value={classNumber}
                    onChange={e => setClassNumber(parseInt(e.target.value))}>
                    {lecture && lecture.classes && lecture.classes.map((_, idx) => <MenuItem key={idx} value={idx}>{idx + 1}분반</MenuItem>)}
                </Select>
            </FormControl>
        </ClosableDialog>
    );
};
