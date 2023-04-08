import PropTypes from 'prop-types'

import Card from "./shared/Card"
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({rating, text, id, handleDelete}) {


  return (
    <Card>
        <div className="rating-container">
            <h4>{rating}</h4>
        </div>
        <button onClick={() => handleDelete(id)} className="close-icon">
          <FaTimes color='white' />
        </button>
        <p className="feedback-text">
          {text}
        </p>
    </Card>
  )
}

FeedbackItem.propTypes = {
  rating: PropTypes.number,
  text: PropTypes.string,
}

export default FeedbackItem