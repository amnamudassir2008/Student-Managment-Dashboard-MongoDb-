function StudentTable({ students, onEdit, onDelete }) {
    if (students.length === 0) {
      return <p className="empty">No student found.</p>;
    }
  
    return (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Student First Name</th>
              <th>Student Last Name</th>
              <th>Student Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td data-label="First Name">
                  <span className="avatar">{s.firstName[0]}</span>
                  {s.firstName}
                </td>
                <td data-label="Last Name">{s.lastName}</td>
                <td data-label="Email">{s.email}</td>
                <td data-label="Actions">
                  <div className="actions">
                    <button className="btn-update" onClick={() => onEdit(s)}>Update</button>
                    <button className="btn-delete" onClick={() => onDelete(s.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default StudentTable;