//((((((((((((((vendor))))))))))))))
// -moz-o-webkit-
//(((((((((((((((((boxing)))))))))))))))))
//margin,padding,
//(((((((((((((((((border)))))))))))))))))
//solid,double,dotted,dashed,groove,radius-full 50%
//(((((((((((((((((shadow)))))))))))))))))
// shadow:5,5 bottom,left,blur3px ,spread30,color,inset[inside div]
//(((((((((((((((((border-image)))))))))))))))))
// border:transparent 
// border-image:url('') 30 round
// border-image-slice:30;
//border-image-repeat:round/stretch/repeat
//(((((((((((((((((font)))))))))))))))))
// font extension tff (true font), off(open font)
//download font
// @font-face{
//     font-family:mostafaFont;
//     src:URL("downloaded ttf file path")
// }
// font-awesome
//(((((((((((((((((transform)))))))))))))))))
//transform:translate(10em,20em) =>x,y
//transform:rotate(10deg)
//transform:scale(2.3,1.2)x,y
//transform:skew(20deg,30deg)
//matrix
//(((((((((((((((((transition)))))))))))))))))
// transition prop duration
//animate-[animationName_easingFunction_durationInSeconds_iterationsCount_delayInSeconds_direction]
//(((((((((((((((((((gradient)))))))))))))))))))
// linear (dir,color,color),radio (circle,color,color)

// import {
//     Chip,
//     Ripple,
//     initTE,
// } from "tw-elements";

// initTE({ Chip, Ripple });
let hideChip=document.getElementById('hide')
let showChip=document.getElementById('show')
console.log(hideChip)
hideChip.addEventListener('click',()=>{
    hideChip.classList.add("hidden")
})
showChip.addEventListener('click',()=>{
    hideChip.classList.remove("hidden")
})