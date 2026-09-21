import { clsxMerge } from "@/shared/utils/clsxMerge";
import type { FallbackProps } from "react-error-boundary";
import satelliteImage from '@/assets/satellite.png';

function ErrorBoundaryPage({ resetErrorBoundary }: FallbackProps) {
  return (
    <main className='min-h-screen flex justify-center items-center flex-col-reverse sm:flex-row sm:gap-x-8'>
      <section className={clsxMerge(
        "select-none flex flex-col",
        "items-center justify-center gap-3"
      )}>
        <h1
          className={clsxMerge(
            "text-2xl px-2 text-zinc-600",
            "flex flex-col gap-1 justify-center items-center",
          )}
        >
          <span
            className="text-4xl text-zinc-600"
          >
            500
          </span>
          Error interno del servidor
        </h1>
        <button
          type="button"
          className="cursor-pointer text-sm text-zinc-600 decoration-1 hover:underline"
          onClick={resetErrorBoundary}
        >
          Recargar la página
        </button>
      </section>
      <section className='flex justify-center items-center'>
        <img className='object-cover size-60 sm:size-72' src={satelliteImage} alt='robot-page-not-found' />
      </section>
    </main>
  )
}

export default ErrorBoundaryPage;