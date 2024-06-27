import {useParams} from "react-router-dom";
import BtnPhone from "../components/btnPhone/BtnPhone";
import {projects} from "./../helpers/projectsList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];
	const images = project.images.map(image => {return <img src={image} className="project-images__cover" />})
    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}, {project.year}</h1>
					<h2 className="title-2">{project.price.toLocaleString('ru-RU')} &#8381;</h2>

					<div className="project-images">
						{images}
					</div>
	
					<div className="project-details__desc">
						<p>{project.desc}</p>
					</div>

					{project.phone && (
						<BtnPhone link="https://vk.com" />
					)}
				</div>
			</div>
		</main>
	);
}

export default Project;