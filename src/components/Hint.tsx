import React from 'react'

interface Props {
    hint: string
    showHint: ()=> void
    displayHint: boolean
}

const Hint = ({hint, showHint, displayHint} : Props) => {

    return (
        <div>
         <button className="button hint" onClick={showHint}>Hint</button>
           <h4>
            {displayHint? `Hint:  ${hint}` : ''}
           </h4>
        </div>
    )
}

export default Hint
