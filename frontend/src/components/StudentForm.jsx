import { useState } from "react";

function StudentForm({ initial, onSave, onCancel }) {
  const [firstName, setFirstName] = useState(initial?.firstName || "");
  const [lastName, setLastName] = useState(initial?.lastName || "");
  const [email, setEmail] = useState(initial?.email || "");

  const submit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) return;
    onSave({ firstName, lastName, email });
  };

  return (
    <form className="form-card" onSubmit={submit}>
      <h3>{initial ? "Update Student" : "Add New Student"}</h3>
      <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <div className="form-actions">
        <button type="submit" className="btn-update">{initial ? "Update" : "Add"}</button>
        <button type="button" className="btn-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default StudentForm;