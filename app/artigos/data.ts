export type Artigo = {
  slug: string;
  titulo: string;
  resumo: string;
  autor: string;
  publicadoEm: string;
  tempoLeitura: number;
  tags: string[];
  conteudo: string[];
};

export const artigos: Artigo[] = [
  {
    slug: "app-router",
    titulo: "Entendendo o App Router do Next.js",
    resumo:
      "Como o roteamento por pastas substitui o antigo diretório pages e por que isso muda a forma de organizar um projeto.",
    autor: "Lucas",
    publicadoEm: "2026-09-14",
    tempoLeitura: 6,
    tags: ["Next.js", "React", "Roteamento"],
    conteudo: [
      "No App Router, cada pasta dentro de app/ vira um segmento da URL e o arquivo page.tsx é o que de fato responde por aquela rota. Uma pasta sem page.tsx não gera rota nenhuma: ela serve só para agrupar arquivos.",
      "Pastas entre colchetes, como [slug], são segmentos dinâmicos. O valor que aparecer na URL chega até o componente pela prop params, e é por isso que /artigos/meu-artigo e /artigos/outro-artigo são atendidos pelo mesmo arquivo.",
      "Além do page.tsx existem arquivos com papel reservado no mesmo nível: layout.tsx envolve as páginas abaixo dele e preserva estado entre navegações, loading.tsx define o fallback de carregamento e not-found.tsx cuida do caso em que o conteúdo não existe.",
      "A consequência prática é que a estrutura de pastas passa a ser a documentação do seu roteamento. Olhar a árvore de app/ já diz quais URLs existem, sem precisar abrir um arquivo de configuração.",
    ],
  },
  {
    slug: "server-components",
    titulo: "Server Components na prática",
    resumo:
      "A diferença entre rodar no servidor e no cliente, quando usar use client e o que isso significa para o bundle enviado ao navegador.",
    autor: "Breno",
    publicadoEm: "2026-09-28",
    tempoLeitura: 8,
    tags: ["React", "Server Components", "Performance"],
    conteudo: [
      "No App Router todo componente é um Server Component por padrão. Ele roda no servidor, nunca é enviado ao navegador e por isso pode acessar banco de dados, ler variáveis de ambiente secretas e usar async/await direto no corpo da função.",
      "O custo disso é que ele não tem interatividade: não existe useState, não existe useEffect e não existe onClick. Nada disso faz sentido em um componente que já terminou de executar antes do HTML chegar ao usuário.",
      "Quando você precisa de estado ou de eventos, marca o arquivo com a diretiva use client no topo. A partir dali aquele componente e tudo que ele importa passam a ser enviados ao navegador, somando ao tamanho do bundle.",
      "A regra que costuma funcionar é empurrar o use client para as folhas da árvore. Em vez de marcar a página inteira como cliente por causa de um botão, isole o botão em seu próprio componente e mantenha o resto no servidor.",
    ],
  },
  {
    slug: "typescript",
    titulo: "Por que o TypeScript é tão utilizado",
    resumo:
      "Tipos como contrato entre partes do código, o que o strict mode realmente exige e onde o any costuma esconder bugs.",
    autor: "Joao Silva",
    publicadoEm: "2026-10-05",
    tempoLeitura: 5,
    tags: ["TypeScript", "Boas práticas"],
    conteudo: [
      "A primeira impressão do TypeScript é de burocracia: você escreve mais para fazer a mesma coisa. O retorno aparece quando o projeto cresce e você precisa mudar algo que outras dez partes do código consomem.",
      "Um tipo é um contrato. Ao declarar que artigos é um Artigo[], qualquer item faltando um campo obrigatório vira erro na hora de escrever, e não um undefined aparecendo na tela depois do deploy.",
      "O modo strict, ligado no tsconfig.json deste projeto, é o que entrega a maior parte desse valor. Ele obriga a tratar null e undefined explicitamente, que é justamente a origem da maioria dos erros em tempo de execução.",
      "O any desliga toda essa verificação para o valor em que aparece. Às vezes é um escape necessário, mas vale tratá-lo como dívida: se você não sabe o tipo ainda, unknown força você a verificar antes de usar, e isso é quase sempre o que você queria.",
    ],
  },
];
