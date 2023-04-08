import { useState } from "react"

// components
import Card from "./shared/Card"
import SelectRating from "./SelectRating"
import Button from "./shared/Button"


function FeedbackForm( { getFeedback } ) {


    const [rating, setRating] = useState(10)
    const [text, setText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [message, setMessage] = useState('')
    

    const ratingSelected = (rating) => {
      setRating(rating);
    };


    const handleInput = (e) => {

      if (text === '') {
        setMessage('');
        setIsDisabled(true);
      } else if (text.trim().length < 10) {
        setMessage('Enter at least 10 characters');
        setIsDisabled(true);
      } else if (text.trim().length >= 10) {
        setMessage('');
        setIsDisabled(false);
      } 

      setText(e.currentTarget.value);

    };


    const handleSubmit = (e) => {

      e.preventDefault();

        getFeedback({
          rating,
          text
        });

    };


  return (
    <Card>
        <div className="form-container">

          <h3>Review your expirence with us</h3>

          <form onSubmit={handleSubmit}>
              <SelectRating selectRating={ratingSelected} />
              <div className="text-input-container">
                <input className="text-input" type="text" placeholder="e.g 'I really enjoyed my time here!' " onChange={handleInput} />
                <Button isDisabled={isDisabled} type={'submit'} version={'primary'} />
              </div>
              <div className="form-message">{message}</div>
          </form>

        </div>
    </Card>
  )
}

export default FeedbackForm