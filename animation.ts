const scroll = {
  hidden: {
    opacity: 0,
    scale: 1,
    x: 100,
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.75, delayChildren: 1 },
  },
}

export default scroll
