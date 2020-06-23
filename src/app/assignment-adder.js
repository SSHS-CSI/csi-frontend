const React = require("react");
const { useState } = React;

const Table = require("@material-ui/core/Table").default;
const TableBody = require("@material-ui/core/TableBody").default;
const TableCell = require("@material-ui/core/TableCell").default;
const TableRow = require("@material-ui/core/TableRow").default;
const Input = require("@material-ui/core/Input").default;

const DateFnsUtils = require("@date-io/date-fns").default;
const {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} = require("@material-ui/pickers");

const ClosableDialog = require("./closable-dialog.js");

module.exports = ({
    setTimeTable, ...props
}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [assigmentName, setAssignmentName] = useState("");
    const [assignmentContent, setAssignmentContent] = useState("");

    return (
        <ClosableDialog {...props}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th">
                                과제명 입력
                            </TableCell>
                            <TableCell>
                                <Input
                                    placeholder="과제명 입력" autoFocus value={assigmentName}
                                    onChange={e => setAssignmentName(e.target.value)} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th">
                                상세 내용
                            </TableCell>
                            <TableCell>
                                <Input
                                    placeholder="상세 내용 입력" multiline value={assignmentContent}
                                    onChange={e => setAssignmentContent(e.target.value)} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" rowSpan={2}>
                                마감 기한 설정
                            </TableCell>
                            <TableCell>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="yyyy/MM/dd"
                                    margin="normal"
                                    id="date-picker"
                                    label="Date picker"
                                    value={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    KeyboardButtonProps={{ "aria-label": "change date" }} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <KeyboardTimePicker
                                    variant="inline"
                                    margin="normal"
                                    id="time-picker"
                                    label="Time picker"
                                    value={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    KeyboardButtonProps={{ "aria-label": "change time" }} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </MuiPickersUtilsProvider>
        </ClosableDialog>
    );
};
