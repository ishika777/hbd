import React, { useEffect, useRef } from 'react';
import gsap, { Elastic, Expo } from 'gsap';
import data from '@/data';
import Balloon from './Balloon';
import Eight from './Eight';
import { useNavigate } from 'react-router-dom';

const Start = () => {

    const navigate = useNavigate()

    useEffect(() => {
            const animationTimeline = () => {
    
                const tlMain = gsap.timeline({ defaults: { duration: 0.7, ease: "power2.out" } });
    
                tlMain
                    .from(".one", { opacity: 0, y: 100, scale: 0.9, duration: 1, ease: "power3.out" })
                    .from(".two", { opacity: 0, y: 100, scale: 0.9, duration: 1, ease: "power3.out" }, "-=0.6")
                    .to(".one", { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" })
                    .to(".two", { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }, "-=1")
                    .to(".one, .two", { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" }, "+=1")
    
                    .from(".three", { scale: 0, opacity: 0, duration: 0.7 })
                    .to(".three", { scale: 1.5, opacity: 1, duration: 1.5 }, "+=0.2")
                    .to(".three", { scale: 0.2, opacity: 0, duration: 1 }, "+=0.5")
    
    
                    .from(".idea-3", { opacity: 0, duration: 0.8 })
                    .to(".idea-3", { opacity: 1, rotationX: 5 })
                    .to(".idea-3 strong", { scale: 1.2, x: 1, backgroundColor: "rgb(21, 161, 237)", color: "#fff" })
                    .to(".idea-3", { opacity: 0, y: 20, rotationY: 5, skewX: "-10deg", duration: 1 })
    
                    .from(".idea-4", { opacity: 0, duration: 0.3 })
                    .to(".idea-4", { opacity: 1, duration: 0.2 },)
                    .to(".idea-4", { opacity: 0, duration: 0.5, delay: 0.5 })
    
    
                    .from(".idea-5", { opacity: 0, duration: 0.7 },)
                    .to(".idea-5", { scale: 1.5, opacity: 1, z: 10, duration: 0.7, delay: 0.2 })
                    .to(".idea-5 .smiley", { rotation: 90, x: 8, duration: 0.7, delay: 0.5 })
                    .to(".idea-5", { scale: 0.2, opacity: 0, duration: 0.7 })
    
                    .from(".idea-6 ", { scale: 1, opacity: 0, ease: Expo.easeInOut, duration: 0.8, delay: 1 })
                    .to(".idea-6", { scale: 3, opacity: 0, ease: Expo.easeOut, duration: 1 })
                    .to(".idea-6", { scale: 0.5, opacity: 1, ease: Expo.easeOut, duration: 2 })
                    .to(".idea-6", { scale: 3, opacity: 0, ease: Expo.easeOut, duration: 0.8, delay: 0.1 })
    
    
                    .to(".eight .special-text", {opacity: 1})
                    .to(".eight svg", { visibility: "visible", opacity: 1, scale: 80, repeatDelay: 1.4, stagger: 0.3, onComplete: () => navigate('/terminal') });
            };
    
            animationTimeline();
            
        }, []);

  return (
     <div className="relative overflow-hidden justify-center h-screen w-screen">
            <div className="absolute top-0 overflow-hidden h-full  w-full left-0 right-0">
                <Balloon />
            </div>
            <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center">
                <h1 className="one text-5xl text-center  w-full font-bold opacity-0">{data.name}</h1>
                <p className="two text-lg w-full text-center tracking-widest mt-2 font-extralight opacity-0">{data.greetingText}</p>
            </div>

            <div className="text-center absolute top-0 left-0 overflow-hidden h-full w-full flex  items-center justify-center">
                <p className="three text-lg font-bold md:text-3xl opacity-0">{data.text1}</p>
            </div>

            <div className="absolute top-0 overflow-hidden h-full w-full left-0 right-0">
                <div className="relative w-screen h-screen overflow-hidden">
                    <p className="idea-3 w-full h-full font-bold text-2xl flex flex-col gap-4 md:flex-row items-center justify-center opacity-0">
                        <span>{data.text4}</span>
                        <strong className="inline-block font-bold px-2 py-1 mt-2 md:mt-0 rounded">
                            {data.text4Adjective}
                        </strong>
                    </p>
                    <p className="idea-4 w-full h-full text-2xl text-center absolute top-0 opacity-0 flex items-center justify-center">{data.text5Entry}</p>
                    <p className="idea-5 w-full h-full font-bold text-2xl absolute top-0 md:text-4xl flex items-center justify-center opacity-0">
                        <span>{data.text5Content}</span>
                        <span className="smiley ml-2 font-bold">{data.smiley}</span>
                    </p>
                    <p className="idea-6 w-full h-full text-[12rem] absolute top-0 mx-auto font-bold flex items-center justify-center opacity-0">
                        <span className="inline-block font-extrabold">{data.bigTextPart1}</span>
                        <span className="inline-block font-extrabold">{data.bigTextPart2}</span>
                    </p>
                </div>
            </div>

            <div className=" w-full h-full overflow-hidden absolute top-0 left-0 right-0">
                <Eight />
            </div>

            

        </div>
  )
}

export default Start