const ValidationSchema = new class {

    get studentValidation(){
        return {

        fullName: [
            (val) => val.length < 0 ? true : "Name can not be blank",
            (val) => val != "Tavotevas" ? true : "Name denied"
        ],
        course: [
            (val) => val > 0 ? true : "Course value must be higher than 0",
            (val) => val <= 6 ? true : "Course value can not be higher than 5"
        ],
        lectures: [
            
        ]
        }
    }

    get lectureValidation(){
        return {

        title: [
            (val) => val.length >= 10 ? true : "The title should be constructed of at least 10 symbols",
            (val) => val.length <= 20 ? true : "The title can not be longer than 20 symbols"
        ],
        course: [
            (val) => val > 0 ? true : "Course value must be higher than 0",
            (val) => val > 0 ? true : "Testing multiple errors",
            (val) => val <= 6 ? true : "Course value can not be higher than 5"
        ],
        studentLimit: [
            (val) => val > 0 ? true : "The limit should be higher than 0",
            (val) => val <= 15 ? true : "Maximum 15 students in a class"
        ],
        startTime: [
            (val) => val < endTime.val ? true : "The lecture should start before it ends",
        ],
        endTime: [
            (val) => val > startTime.val ? true : "The lecture should end after the start time",
        ],
        students: [

        ]
        }
    }
}   