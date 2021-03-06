# angular-quick-start

https://angular.io/tutorial

For some reason running ```ng serve``` on WSL2 didn't 
live-reload while running on Powershell did.

**1. Hero Editor**
- Angular CLI is useful
- pipes can be used to format data in template
- two-way binding: input <--> model
- do above with ngModel
- add modules to AppModule
- every component must be declared in exactly one NgModule

**2. Display list**
- *ngFor directive to iterate a list
- *ngIf to conditionally include or exclude a block of HTML.
- toggle a CSS style class with a class binding.

**3. Create a feature component**
- created separate reusable component
- used property binding to give parent control over the chidl
- used @Input decorator to make hero property available for binding by parent component

**4. Add Services**
- refactored data access to the HeroService class
- registered the HeroService as the provider of its service at the root level so that it can be injected anywhere in the application
- used Angular Dependency Injection to inject it into a component
- gave the HeroService get data method an asynchronous signature
- discovered Observable and the RxJS Observable library
- used RxJS of() to return an observable of mock heroes (Observable<Hero[]>)
- component's ngOnInit lifecycle hook calls the HeroService method, not the constructor
- created a MessageService for loosely-coupled communication between classes
- HeroService injected into a component is created with another injected service, MessageService

**5. Add Navigation**
- added Angular router to navigate among components
- turned AppComponent into navigation shell with <a> link and <router-outlet>
- configured the router in an AppRoutingModule
- defined routes, a redirect route, and a parameterized route
- used the routerLink directive in anchor elements
- refactored a tightly-coupled master/detail view into a routed detail view
- used router link parameters to navigate to the detail view of a user-selected hero
- shared the HeroService among multiple components

**6. Get data from a server**
- added the necessary dependencies to use HTTP in the app
- refactored HeroService to load heroes from a web API
- extended HeroService to support post(), put(), and delete() methods
- updated the components to allow adding, editing, and deleting of heroes
- configured an in-memory web API
- learned how to use observables

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
