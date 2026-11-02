import { renderToStaticMarkup } from "react-dom/server";
import { expect, test, vi } from "vitest";
import ArtigosPage from "@/app/page";

vi.mock("@/app/artigos/data", () => ({
  getArtigos: vi.fn().mockResolvedValue([
    {
      slug: "primeiro-artigo",
      titulo: "Primeiro artigo",
      resumo: "Um artigo de exemplo",
      publicadoEm: "2026-11-02",
      tempoLeitura: 3,
      tags: ["React"],
    },
  ]),
}));

test("exibe o artigo com o link correto", async () => {
  const pagina = await ArtigosPage();
  const html = renderToStaticMarkup(pagina);

  expect(html).toContain("Primeiro artigo");
  expect(html).toContain('href="/artigos/primeiro-artigo"');
});
