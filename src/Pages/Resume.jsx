import { useRef } from "react";
import "./css/Resume.css";
import "./css/index.css"
import logo from "../assets/resumeLogo.svg"
import photoLogo from "../assets/photoLogo.svg"
import resumeFoto from "../assets/resumeFoto.png"
import arrowIcon from "../assets/arrowIcon.svg"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GrSend } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import iconSend from '../assets/iconSave.svg'
import resume1 from '../assets/resumeBox1.svg'
import resume2 from '../assets/resumeBox2.svg'
import iconFlash from "../assets/iconFlash.svg"
function Resume() {
    const btn1 = useRef(null);

    const handleMove = (e, ref) => {
        e.preventDefault()
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ref.current.style.setProperty("--x", x + "px");
        ref.current.style.setProperty("--y", y + "px");
    };
    const box1 = useRef(null);
    const box2 = useRef(null);

    const handleMoveBox = (e, ref) => {
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div
                    className="resume-page"

                >
                    <header>
                        <div className="flex-gap10">

                            <div className="codeIcon-box">
                                <img src={logo} className="codeIcon" alt="logo" />
                            </div>
                            <h1>Abduraximdev<span>.</span></h1>
                        </div>

                        <div className="flex">
                            <Link className='link ' to="/">Yo‘nalish</Link>
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
                    <br />
                    <br />
                    <nav>
                        <p>Home <img src={arrowIcon} alt="" /> <span>About Me</span></p>
                    </nav>
                    <main>
                        <div className="left-main ">
                            <div className="resume-box">
                                <div className="resume">
                                    <br />
                                    <img className="logo" src={resumeFoto} alt="" />
                                    <h2>MansurovAbduraxim</h2>
                                    <p>Junior Frontend Developer</p>
                                    <br />
                                    <span><BiPhone className="icon" /><a href="tel:997630159" target="_blank" style={{ all: "unset" }}>+998 99-763-01-59</a></span>
                                    <span><GrSend className="icon" /><a href="https://t.me/MansurovAbduraxim" target="_blank" style={{ all: "unset" }}>@MansurovAbduraxim</a></span>
                                    <span><MdAlternateEmail className="icon" /><a href="mailto:abduraxim746@gmail.com" target="_blank" style={{ all: "unset" }}>abduraxim746@gmail.com</a></span>
                                    <br />
                                    <br />
                                    <div className="flex-gap10">

                                        <button ref={btn1} onMouseMove={(e) => handleMove(e, btn1)} style={{ width: "100%" }}>
                                            <div className="flex-center">
                                                <MdOutlineSaveAlt style={{ fontSize: "20px" }} />CV  </div>
                                        </button>
                                        <button
                                            style={{ backgroundColor: "rgba(30, 41, 59, 1)", padding: "10px" }} className="send-btn">
                                            <img className="iconSend" src={iconSend} alt="" />
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="right-main">
                            <p className="bg-p">Background</p>
                            <br />
                            <h1 className="right-title">Biznesingizni onlayn <br /> <span>nazorat qiling</span> va <span>boshqaring</span>. </h1>
                            <br />
                            <div className="flex">
                                <div className="w-50">
                                    <div onMouseMove={(e) => handleMoveBox(e, box1)} ref={box1} className="box-resume">
                                        <img src={resume1} alt="" srcset="" />
                                        <h3>Mening Tajribam</h3>
                                        <p>Men frontend dasturlash bilan 1.5 yildan beri shug‘ullanaman. HTML, CSS, JavaScript, React va Next.js bilan ishlayman. REST API bilan ishlashni va oddiy API lar yaratishni ham bilaman. Shuningdek, biznes va ish jarayonlarini zamonaviy web dasturlar orqali raqamli tizimga o‘tkazishga yordam beraman. </p>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <div ref={box2} onMouseMove={(e) => handleMoveBox(e, box2)} className="box-resume">
                                        <img src={resume2} alt="" srcset="" />
                                        <h3>Yondashuvim</h3>
                                        <p>Men ishonamanki, a’lo darajadagi dasturiy ta’minot – bu toza kod va a’lo foydalanuvchi tajribasining kesishgan nuqtasidir. Mening maqsadim – kirish imkoni keng, tezkor va yoqimli interfeyslar yaratishdir. Shuni ham hisobga olaman.</p>
                                    </div>

                                </div>
                            </div>
                            <p className="p-text">Assalomu aleykum! Men Mansurov Abduraxim, 15 yoshdaman. Hozirda dasturlash sohasida 1.5 yillik tajribaga egaman. HTML, CSS, JavaScript, React, Next.js, Node.js bilan ishlayman va Figma yordamida dizaynni deyarli bir xil qilib web saytga ko‘chira olaman. Shuningdek, backend va Flutter kurslarini o‘rganish maqsadim bor. Har qanday biznes yoki ish jarayonini onlaynga o‘tkazishga, account manager sifatida akkauntlarni boshqarishga va account tizimlarini yaratishga ham qodirman. 1 ta loyihada bir nechta API bilan ishlash tajribam mavjud.</p>
                            <br />
                            <p className="p-text">Tezkor konsultatsiya kerakmi? Agar sizda dastur yaratish g‘oyasi bo‘lsa, lekin qanday ishlashini tasavvur qilmasangiz, biz sizga to‘liq idea va yo‘l xaritasini taqdim qilamiz. Siz dastur yaratmoqchisiz, biz esa g‘oyangizni real va amaliy tizimga aylantirishga yordam beramiz.</p>
                        <br />

                        <h3 className="h3-title"><img src={iconFlash} alt="" />Asosiy ko‘nikmalar</h3>
                        <div className="flex-experiences">
  <div className="box-experience">React / Next.js</div>
  <div className="box-experience">Tailwind CSS</div>
  <div className="box-experience">UI/UX Design</div>
  <div className="box-experience">REST API</div>
  <div className="box-experience">Account Management</div>
                </div>
                <br />
                <div className="flex-experiences">
                    <div className="box-experience">HTML / CSS</div>
  <div className="box-experience">JavaScript</div>
  <div className="box-experience">Node.js</div>
  <div className="box-experience">Figma / AI Design</div>
  <div className="box-experience">Create API</div>
                </div>

       
                        </div>

                    </main>

                </div>
            </motion.div>
        </>
    )
}
export default Resume