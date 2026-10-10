import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { artigos } from "@/app/artigos/data"

export const instant = false

type Props = {
    params: Promise<{
        slug: string
    }>
}

export const generateStaticParams = async () => {
    return artigos.map((artigo) => ({
        slug: artigo.slug,
    }))
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { slug } = await params
    const detalhes = artigos.find((artigo) => artigo.slug === slug)

    if (!detalhes) {
        return {}
    }

    return {
        title: detalhes.titulo,
        description: detalhes.resumo,
        authors: [{ name: detalhes.autor }],
        keywords: detalhes.tags,
    }
}

const ArtigoPage = async ({ params }: Props) => {
    const { slug } = await params

    const detalhes = artigos.find((artigo) => artigo.slug === slug)

    if (!detalhes) {
        return notFound()
    }

    return (
        <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
            <Link
                href="/"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
                &larr; Todos os artigos
            </Link>

            <article className="mt-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    {detalhes.titulo}
                </h1>

                <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
                    {detalhes.resumo}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{detalhes.autor}</span>
                    <span aria-hidden="true">&middot;</span>
                    <time dateTime={detalhes.publicadoEm}>
                        {new Date(detalhes.publicadoEm).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{detalhes.tempoLeitura} min de leitura</span>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                    {detalhes.tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-full bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className="mt-10 flex flex-col gap-6 border-t border-zinc-200 pt-10 dark:border-zinc-800">
                    {detalhes.conteudo.map((paragrafo, indice) => (
                        <p
                            key={indice}
                            className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
                        >
                            {paragrafo}
                        </p>
                    ))}
                </div>
            </article>
        </main>
    )
}

export default ArtigoPage
