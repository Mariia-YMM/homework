function Student(name, faculty, marks) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;

    this.getAvgMark = function() {
        if (this.marks.length === 0) {
            return 0;
        }

        const sum = this.marks.reduce((total, mark) => total + mark, 0);
        return sum / this.marks.length;
    };

    this.getMedianMark = function() {
        if (this.marks.length === 0) {
            return 0;
        }

        const sortedMarks = this.marks.slice().sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedMarks.length / 2);

        if (sortedMarks.length % 2 === 0) {
            return (sortedMarks[middleIndex - 1] + sortedMarks[middleIndex]) / 2;
        } else {
            return sortedMarks[middleIndex];
        }
    };

    this.getMaxMark = function() {
        if (this.marks.length === 0) {
            return 0;
        }

        return Math.max(...this.marks);
    };

    this.getMinMark = function() {
        if (this.marks.length === 0) {
            return 0;
        }

        return Math.min(...this.marks);
    };

    this.getTotal = function() {
        return this.marks.reduce((total, mark) => total + mark, 0);
    };

    this.getInfo = function() {
        return this.name + " " + this.faculty + " " + this.getTotal();
    };
}

const student = new Student("John Smith", "Computer Science", [85, 90, 92, 88, 78]);

console.log(student.getAvgMark());
console.log(student.getMedianMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());
