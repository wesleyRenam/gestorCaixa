'use client';
import { FaCashRegister } from 'react-icons/fa';
import SideBar from '../components/sidebar'
import { BsCashStack, BsSearch } from "react-icons/bs";
import { MdAddShoppingCart } from 'react-icons/md';

export default function Login() {

  return (
    <main className=''>
      <SideBar />
      <div className='w-full h-full border-1 grid content-center justify-items-center gap-2 mt-2 grid-cols-2'>
        <a href="#" class="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-32 h-32 border-2 border-gray-800 p-1 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
          <BsCashStack class="w-8 h-8 text-white">
          </BsCashStack>
          <span className="text-rose-600 text-xl ">VENDER</span>
        </a>
        <a href="#" class="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-32 h-32 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
          <BsSearch class="w-8 h-8 text-white"></BsSearch>
          <span class="text-xl">PESQUISAR</span>
        </a>
        <a href="#" class="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-32 h-32 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaCashRegister class="w-8 h-8 text-white">
          </FaCashRegister>
          <span class="text-3xl">CAIXA</span>
        </a>
        <a href="#" class="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-32 h-32 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
          <MdAddShoppingCart class="w-8 h-8 text-white">
          </MdAddShoppingCart>
          <span class="text-xl text-emerald-500">ADICIONAR</span>
        </a>
      </div>

    </main>
  )
}