class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }

    fullName(){
        return `your name ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Fahim", "Sami", 2);
