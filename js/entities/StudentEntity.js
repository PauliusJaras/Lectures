class StudentEntity {
    
    static counter = 0;

    constructor(fullName, course, lectures){
        this.id = 'stud_' + Student.counter++;
        this.fullName = fullName;
        this.course = course;
        this.lectures = lectures
    }

}