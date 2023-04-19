export function StudentDetails({ student: { name, english, maths, computers } }) {
  const totalMarks = english + maths + computers;
  const grade = totalMarks >= 225 ? "A" : totalMarks >= 180 ? 'B' : totalMarks >= 150 ? 'C' : 'D';
  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {name}</p>
      <p>English: {english}</p>
      <p>Maths: {maths}</p>
      <p>Computers: {computers}</p>
      <p>Total Marks: {totalMarks}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}
