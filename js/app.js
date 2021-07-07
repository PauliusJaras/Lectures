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

function updateStudent(e){

    const studentName = e.target.parentNode.firstChild.textContent;
    const student = studentList.filter(x=> x.fullName === studentName);
    const name = document.querySelector('#name');
    const course = document.querySelector('#course');
    name.value = student[0].fullName;
    course.value = student[0].course;

}

function updateLecture(e){

    const lectureTitle = e.target.parentNode.firstChild.textContent;
    const lecture = lectureList.filter(x=> x.title === lectureTitle);
    const title = document.querySelector('#title');
    const course = document.querySelector('#lectureForm > #course');
    const studentLimit = document.querySelector('#studentLimit');
    const startTime = document.querySelector('#startTime');
    const endTime = document.querySelector('#endTime');
    title.value = lecture[0].title;
    course.value = lecture[0].course;
    studentLimit.value = lecture[0].studentLimit;
    startTime.value = lecture[0].startTime;
    endTime.value = lecture[0].endTime; 

}