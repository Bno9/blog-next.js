# Blog Next.js

🌐 **Acesse o projeto:** [Blog Next.js](https://blog-next-js-ochre-beta.vercel.app/)

## Como funciona a pipeline

O projeto utiliza **GitHub Actions** para verificar o código e publicar uma versão de preview na **Vercel**.

A pipeline é executada automaticamente quando ocorre um push na branch `main` ou quando um pull request é aberto ou atualizado tendo a `main` como destino. Também pode ser iniciada manualmente pela aba **Actions** do GitHub.

### 1. Build

Instala as dependências e verifica se o projeto consegue gerar a versão de produção.

### 2. Verificações e testes

Após o build, são executadas as seguintes verificações:

- **Lint:** identifica possíveis problemas no código.
- **Prettier:** verifica se os arquivos seguem o padrão de formatação definido.
- **Vitest:** executa os testes automatizados.

Se alguma dessas etapas falhar, o deploy não será realizado.

### 3. Deploy

Quando um push na branch `main` passa por todas as verificações, a pipeline publica uma versão de **preview** na Vercel.

A execução dos workflows e seus resultados podem ser acompanhados na aba **Actions** do repositório no GitHub.

## Executando localmente

### Pré-requisitos

- Node.js
- npm

### Instalação das dependências

```bash
npm ci
```

### Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Após iniciar o servidor, o projeto estará disponível em:

[http://localhost:3000](http://localhost:3000)
