const devourClient = require("devour-client");
const jsonApi = new devourClient({ apiUrl: "/api" });

jsonApi.define("assignment", {
    title: "",
    content: "",
    written: "",
    deadline: "",
    author: {
        jsonApi: "hasOne",
        type: "student"
    },
    comments: {
        jsonApi: "hasMany",
        type: "comment"
    }
});

jsonApi.define("comment", {
    content: "",
    written: "",
    author: {
        jsonApi: "hasOne",
        type: "student"
    }
});

jsonApi.define("time", {
    weekday: "",
    start: "",
    end: ""
});

jsonApi.define("class", {
    times: {
        jsonApi: "hasMany",
        type: "time"
    },
    lecture: {
        jsonApi: "hasOne",
        type: "lecture"
    },
    teacher: {
        jsonApi: "hasOne",
        type: "teacher"
    },
    students: {
        jsonApi: "hasMany",
        type: "student"
    },
    assignments: {
        jsonApi: "hasMany",
        type: "assignment"
    }
});

jsonApi.define("lecture", {
    name: "",
    subject: "subject",
    classes: {
        jsonApi: "hasMany",
        type: "class"
    }
});

jsonApi.define("student", {
    name: "",
    phone: "",
    email: "",
    code: "",
    classes: {
        jsonApi: "hasMany",
        type: "class"
    }
});

jsonApi.define("subject", {
    name: "",
    teachers: {
        jsonApi: "hasMany",
        type: "teacher"
    },
    lectures: {
        jsonApi: "hasMany",
        type: "lecture"
    }
});

jsonApi.define("teacher", {
    name: "",
    phone: "",
    email: "",
    subject: {
        jsonApi: "hasOne",
        type: "subject"
    },
    classes: {
        jsonApi: "hasMany",
        type: "class"
    }
});

module.exports = jsonApi;
