const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const AppBar = require("@material-ui/core/AppBar").default;
const Toolbar = require("@material-ui/core/Toolbar").default;
const IconButton = require("@material-ui/core/IconButton").default;
const MenuIcon = require("@material-ui/icons/Menu").default;
const Typography = require("@material-ui/core/Typography").default;
const Button = require("@material-ui/core/Button").default;
const TextField = require("@material-ui/core/TextField").default;
const MoreHorizIcon = require("@material-ui/icons/MoreHoriz").default;
const EditIcon = require("@material-ui/icons/Edit").default;
const SaveIcon = require("@material-ui/icons/Save").default;

const ClosableDialog = require("./closable-dialog.js");

const useStyles = makeStyles(theme => ({
    menu: { marginRight: theme.spacing() },
    title: { flexGrow: 1 },
    loginDialog: {
        display: "flex",
        flexDirection: "column"
    },
    editIcon: { marginRight: theme.spacing() }
}));

module.exports = ({
    onMenuClick, setIsEditMode, isEditMode, ...props
}) => {
    const classes = useStyles();
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

    return (
        <AppBar {...props}>
            <Toolbar>
                <IconButton edge="start" color="inherit" className={classes.menu} onClick={onMenuClick}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>Jirung World</Typography>
                <IconButton edge="end" color="inherit" className={classes.editIcon} onClick={() => setIsEditMode(isEditMode => !isEditMode)}>
                    {isEditMode ? <SaveIcon /> : <EditIcon />}
                </IconButton>
                <Button color="inherit" onClick={() => setIsLoginDialogOpen(true)}>로그인</Button>
                <ClosableDialog title="로그인" open={isLoginDialogOpen}  onClose={() => setIsLoginDialogOpen(false)}>
                    <div className={classes.loginDialog}>
                        <TextField type="email" placeholder="Email" margin="normal" autoFocus />
                        <TextField type="password" placeholder="Password" margin="normal" />
                    </div>
                </ClosableDialog>
            </Toolbar>
        </AppBar>
    );
};
