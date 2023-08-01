import "./App.css";
import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import Statistics from "./components/Statistics";
import Achievements from "./components/Achievements";
import EditWorkoutForm from "./components/EditWorkoutForm";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState("workouts");
  const [editIndex, setEditIndex] = useState(null); // Track the index of the workout being edited

  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const deleteWorkout = (index) => {
    const updatedWorkouts = [...workouts];
    // Start at index and remove only 1, so removes the workout at index
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
  };

  const editWorkout = (index, updatedWorkout) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index] = updatedWorkout;
    setWorkouts(updatedWorkouts);
    setEditIndex(null); // Clear the edit index after updating the workout
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setEditIndex(null); // Clear the edit index when switching pages
  };

  return (
    <div className={`App ${editIndex !== null ? "edit-mode" : ""}`}>
      <h1>FitTrack</h1>
      <div className="page-buttons">
        <button
          className={currentPage === "workouts" ? "active" : ""}
          onClick={() => handlePageChange("workouts")}
        >
          Workouts
        </button>
        <button
          className={currentPage === "statistics" ? "active" : ""}
          onClick={() => handlePageChange("statistics")}
        >
          Statistics
        </button>
        <button
          className={currentPage === "achievements" ? "active" : ""}
          onClick={() => handlePageChange("achievements")}
        >
          Achievements
        </button>
      </div>
      {currentPage === "workouts" && (
        <>
          <div className="workout-form">
            <WorkoutForm onAddWorkout={addWorkout} />
          </div>
          <div className="workout-list">
            <WorkoutList
              workouts={workouts}
              onDeleteWorkout={deleteWorkout}
              onEditWorkout={setEditIndex}
            />
          </div>
        </>
      )}
      {currentPage === "statistics" && <Statistics workouts={workouts} />}
      {currentPage === "achievements" && <Achievements workouts={workouts} />}
      {editIndex !== null && (
        <div className="edit-modal">
          <EditWorkoutForm
            workout={workouts[editIndex]}
            onSave={(updatedWorkout) => editWorkout(editIndex, updatedWorkout)}
            onCancel={() => setEditIndex(null)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
