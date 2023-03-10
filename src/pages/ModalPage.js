import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const actionBar = (
  <div>
    <Button onClick={handleClose} primary rounded>I Accept</Button>
    </div>
  )

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an impontant agreement!
    </p>
  </Modal>

  return (
    <div>
      <Button
        primary
        onClick={handleClick}
      >
        OpenModal</Button>
      {isOpen && modal}
    </div>
  )
}

export default ModalPage
