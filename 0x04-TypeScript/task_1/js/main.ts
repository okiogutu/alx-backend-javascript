// Teacher interface
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})

// Interface
interface Directors extends Teacher {
  numberOfReports: Number,
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;  
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}.${lastName}`;
interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation
class StudentClass implements classInterface{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName;
    this.lastName;
  }

  workOnHomework():string{
    return "Currently working";
  }
  displayName():string{
    return this.firstName;
  }
}
interface StudentConstructor {
  (firstName: string, lastName: string): classInterface;
}

const student = new StudentClass("Djo", "djo");
console.log(student.displayName())
console.log(student.workOnHomework())

