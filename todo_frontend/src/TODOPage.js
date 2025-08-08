import React, { useState } from "react";
import styles from "./TODOPage.module.css";
import TODOStatusBar from "./components/TODOStatusBar";
import TODOAppBar from "./components/TODOAppBar";
import TODONavBar from "./components/TODONavBar";
import TODOCard from "./components/TODOCard";
import FABAddTodo from "./components/FABAddTodo";

// Dummy data for demonstration; replace with real API or storage
const initialTodos = [
  { id: 1, title: "Buy groceries", subtitle: "Milk, eggs, bread", completed: false },
  { id: 2, title: "Finish project report", subtitle: "Due by 10am", completed: true },
  { id: 3, title: "Read a book", subtitle: "30 pages from React book", completed: false },
];

// PUBLIC_INTERFACE
function TODOPage() {
  /**
   * The main TODO page as per Figma/design system.
   * Features: status bar, app bar, nav bar, todo card list, floating action button.
   */
  const [todos, setTodos] = useState(initialTodos);
  const [filterIdx, setFilterIdx] = useState(0);

  // Filter: 0 = all, 1 = completed
  const filteredTodos =
    filterIdx === 0
      ? todos
      : todos.filter((td) => td.completed);

  const handleCompleteToggle = (id) => {
    setTodos((prev) =>
      prev.map((td) =>
        td.id === id ? { ...td, completed: !td.completed } : td
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((td) => td.id !== id));
  };

  const handleEdit = (id) => {
    // Placeholder: could open modal/route
    window.alert("Edit TODO (not implemented)");
  };

  const handleAddNew = () => {
    // Placeholder: could show modal or new route
    window.alert("Add New TODO (not implemented)");
  };

  return (
    <div className={styles.pageContainer}>
      <TODOStatusBar />
      <TODOAppBar />
      <TODONavBar activeTab={filterIdx} onTabChange={setFilterIdx} />
      <main className={styles.todosList}>
        {filteredTodos.length === 0 ? (
          <div style={{ textAlign: "center", color: "#999", marginTop: "2em" }}>
            No todos to show.
          </div>
        ) : (
          filteredTodos.map((td) => (
            <TODOCard
              key={td.id}
              title={td.title}
              subtitle={td.subtitle}
              completed={td.completed}
              onCheck={() => handleCompleteToggle(td.id)}
              onDelete={() => handleDelete(td.id)}
              onEdit={() => handleEdit(td.id)}
            />
          ))
        )}
      </main>
      <FABAddTodo onClick={handleAddNew} />
    </div>
  );
}

export default TODOPage;
