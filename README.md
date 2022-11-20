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

## Aula 3 - Criando uma Toolbar na Página Principal

Para adicionar o Toolbar, acesse a doc https://material.angular.io/components/toolbar/overview.

Passo 1: Importar o MatToolbarModule

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

## Aula 4 - Criando o Módulo de Cursos e Usando Roteamento com Lazy Loading

Para melhor organização do projeto, está sendo separado em módulos, pois conforme o projeto vai crescendo, assim fica mais fácil de gerenciar os componentes criados. Os componentes criados em um módulos são vistos apenas naquele módulo, caso queira usá-lo em outro módulo, tem que exportar no módulo original e depois importar no módulo que deseja usá-lo.

Criar Módulo Courses:

`ng g m courses --routing`

Criar Componente Courses:

`ng g c courses/courses`

Configurar o Routes do Courses:

```typescript
// file: crud-angular\src\app\courses\courses-routing.module.ts

import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent}
];
```

Configurar o Routes do App:

```typescript
// file: crud-angular\src\app\app-routing.module.ts

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses'},
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];
```

Adicionar `router-outlet` para exibir o conteúdo das Rotas:

```html
<!-- file: crud-angular\src\app\app.component.html-->

<mat-toolbar color="primary">
  <span>CRUD Angular + Spring</span>
</mat-toolbar>

<router-outlet></router-outlet>
```

## Aula 5 - Customizando o Tema do Angular Material

Para criar Theme, acesse a doc: https://material.angular.io/guide/theming

```scss
// file: crud-angular\src\styles.scss

@import '@angular/material/theming';
@include mat-core();

$custom-app-primary: mat-palette($mat-light-blue, 800);
$custom-app-secondary: mat-palette($mat-indigo, A200, A400, 700);
$custom-app-warn: mat-palette($mat-red);

$custom-theme: mat-light-theme($custom-app-primary, $custom-app-secondary,  $custom-app-warn);

@include angular-material-theme($custom-theme);
```

# Lista de Cursos - Angular

## Aula 6 - Criando Material Table para Listar Cursos

Para criar List, acesse a doc: https://material.angular.io/components/list/overview

Passo 1: Importar o MatTableModule 

```typescript
// file: crud-angular\src\app\courses\courses.module.ts

import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatTableModule
  ]
})
```

Passo 2: Gerar o Model Course

Criar pasta **model**, no path `crud-angular/src/app/courses/model`.

Gerar uma interface Course:

`ng g interface courses/model/course` 

```typescript
// file: crud-angular/src/app/courses/model/course.ts

export interface Course {
  _id: string;
  name: string;
  category: string;
}
```

Passo 3: TypeScript

Criar variáveis `courses` e `displayedColumns` e já inicializar elas.

```typescript
// file: crud-angular\src\app\courses\courses\courses.component.ts

import { Course } from '../model/course';

export class CoursesComponent {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'front-end'}
  ];

  displayedColumns = ['name', 'category'];
}
```

Passo 4: HTML

Apagar **todo conteúdo** do *courses.component.html*, e colar o seguinte conteúdo.

```html
<!-- crud-angular\src\app\courses\courses\courses.component.html -->

<table mat-table [dataSource]="courses" class="mat-elevation-z8">

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Curso </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Category Column -->
  <ng-container matColumnDef="category">
    <th mat-header-cell *matHeaderCellDef> Categoria </th>
    <td mat-cell *matCellDef="let element"> {{element.category}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
```

# Lista de Cursos - Backend com Spring

# Criando um Curso

# Angular v14 e Refatoração

# Editando um Curso
