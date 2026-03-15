import { useState, useRef } from 'react'
import { motion } from "framer-motion";
import logo from '../assets/icon.svg'
import photoLogo from '../assets/photoLogo.svg'
import MainPng from '../assets/Container.png'
import dot from '../assets/dot.svg'
import reactIcon from "../assets/reactIcon.svg"
import rocketIcon from "../assets/rocketIcon.svg"
import jsIcon from "../assets/jsIcon.svg"
import iconBox from "../assets/iconBox.svg"
import { FaArrowRight } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Box from "../components/Box.jsx"
import { Link } from 'react-router-dom';
import './css/App.css'
import './css/index.css'


function App() {
  const btn1 = useRef(null);
  const btn2 = useRef(null);
  const btn3 = useRef(null);
  const handleMove = (e, ref) => {
    e.preventDefault()
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--x", x + "px");
    ref.current.style.setProperty("--y", y + "px");
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 3, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ textAlign: "center" }}
        className='Main-page'
      >
        <header>
          <div className="flex-gap10">

            <div className="codeIcon-box">
              <img src={logo} className="codeIcon" alt="logo" />
            </div>
            <h1>Abduraximdev<span>.</span></h1>
          </div>

          <div className="flex">
            <Link className='link active' to="/">Yo‘nalish</Link>
            <Link className='link' to="/">Tajriba</Link>
            <Link className='link' to="/">Texnologiyalar</Link>
            <Link className='link' to="/">Bog'lanish</Link>
          </div>
          <div className="flex">
            <button ref={btn1}
              onClick={() => { window.location.href = "/resume" }}

              onMouseMove={(e) => handleMove(e, btn1)}>Rezyume</button>
            <img className='photoLogo' src={photoLogo} alt="" />
          </div>

        </header>
        <main id='work'>
          <br />
          <div className="flex-center">
            <div className="span-box">

              <img src={dot} alt="" />
              <span style={{ marginLeft: "10px" }} className='main-span'>Yangi loyihalarda ishlashga tayyor</span>
            </div>
          </div>
          <h1>Frontend bilan <br /><span>kelajakni yarataylik</span></h1>
          <p>Zamonaviy texnologiyalar va yuqori samarali  web tajribalar yaratishga   ixtisoslashgan. <br /> Chuqur texnik bilimlarni ilg‘or dizayn bilan uyg‘unlashtiradi. <br /> Biznesingizni onlayn boshqaring. </p>
          <br />
          <br />
          <div className="flex-center">

            <button
              ref={btn2}
              onMouseMove={(e) => handleMove(e, btn2)}
              style={{ borderRadius: "12px", padding: "16px 32px" }}>
              <div className="flex-gap10">
                View Projects<FaArrowRight />
              </div>
            </button>

            <button
              ref={btn3}
              onMouseMove={(e) => handleMove(e, btn3)}
              className="button-2">
              <div className="flex-gap10">
                Contact Me <CiMail style={{ fontSize: "18px" }} />
              </div>
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="container">

            <div className="flex">
              <Box icon={reactIcon} title={"React"} text={"Ilg‘or arxitektura"} />
              <Box icon={rocketIcon} title={"Html"} text={"Semantik tuzilma"} />
              <Box icon={iconBox} title={"Css"} text={"Zamonaviy dizayn"} />
              <Box icon={jsIcon} title={"JS"} text={"Ilova logikasi"} />
            </div>

          </div>
        </main>
        <br />
        <br />
        <br />
        <footer>
          <div className="flex">
            <p>© 2024 DESIGNED BY TECHSPEC STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="flex">
              <a href="">Github</a>
              <a href="">LinkedIn</a>
              <a href="">Dribbble</a>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  )
}

export default App