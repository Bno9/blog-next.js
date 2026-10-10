import Link from "next/link"
import { getArtigos } from "@/app/artigos/data"

const ArtigosPage = async () => {
    const artigos = await getArtigos()

    return (
        <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
            <h1 className="text-3xl font-bold tracking-tight">Artigos</h1>

            <ul className="mt-8 flex flex-col gap-4">
                {artigos.map((artigo) => (
                    <li key={artigo.slug}>
                        <Link
                            href={`/artigos/${artigo.slug}`}
                            className="block rounded-lg border border-zinc-200 p-4 transition-colors hover:border-blue-500 hover:bg-white dark:border-zinc-800 dark:hover:border-blue-400 dark:hover:bg-zinc-900"
                        >
                            <h2 className="font-semibold">{artigo.titulo}</h2>

                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                                {artigo.resumo}
                            </p>

                            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 dark:text-zinc-500">
                                <time dateTime={artigo.publicadoEm}>
                                    {new Date(artigo.publicadoEm).toLocaleDateString("pt-BR", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{artigo.tempoLeitura} min</span>
                                <span aria-hidden="true">&middot;</span>
                                <span>{artigo.tags.join(", ")}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default ArtigosPage
