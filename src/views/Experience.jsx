import './Experience.css';

function Experience() {
    return (
        <div id='container'>
            <h3>My Experience</h3>
            <div class='job-tile'>
                <h4>Engineer <strong>@ PEXA</strong></h4>
                <p>September 2023 - November 2023</p>
                <ul>
                    <li><p>Refactored and onboarded APIs to the Kong API Gateway</p></li>
                    <li><p>Independently handled onboarding and subscription in various environments (DEV and TEST)</p></li>
                    <li><p>Used GitHub Actions to modify actions, debug, run workflows and manage branches in different environments</p></li>
                    <li><p>Tested in Postman to ensure expected responses and tokens</p></li>
                </ul>
            </div>
            <div class='job-tile'>
                <h4>Web Developer <strong>@ Wellbeings Digital</strong></h4>
                <p>September 2021 - October 2022</p>
                <ul>
                    <li><p>Collaborated with stakeholders to design two websites</p></li>
                    <li><p>Took websites from idea to production</p></li>
                    <li><p>Implemented various environments to stage changes before pushing them live</p></li>
                    <li><p>Integrated payment solutions and successfully sold digital and physical products</p></li>
                </ul>
            </div>
            <div class='job-tile'>
                <h4>Quality Engineer <strong>@ PEXA</strong></h4>
                <p>February 2020 - August 2020</p>
                <ul>
                    <li><p>Developed automated test scripts to ensure quality standards were met on the PEXA Platform</p></li>
                    <li><p>Established comprehensive testing standards used company wide</p></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Experience;