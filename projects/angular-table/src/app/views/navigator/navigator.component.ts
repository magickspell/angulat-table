import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {data, dataI} from "../../data";

@Component({
    selector: 'navigator',
    template: `
        <section>
            <div class="list-wrapper w-50 mx-auto mb-4">
                <div class="list__head d-flex w-100 justify-content-between align-items-center mt-1">
                    <div
                            [ngClass]="{'active': this.type == 0, 'list__head__item p-2 w-25': 1}"
                            routerLink="/navigator" [queryParams]="{tab: '0'}"
                    >
                        Income
                    </div>
                    <div
                            [ngClass]="{'active': this.type == 1, 'list__head__item p-2 w-25': 1}"
                            routerLink="/navigator" [queryParams]="{tab: '1'}"
                    >
                        Outcome
                    </div>
                    <div
                            [ngClass]="{'active': this.type == 2, 'list__head__item p-2 w-25': 1}"
                            routerLink="/navigator" [queryParams]="{tab: '2'}"
                    >
                        Loans
                    </div>
                    <div
                            [ngClass]="{'active': this.type == 3, 'list__head__item p-2 w-25': 1}"
                            routerLink="/navigator" [queryParams]="{tab: '3'}"
                    >
                        Investments
                    </div>
                </div>
                <div class="list__content mt-4 mb-4">
                    <div class="list__item_head d-flex justify-content-around align-items-center">
                        <p class="d-flex justify-content-around align-items-center">Name</p>
                        <p class="d-flex justify-content-around align-items-center">Account</p>
                    </div>
                    <div class="list__item d-flex justify-content-around align-items-center"
                         *ngFor="let item of this.data"
                    >
                        <p class="d-flex justify-content-around align-items-center">{{ item.name.first }} {{ item.name.last }}</p>
                        <p class="d-flex justify-content-around align-items-center">{{ item.amount }}</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: [`
      .list-wrapper {
        border: 1px solid black;
        border-radius: 20px;

        .list__head {
          .list__head__item {
            border: 1px solid black;
            border-bottom: 0.5px solid lightgray;
            border-radius: 20px 20px 0 0;
            cursor: pointer;
            text-align: center;

            &.active {
              background: lightgray;
            }
          }
        }

        .list__content {
          max-height: 800px;
          overflow-y: auto;

          .list__item_head,
          .list__item {
            border-top: 1px solid lightgray;

            p {
              width: 200px;
              margin: 0;
              height: 32px;
            }
          }

          .list__item_head {
            border-top: none;
          }
        }
      }
    `]
})

export class NavigatorComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        data.map(i => {
            i.amount = String(Math.floor(Math.random() * 4000))
        })
        const dict = ['income', 'outcome', 'loan', 'investment']
        this.route.queryParams.subscribe(params => {
                if (params['tab']) {
                    this.type = params['tab']
                }
                if (this.type !== -1) {
                    this.data = []
                    data.map(i => {
                        if (i.type === dict[this.type]) {
                            this.data.push(i)
                        }
                    })
                } else {
                    this.data = data
                }
            }
        );
    }

    type: number = -1
    data: dataI[] = []
}
