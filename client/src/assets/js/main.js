import { work } from "./work.js";
import { smooth } from "./smooth.js";
import { circle } from "./circle.js";
import { link } from "./link.js";
import { setFlowBanner } from "./setFlowBanner.js";
import { typing } from "./typing.js";


window.addEventListener("load", function () {
    circle();
    work();
    link();
    typing();
    smooth();
    setFlowBanner();
})
// window.addEventListener('load', adjustPosition);
// window.addEventListener('resize', adjustPosition);

