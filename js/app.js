//Gets localStorage data
let studentList = localStorageService.students;
let lectureList = localStorageService.lectures;

const studentForm = new Form('#studentForm');
const lectureForm = new Form('#lectureForm');
const studentTable = new StudentTable(studentList);
const lectureTable = new LectureTable(lectureList);


//Fills table list with data from localStorage
lectureTable.onload();
studentTable.onload();

//On submit adds data to the localStorage
studentForm.onSubmit(addStudent);
lectureForm.onSubmit(addLecture);


//Adds a student to the localStorage
function addStudent(e){
    const student = new Student(1,e.name, e.course, []);
    studentList.push(student);
    localStorageService.students = studentList;

    
}

//Adds a lecture to the localStorage
function addLecture(e){
    const lecture = new Lecture(1,e.title, e.course, 
        e.studentLimit, e.startTime, e.endTime, []);
    lectureList.push(lecture);
    localStorageService.lectures = lectureList;
}

//Removes a student from the localStorage and DOM
function removeStudent(e){
    const studentName = e.target.parentNode.firstChild.textContent;
    const result = studentList.filter(x=> x.fullName !== studentName);
    studentList = result;
    localStorageService.students = result;
    e.target.parentNode.remove();
}

//Removes a lecture from the localStorage and DOM
function removeLecture(e){
    const lectureTitle = e.target.parentNode.firstChild.textContent;
    const result = lectureList.filter(x=> x.title !== lectureTitle);
    lectureList = result;
    localStorageService.lectures = result;
    e.target.parentNode.remove();
}