import React  from 'react';
import {Link} from 'react-router-dom'

export const UserTicket = ({ticket}) => {
    return (
        <Link to={'/'+ticket.ticketId} >
            <li className='ticket' id={ticket.ticketId}>
                <img className='ticket-icon' src={ticket.owner.avatar}></img>
                <span>{ticket.reportedTime}</span>
                <span>{ticket.asset.name}</span>
                <span>{ticket.status}</span>
            </li>
        </Link> 
        
    )
}
