const React = require("react");
const { useState } = React;

const FormControl = require("@material-ui/core/FormControl").default;
const InputLabel = require("@material-ui/core/InputLabel").default;
const Select = require("@material-ui/core/Select").default;

const ClosableDialog = require("./closable-dialog.js");

const debug = arg => console.log(arg) || arg;

module.exports = ({ lecture, currentLectures, setCurrentLectures, ...props }) => {
    const [classNumber, setClassNumber] = useState(1);

    return (
        <ClosableDialog title="분반 선택" onConfirm={() => {
            if(currentLectures.reduce((acc, [currentLecture]) => acc || currentLecture == lecture, false)) { return; }
            setCurrentLectures(currentLectures => debug([...currentLectures, [lecture, classNumber]]));
            props.onClose();
        }} {...props}>
            <FormControl>
                <InputLabel>분반</InputLabel>
                <Select
                    native
                    value={classNumber}
                    onChange={e => setClassNumber(parseInt(e.target.value))}>
                    <option value={1}>1분반</option>
                    <option value={2}>2분반</option>
                </Select>
            </FormControl>
        </ClosableDialog>
    );
};
