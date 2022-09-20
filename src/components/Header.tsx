import Logo from '../assets/logo.svg'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { NewTransactionModal } from './NewTransactionModal'
import { X } from 'phosphor-react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <header className="bg-gray-900 pt-10 pb-32">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex justify-between items-center">
        <img src={Logo} alt="" />
        <button
          type="button"
          onClick={openModal}
          className="font-bold text-white bg-green-500 rounded-md hover:bg-green-300 hover:transition-colors px-5 py-3 hover:delay-200 hover:ease-in"
        >
          Nova transação
        </button>

        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4 w-full">
            <Dialog.Panel className="bg-gray-800 max-w-lg w-full py-10 px-12 rounded-md relative">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4"
              >
                <X size={24} color="#7C7C8A" />
              </button>
              <Dialog.Title className="text-gray-100 font-bold text-xl mb-8">
                Nova Transação
              </Dialog.Title>
              <NewTransactionModal />
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </header>
  )
}
