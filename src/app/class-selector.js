const React = require("react");
const { useState } = React;

const Dialog = require("@material-ui/core/Dialog").default;
const DialogTitle = require("@material-ui/core/DialogTitle").default;
const DialogContent = require("@material-ui/core/DialogContent").default;
const FormControl = require("@material-ui/core/FormControl").default;
const InputLabel = require("@material-ui/core/InputLabel").default;
const Select = require("@material-ui/core/Select").default;

const ClosableDialog = require("./closable-dialog.js");

module.exports = ({ lecture, currentLectures, setCurrentLectures, ...props }) => {

  const debug = arg => arg || console.log(arg);

  const [classNumber, setClassNumber] = useState(0);
  const handleChange = e => setClassNumber(e.target.value)
  const temp = classNumber => {
    if(currentLectures.reduce((acc, currentLecture) => { debug(acc); return acc || currentLecture == lecture;}, false)) { return; }
    setCurrentLectures(currentLectures => [...currentLectures, [lecture, classNumber]]);
  }

  return (
    <ClosableDialog title="분반 선택" onConfirm={() => temp(classNumber)} {...props}>
      <FormControl>
        <InputLabel>분반</InputLabel>
        <Select
          native
          value={classNumber}
          onChange={handleChange}
        >
          <option value={1}>1분반</option>
          <option value={2}>2분반</option>
        </Select>
      </FormControl>
    </ClosableDialog>
  );
};
