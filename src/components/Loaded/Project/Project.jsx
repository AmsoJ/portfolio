import { useGlobalContext } from '../GlobalHooks/Context';
import ProjectLink from './ProjectLink';
import './project.scss';

function Project() {
    const {darkMode} = useGlobalContext();

    return <section className={`project container-fluid py-5 ${darkMode ? "darkMode" : null}`} id="project">
        <header className="project-master">
            <h2 className="title display-4 text-center" style={{fontFamily: "amaBold"}}>
                Projects
            </h2>
        </header>

        <ProjectLink />
        
    </section>
}

export default Project;