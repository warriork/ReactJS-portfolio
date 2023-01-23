import './style.css'
import { TypeAnimation } from 'react-type-animation'

type Props = { children: string }
export const AnimatedTyping = (props: Props) => {
  return (
    <TypeAnimation
      sequence={[props.children]}
      wrapper='h1'
      cursor={true}
      repeat={0}
      speed={5}
      className='h1'
    />
  )
}
