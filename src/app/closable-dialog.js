const React = require("react");

const { makeStyles } = require("@material-ui/core/styles");

const Button = require("@material-ui/core/Button").default;
const Dialog = require("@material-ui/core/Dialog").default;
const DialogTitle = require("@material-ui/core/DialogTitle").default;
const DialogContent = require("@material-ui/core/DialogContent").default;
const DialogActions = require("@material-ui/core/DialogActions").default;
const IconButton = require("@material-ui/core/IconButton").default;

const CloseIcon = require("@material-ui/icons/Close").default;

const useStyles = makeStyles(theme => ({
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1)
    }
}));

module.exports = ({ title, onClose, children, ...props }) => {
    const classes = useStyles();
    return (
        <Dialog scroll="paper" {...props}>
            <DialogTitle>
                {title}
                <IconButton className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>확인</Button>
            </DialogActions>
        </Dialog>
    );
};
