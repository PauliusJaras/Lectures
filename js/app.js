const studentList = localStorageService.students;
const lectureList = localStorageService.lectures;

console.log(studentList);


const studentForm = new Form('#studentForm');

studentForm.onSubmit(addStudent);


function addStudent(student){
    const student1 = new Student(1,student.name, student.course, []);
    studentList.push(student1);
    localStorageService.students = studentList;
}

function removeStudent(){
    
}