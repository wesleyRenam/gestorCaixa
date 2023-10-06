'use client';
import { FaCashRegister } from 'react-icons/fa';
import SideBar from '../components/sidebar'
import { BsCashStack, BsSearch, BsPlus } from "react-icons/bs";

export default function Login() {

  return (
    <main className='md:flex justify-center items-center'>
      <SideBar />
      <div className='flex-col justify-center items-center'>
        <div className='h-full grid content-center justify-items-center gap-2 xl:gap-6 w-full mt-2 grid-cols-2 lg:grid-cols-4 lg:scale-1.5'>
          <a href="#" class="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-36 h-36 xl:w-72 xl:h-72 md:w-44 md:h-44 border-2 border-gray-800 p-1 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsCashStack class="w-8 h-8 text-white">
            </BsCashStack>
            <span className="text-rose-600 text-xl ">VENDER</span>
          </a>
          <a href="#" class="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-36 h-36 xl:w-72 xl:h-72 md:w-44 md:h-44 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsSearch class="w-8 h-8 text-white"></BsSearch>
            <span class="text-xl">PESQUISAR</span>
          </a>
          <a href="#" class="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-36 h-36 xl:w-72 xl:h-72 md:w-44 md:h-44 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            <FaCashRegister class="w-8 h-8 text-white">
            </FaCashRegister>
            <span class="text-3xl">CAIXA</span>
          </a>
          <a href="#" class="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-36 h-36 xl:w-72 xl:h-72 md:w-44 md:h-44 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsPlus class="w-12 h-12 text-white">
            </BsPlus>
            <span class="text-xl text-emerald-500">ADICIONAR</span>
          </a>
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl my-5 xl:text-6xl'>Relatórios</h1>
        </div>
        {/* <div class="text-gray-900 flex justify-center items-center rounded-lg dark:text-white w-full h-10 xl:w-full xl:h-full md:w-full md:h-44 border-2 border-gray-800 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
          
        </div> */}
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center flex-col mx-4'>
            <h2>Vendas do Dia</h2>
            <h2>5</h2>
          </div>
          <div className='flex justify-center items-center flex-col mx-4'>
            <h2>Faturamento</h2>
            <h2>R$ 25, 00</h2>
          </div>
        </div>
      </div>
    </main>
  )
}