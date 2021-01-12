const scroll = {
  hidden: {
    opacity: 0,
    scale: 1,
    y: 50,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, delayChildren: 1 },
  },
}
export default scroll
