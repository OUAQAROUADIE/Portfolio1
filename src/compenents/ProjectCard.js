import React from "react" 
import { Col } from "react-bootstrap"
import Projects from "./Projects"

export default function ProjectCard (props) {
    return(
        
            <div className="projectItem">
                <img src={props.imgUrl} className="project-img" ></img>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p className="project-type">{props.type}</p>
            </div>
            
        
        
    )
    }