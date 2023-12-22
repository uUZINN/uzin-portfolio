import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function circle() {
    gsap.registerPlugin(ScrollTrigger);

    const ani3 = gsap.timeline();
    ani3.to(".circle .c1, .circle .c3, .circle .c5", { rotation: 180 });

    const ani5 = gsap.timeline();
    ani5.to(".blue_circle .c1, .blue_circle .c3, .blue_circle .c5", { rotation: 180 });

    const ani4 = gsap.timeline();
    ani4.to(".circle .c2, .circle .c4, .circle .c6", { rotation: -180 });

    const ani6 = gsap.timeline();
    ani6.to(".blue_circle .c2, .blue_circle .c4, .blue_circle .c6", { rotation: -180 });

    const masterTimeline = gsap.timeline();
    masterTimeline.add(ani3, 0).add(ani4, 0);

    const masterTimeline2 = gsap.timeline();
    masterTimeline2.add(ani5, 0).add(ani6, 0);

    // const greenDisappear = gsap.timeline({ paused: true });
    // greenDisappear.to('.circle', { opacity: 0, duration: 10 });

    // const blueDisappear = gsap.timeline({ paused: true });
    // blueDisappear.to('.blue_circle', { opacity: 0, duration: 10 });

    // const showBlue = () => {
    //     gsap.to('.blue_circle', { opacity: 1, duration: 10 });
    //     gsap.to('.circle', { opacity: 0, duration: 10 });
    // };

    // const showGreen = () => {
    //     gsap.to('.circle', { opacity: 1, duration: 10 });
    //     gsap.to('.blue_circle', { opacity: 0, duration: 10 });
    // };


    ScrollTrigger.create({
        animation: masterTimeline,
        trigger: ".circle",
        start: "+=2000 center",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        endTrigger: ".end-trigger",
        duration: 10,
    });

    ScrollTrigger.create({
        animation: masterTimeline2,
        trigger: ".blue_circle",
        start: "+=2000 center",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        endTrigger: ".end-trigger",
        duration: 10,

    });


    let lastScrollTop = 0;

    function getScrollDirection() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = st > lastScrollTop ? 'down' : 'up';
        lastScrollTop = st <= 0 ? 0 : st;
        return scrollDirection;
    }

    window.addEventListener('scroll', function () {
        const scrollDirection = getScrollDirection();

        if (scrollDirection === 'down') {
            gsap.to('.blue_circle', { opacity: 1, duration: 30 });
            gsap.to('.circle', { opacity: 0, duration: 30 });
        } else {
            gsap.to('.circle', { opacity: 0.8, duration: 10 });
            gsap.to('.blue_circle', { opacity: 0, duration: 20 });
        }
    });
}