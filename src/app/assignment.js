const React = require("react");

const Table = require("@material-ui/core/Table").default;
const TableBody = require("@material-ui/core/TableBody").default;
const TableCell = require("@material-ui/core/TableCell").default;
const TableRow = require("@material-ui/core/TableRow").default;

const ClosableDialog = require("./closable-dialog.js");

module.exports = ({
    assignment: {
        title, content, deadline
    }, ...props
}) => (
    <ClosableDialog {...props}>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">제목</TableCell>
                    <TableCell>{title}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">내용</TableCell>
                    <TableCell>{content}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell component="th" scope="row" variant="head">마감</TableCell>
                    <TableCell>{deadline && deadline.toLocaleDateString()}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </ClosableDialog>
);
