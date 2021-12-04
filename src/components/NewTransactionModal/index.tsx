
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './style'
import { FormEvent, useContext, useState } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

interface NewTransactionModalProps {
    isOpen: boolean
    onClose: () => void
}

export function NewTransactionModal({ isOpen, onClose }: NewTransactionModalProps) {

    const { createTransaction } = useContext(TransactionsContext)

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        await createTransaction({ title, amount: value, category, type })
        setTitle('')
        setValue(0)
        setCategory('')
        setType('deposit')
        onClose()
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="number" placeholder="Valor" value={value} onChange={e => setValue(Number(e.target.value))} />
                <TransactionTypeContainer>
                    <RadioBox
                        activeColor="green"
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        activeColor="red"
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}>
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={e => setCategory(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}
