function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student3 = new Student('Tony', 'male', 37);
let student4 = new Student('Olga', 'female', 35);
let student5 = new Student('Elena', 'female', 32);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  }
  else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function(...marks) {
  if(this.marks === undefined) {
    this.marks = marks;
  }
  else {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function() {
 return this.marks.reduce((acc, item) => acc + item) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
