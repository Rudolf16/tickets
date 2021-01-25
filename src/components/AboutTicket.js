import React ,{useEffect} from 'react'
import {connect} from 'react-redux'

const AboutTicket = ({ticket}) => {
    console.log(ticket)
    useEffect(() => {
        console.log(ticket)
    }, [])
    
    return (
        <div className='ticket-page'>
            <header className='ticket-page-header'>
                <div>
                    <span>TICKET NO. </span>
                    <span>{ticket.number}</span>
                </div>
                <div>
                    <span>Last update </span>
                    <span>{ticket.lastUpdatedTime}</span>
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
                        <p>{ticket.reportedTime}</p>
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

const mapStateToProps=(state,oldstate)=>{
    let id=state.find(ticket=>ticket.ticketId==oldstate.match.params.id)
    return{ticket:id};
  
  }
  

// export default AboutTicket; 
export default connect(mapStateToProps)(AboutTicket);
