import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <nav class="bg-primary">
            <ul class="d-flex m-0 p-0 mx-auto w-50">
                <li class="d-flex w-50 justify-content-center align-items-center">
                    <a class="bg-light" href="">Summary</a>
                </li>
                <li class="d-flex w-50 justify-content-center align-items-center">
                    <a class="bg-light" href="./navigator">List</a>
                </li>
            </ul>
        </nav>

        <router-outlet></router-outlet>
    `,
    styles: [`
      ul {
        list-style: none;

        li {
          width: 200px;
          height: 40px;

          a {
            text-decoration: none;
            color: black;
            border: 1px solid black;
            width: 100px;
            text-align: center;
            border-radius: 20px;
            cursor: pointer;
          }
        }
      }
    `]
})
export class AppComponent {
    title = 'angular-table';
}
