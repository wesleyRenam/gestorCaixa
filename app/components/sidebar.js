'use client';
import { useState } from "react";
import { BiMenuAltLeft, BiHome, BiMenuAltRight } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FaCashRegister } from "react-icons/fa";
import { BsShop, BsCashStack, BsNewspaper, BsSearch } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${open ? "" : "sm:mr-64"}`}>
      <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setOpen(!open)}>
        <span class="sr-only">Open sidebar</span>
        <BiMenuAltLeft class="w-8 h-8" ></BiMenuAltLeft>
      </button>
      <aside id="separator-sidebar" class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`} aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li className={`${open ? "flex justify-between" : ''}`}>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <BiHome class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true">
                </BiHome>
                <span class="flex-1 ml-3 whitespace-nowrap">Inicio</span>
              </a>
              {open &&
                <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setOpen(!open)}>
                  <BiMenuAltRight class="w-8 h-8" ></BiMenuAltRight>
                </button>}
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <BsShop class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true">
                </BsShop>
                <span class="flex-1 ml-3 whitespace-nowrap">Produtos</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FiUsers class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                </FiUsers>
                <span class="flex-1 ml-3 whitespace-nowrap">Clientes</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaCashRegister class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                </FaCashRegister>
                <span class="flex-1 ml-3 whitespace-nowrap">Caixa</span>
              </a>
            </li>
             <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <BsSearch class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                </BsSearch>
                <span class="flex-1 ml-3 whitespace-nowrap">Pesquisar</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdAddShoppingCart class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                </MdAddShoppingCart>
                <span class="flex-1 ml-3 whitespace-nowrap text-emerald-400">Cadastrar Produto</span>
              </a>
            </li>
          </ul>
          <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsCashStack class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                </BsCashStack>
                <span class="ml-3 text-red-400">Registrar Venda</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <BsNewspaper class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                </BsNewspaper>
                <span class="ml-3">Relatórios</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
export default App;

