#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Persons {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Persons();
const progStart = async (persons) => {
    do {
        console.log("Welcome");
        const ans = await inquirer.prompt({
            type: "list",
            message: "whom would you like to talk to?",
            name: "select",
            choices: ["self", "student"],
        });
        if (ans.select = "self") {
            console.log("Hellow i am talking to myself");
            console.log("I am fine");
        }
        if (ans.select = "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "which student would you like to talk?",
                name: "student"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Helow i am ${name.name}, i am fine`);
                console.log(persons.students);
            }
            ;
            if (student) {
                console.log(`Helow i am ${student.name}, i am fine.....`);
                console.log(persons.students);
            }
        }
    } while (true);
};
progStart(persons);
