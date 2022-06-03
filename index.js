"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.codecademy.com/courses/learn-typescript/projects/union-types-project
// Q1
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
// Q4 - Q14
const searchEvents = (options) => {
    const events = options.eventType === "course" ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === "number") {
            return options.query === event.id;
        }
        if (typeof options.query === "string") {
            return event.keywords.includes(options.query);
        }
    });
};
// Q17 - Q18
let enrolledEvents = [];
// Q16 - Q19
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
// Q15
const searchResults = searchEvents({ query: "art", eventType: "course" });
console.log(searchResults);
// Q20 - Q21
console.log("ENTER THE DRAGON! new Line!!\n", enrolledEvents);
enroll(searchResults[0]);
console.log(enrolledEvents);
/* If I want to continue further! DO THESE!

22.
Congratulations! You are now enrolled at Unionversity. May your future be a combination of bright and amazing. Your collection of enrolled events are sure to include elements of rigorous study and intrigue. Once you finish all of your courses, you will surely earn the type of degree you’ve always wanted.

Interested in extra credit?

Allow the enroll() function to take in a list of courses and add them all to enrolledEvents.
Add another function that allows you to drop a course.
Add another function that prints only the titles of your enrolled events.

*/ 
