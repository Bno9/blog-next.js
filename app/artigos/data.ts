import { readFile } from "node:fs/promises"
import path from "node:path"
import slugify from "slugify"

export type ArtigoBruto = {
    titulo: string
    resumo: string
    autor: string
    publicadoEm: string
    tempoLeitura: number
    tags: string[]
    conteudo: string[]
}

export type Artigo = ArtigoBruto & {
    slug: string
}

export const gerarSlug = (titulo: string) =>
    slugify(titulo, { lower: true, strict: true, locale: "pt" })

export const getArtigos = async (): Promise<Artigo[]> => {
    "use cache"

    const caminho = path.join(process.cwd(), "data", "artigos.json")
    const conteudo = await readFile(caminho, "utf-8")
    const brutos: ArtigoBruto[] = JSON.parse(conteudo)

    return brutos
        .map((artigo) => ({
            ...artigo,
            slug: gerarSlug(artigo.titulo),
        }))
        .sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm))
}

export const getArtigo = async (slug: string): Promise<Artigo | undefined> => {
    const artigos = await getArtigos()

    return artigos.find((artigo) => artigo.slug === slug)
}
