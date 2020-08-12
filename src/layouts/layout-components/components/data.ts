import namor from "namor";

const range = (len:any) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};

const newPerson = () => {
	const statusChance = Math.random();
	return {
		firstName: namor.generate({ words: 1, numbers: 0 }),
		lastName: namor.generate({ words: 1, numbers: 0 }),
		age: Math.floor(Math.random() * 30),
		visits: Math.floor(Math.random() * 100),
		progress: Math.floor(Math.random() * 100),
		status:
			statusChance > 0.66
				? "relationship"
				: statusChance > 0.33 ? "complicated" : "single"
	};
};

export function makeData(len = 5553) {
	return range(len).map(d => {
		return {
			...newPerson(),
			children: range(10).map(newPerson)
		};
	});
}
/*  
// This is for the action table
*/
const dataTable = [
    {id: '0' ,name:"Robert Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '1' ,name:"John Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '2' ,name:"David Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '3' ,name:"Juan Carlos",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '4' ,name:"Sarah Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '5' ,name:"Bob Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '6' ,name:"Maria Hernandez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '7' ,name:"Mary Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '8' ,name:"Maria Rodriguez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '9' ,name:"Maria Garcia",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},

    {id: '10' ,name:"Robert Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '11' ,name:"John Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '12' ,name:"David Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '13' ,name:"Juan Carlos",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '14' ,name:"Sarah Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '15' ,name:"Bob Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '16' ,name:"Maria Hernandez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '17' ,name:"Mary Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '18' ,name:"Maria Rodriguez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '19' ,name:"Maria Garcia",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},

    {id: '20' ,name:"Robert Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '21' ,name:"John Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '22' ,name:"David Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '23' ,name:"Juan Carlos",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '24' ,name:"Sarah Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '25' ,name:"Bob Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '26' ,name:"Maria Hernandez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '27' ,name:"Mary Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '28' ,name:"Maria Rodriguez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '29' ,name:"Maria Garcia",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},

    {id: '30' ,name:"Robert Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '31' ,name:"John Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '32' ,name:"David Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '33' ,name:"Juan Carlos",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '34' ,name:"Sarah Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '35' ,name:"Bob Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '36' ,name:"Maria Hernandez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '37' ,name:"Mary Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '38' ,name:"Maria Rodriguez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '39' ,name:"Maria Garcia",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
    
    {id: '40' ,name:"Robert Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '41' ,name:"John Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '42' ,name:"David Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '43' ,name:"Juan Carlos",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '44' ,name:"Sarah Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '45' ,name:"Bob Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '46' ,name:"Maria Hernandez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '47' ,name:"Mary Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '48' ,name:"Maria Rodriguez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '49' ,name:"Maria Garcia",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},

    {id: '50' ,name:"Robert Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '51' ,name:"John Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '52' ,name:"David Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '53' ,name:"Juan Carlos",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '54' ,name:"Sarah Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '55' ,name:"Bob Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '56' ,name:"Maria Hernandez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '57' ,name:"Mary Smith",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Admin"},
	{id: '58' ,name:"Maria Rodriguez",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},
	{id: '59' ,name:"Maria Garcia",email: "info@admin.com",phone: "01009839804",password: "12345password" ,role: "Supervisor"},

];

// id:string;
// name:string;
// email:string;
// parent_name:string;
// grade:string;
// student_phone:string;
// parent_phone:string;
// address:string;
// course:string;
const studentsDataTable = [
	{id: '0' ,name:"Robert Smith",email: "info@admin.com", parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '1' ,name:"John Smith",email: "info@admin.com",
	
	parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '2' ,name:"David Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '3' ,name:"Juan Carlos",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '4' ,name:"Sarah Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '5' ,name:"Bob Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '6' ,name:"Maria Hernandez",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '7' ,name:"Mary Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '8' ,name:"Maria Rodriguez",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '9' ,name:"Maria Garcia",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},

    {id: '10' ,name:"Robert Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '11' ,name:"John Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '12' ,name:"David Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '13' ,name:"Juan Carlos",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '14' ,name:"Sarah Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '15' ,name:"Bob Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '16' ,name:"Maria Hernandez",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '17' ,name:"Mary Smith",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '18' ,name:"Maria Rodriguez",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},
	{id: '19' ,name:"Maria Garcia",email: "info@admin.com",parent_name: "Smith Fathi" ,student_phone: "01009839804",
	parent_phone: "01009839804",address: "shoubra , cairo", course: "course1",grade: "grade1"},

  
];
export { dataTable  , studentsDataTable};