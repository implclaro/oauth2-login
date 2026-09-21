import satelliteImage from '@/assets/satellite.png';

export default function SearchParamsNotFoundPage() {
  return (
    <main className='min-h-screen flex justify-center items-center flex-col-reverse sm:flex-row sm:gap-x-8'>
      <section className="select-none flex flex-col items-center justify-center gap-3">
        <h1
          className="px-2 text-zinc-600 flex flex-col gap-2 justify-center items-center text-wrap text-center max-w-96"
        >
          <span
            className="text-4xl text-zinc-600"
          >
            400
          </span>
          El servidor no puede procesar la solicitud porque su formato es incorrecto. No se debe volver a intentar.
        </h1>
      </section>
      <section className='flex justify-center items-center'>
        <img className='object-cover size-60 sm:size-72' src={satelliteImage} alt='robot-page-not-found' />
      </section>
    </main>
  )
}
