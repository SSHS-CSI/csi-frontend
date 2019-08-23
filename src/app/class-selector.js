const React = require("react");
const { useState } = React;

const FormControl = require("@material-ui/core/FormControl").default;
const InputLabel = require("@material-ui/core/InputLabel").default;
const Select = require("@material-ui/core/Select").default;
const MenuItem = require("@material-ui/core/MenuItem").default;

const ClosableDialog = require("./closable-dialog.js");

module.exports = ({ lecture, timeTable, setTimeTable, ...props }) => {
    const [classNumber, setClassNumber] = useState(0);

    return (
        <ClosableDialog title="분반 선택" onConfirm={() => {
            if(timeTable.reduce((acc, { name }) => acc || name == lecture.name, false)) { return; }
            setTimeTable(timeTable => [...timeTable, {
                name: lecture.name,
                subject: lecture.subject,
                times: lecture.classes[classNumber].times
            }]);
            props.onClose();
        }} {...props}>
            <FormControl>
                <InputLabel>분반</InputLabel>
                <Select
                    value={classNumber}
                    onChange={e => setClassNumber(parseInt(e.target.value))}>
                    {lecture && lecture.classes && lecture.classes.map((_, idx) => (
                        <MenuItem key={idx} value={idx}>{idx + 1}분반</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </ClosableDialog>
    );
};
