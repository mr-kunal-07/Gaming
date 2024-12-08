import React, { useEffect, useRef, useState } from 'react'
import Button from './button';
import { TiLocationArrow } from 'react-icons/ti';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIdx, setCurrentIdx] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoding, setIsLoding] = useState(true);
    const [lodedVideos, setLodedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handlevideoLoad = () => {
        setLodedVideos((prev) => prev + 1);
    }

    const upcommingVideoIdx = (currentIdx % totalVideos) + 1;

    const handleMiniVideoClick = () => {
        setHasClicked(true);

        setCurrentIdx(upcommingVideoIdx);
    }

    useEffect(() => {
        if (lodedVideos === totalVideos - 1) {
            setIsLoding(false);
        }
    }, [lodedVideos]);

    // GSAP
    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),

            });

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',

            })
        }

    }, { dependencies: [currentIdx], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0% 0% 40% 10%',
        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0px 0px 0px 0px',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        })


    })

    const getVideoUrl = (idx) => `videos/hero-${idx}.mp4`
    return (
        <div className='relative h-dvh w-screen overflow-x-hidden '>

            {isLoding && (
                <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                    <div className='three-body'>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>
                        <div className='three-body__dot'></div>

                    </div>
                </div>
            )}

            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className='mask-clip-path absolute-center absolute z-50 size-64
                 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:opacity-100 hover:scale-100'>
                            <video
                                ref={nextVideoRef}
                                src={getVideoUrl(upcommingVideoIdx)}
                                loop
                                muted
                                id='current-video'
                                className='size-64 origin-center scale-150 object-cover object-center'
                                onLoadedData={handlevideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoUrl(currentIdx)}
                        loop
                        muted
                        id='next-video'
                        className='absolute-center invisible absolute z-20 size-64 object-cover oject-center'
                        onLoadedData={handlevideoLoad}

                    />

                    <video
                        src={getVideoUrl(currentIdx === totalVideos - 1 ? 1 : currentIdx)}
                        autoPlay
                        loop
                        muted
                        className='absolute left-0 top-0 size-full object-cover object-center'
                        onLoadedData={handlevideoLoad}

                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                    G<b>a</b>ming
                </h1>

                <div className='absolute left-0 top-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='special-font hero-heading text-blue-100'>redefi<b>n</b>e</h1>

                        <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
                            Enter the Metagame Layer <br /> Unleash the player Economy
                        </p>
                        <Button id='watch-traler' title='Watch Trailer' leftIcon={<TiLocationArrow />} containerClassName='bg-yellow-300 flex-center gap-1' />


                    </div>
                </div>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5  text-black'>
                G<b>a</b>ming
            </h1>

        </div>
    )
}

export default Hero