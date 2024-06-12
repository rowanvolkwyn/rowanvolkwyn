import './Projects.css';
import peak from '../assets/peak-screenshot.jpeg';

function Projects() {
    return (
        <div>
            <div id="project-content">
                <div id='left'>
                    <img src={peak}></img>
                </div>
                <div id="right">
                    <p class="right"><strong>Featured Project</strong></p>
                    <h3 class="right">Peak Fitness App</h3>
                    <div id='synopsis-container'>
                        <p id="synopsis" class="right">
                            A fitness app used to track personal bests and help set achievable goals for each workout.
                            This was created using <strong>React, Node.js, Express.js</strong> and <strong>MongoDB.</strong>  
                        </p>
                    </div>
                </div>
            </div>
            <div id="project-content">
                <div id='left'>
                    <img src={peak}></img>
                </div>
                <div id="right">
                    <p class="right"><strong>Project</strong></p>
                    <h3 class="right">Mortgage Calculator</h3>
                    <div id='synopsis-container'>
                        <p id="synopsis" class="right">
                            A mortgage repayment calculator built using <strong>React</strong> and <strong>Node.js</strong> 
                            to help users calculate their mortgage repayments and expected investment returns.
                        </p>
                    </div>
                </div>
            </div>
            <div id="project-content">
                <div id='left'>
                    <img src={peak}></img>
                </div>
                <div id="right">
                    <p class="right"><strong>Project</strong></p>
                    <h3 class="right">Card Search</h3>
                    <div id='synopsis-container'>
                        <p id="synopsis" class="right">
                            A <strong>React</strong> app that uses the <strong>Scryfall API</strong> to search for Magic: The Gathering cards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;