import React  from 'react';
import {Link} from 'react-router-dom'
import {Ticket} from "../ts/ticket"
type Props ={
    ticket:Ticket;
}

export const UserTicket:React.FC<Props>=({ticket}) => {
    const date=new Date(ticket.reportedTime).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
    console.log(date)
    return (
        <Link to={'/'+ticket.ticketId} >
            <li className='ticket-list_item' id={String(ticket.ticketId)}>
                <img className='ticket-list_icon' src={ticket.owner.avatar}></img>
                <span className="ticket-list_reported">{date}</span>
                <span className="ticket-list_name">{ticket.asset.name}</span>
                <span className="ticket-list_status">{ticket.status}</span>
            </li>
        </Link> 
        
    )
}
