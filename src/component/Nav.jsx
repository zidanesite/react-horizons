import React from 'react'

function Nav() {
  return (
    <>
    <nav>
            <img src="Images/horizons-offices.png" className="horizons"/>
            <div className="flag">
                <img src="Images/Ghana.jpg" height="16" width="25" className="m-1"/>
                <img src="Images/Nigeria.jpg" height="16" width="25" className="m-1"/>
                <img src="Images/Kenya.png" height="16" width="25" className="m-1"/>
            </div>
            <h3><a href="#">About US</a></h3>
        </nav>
    </>

  )
}

export default Nav