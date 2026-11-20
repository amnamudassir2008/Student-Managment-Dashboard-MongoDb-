import { useEffect, useState } from "react";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";
import "./App.css";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/students";
function App() {
 const [students,setStudents]=useState([]); const [search,setSearch]=useState("");
 const [showForm,setShowForm]=useState(false); const [editStudent,setEditStudent]=useState(null);
 const [loading,setLoading]=useState(true); const [error,setError]=useState("");
 const loadStudents=async()=>{try{setError("");const r=await fetch(API_URL);const d=await r.json();if(!r.ok)throw new Error(d.message||"Could not load students");setStudents((d.students||[]).map(s=>({...s,id:s._id})));}catch(e){setError(e.message||"Could not connect to server");}finally{setLoading(false);}};
 useEffect(()=>{loadStudents();},[]);
 const filtered=students.filter(s=>`${s.firstName} ${s.lastName} ${s.email}`.toLowerCase().includes(search.toLowerCase()));
 const handleDelete=async id=>{try{const r=await fetch(`${API_URL}/${id}`,{method:"DELETE"});const d=await r.json();if(!r.ok)throw new Error(d.message||"Could not delete student");setStudents(curr=>curr.filter(s=>s.id!==id));setError("");}catch(e){setError(e.message||"Could not delete student");}};
 const handleEdit=student=>{setEditStudent(student);setShowForm(true);};
 const handleSave=async data=>{try{const editing=Boolean(editStudent);const r=await fetch(editing?`${API_URL}/${editStudent.id}`:API_URL,{method:editing?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});const d=await r.json();if(!r.ok)throw new Error(d.message||"Could not save student");await loadStudents();setShowForm(false);setEditStudent(null);setError("");}catch(e){setError(e.message||"Could not save student");}};
 return <div className="app"><header className="header"><div><h1>Student List</h1><p>Total Students: <b>{filtered.length}</b></p></div><button className="btn-add" onClick={()=>{setEditStudent(null);setShowForm(true);}}>+ Add Student</button></header>
 <div className="search-box"><input type="text" placeholder="Search by name or email..." value={search} onChange={e=>setSearch(e.target.value)}/><button className="btn-search">Search</button></div>
 {error&&<p role="alert" className="error-message">{error}</p>}{showForm&&<StudentForm key={editStudent?.id||"new-student"} initial={editStudent} onSave={handleSave} onCancel={()=>{setShowForm(false);setEditStudent(null);}}/>}
 {loading?<p className="empty">Loading students...</p>:<StudentTable students={filtered} onEdit={handleEdit} onDelete={handleDelete}/>}
 </div>;
}
export default App;
