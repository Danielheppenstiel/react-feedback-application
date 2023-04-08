import PropTypes from 'prop-types'


function FeedbackStats({ feedback }) {

    let average = feedback.reduce((accumulator, currentNumber) => {
        return accumulator + currentNumber.rating;
    }, 0) / feedback.length;

    average = average.toFixed(1);



  return (
    <div className="stats-container">
        <div className='stat'>
            <p>
                {
                feedback.length === 0 ? 'No Reviews' : feedback.length
                }
            </p>
        </div>
        <div className='stat'>
            <p> 
                {
                    isNaN(average) ? `Average Rating: 0` : `Average Rating: ${average}`
                }
            </p>
        </div>
    </div>
  )
};


FeedbackStats.propTypes = {
    feedback: PropTypes.array,
};


export default FeedbackStats