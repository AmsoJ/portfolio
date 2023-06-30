import {FaBriefcase,FaHome, FaSearchLocation, FaLocationArrow} from 'react-icons/fa';


const navData = [
    {
        id: 0,
        element: <FaHome />,
        title: "Home",
    },
    {
        id: 1,
        element: <FaSearchLocation />,
        title: "About",
    },
    {
        id: 2,
        element: <FaBriefcase />,
        title: "Project"
    },
    {
        id: 3,
        element: <FaLocationArrow />,
        title: "Location"
    }
]

export default navData;