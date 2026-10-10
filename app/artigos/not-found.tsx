import Link from "next/link"

const NotFound = () => {
    return (
        <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-24 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
                Artigo não encontrado
            </h1>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                O artigo que você está procurando não existe.
            </p>

            <Link
                href="/artigos"
                className="mt-8 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
                Ver todos os artigos
            </Link>
        </div>
    )
}

export default NotFound
