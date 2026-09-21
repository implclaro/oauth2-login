import { DEFAULT_LOGIN_ROUTE } from '@/app/auth/constants/auth.const'
import { NavLink } from 'react-router-dom'
import robotImage from '@/assets/robot.png';


export default function NotFoundPage() {
 return (
  <main className='min-h-screen flex justify-center items-center flex-col-reverse sm:gap-x-8 sm:flex-row'>
    <section className="select-none flex flex-col items-center justify-center gap-3">
      <h1 
        className="text-2xl px-2 text-zinc-600 flex flex-col gap-2 justify-center items-center"
      >
        <span 
          className="text-4xl text-zinc-600"
        >
          404
        </span>
        Recurso No Encontrado
      </h1>
      <NavLink 
        to={DEFAULT_LOGIN_ROUTE}
        className="text-sm text-zinc-600 decoration-1 hover:underline"
      >
        Ir a la pagina principal
      </NavLink>
    </section>
    <section className='flex justify-center items-center'>
      <img className='object-cover size-60 sm:size-72' src={robotImage} alt='robot-page-not-found' />
    </section>
  </main>
  )
}