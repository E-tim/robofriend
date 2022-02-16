import React from 'react'

const RobofriendShow = ({robot}) => {
    return (
        <div className='grid'>
            
                <img alt='robots' src={`https://robohash.org/${robot.id}`}/>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            
        </div>
    )
}

export default RobofriendShow
