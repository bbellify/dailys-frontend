import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button'

function Daily(props) {

    // use this to grab state from db, set state to that
    useEffect(() => {

    })

    const defaultDaily = {
        'athletic greens': false,
        'pushups': false,
        'vipassana': false,
        'run': false,
        'sucs': false,
        'floss': false,
    }

    const [dailyState, setDailyState] = useState(defaultDaily)
    const dailyArray = Object.entries(defaultDaily)

    const handleClick = (e) => {
        const activity = e.target.name
        let newState = {...dailyState}
        newState[activity] = !dailyState[activity]
        setDailyState(newState)
    }

    return (
        <div className='d-flex flex-column border m-1 align-items-center py-2'>
            <h2 className=''>every day</h2>
            <div className='d-flex flex-wrap justify-content-center w-100'>
                {dailyArray.map((daily, i) => {
                    return <Button className='col-5 m-1' variant='success' key={i} name={daily} disabled={dailyState[daily]} onClick={(e)=>handleClick(e)}>{daily}</Button>
                })}
            </div>
        </div>
    );
}

export default Daily;