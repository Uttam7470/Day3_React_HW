import './body.css'
function Body(){
    return(
        <>
        <main>
        <div className='hero'></div>
        <div className='content'>
                <h1>Think Health. Think Massage.</h1>
                <p>We are open 9am to 6pm ,Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
            <div id='btn'>
                <button>LEARN ABOUT MORE</button>
                <button>CONTACT US TODAY</button>
            </div>
        </div>

        <div className='details'>
            <p className='color'>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
            <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your healt and improve your performance with our treatments.</p>
            <p>We welcome you to come explore all the benefits. You'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
        </div>
        <hr />

        <div className='contact'>
            <h2>Family Wellness Massage Therapy</h2>
            <p>9876 Main Street, Suite 123,Mainland, ML12345</p>
            <p>Phone:9876543210</p>
        </div>
        </main>
        </>
    )
}

export default Body ;