import projectdata from './projectdata';

function ProjectLink() {
    return <div className="project-board container row justify-content-center mx-auto">
            {
                projectdata.map(projects => {
                    return <Linkage
                        key={projects.id}
                        {...projects}
                    />
                })
            }
    </div>
}

function Linkage({projectName, pic, detail, techStack, link}) {
    return <a href={link} target="_blank" rel="noreferrer" className="project-link col-12 col-md-5 overflow-hidden shadow-lg bg-light rounded-3 p-0">
        <div className="project-main position-relative" style={{height: "50vh"}}>
            <div className="picture-of-project position-absolute" style={{height: "100%"}}></div>
            <div className="picture-of-project position-absolute" style={{height: "100%"}}></div>
            
            <article className="project-detail-board postion-absolute text-center">
                <h3 className="project-name" style={{fontFamily: "amaBold",}}>{projectName}</h3>
                <p className="project-detailed" style={{fontFamily: "amaReg", textDecoration: "none"}}>
                    {detail}
                </p>
                <div className="techused d-flex align-items-center justify-content-center">
                    {
                        techStack.map(technology => {
                            return <p key={technology}>{technology}</p>
                        })
                    }
                </div>
            </article>
        </div>
    </a>
}

export default ProjectLink;
