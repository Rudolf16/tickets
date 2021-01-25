import React  from 'react';
import {Link} from 'react-router-dom'

export const UserTicket = ({ticket}) => {
    return (
        <Link to={'/'+ticket.ticketId} >
            <li className='ticket-list_item' id={ticket.ticketId}>
                <img className='ticket-list_icon' src={ticket.owner.avatar}></img>
                <span className="ticket-list_reported">{ticket.reportedTime}</span>
                <span className="ticket-list_name">{ticket.asset.name}</span>
                <span className="ticket-list_status">{ticket.status}</span>
            </li>
        </Link> 
        
    )
}
