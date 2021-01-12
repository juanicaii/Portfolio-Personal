import { useInView } from 'react-intersection-observer'
import { useAnimation, AnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const useScroll = (): [AnimationControls, () => void] => {
  const animation = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1 })

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
