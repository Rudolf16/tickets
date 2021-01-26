import React ,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Ticket} from "../ts/ticket"

const AboutTicket= (props:any) => {
        let tickets=useSelector((state:Ticket[])=>state);
        let ticket=tickets.find(ticket=>ticket.ticketId==props.match.params.id)!
        const date=new Date(ticket.lastUpdatedTime).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
        const date_2=new Date(ticket.reportedTime).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}); 
        return (
            <div className='ticket-page'>
                <header className='ticket-page-header'>
                    <div>
                        <span>TICKET NO. </span>
                        <span>{ticket.number}</span>
                    </div>
                    <div>
                        <span>Last update </span>
                        <span>{date}</span>
                    </div>
                </header>
                <section className='about-ticket'>
                    <h4 className='about-ticket__hat'>Owner</h4>
                    <div className="about-ticket_main-content">
                        <img className='ticket-icon' src={ticket.owner.avatar}></img>
                        <div>
                            <p><span>{ticket.owner.firstName}</span><span>{ticket.owner.lastName}</span></p>
                            <p>{ticket.owner.specialities}</p>
                        </div>
                    </div>
                </section>
                <section className='about-ticket'>
                    <h4 className='about-ticket__hat'>Details</h4>
                    <div className="about-ticket_main-content">
                        <div>
                            <p>Reported</p>
                            <p>{date_2}</p>
                        </div>
                        <div>
                            <p>Status</p>
                            <p>{ticket.status}</p>
                        </div>
                        <div>
                            <p>Description</p>
                            <p>{ticket.description}</p>
                        </div>
                        
                    </div>
                </section>
                <section className='about-ticket'>
                    <h4 className='about-ticket__hat'>Asset</h4>
                    <div className="about-ticket_main-content">
                        <div>
                            <p>Name</p>
                            <p>{ticket.asset.name}</p>
                        </div>
                        <div>
                            <p>GeoCode</p>
                            <p>{ticket.asset.geoCode}</p>
                        </div>
                        <div>
                            <p>Location</p>
                            <div>{ticket.asset.kmFrom}</div>
                            <div>{ticket.asset.kmTo}</div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
}

export default AboutTicket;
