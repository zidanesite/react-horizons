import React from 'react'

function Plans(props) {
  return (
    <>
        <div>
            
          <h1>
            {props.text}
          </h1>
          <hr/>
        </div>
        <div className="container">
          <div className="card-deck">
            <div className="card">
              <img src="Images/right.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">VIRTUAL OFFICES</h5>
                <p className="card-text">
                  Our virtual offices allow your 
                  phone services and asa-you become
                  a member of our community with
                  benetts such as access to our
                  meeung rooms.</p>
              </div>
            </div>
            <div className="card">
              <img src="Images/second.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">CUSTOMIZED OFFICES</h5>
                <p className="card-text">
                  Our customized offices offer a great
                  location for your business and you
                  can customize your office to suit your
                  preferences. Also, you become a
                  member of our community with
                  benefits such as access to our
                  meeting rooms</p>
              </div>
            </div>
            <div className="card">
              <img src="Images/third.avif" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">MEETING ROOMS</h5>
                <p className="card-text">
                  
                  Our meeting rooms offer a great
                  location for your meeting with your
                  clients or business partners. We
                  provide presentation equipment and
                  coflee, Also you become a member
                  of our community with benefits such
                  - to our meeting Foom!.</p>
              </div>
            </div>
            <div className="card">
              <img src="Images/fourth.avif" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">SERVICED OFFICES</h5>
                <p className="card-text">
                  Our serviced offices offer a great
                  location for your business and we
                  provide services such as internet
                  utilities and otters from our partners.
                  Also you become a member of our
                  benefits such as access to our meeting rooms.</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Plans