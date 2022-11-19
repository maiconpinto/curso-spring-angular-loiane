# Curso Angular + Spring Boot da Loiane Groner

Link do Treinamento: https://loiane.training/curso/crud-angular-spring

# Introdução

## Aula 1 - Introdução e Criação do Projeto Angular

Ferramentas:

- Node
- VSCode (adicionar extension "Angular Extension Pack" da própria Loiane)

Verificar a versão do Node.

`node -v`

Instalar o Angular CLI globalmente.

`npm install -g @angular/cli`

Verificar a versão do Angular.

`ng version`

Criar o primeiro projeto. Escolher Angular Routing (Y) e Stylesheet o (SCSS).

`ng new crud-angular`

## Aula 2 - Overview do Projeto e Instalando o Angular Material

Observar as dependências no package.json. O "dependencies" é o que vai para produção, enquanto "devDependencies" é utilizado apenas em tempo de desenvolvimento.

Iniciar o projeto Angular, primeiro deve ir para a pasta do projeto.

`cd crud-angular`

Iniciar o projeto localmente.

`ng serve`

Acessar `http://localhost:4200` deve aparacer a tela inicial do Angular.

Depois de conferir se está tudo certo, vamos adicionar o Angular Material.

`ng add @angular/material` 

- Vai pedir para confirmar a versão que será instalada, digite (Y) para confirmar.
- Escolha o theme "Indigo/Pink", por exemplo, ou outro de preferência. 
- Vai perguntar sobre a tipografia do Angular Material, escolher (Y) 
- Escolha para usar e ativar as Animations

## Criando uma Toolbar na Página Principal

Para adicionar o Toolbar, acesse a doc https://material.angular.io/components/toolbar/overview.

Passo 1:

```typescript
// file: crud-angular\src\app\app.module.ts

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatToolbarModule
  ]
})
```

Passo 2:

Apagar **todo conteúdo** do *app.componet.html*, e colar o seguinte conteúdo.

```html
<!-- file: crud-angular\src\app\app.component.html -->

<mat-toolbar color="primary">
  <span>CRUD Angular + Spring</span>
</mat-toolbar>
```

> Se não funcionar, tente parar o `ng serve` e executar novamente. 

# Lista de Cursos - Angular

# Lista de Cursos - Backend com Spring

# Criando um Curso

# Angular v14 e Refatoração

# Editando um Curso
