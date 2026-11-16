🌐 **Acesse o projeto:** https://blog-next-js-ochre-beta.vercel.app/

## Como funciona a pipeline

O projeto utiliza GitHub Actions para verificar o código e publicar uma versão de preview na Vercel.

A pipeline é executada automaticamente quando ocorre um push na branch main ou quando um pull request é aberto ou atualizado tendo a main como destino. Também pode ser iniciada manualmente pela aba Actions.

### 1. Build

Instala as dependências e verifica se o projeto consegue gerar a versão de produção.

### 2. Verificações e testes

Depois do build, executa:

- **Lint:** verifica possíveis problemas no código.
- **Prettier:** confere se os arquivos seguem o padrão de formatação.
- **Vitest:** executa os testes automatizados.

Se alguma verificação falhar, o deploy não acontece.

### 3. Deploy

Quando um push na branch main passa por todas as verificações, a pipeline envia uma versão de preview para a Vercel.

A execução dos workflows e seus resultados podem ser acompanhados na aba Actions do repositório no GitHub.

Executando localmente

Para instalar as dependências:

``npm ci``

Para iniciar o servidor de desenvolvimento:

``npm run dev``

O projeto estará disponível em http://localhost:3000.
