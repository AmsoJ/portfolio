import ProjectLink from './ProjectLink';
import './project.scss';

function Project() {
    return <section className="project container-fluid py-5">
        <header className="project-master">
            <h2 className="title display-4 text-center text-white" style={{fontFamily: "amaBold"}}>
                Projects
            </h2>
        </header>

        <ProjectLink />
        
    </section>
}

export default Project;