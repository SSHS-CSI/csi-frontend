const React = require("react");
const { useState } = React;

const AppBar = require("./appbar.js");
const Drawer = require("./drawer.js");

const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <div>
            <AppBar onMenuClick={() => setIsDrawerOpen(true)} />
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </div>
    );
};

module.exports = App;
