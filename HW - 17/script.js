class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    welcome() {
        console.log(`Hi! I'm ${this.name} ${this.surname}`);
    }
}

class Student extends Person {
    constructor(name, surname, faculty, marks) {
        super(name, surname);
        this.faculty = faculty;
        this.marks = marks;
    }

    getAvgMark() {
        const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks.length;
    }

    getMedianMark() {
        const sortedMarks = this.marks.slice().sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedMarks.length / 2);
        return sortedMarks.length % 2 === 0
            ? (sortedMarks[middleIndex - 1] + sortedMarks[middleIndex]) / 2
            : sortedMarks[middleIndex];
    }

    getMaxMark() {
        return Math.max(...this.marks);
    }

    getMinMark() {
        return Math.min(...this.marks);
    }

    getTotal() {
        return this.marks.reduce((acc, mark) => acc + mark, 0);
    }

    getInfo() {
        return `${this.name} ${this.surname}, ${this.faculty}, total: ${this.getTotal()}`;
    }
}

class Headman extends Student {
    constructor(name, surname, faculty, marks) {
        super(name, surname, faculty, marks);
    }

    defendGroup() {
        console.log("This is my group. I'm their hero!");
    }
}

const person = new Person('John', 'Smith');
person.welcome();

const student = new Student('Jane', 'Smith', 'some-faculty', [90, 85, 92, 88]);
student.welcome();
console.log("Average Mark:", student.getAvgMark());
console.log("Median Mark:", student.getMedianMark());
console.log("Max Mark:", student.getMaxMark());
console.log("Min Mark:", student.getMinMark());
console.log("Total:", student.getTotal());
console.log("Info:", student.getInfo());

const headman = new Headman('Bruce', 'Smith', 'some-faculty', [90, 85, 92, 88]);
headman.welcome();
headman.defendGroup();
console.log("Average Mark:", headman.getAvgMark());
console.log("Median Mark:", headman.getMedianMark());
console.log("Max Mark:", headman.getMaxMark());
console.log("Min Mark:", headman.getMinMark());
console.log("Total:", headman.getTotal());
console.log("Info:", headman.getInfo());
