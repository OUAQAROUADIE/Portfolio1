import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School" 
import { Done, LaptopWindowsOutlined } from "@material-ui/icons"
export default function Education(){
return(
    <div className="Education" id="education">
        <h1 className="Education-title">Education </h1>

<VerticalTimeline lineColor="#0000FF" className="VerticalTimeline" >

            <VerticalTimelineElement className="vertical-timeline-element--education"
            iconClassName="my-custom-icon"
            date="2022-2025"
            iconStyle={{background: "0000FF",backgroundColor:"blue", color:"white"}}
            icon={<SchoolIcon/>}
            >
                <h3 className="vertical-timeline-element--title">Advanced Software Engineering for Digital Services
                    (ASEDS)
                </h3>
                <p>Institut National de Postes et Télécommunications (INPT)</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2020-2022"
            iconStyle={{background: "#0000FF",backgroundColor:"blue", color:"white", Left:"-10cm", position:"absolute"}}
            icon={<SchoolIcon/>}
            >
                <h3 className="vertical-timeline-element--title">DEUST : Mathématiques, Informatique, Physique,
                    Chimie (MIPC)
                </h3>
                <p>Faculté des Sciences et Techniques (FST)</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2020-2022"
            dateClassName="date"
            iconStyle={{background: "0000FF",backgroundColor:"blue", color:"white"  }}
            icon={<SchoolIcon  />}
            
             >
                <h3 className="vertical-timeline-element--title">Baccalauréat Sciences Physiques
                </h3>
                <p>Lycée Mohamed V</p>

            </VerticalTimelineElement>
            
        </VerticalTimeline>
    </div>
)
}