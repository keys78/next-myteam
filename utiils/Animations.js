export const variants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -100, y: 0 },
}


export const modalVariants = {
    
    initial: {
      opactity: 0,
      x: "-100vw",
    },
    final: {
      opactity: 1,
      x: 0,
      transition: {duration: 0.4}
    },
    exit: {
      opactity: 0,
      x: "-100vw",
      transition: {duration: 0.2},
    }
  };