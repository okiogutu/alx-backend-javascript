interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Student objects
const firstStudent: Student = {
	firstName: "Innocent",
	lastName: "Udo",
	age: 100,
	location: "Nigeria"
}

const secondStudent: Student = {
	firstName: "Charles",
	lastName: "Udo",
	age: 50,
	location: "Calabar"
}

// Students array
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
