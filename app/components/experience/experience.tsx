import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>2 years working as a Software Developer, involved in several projects both in companies and freelance .</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={3} years="2 years"/>
            <Skill image="/ts.png" measure={3} years="2 years"/>
            <Skill image="/js.png" measure={3} years="2 years"/>
            <Skill image="/java.png" measure={2} years="1 year"/>
          </div>
        </div>
    )
}