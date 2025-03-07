import { Dialog, Transition } from '@headlessui/react'
import { RxCross1 } from 'react-icons/rx'
import Form from '../Form'
import { Fragment } from 'react'

export default function ModalComponent({modalText, setOpenModal, openModal, otpForm}) {
  function closeModal() {
    setOpenModal(false)
  }

  return (
    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mt-20 w-full max-w-md transform overflow-hidden rounded-2xl bg-background text-left align-middle shadow-xl transition-all relative">
                  <button 
                    className='absolute top-0 right-0 bg-logobtbcolor text-white rounded-tr-2xl rounded-bl-2xl p-2 hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logobtbcolor'
                    onClick={closeModal}
                  > 
                    <RxCross1 className='text-xl' />
                  </button>
                  <Form setOpenModal={setOpenModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}