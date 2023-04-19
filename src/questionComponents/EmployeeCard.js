export function EmployeeCard({ name, designation, experience }) {
  return (
    <div>
      <h1>Employee Details</h1>
      <p>{name}</p>
      <p><span style={{ color: "green" }}>Designation: </span>{designation}</p>
      <p><span style={{ color: "blue" }}>Experience: </span>{experience}</p>
    </div>
  );
}
