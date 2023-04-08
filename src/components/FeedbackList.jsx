import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, deleteFeedback}) {


  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
          <FeedbackItem key={item.id} rating={item.rating} text={item.text} handleDelete={deleteFeedback} id={item.id} />
        ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
}


export default FeedbackList