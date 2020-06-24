module.exports = [{
    name: "수학",
    lectures: [{
        name: "수학 IV",
        subject: "수학",
        classes: [{
            times: [{
                weekday: 1,
                start: 1,
                end: 2
            }, {
                weekday: 4,
                start: 5,
                end: 6
            }],
            teacher: "노창균",
            students: ["조성빈", "신기준", "권현우"],
            assignments: [{
                title: "연습문제 1",
                content: "연습문제 1의 3번 문제부터 16번 문제까지 풀기",
                deadline: new Date("Sun Jul 30 2019"),
                author: "조성빈"
            }]
        }, {
            times: [{
                weekday: 2,
                start: 1,
                end: 2
            }, {
                weekday: 3,
                start: 1,
                end: 2
            }],
            teacher: "김지애",
            students: ["박정환", "정현석", "박정민"],
            assignments: [{
                title: "연습문제 1",
                content: "연습문제 1의 3번 문제부터 16번 문제까지 풀기",
                deadline: new Date("Sun Jul 30 2019"),
                author: "조성빈"
            }]
        }, {
            times: [{
                weekday: 3,
                start: 3,
                end: 4
            }, {
                weekday: 5,
                start: 1,
                end: 2
            }],
            teacher: "노창균",
            students: ["김성민", "이창민", "김시환"],
            assignments: []
        }]
    }, {
        name: "미적분학 I",
        subject: "수학",
        classes: [{ times: [{
            weekday: 1,
            start: 3,
            end: 4
        }, {
            weekday: 3,
            start: 3,
            end: 4
        }] }, { times: [{
            weekday: 2,
            start: 3,
            end: 4
        }, {
            weekday: 3,
            start: 1,
            end: 2
        }] }]
    }]
}];
