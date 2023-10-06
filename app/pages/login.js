'use client';
import { useRouter } from 'next/navigation';

export default function Login() {

  const router = useRouter();

  const submitButton = () => {
    router.push("/home");
  }
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#1A202C]">
      <div className="w-1/2 h-full">
        <form action="" className="w-full">
          <label htmlFor="email" className="block mb-1 font-semibold text-2xl font-josefin">
            Email
            <input type="email" placeholder="Email" className="font-montserrat bg-stone-300 p-3 rounded-md w-full placeholder-gray-500 text-xs" v-model="email" />
          </label>
          <label htmlFor="password" className="block mb-1 font-semibold text-2xl font-josefin">
              Senha
            <div className="flex items-center">
              <input placeholder="Senha" className="font-montserrat bg-stone-300 p-3 rounded-md w-full placeholder-gray-500 text-xs" v-model="password" />
            </div>
            <button onClick={submitButton} className="p-2 mt-3 rounded-md bg-[#8D91C7] hover:scale-105 w-full ease-in duration-300 font-josefin" type="submit">
              Entrar
            </button>
          </label>
        </form>
      </div>
    </main>
  )
}
