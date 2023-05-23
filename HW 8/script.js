//Средняя оценка студента
function averageGrade(student) {
    const sum = student.marks.reduce((total, mark) => total + mark, 0);
    const average = sum / student.marks.length;
    student.averageGrade = average;
    return student;
}
const withAverageGrade = test.map(student => averageGrade(student));
console.log(withAverageGrade)

//Список студентов на отчисление
function getStudentsExpel(students) {
    return students.filter(student => student.averageGrade < 50);
}
const expelledStudents = getStudentsExpel(withAverageGrade);
console.log(expelledStudents)
//Медианная оценка студента
function calculateMedian(student) {
    const sortedMarks = student.marks.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedMarks.length / 2);
    const median = sortedMarks.length % 2 === 0
        ? (sortedMarks[middle - 1] + sortedMarks[middle]) / 2
        : sortedMarks[middle];
    student.medianGrade = median;
    return student;
}
const studentsWithMedian = withAverageGrade.map(student => calculateMedian(student));
console.log(studentsWithMedian)
//Новый студент
function addNewStudent(name, specialty, marks) {
    const newStudent = {
        name: name,
        specialty: specialty,
        marks: marks
    };
    test.push(newStudent);
}
addNewStudent('John', 'Science', [80, 70, 90]);

//Распечатать список студентов
function printStudentList(students) {
    const sortedStudents = students.sort((a, b) => b.averageGrade - a.averageGrade);
    sortedStudents.forEach(student => {
        console.log(`${student.name} - ${student.averageGrade}`);
    });
}
printStudentList(studentsWithMedian);
//Список самых успешных студентов
function getTopStudents(students) {
    const sortedStudents = students.sort((a, b) => b.averageGrade - a.averageGrade);
    return sortedStudents.slice(0, 5);
}
const topStudents = getTopStudents(studentsWithMedian);
console.log(topStudents)