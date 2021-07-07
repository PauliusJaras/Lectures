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
    const student = new Student(e.name, e.course, []);

    if(student.fullName === '' || student.course === ''){
        console.log('Field can`t be blank');
    } else if(studentList.every(x=> x.fullName !== student.fullName)){
        studentList.push(student);
        localStorageService.students = studentList;
    } else {
        console.log('Entry already exists! Use another name');
    }
}

//Adds a lecture to the localStorage
function addLecture(e){
    const lecture = new Lecture(e.title, e.course, 
        e.studentLimit, e.startTime, e.endTime, []);

        if(lecture.title === '' || lecture.course === '' || lecture.studentLimit === ''
        || lecture.startTime === '' || lecture.endTime === ''){
            console.log('Field can`t be blank');
        } else if(lectureList.every(x=> x.title !== lecture.title)){
            lectureList.push(lecture);
            localStorageService.lectures = lectureList;
        } else {
            console.log('Entry already exists! Use another title');
        }
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

//Fill student form with selected data
function updateStudent(e){

    const studentName = e.target.parentNode.firstChild.textContent;
    const student = studentList.filter(x=> x.fullName === studentName);
    const name = document.querySelector('#name');
    const course = document.querySelector('#course');
    name.value = student[0].fullName;
    course.value = student[0].course;

}

//Fill lecture form with selected data
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