import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button'

function Monthly(props) {

    // use this to grab state from db, set state to that
    useEffect(() => {

    })

    const defaultMonthly = {
        'bills': false,
        'savings': false,
        'bitcoin': false,
        'credit card': false,
    }

    const [monthlyState, setMonthlyState] = useState(defaultMonthly)
    const monthlyArray = Object.entries(defaultMonthly)

    const handleClick = (e) => {
        const activity = e.target.name
        let newState = {...monthlyState}
        newState[activity] = !monthlyState[activity]
        setMonthlyState(newState)
    }

    return (
        <div className='d-flex flex-column border m-1 align-items-center py-2'>
            <h2>every month</h2>
            <div className='d-flex flex-wrap justify-content-center w-100'>
                {monthlyArray.map((monthly, i) => {
                    return <Button className='col-5 m-1' variant='success' key={i} name={monthly} disabled={monthlyState[monthly]} onClick={(e)=>handleClick(e)}>{monthly}</Button>
                })}
            </div>
        </div>
    );
}

export default Monthly;