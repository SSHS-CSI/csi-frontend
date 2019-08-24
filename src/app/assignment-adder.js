const React = require("react");
const { useState } = React;

const Grid = require("@material-ui/core/Grid").default;

const DateFnsUtils = require("@date-io/date-fns").default;
const {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} = require("@material-ui/pickers");

const ClosableDialog = require("./closable-dialog.js");

module.exports = ({ ...props }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    return (
        <ClosableDialog {...props}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{ "aria-label": "change date" }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{ "aria-label": "change date" }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{ "aria-label": "change time" }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </ClosableDialog>
    );
};
