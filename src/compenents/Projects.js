import React from "react"
import  ProjectCard  from "./ProjectCard"
import data from "../data";




export default function Projects(){
    const projects = data.map(item =>{
        return(
            <ProjectCard 
            key={item.id}
            {...item}
            />
        )
    })
    return(
        <div className="project-container" id="projects">
            
            <h1>Projects </h1>
            <div className="projects">
            {projects}
            </div>
        </div>
    )
}