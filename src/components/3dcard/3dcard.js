// Uses react-spring to create a card that focuses when hovered

import React from 'react'
import { useSpring, animated } from 'react-spring'
import './3dcard.css'

const calc = (x, y) => [(y - window.innerHeight / 2) / 80, -(x - window.innerWidth / 2) / 80, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ThreeDCard = props => {
  const [config, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: config.xys.interpolate(trans) }}
    >
      <div className='threedcard-text'>
        {props.text}
      </div>
    </animated.div>
  )
}

export default ThreeDCard
