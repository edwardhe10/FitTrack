import "./App.css";
import React, { useState } from "react";
import ExerciseForm from "./components/ExerciseForm";
import ExerciseList from "./components/ExerciseList";
import Statistics from "./components/Statistics";
import Achievements from "./components/Achievements";
import EditExerciseForm from "./components/EditExerciseForm";
import History from "./components/History";

function App() {
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState("workout");
  const [editIndex, setEditIndex] = useState(null); // Track the index of the exercise being edited
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const addExercise = (newExercise) => {
    setExercises([...exercises, newExercise]);
  };

  const deleteExercise = (index) => {
    const updatedExercises = [...exercises];
    // Start at index and remove only 1, so removes the exercise at index
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
  };

  const deleteWorkout = (index) => {
    // Same logic as deleteExercise
    const updatedSavedWorkouts = [...savedWorkouts];
    updatedSavedWorkouts.splice(index, 1);
    setSavedWorkouts(updatedSavedWorkouts);
  };

  const editExercise = (index, updatedExercise) => {
    const updatedExercises = [...exercises];
    updatedExercises[index] = updatedExercise;
    setExercises(updatedExercises);
    setEditIndex(null); // Clear the edit index after updating the exercise
  };

  const saveWorkout = () => {
    if (exercises.length === 0) {
      alert("There are no completed exercises.");
      return;
    }
    // Confirm
    const confirmed = window.confirm(
      "Are you sure you want to save the workout?"
    );
    if (confirmed) {
      const inputDate = prompt("Enter the date (e.g., January 1, 1990):"); // Ask for date
      if (inputDate) {
        const savedWorkoutData = { date: inputDate, exercises };
        setSavedWorkouts([...savedWorkouts, savedWorkoutData]);
        setExercises([]); // Clear the logged exercises list after saving
      }
    }
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
          className={currentPage === "workout" ? "active" : ""}
          onClick={() => handlePageChange("workout")}
        >
          Workout
        </button>
        <button
          className={currentPage === "history" ? "active" : ""}
          onClick={() => handlePageChange("history")}
        >
          History
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
      {currentPage === "workout" && (
        <>
          <div className="exercise-form">
            <ExerciseForm onAddExercise={addExercise} />
          </div>
          <div className="exercise-list">
            <ExerciseList
              exercises={exercises}
              onDeleteExercise={deleteExercise}
              onEditExercise={setEditIndex}
            />
            <button className="save-button" onClick={saveWorkout}>
              Save Workout
            </button>
          </div>
        </>
      )}
      {currentPage === "statistics" && (
        <Statistics savedWorkouts={savedWorkouts} />
      )}
      {currentPage === "achievements" && (
        <Achievements savedWorkouts={savedWorkouts} />
      )}
      {currentPage === "history" && (
        <History
          savedWorkouts={savedWorkouts}
          onDeleteWorkout={deleteWorkout}
        />
      )}
      {editIndex !== null && (
        <div className="edit-modal">
          <EditExerciseForm
            exercise={exercises[editIndex]}
            onSave={(updatedExercise) =>
              editExercise(editIndex, updatedExercise)
            }
            onCancel={() => setEditIndex(null)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
