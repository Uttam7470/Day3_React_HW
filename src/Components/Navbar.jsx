import './navbar.css'
function Navbar(){
    return(
        <>
       <div className="nav">   

        <h1>Family Wellness</h1>
        <p>MASSAGE THERAPY</p>

        <ul>
            <li className='active'>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>FAQ</li>
            <li>CONTACT</li>
        </ul>
       </div>
       </>
    )
}

export default Navbar