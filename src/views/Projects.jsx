import './Projects.css';

function Projects() {
    return (
        <div id="project-content">
            <div id='left'>

            </div>
            <div id="right">
                <p class="right"><strong>Featured Project</strong></p>
                <h3 class="right">Peak Fitness App</h3>
                <div id='synopsis-container'>
                    <p id="synopsis" class="right">
                        A fitness app used to track personal bests and help set achievable goals for each workout.
                        This was created using <strong>React, Node.js, Express.js</strong> and <strong>MongoDB.</strong> I also
                        created and published an <strong>iOS App</strong> using <strong>Swift.</strong> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects;