const employees = [
    {
      name: 'Jack Smith',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 24000,
    },
    {
      name: 'Mary Robbins',
      level: 3,
      dept: 'Fin',
      designation: 'Manager',
      salary: 28000,
    },
    {
      name: 'Steve Williams',
      level: 4,
      dept: 'Ops',
      designation: 'President',
      salary: 35000,
    },
    {
      name: 'Bob Andrews',
      level: 1,
      dept: 'Fin',
      designation: 'Trainee',
      salary: 16500,
    },
    {
      name: 'Dave Martin',
      level: 2,
      dept: 'Fin',
      designation: 'Manager',
      salary: 21700,
    },
    {
      name: 'Julia Clarke',
      level: 3,
      dept: 'Ops',
      designation: 'Manager',
      salary: 26900,
    },
    {
      name: 'Kathy Jones',
      level: 4,
      dept: 'Tech',
      designation: 'President',
      salary: 42500,
    },
    {
      name: 'Tom Bresnan',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 22200,
    },
  ]

export function EmployeeDetails() {
    return(
        <div>
            <h1>Employee Details</h1>
            <ul>
                {
                    employees.map(({name, level, dept, designation, salary}) => <li style={{backgroundColor: level === 2 ? "orange": "none", border: designation === "President" ? "2px solid red" : "none"}}>Name: {name}, Level: {level}, Dept: {dept}, Designation: {designation}, Salary: {salary}</li>)
                }
            </ul>
            <p>Total Salary Expense: {employees.reduce((sum, {salary}) => sum+=salary, 0)}</p>
        </div>
    )
}
