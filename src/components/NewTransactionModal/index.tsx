
import closeImg from '../../assets/close.svg'
import Modal from 'react-modal'
import { Container } from './style'

interface NewTransactionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewTransactionModal({ isOpen, onClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}