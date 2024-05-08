import './Home.css';
import resume from '../assets/resume.pdf'

function Home() {
    const openPdf = () => {
        window.open(resume);
    };

    return (
        <div id='container'>
            <p id="intro"><strong>Hi, my name is</strong></p>
            <h1>Rowan Volkwyn</h1>
            <h2>and I'm a Software Engineer.</h2>
            <p>I love building <strong>fullstack apps</strong> that<strong> delight the user </strong>
              and <strong>provide tremendous value.</strong> <br></br>I'm currently looking to join a team of like-minded people 
             to help solve issues that I'm passionate about.</p>
             <button onClick={openPdf}>Check out my Resume!</button>
        </div>
    )
}

export default Home;