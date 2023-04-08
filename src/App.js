import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Data
import FeedbackData from "./data/data";

// Components
import Navbar from "./components/Navbar";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {

  const [feedback, setFeedback] = useState(FeedbackData);
  const [newFeedback, setNewFeedback] = useState({});

  const getNewFeedback = (newFeedback) => {

    newFeedback.id = uuidv4();

    setNewFeedback(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDelete = (id) => {
      setFeedback(feedback.filter(item => {
        return item.id !== id;
      }));
  };


  return (
    <div className="container">
      <Navbar />
        <main>
          <FeedbackForm getFeedback={getNewFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} deleteFeedback={handleDelete} />
        </main>

    </div>
  );
}

export default App;
