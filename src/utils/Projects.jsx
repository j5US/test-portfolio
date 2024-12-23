import { useContext } from "react"
import ThemesContext from "../context/themes"

import natoursImg from "../assets/images/projects/project-natours.png"
import forkifyImg from "../assets/images/projects/project-forkify.png"
import portfolioImg from "../assets/images/projects/project-portfolio.png"
import natoursImgDk from "../assets/images/projects/project-natours-dark.png"
import forkifyImgDk from "../assets/images/projects/project-forkify-dark.png"
import portfolioImgDk from "../assets/images/projects/project-portfolio-dark.png"
import ProjectView from "../components/ProjectView"

const Projects = function () {
    const { isDarkEnabled } = useContext(ThemesContext);
    const landscape =
        <ProjectView
            projectImage={!isDarkEnabled ? natoursImg : natoursImgDk}
            projectTitle={"Natours"}
        />
    const portrait1 =
        <ProjectView
            projectImage={!isDarkEnabled ? forkifyImg : forkifyImgDk}
            projectTitle={"Forkify"}
        />
    const portrait2 =
        <ProjectView
            projectImage={!isDarkEnabled ? portfolioImg : portfolioImgDk}
            projectTitle={"Portfolio"}
        />

    return {
        landscape,
        portrait1,
        portrait2,
    }
}

export default Projects;