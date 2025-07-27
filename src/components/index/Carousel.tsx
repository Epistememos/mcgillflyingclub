import { useState, useEffect } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";

const slides = [
    { src: banner1.src, alt: "Tame Your Passion", title: "TAME YOUR PASSION" },
    { src: banner2.src, alt: "Live On The Edge", title: "LIVE ON THE EDGE" },
    { src: banner3.src, alt: "Become a Pilot", title: "BECOME A PILOT" },
    { src: banner4.src, alt: "Involve Yourself", title: "INVOLVE YOURSELF" },
    { src: banner5.src, alt: "Meet Awesome People", title: "MEET AWESOME PEOPLE" },
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);

    useEffect(() => {
        if (!isAutoplay) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length, isAutoplay]);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return <section id="banner">
        <div className="relative overflow-x-hidden mb-8">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <article key={index} className="min-w-full relative aspect-3/1 min-h-96">
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                    </article>
                ))}
            </div>
            <div className="flex flex-row justify-between items-center absolute bottom-0 w-full text-white bg-zinc-950/30">
                <button
                    onClick={() => {
                        if (isAutoplay) setIsAutoplay(false);
                        prevSlide();
                    }}
                    className="p-2 rounded-full transition-all duration-200 hover:text-red-400"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className="flex-1 text-center w-full py-2 flex flex-col items-center gap-1">
                    <h2 className="text-4xl font-bold font-roboto">{slides[currentSlide].title}</h2>
                    <div className="flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (isAutoplay) setIsAutoplay(false);
                                    goToSlide(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/60'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => {
                        if (isAutoplay) setIsAutoplay(false);
                        nextSlide();
                    }}
                    className="p-2 rounded-full transition-all duration-200 hover:text-red-400"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
}