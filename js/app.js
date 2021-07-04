const studentList = localStorageService.students;
const lectureList = localStorageService.lectures;
const studentForm = new Form('#studentForm');
const lectureForm = new Form('#lectureForm');

console.log(lectureForm);

studentForm.onSubmit(addStudent);
lectureForm.onSubmit(addLecture);


function addStudent(student){
    const student1 = new Student(1,student.name, student.course, []);
    studentList.push(student1);
    localStorageService.students = studentList;
}

function addLecture(lecture){
    const lecture1 = new Lecture(1,lecture.title, lecture.course, 
        lecture.studentLimit, lecture.startTime, lecture.endTime, []);
    lectureList.push(lecture1);
    localStorageService.lectures = lectureList;
}

function removeStudent(){
    
}

function removeLecture(){
    
}