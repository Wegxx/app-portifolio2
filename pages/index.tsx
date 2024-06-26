import Spline from "@splinetool/react-spline";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import {SocialIcon} from "react-social-icons";
import Image from "next/image";
import Profile from "../resources/ProfilePic.png"
import {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
    const [text] = useTypewriter({
        words: [
        "<Giovanna Nascimento Reis/>",
        "<Wegx for gaming friends/>",
        "<The girl who loves to draw and code/>"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const notify = () => toast("This website features 3D assets that require your browser's hardware acceleration. "+ 
        "If you have it disabled, it is strongly recommended that you turn it on for better performance.");
        notify();
    }, []);

    return (
        isMobile ? (
            // Mobile
                <div className="flex w-full h-full items-center flex-col">
                    <ToastContainer
                        position="bottom-right"
                        autoClose={false}
                        closeOnClick
                        rtl={false}
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                    <Image alt={"profileImage"} className={"rounded-full my-2"} src={Profile} width={150} height={150}></Image>
                    <h2 className={"sm:m-1 text-gray-300 font-bold"}>Hi my name is</h2>
                    <h1 className={"sm:h-12 text-center text-orange-600 mx-3"}>
                        <span className={"font-roboto-moto"}>{text}</span>
                        <Cursor cursorColor={"#FF8000"}/>
                    </h1>
                    <div className={'grow h-86 w-full'}>
                        <Spline scene="https://prod.spline.design/cTc4YaggUtUXs0AT/scene.splinecode"/>
                    </div>
                    <div className="flex flex-row items-center mx-6 my-2 grow">
                        <div className="flex flex-col items-center">
                            <div style={{height:'20rem'}} className={"w-1 bg-gradient-to-b from-orange-600 to-purple-600"}></div>
                            <SocialIcon url="https://www.linkedin.com/in/giovanna-nascimento-reis-126b01198/"
                                        fgColor="white" bgColor={"transparent"} className={"cursor-pointer w-10 h-10 mt-1"}/>
                            <SocialIcon url="https://github.com/Wegxx"
                                        fgColor="white" bgColor={"transparent"} className={"cursor-pointer w-10 h-10 mt-1"}/>
                        </div>
                        <p className={"p-4 text-gray-300 font-roboto text-sm "}>
                            Automated smart solutions studant and fascinated by programming and development I believe is possible to change
                            people’s lives with creativity, agility and technology. I am currently 22 years old and graduating
                            in Control and Automation Engineering by PUC Minas. Today, along with my studies, I work as Software Engineer
                            for Hotmart 🚀🔥and I must say that I’m completely involved in the career. With more than
                            seven years of drawing by passion, in my free time over the last one and a half years, I accomplished dozens of
                            diverse freelance works as an Illustrator and Graphic Designer from elaborating visual identity to character concept art.
                        </p>
                    </div>
                </div>)
            : (
                // Desktop
            <div className="flex w-full h-full my-5 items-center flex-row">
                <ToastContainer
                    position="bottom-right"
                    autoClose={false}
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            <div className="flex flex-row lg:basis-1/2 lg:pl-10">
                <div className="flex flex-col items-center">
                    <div style={{height:'33rem'}} className={"w-1 bg-gradient-to-b from-orange-600 to-purple-600"}></div>
                    <SocialIcon url="https://www.linkedin.com/in/giovanna-nascimento-reis-126b01198/"
                                fgColor="white" bgColor={"transparent"} className={"cursor-pointer w-10 h-10 mt-3"}/>
                    <SocialIcon url="https://github.com/Wegxx"
                                fgColor="white" bgColor={"transparent"} className={"cursor-pointer w-10 h-10 mt-3"}/>
                </div>
                <div className="flex flex-col items-center mx-2 grow">
                    <Image alt={"profileImage"} className={"rounded-full my-2"} src={Profile} width={180} height={180}></Image>
                    <h2 className={"lg:text-5xl md:text-2xl lg:m-6 sm:m-2 text-gray-300 font-bold"}>Hi my name is</h2>
                    <h1 className={"lg:h-24 sm:h-8 text-center text-orange-600"}>
                        <span className={"lg:text-5xl md:text-2xl font-roboto-moto"}>{text}</span>
                        <Cursor cursorColor={"#FF8000"}/>
                    </h1>
                    <p className={"p-10 text-gray-300 font-roboto text-justify mx-auto max-w-3xl"}>
                        Automated smart solutions studant and fascinated by programming and development I believe is possible to change
                        people’s lives with creativity, agility and technology. I am currently 22 years old and graduating
                        in Control and Automation Engineering by PUC Minas. Today, along with my studies, I work as Software Engineer
                        for Hotmart 🚀🔥and I must say that I’m completely involved in the career. With more than
                        seven years of drawing by passion, in my free time over the last one and a half years, I accomplished dozens of
                        diverse freelance works as an Illustrator and Graphic Designer from elaborating visual identity to character concept art.
                    </p>
                </div>
            </div>
            <div className={'grow h-122 w-122 '}>
                <Spline scene="https://prod.spline.design/zVYA1SI7JlFY5owQ/scene.splinecode" />
            </div>
        </div>)
  )
}

