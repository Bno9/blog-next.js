import { readFile } from "node:fs/promises"
import path from "node:path"
import slugify from "slugify"

/** Um artigo como ele vem do arquivo data/artigos.json, ainda sem slug. */
export type ArtigoBruto = {
    titulo: string
    resumo: string
    autor: string
    publicadoEm: string
    tempoLeitura: number
    tags: string[]
    conteudo: string[]
}

/** Um artigo já pronto para uso, com o slug derivado do título. */
export type Artigo = ArtigoBruto & {
    slug: string
}

/**
 * lower: URLs em minúsculas.
 * strict: remove acentos e pontuação, então "Next.js" vira "next-js".
 */
export const gerarSlug = (titulo: string) =>
    slugify(titulo, { lower: true, strict: true, locale: "pt" })

/** Lê o JSON local e devolve os artigos com slug, do mais recente ao mais antigo. */
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

/** Busca um artigo pelo slug. Devolve undefined quando não existe. */
export const getArtigo = async (slug: string): Promise<Artigo | undefined> => {
    const artigos = await getArtigos()

    return artigos.find((artigo) => artigo.slug === slug)
}
