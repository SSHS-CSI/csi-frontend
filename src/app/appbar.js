const React = require("react");

const { makeStyles } = require("@material-ui/core/styles");

const AppBar = require("@material-ui/core/AppBar").default;
const Toolbar = require("@material-ui/core/Toolbar").default;
const IconButton = require("@material-ui/core/IconButton").default;
const MenuIcon = require("@material-ui/icons/Menu").default;
const Typography = require("@material-ui/core/Typography").default;

const useStyles = makeStyles(theme => ({
    menu: {
        marginRight: theme.spacing()
    }
}));

module.exports = ({ onMenuClick, ...props }) => {
    const classes = useStyles();

    return (
        <AppBar {...props}>
            <Toolbar>
                <IconButton edge="start" color="inherit" className={classes.menu} onClick={onMenuClick}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Jirung World</Typography>
            </Toolbar>
        </AppBar>
    );
};
