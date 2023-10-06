'use client';
import { FaCashRegister } from 'react-icons/fa';
import SideBar from '../components/sidebar'
import {useState} from 'react';
import useInterval from "../useInterval";
import { BsCashStack, BsSearch, BsPlus } from "react-icons/bs";

export default function Login() {

  const [dataHora, setDataHora] = useState(new Date());

  useInterval(() => {
    setDataHora(new Date());
  }, 1000);

  const formatoDataHora = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <main className='md:flex justify-center items-center'>
      <SideBar />
      <div className='flex-col justify-center items-center'>
        <div className='h-full grid content-center justify-items-center gap-2 xl:gap-6 w-full mt-2 grid-cols-2 lg:grid-cols-4 lg:scale-1.5'>
          <a href="#" className="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-36 h-36 xl:w-72 xl:h-72 md:w-44 md:h-44 border-2 border-gray-800 p-1 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsCashStack className="w-8 h-8 text-white">
            </BsCashStack>
            <span className="text-rose-600 text-xl ">VENDER</span>
          </a>
          <a href="#" className="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-36 h-36 xl:w-72 xl:h-72 md:w-44 md:h-44 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsSearch className="w-8 h-8 text-white"></BsSearch>
            <span className="text-xl">PESQUISAR</span>
          </a>
          <a href="#" className="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-36 h-36 xl:w-72 xl:h-72 md:w-44 md:h-44 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            <FaCashRegister className="w-8 h-8 text-white">
            </FaCashRegister>
            <span className="text-3xl">CAIXA</span>
          </a>
          <a href="#" className="grid text-gray-900 gap-1 content-center justify-items-center rounded-lg dark:text-white group w-36 h-36 xl:w-72 xl:h-72 md:w-44 md:h-44 border-2 border-gray-800 p-1 dark:text-gray-400 group-hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsPlus className="w-12 h-12 text-white">
            </BsPlus>
            <span className="text-xl text-emerald-500">ADICIONAR</span>
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
        <footer className='flex justify-center items-center fixed bottom-0 w-full'>
          <p>{dataHora.toLocaleDateString(undefined, formatoDataHora)}</p>
        </footer>
      </div>
    </main>
  )
}