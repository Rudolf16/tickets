import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {UserTicket}  from './Userticket'
import {Ticket} from "../ts/ticket"
type Props={
    tickets:Ticket[]
}


const Navbar:React.FC<Props>=({tickets})=>{
    const[currentTickets,setCurrentTickets]=useState(tickets);
    const[seacrhTickets,setSeacrhTickets]=useState(tickets);
    const[ticketName,setTicketName]=useState('')

    useEffect(()=>{
        setSeacrhTickets(currentTickets.filter(el=>el.asset.name.toLowerCase().includes(ticketName.trim().toLowerCase())))

    },[currentTickets,ticketName])

    return(
        <nav className='tickets-navigate'>
            <input className='search-field' type='text' value={ticketName} onChange={(e)=>setTicketName(e.target.value)}/>
            <ul className='tickets-list'>
            {seacrhTickets.map(ticket=>{
                return(<UserTicket  ticket={ticket}/>)
            })}
            </ul>
        </nav>
    )
             
}

const mapStateToProps=(state:Ticket[])=>{
    return{tickets:state};
  
  }
  
export default connect(mapStateToProps)(Navbar);