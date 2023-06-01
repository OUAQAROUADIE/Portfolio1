import React, { useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"



export default function Navbar(){
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return(
    <header>
      <div className="head">
      <img className="port" src="./images/profile.jpg" />

    <nav ref={navRef}>

      <a  href="#" >
        <h3 className="menu">Home</h3>
      </a>
      <a href="#about">
        <h3 className="menu">About</h3>
        </a>
        <a href="#skills" >
        <h3 className="menu">Skills</h3>
        </a>
        <a href="#services">
        <h3 className="menu">Services</h3>
        </a>
        <a  href="#education" >
        <h3 className="menu">Education</h3>
        </a>
        <a href="#contactme" >
        <h3 className="menu">Contact Me</h3>;
        </a>
        <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />

        </button>
        
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
      <FaBars />
    </button>
    </div>
    <div className="About" id="about">
      <div className="left-info">
        <img className="ouadie" src="./images/profile.jpg" />
        <div className="adresse" >
          <div className="title-addresse">
          <p className="phone-localisation">Adresse :</p>
          <p className="phone">Phone :</p>
          <p className="Email">E-mail :</p>
          </div>
          <div className="title-addresse1">
          <p className="phone-numbre">  avenue Allal Al Fassi - Rabat. JH86+H43, P3301, Âïn-Harrouda</p>
          <p className="phone-numbre"> +212637541024</p>
          <p className="phone-numbre">ouaquarouadie@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="info-personel">
      <h1 className="name" >OUADIE OUAQAR</h1>
      <span className="spec">UX/UI Designer & Front-end Developer</span>
      <div className="compte" >
          <img className="face-icone" src="./images/face.png" />
          <img className="git-icone" src="./images/git.png" />
          <img className="twitter-icone" src="./images/twitter.png" />
          <img className="skype-icone" src="./images/skype.png" />
        </div>
      <p className="descrption">je suis étudiant en développement logiciel. Depuis mon plus jeune âge, 
      j'ai toujours été fasciné par les nouvelles technologies et les dernières tendances dans ce domaine.<br /> 
      Mon intérêt pour l'informatique m'a poussé à poursuivre des études en développement logiciel et à me 
      plonger dans les langages de programmation les plus récents et les plus avancés. <br />
      J'aime travailler en équipe pour résoudre des problèmes complexes et j'ai hâte de mettre 
      mes compétences au service d'une entreprise qui valorise l'innovation et la créativité.
      <br /> En dehors des études, j'aime passer du temps à explorer les dernières tendances technologiques 
       et à travailler sur des projets personnels pour améliorer mes compétences en développement. <br />
        Je suis passionné par l'apprentissage continu,la technologie et le développement
logiciel  et je suis toujours à la recherche de nouvelles façons d'élargir mes connaissances en matière de développement logiciel.
       </p>
      </div>
    </div>
    </header>

  ) 
  

}