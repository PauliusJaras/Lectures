class LectureEntity {
    
    static counter = 0;

    constructor(title, course, studentLimit, startTime, endTime, students) {
        this.id = 'lect_' + Lecture.counter++;
        this.title = title;
        this.course = course;
        this.studentLimit = studentLimit;
        this.startTime = startTime;
        this.endTime = endTime;
        this.students = students
    }

}