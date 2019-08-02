const React = require("react");
const { useState } = React;

const AppBar = require("./appbar.js");
const Drawer = require("./drawer.js");
const Class = require("./class.js");
const Assignment = require("./assignment.js");

const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isClassDialogOpen, setIsClassDialogOpen] = useState(false);
    const [isAssignmentDialogOpen, setIsAssignmentDialogOpen] = useState(true);
    return (
        <div>
            <AppBar onMenuClick={() => setIsDrawerOpen(true)} />
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Class title="객체지향" open={isClassDialogOpen}
                   onClose={() => setIsClassDialogOpen(false)} teacher="박미영"
                   students={["조성빈", "신기준", "권현우"]} assignments={[{
                       title: "연습문제 1",
                       deadline: new Date("Sun Jul 30 2019"),
                   }]}/>
            <Assignment open={isAssignmentDialogOpen} title="과제" onClose={() => setIsAssignmentDialogOpen(false)}
                        assignment={{
                            title: "연습문제 1",
                            content: "연습문제 1의 3번 문제부터 16번 문제까지 풀기",
                            deadline: new Date("Sun Jul 30 2019"),
                            author: "조성빈"
                        }} />
        </div>
    );
};

module.exports = App;
