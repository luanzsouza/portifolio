import { Header } from "./components/header/header"
import './styles/home.scss'

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <div className="experience">
        <h3>Experience</h3>
        <p>
          2 years of experience in web development using languages like
          javascript,typescript and SQL.Working with React,Angular,Node and others.
        </p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>languages</h3>
          <div className="languages-info">
            <span>EN - Fluent</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="education">
            <span>🎓</span>
            <span>
            Systems Development Analyst-UNOPAR
            </span>
          </div>


        </div>
        <div className="buttons">
          <div className="sociais">

          </div>
          <button>Contact me!</button>
        </div>

      </div>

    </main>
  )
}
