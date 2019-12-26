class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
      let sum = 0;
      for (let i = 0 ; i<this.scores.length;i++){
        sum += this.scores[i];
      }
        return sum/this.scores.length;
    }
}

let firstStudent = new Student("Fahim", "Sami",1);
let secondStudent = new Student("Blue", "Horse",2);
