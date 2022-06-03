// https://www.codecademy.com/courses/learn-typescript/projects/union-types-project
// Q1
import courses from "./courses";
import studyGroups from "./studyGroups";

// Q2
type Course = {
  id: number; 
  studyGroupId: number; 
  title: string; 
  keywords: string[]; 
  eventType: string
}

// Q3
type StudyGroup = {
  id:number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string
}

// Q6
type SearchEventsOptions = {
  query: string | number;
  eventType: "course" | "group"
}

// Q4 - Q14
const searchEvents = (options : SearchEventsOptions) : (Course | StudyGroup)[] => {
  const events: (Course | StudyGroup)[] = options.eventType === "course" ? courses : studyGroups;

  return events.filter((event : Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return options.query === event.id;
    }
    
    if (typeof options.query === "string") {
      return event.keywords.includes(options.query);
    }
  })
}

// Q17 - Q18
let enrolledEvents: (Course | StudyGroup)[] = [];
// Q16 - Q19
function enroll(event: Course | StudyGroup): void {
  enrolledEvents = [...enrolledEvents, event];
}

// Q15
const searchResults = searchEvents({ query: "art" , eventType: "course" });
console.log(searchResults);

// Q20 - Q21
console.log("ENTER THE DRAGON! new Line!!\n",enrolledEvents);
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