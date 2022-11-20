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

## Aula 7 - CSS do Material Table e Criando um Módulo App Material

Para criar Card, acesse a doc: https://material.angular.io/components/card/overview

Passo 1: Importar o MatCardModule 

```typescript
// file: crud-angular\src\app\courses\courses.module.ts

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatCardModule
  ]
})
```

Passo 2: Englobar conteúdo da table dentro do `<mat-card></mat-card>`.

```html
<!-- file: crud-angular\src\app\courses\courses\courses.component.html -->

<mat-card>
  <table mat-table [dataSource]="courses" class="mat-elevation-z8">
    ....
  </table>
</mat-card>
```

> Para mim não resolveu a questão do espaçamento que aparece no vídeo da Loiane, então eu precisei acrescentar uma declaração de CSS para o componente mat-card.

```scss
// file: crud-angular\src\app\courses\courses\courses.component.scss

mat-card {
  margin: 1rem;
}
```

Passo 3: Adicionar Toolbar como Título da tabela

```typescript
// file: crud-angular\src\app\courses\courses.module.ts

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatToolbarModule
  ]
})
```

Adicionar `<mat-toolbar>` no HTML.

```html
<!-- file: crud-angular\src\app\courses\courses\courses.component.html -->

<mat-card>
  <mat-toolbar color="primary">Cursos Disponíveis</mat-toolbar>
  ....
</mat-card>
```

**Refactoring - Refatorando os imports de Módulos do Angular Material**

Passo 1: Criar Módulo AppMaterial

Não precisa do Routing, é um módulo criado apenas para organizar os imports do Angular Material.

`ng g m shared/app-material` 

Editar o módulo criado para deixar apenas o exports, código completo abaixo.

```typescript
// file: crud-angular\src\app\shared\app-material\app-material.module.ts

import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
```

Passo 2: Remover referências a MatTableModule, MatCardModule e MatToolbarModule e adicionar a AppMaterialModule

```typescript
// file: crud-angular\src\app\courses\courses.module.ts

// ------------------- REMOVIDOS ---------------------------
// import { MatTableModule } from '@angular/material/table';
// import { MatCardModule } from '@angular/material/card';
// import { MatToolbarModule } from '@angular/material/toolbar';

import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  imports: [
    AppMaterialModule
  ]
})
```
## Aula 8 - Criando um Service no Angular

Passo 1: Criar o Service Courses

`ng g s courses/services/courses`

Passo 2: Criar método list

```typescript
// file: crud-angular\src\app\courses\services\courses.service.ts

import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end'}
    ];
  }
}
```

Passo 3: Popular variável `courses` com retorno do Service, através do constructor. Não esquecer de zerar a inicialização da variável `courses`. 

```typescript
// file: crud-angular\src\app\courses\courses\courses.component.ts

import { CoursesService } from '../services/courses.service';

courses: Course[] = [];

constructor(private coursesService: CoursesService) {
  this.courses = this.coursesService.list();
}
```

## Aula 9 - Chamada HTTP Get no Angular e RXJS

Passo 1: Adicionar import do HttpClientModule no AppModule

```typescript
// file: crud-angular\src\app\app.module.ts

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
```

Passo 2: Criar o arquivo de Data (Fake) `courses.json`.

```json
// file: crud-angular-spring/crud-angular/src/assets/courses.json
[
  { "_id": "1", "name": "Angular", "category": "front-end"}
]
```

Passo 3: Modificar o Service para simular a chamada ao serviço

```typescript
// file: crud-angular\src\app\courses\services\courses.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }
}
```

Passo 4: Alterar o tipo da variável `courses` para o tipo **Observable**.

```typescript
// file: crud-angular\src\app\courses\courses\courses.component.ts

import { Observable } from 'rxjs';

courses: Observable<Course[]>;
```

> Não é preciso fazer nenhuma outra modificação para funcionar, pois está usando o `dataSource` do Angular Material, e ele recebe um array ou um Observable, por isso simplifica tanto. Caso contrário teria que fazer um **subscribe** no Component.

## Aula 10 - Lista de Cursos: Spinner (Carregando)

Passo 1: Adicionar o Spinner

Para adicionar o Progress Spinner, acesse a doc https://material.angular.io/components/progress-spinner/overview

```typescript
// file: crud-angular\src\app\shared\app-material\app-material.module.ts

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    MatProgressSpinnerModule
  ]
})
```

Passo 2: Alterar o Component.

```typescript
// file: crud-angular\src\app\courses\courses\courses.component.ts

// ALTERAR O NOME ACRESCENTANDO O "$"
courses$: Observable<Course[]>;

// CORRIGIR O NOME
this.courses$ = this.coursesService.list();
```

Passo 3: Alterar o HTML

```html
<!-- file: crud-angular\src\app\courses\courses\courses.component.html -->

<div *ngIf="courses$ | async as courses; else loading">
  <!-- CONTEÚDO DO <table></table> -->
</div>

<ng-template #loading>
  <div class="loading-spinner">
    <mat-spinner></mat-spinner>
  </div>
</ng-template>
```

Passo 4: Acrescentar no CSS

```scss
.loading-spinner {
  padding: 25px;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
```

> Se quiser testar o Spinner, pode adicionar um delay no service, utilizando o operador Rxjs delay(5000).

# Lista de Cursos - Backend com Spring

# Criando um Curso

# Angular v14 e Refatoração

# Editando um Curso
