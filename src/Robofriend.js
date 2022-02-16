import React from 'react'
import RobofriendShow from './RobofriendShow'

const Robofriend = ({filterRobots}) => {
    return (
        <div className='grid'>
            {filterRobots.map((robot, i) => {
                return <RobofriendShow key={i} robot={robot}/>
            })}
        </div>
    )
}

export default Robofriend
