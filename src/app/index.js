const React = require("react");
const { useState } = React;

const { makeStyles } = require("@material-ui/core/styles");

const AppBar = require("@material-ui/core/AppBar").default;
const Drawer = require("@material-ui/core/Drawer").default;
const Divider = require("@material-ui/core/Divider").default;
const Link = require("@material-ui/core/Link").default;
const List = require("@material-ui/core/List").default;
const ListItem = require("@material-ui/core/ListItem").default;
const ListItemText = require("@material-ui/core/ListItemText").default;
const ListItemIcon = require("@material-ui/core/ListItemIcon").default;
const Toolbar = require("@material-ui/core/Toolbar").default;
const IconButton = require("@material-ui/core/IconButton").default;
const Typography = require("@material-ui/core/Typography").default;
const MenuIcon = require("@material-ui/icons/Menu").default;
const SubjectIcon = require("@material-ui/icons/Subject").default;
const ClassIcon = require("@material-ui/icons/Class").default;
const AssignmentIcon = require("@material-ui/icons/Assignment").default;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    menu: {
        marginRight: theme.spacing()
    },
    list: {
        width: drawerWidth
    },
    listTitle: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    listTitleLink: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(0.5),
        "&:hover": {
            color: theme.palette.primary.main
        }
    }
}));

const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const classes = useStyles();
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" className={classes.menu} onClick={() => setIsDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Jirung World</Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <List className={classes.list}>
                    <ListItem>
                        <div className={classes.listTitle}>
                            <Link variant="h6" color="textSecondary" onClick={() => setIsDrawerOpen(false)} className={classes.listTitleLink}>Jirung World</Link>
                            <Typography color="textSecondary" variant="caption">v0.0.1</Typography>
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <SubjectIcon />
                        </ListItemIcon>
                        <ListItemText primary="과목" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ClassIcon />
                        </ListItemIcon>
                        <ListItemText primary="수업" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="과제" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

module.exports = App;
