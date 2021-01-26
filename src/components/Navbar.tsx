import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {UserTicket}  from './Userticket'
import {Ticket} from "../ts/ticket"



const Navbar=()=>{
    const state = useSelector((state:Ticket[])=>state)
    
    
    const[currentTickets,setCurrentTickets]=useState(state);
    const[seacrhTickets,setSeacrhTickets]=useState(state);
    const[ticketName,setTicketName]=useState<string>('')

    useEffect(()=>{
        setSeacrhTickets(currentTickets.filter((el)=>el.asset.name.toLowerCase().includes(ticketName.trim().toLowerCase())))

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

export default Navbar