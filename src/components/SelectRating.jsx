import { useState } from "react"

function SelectRating({selectRating}) {

    const [selected, setSelected] = useState(10)


    const handleSelected = (e) => {
      setSelected(+e.currentTarget.value);
      selectRating(+e.currentTarget.value)
    };



  return (
    <ul className="rating">
        {
            Array.from({length: 10}, (_, i) => {
                return (
                        <li key={i + 1}>
                            <label htmlFor={`num${i + 1}`}>{i + 1}
                                <input 
                                type="radio" 
                                name="rating"
                                value={i + 1} 
                                id={`num${i + 1}`} 
                                checked={selected === i + 1}
                                onChange={handleSelected}
                                />
                            </label>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default SelectRating