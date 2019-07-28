const React = require("react");

const { makeStyles } = require("@material-ui/core/styles");

const Button = require("@material-ui/core/Button").default;
const Dialog = require("@material-ui/core/Dialog").default;
const DialogActions = require("@material-ui/core/DialogActions").default;
const DialogContent = require("@material-ui/core/DialogContent").default;
const DialogTitle = require("@material-ui/core/DialogTitle").default;
const IconButton = require("@material-ui/core/IconButton").default;
const Table = require("@material-ui/core/Table").default;
const TableBody = require("@material-ui/core/TableBody").default;
const TableCell = require("@material-ui/core/TableCell").default;
const TableRow = require("@material-ui/core/TableRow").default;
const Chip = require("@material-ui/core/Chip").default;

const CloseIcon = require("@material-ui/icons/Close").default;
const FaceIcon = require("@material-ui/icons/Face").default;
const SchoolIcon = require("@material-ui/icons/School").default;

const useStyles = makeStyles(theme => ({
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1)
    },
    chip: {
        margin: theme.spacing(0.5)
    }
}));

module.exports = ({ open, name, teacher, students, assignments, onClose,
                    onTeacherClick, onStudentClick, onAssignmentClick,
                    ...props }) => {
    const classes = useStyles();
    return (
        <Dialog open={open} scroll="paper" {...props}>
            <DialogTitle>
                {name}
                <IconButton className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                교사
                            </TableCell>
                            <TableCell colSpan={2}>
                                <Chip icon={<SchoolIcon />} label={teacher}
                                      onClick={onTeacherClick}
                                      className={classes.chip} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                학생
                            </TableCell>
                            <TableCell colSpan={2}>
                                {students.map((student, idx) => (
                                    <Chip label={student} icon={<FaceIcon />}
                                          key={student} className={classes.chip}
                                          onClick={e => onStudentClick(e, idx)} />
                                ))}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row"
                                       rowSpan={assignments.length + 1}>
                                과제
                            </TableCell>
                            <TableCell variant="head">제목</TableCell>
                            <TableCell variant="head">마감</TableCell>
                        </TableRow>
                        {assignments.map(({ title, deadline }, idx) => (
                            <TableRow hover onClick={e => onAssignmentClick(e, idx)}>
                                <TableCell>{title}</TableCell>
                                <TableCell>
                                    {deadline.toLocaleDateString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>확인</Button>
            </DialogActions>
        </Dialog>
    );
};
