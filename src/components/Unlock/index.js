import {useState} from 'react'
import {Container, Image, Para, Button} from './styledComponents'

const Unlock = () => {
  const [locked, setLocked] = useState(true)

  const url = locked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const desc = locked ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const cont = locked ? 'Unlock' : 'Lock'
  const alter = locked ? 'lock' : 'unlock'

  const changeStyle = () => setLocked(prevState => !prevState)
  return (
    <Container>
      <Image src={url} alt={alter} />
      <Para>{desc}</Para>
      <Button type="button" onClick={changeStyle}>
        {cont}
      </Button>
    </Container>
  )
}
export default Unlock
