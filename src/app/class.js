const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const List = require("@material-ui/core/List").default;
const Table = require("@material-ui/core/Table").default;
const TableBody = require("@material-ui/core/TableBody").default;
const TableCell = require("@material-ui/core/TableCell").default;
const TableRow = require("@material-ui/core/TableRow").default;
const Chip = require("@material-ui/core/Chip").default;

const FaceIcon = require("@material-ui/icons/Face").default;
const SchoolIcon = require("@material-ui/icons/School").default;
const AddIcon = require("@material-ui/icons/Add").default;
const InfoIcon = require("@material-ui/icons/Info").default;
const IconButton = require("@material-ui/core/IconButton").default;

const AssignmentAdder = require("./assignment-adder.js");

const useStyles = makeStyles(theme => ({
  chip: { margin: theme.spacing(0.5) },
  InfoIcon: {
      right: theme.spacing(2)
  }
}));

module.exports = ({
    title, teacher, students, assignments, onTeacherClick, onStudentClick, onAssignmentClick, timeTable, setTimeTable, isAssignmentAdderOpen, setIsAssignmentAdderOpen, ...props
}) => {
    const classes = useStyles();
    console.log(assignments);
    return (
        <List scroll="paper" {...props}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell align="center" component="th" scope="row" colSpan={2}>
                        {title}
                        </TableCell>
                        <TableCell align="center" component="th" scope="row" >
                        <IconButton edge="start" color="inherit" className={classes.InfoIcon}>
                            <InfoIcon />
                        </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            교사
                        </TableCell>
                        <TableCell colSpan={2}>
                            <Chip
                                icon={<SchoolIcon />} label={teacher}
                                onClick={onTeacherClick}
                                className={classes.chip} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            학생
                        </TableCell>
                        <TableCell colSpan={2}>
                            {Array.isArray(students) && students.map((student, idx) => (
                                <Chip
                                    label={student} icon={<FaceIcon />}
                                    key={student} className={classes.chip}
                                    onClick={onStudentClick && (e => onStudentClick(e, idx))} />
                            ))}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell
                            component="th" scope="row"
                            rowSpan={Array.isArray(assignments) ? assignments.length + 2 : 2}>
                            과제
                        </TableCell>
                        <TableCell variant="head">제목</TableCell>
                        <TableCell variant="head">마감</TableCell>
                    </TableRow>
                    {Array.isArray(assignments) && assignments.map(({
                        title, deadline
                    }, idx) => (
                        <TableRow hover onClick={e => onAssignmentClick(e, idx)} key={title}>
                            <TableCell>{title}</TableCell>
                            <TableCell>
                                {deadline.toLocaleDateString()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </List>
    );
};
