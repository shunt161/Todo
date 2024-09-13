import "./styles.css";

export default function App() {
  
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="task">New Task</label>
      <br />
      <input type="text" id="task" />
      <button className="btn">Add</button>
    </div>
    

  </form>
  <h1 className="header">Todo List</h1>
  </>
  )
}