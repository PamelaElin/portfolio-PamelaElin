export const father = {
  visible: { opacity: 1, transition: { duration: 0.5 , delay:0} },
  hidden: { opacity: 0 },
};
export const toRight = {
  visible: { x: 0, transition: { duration: 2 } },
  hidden: { x: -100 },
};
export const toLeft = {
  visible: { x: 0, transition: { duration: 2 } }, 
  hidden: { x: 100 },  
};
export const toUp = {
  visible: { y: 0, transition: { duration: 2 } }, 
  hidden: { y: 100 },
};
export const toDown = {
  visible: { y: 0, transition: { duration: 2 } }, 
  hidden: { y: -100 },
};
export const nut = {
  visible: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"], transition:{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: 0,
      repeatDelay: 1
    }
  },
  hidden: { rotate: 0 },
};

 export const boom= {
    visible: {x:0,
      scale: [1, 2, 2, 1, 1],
       transition: { duration: 2 } }, 
    hidden: { x: 0 }
  };
