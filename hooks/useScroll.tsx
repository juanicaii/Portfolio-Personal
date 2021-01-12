import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'

const useScroll = () => {
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      animation.start('show')
    } else {
      animation.start('hidden')
    }
  }, [animation, inView])

  return [animation, ref]
}

export default useScroll
