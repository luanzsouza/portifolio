import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";


import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/luan.souza.de.almeida/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/luan-souza-de-almeida-531093169/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/luanzsouza/">
                <GitHubIcon/>
            </a>
            
        </div>
    )
}