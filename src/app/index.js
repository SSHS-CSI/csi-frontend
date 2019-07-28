const React = require("react");
const { useState } = React;

const AppBar = require("./appbar.js");
const Drawer = require("./drawer.js");
const Class = require("./class.js");

const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isClassDialogOpen, setIsClassDialogOpen] = useState(false);
    return (
        <div>
            <AppBar onMenuClick={() => setIsDrawerOpen(true)} />
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Class name="객체지향" open={isClassDialogOpen}
                   onClose={() => setIsClassDialogOpen(false)} teacher="박미영"
                   students={["조성빈", "신기준", "권현우"]} assignments={[{
                       title: "연습문제 1",
                       deadline: new Date("Sun Jul 30 2019"),
                   }]}/>
        </div>
    );
};

module.exports = App;
