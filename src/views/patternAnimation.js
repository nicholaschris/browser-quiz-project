/*source:
* https://ryanmulligan.dev/blog/detect-js-support-in-css*/

document.addEventListener('DOMContentLoaded', () => {
    let reducedMotion = window.matchMedia("(prefers-reduced-motion)").matches;

    if (!reducedMotion) {
        gsap.timeline().to(document.body, {
            "--pattern-opacity": 1,
            duration: 0.1
        });
    }
});
