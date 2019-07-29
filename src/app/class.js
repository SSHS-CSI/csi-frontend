const React = require("react");

const { makeStyles } = require("@material-ui/core/styles");

const Table = require("@material-ui/core/Table").default;
const TableBody = require("@material-ui/core/TableBody").default;
const TableCell = require("@material-ui/core/TableCell").default;
const TableRow = require("@material-ui/core/TableRow").default;
const Chip = require("@material-ui/core/Chip").default;

const FaceIcon = require("@material-ui/icons/Face").default;
const SchoolIcon = require("@material-ui/icons/School").default;

const ClosableDialog = require("./closable-dialog.js");

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

module.exports = ({ teacher, students, assignments, onTeacherClick, onStudentClick, onAssignmentClick, ...props }) => {
    const classes = useStyles();
    return (
        <ClosableDialog scroll="paper" {...props}>
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
                                      onClick={onStudentClick && (e => onStudentClick(e, idx))} />
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
        </ClosableDialog>
    );
};
