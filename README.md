🌐 **Acesse o projeto:** https://blog-next-js-ochre-beta.vercel.app/

## Como funciona a pipeline

O projeto usa GitHub Actions para verificar o código e publicar uma versão de preview na Vercel.

A pipeline roda automaticamente quando há um push ou um pull request para a branch `main` ou `.github/workflow`. Também pode ser iniciada manualmente pela aba Actions.

### 1. Build

Instala as dependências e verifica se o projeto consegue gerar a versão de produção.

### 2. Verificações e testes

Depois do build, executa:

- **Lint:** verifica possíveis problemas no código.
- **Prettier:** confere se os arquivos seguem o padrão de formatação.
- **Vitest:** executa os testes automatizados.

Se alguma verificação falhar, o deploy não acontece.

### 3. Deploy

Quando um push na `main` passa por todas as verificações, a pipeline envia uma versão de **preview** para a Vercel.
