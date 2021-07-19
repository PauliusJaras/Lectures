const studentFormValidationSchema = {

    fullName: [
        (val) => val.length > 0 ? true : "Name can not be blank",
        (val) => val != "Tavotevas" ? true : "Name denied"
    ],
    course: [
        (val) => val > 0 ? true : "Course value must be higher than 0",
        (val) => val <= 6 ? true : "Course value can not be higher than 5"
    ],
    lectures: [

    ]
}