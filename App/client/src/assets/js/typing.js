import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function typing() {
    gsap.registerPlugin(ScrollTrigger);


    // const hide = (item) => {
    //     gsap.set(item, { autoAlpha: 0, height: 0, overflow: 'hidden' });
    // }

    // const animate = (item, index) => {
    //     let delay = index * 0.5; // 각 요소가 0.2초 간격으로 순차적으로 나타나도록 설정

    //     gsap.set(item, { overflow: 'hidden' });
    //     gsap.fromTo(item,
    //         { autoAlpha: 0, height: 0, y: 50 },
    //         { autoAlpha: 1, height: "auto", y: 0, delay: delay, overwrite: "auto", ease: "expo" }
    //     )
    // }

    // gsap.utils.toArray(".reveal").forEach((item, index) => {
    //     hide(item);
    //     ScrollTrigger.create({
    //         trigger: item,
    //         start: "top 80%",
    //         onEnter: () => { animate(item, index) },

    //     })
    // });

    const target = gsap.utils.toArray(".split");

    target.forEach(target => {
        let splitClient = new SplitType(target, { type: "line, word, char" });
        let lines = splitClient.lines;
        //let words = splitClient.words;
        //let chars = splitClient.chars;

        gsap.from(lines, {
            yPercent: 100,
            opacity: 0,

            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: target,
                start: "top bottom",
                end: "+400",
            }
        })
    });



    gsap.utils.toArray(".colorChange").forEach(item => {
        gsap.to(item, {
            duration: 5,
            color: '#88EAD2',
            ease: 'power1.inOut'
        });
    });


}

