import {Component, OnInit} from '@angular/core';
import {data} from "../../data";

@Component({
    selector: 'summary',
    template: `
        <section>
            <div class="welcome-wrapper w-50 mx-auto">
                <div class="welcome__head"></div>
                <div class="welcome__content d-flex justify-content-center align-items-center">
                    <article>
                        <h3 class="w-50 mx-auto mt-4 nb-2">Welcome</h3>
                        <p class="mx-auto">With supporting text below as natural lead-in to additional content.</p>
                        <div class="welcome__content__btn mb-4">
                            <button class="btn btn-primary"
                                    routerLink="/navigator"
                            >See transaction
                            </button>
                        </div>
                    </article>
                </div>
                <div class="welcome__bottom d-flex justify-content-center align-items-center">
                    You have {{ data.length }} transactions
                </div>
            </div>
            <div class="transactions__wrapper w-50 mx-auto mt-2 mb-4">
                <div class="transactions_income">
                    <p>{{ income }}</p>
                    <p>Income</p>
                    <div class="transactions__btn">
                        <button class="btn btn-primary"
                                routerLink="/navigator" [queryParams]="{tab: '0'}"
                        >See all
                        </button>
                    </div>
                </div>
                <div class="transactions_investments">
                    <p>{{ investments }}</p>
                    <p>Investments</p>
                    <div class="transactions__btn">
                        <button class="btn btn-primary"
                                routerLink="/navigator" [queryParams]="{tab: '3'}"
                        >See all
                        </button>
                    </div>
                </div>
                <div class="transactions_outcome">
                    <p>{{ outcome }}</p>
                    <p>Outcome</p>
                    <div class="transactions__btn">
                        <button class="btn btn-primary"
                                routerLink="/navigator" [queryParams]="{tab: '1'}"
                        >See all
                        </button>
                    </div>
                </div>
                <div class="transactions_loans">
                    <p>{{ loans }}</p>
                    <p>Loans</p>
                    <div class="transactions__btn">
                        <button class="btn btn-primary"
                                routerLink="/navigator" [queryParams]="{tab: '2'}"
                        >See all
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: [`
      * {
        cursor: default;
      }
            
      .welcome-wrapper {
        border: 2px solid lightgray;
        border-top: none;
        
        .welcome__head {
          height: 40px;
          border-bottom: 2px solid lightgray;
          background: whitesmoke;
        }

        .welcome__content {
          article {
            .welcome__content__btn {
              width: 150px;
              margin: 0 auto;
            }
          }
        }

        .welcome__bottom {
          background: whitesmoke;
          height: 40px;
          border-top: 2px solid lightgray;
        }
      }

      .transactions__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        padding: 4px;

        .transactions_income,
        .transactions_investments,
        .transactions_outcome,
        .transactions_loans {
          border: 1px solid lightgray;
          border-radius: 8px;
          padding: 16px;

          p:first-child {
            font-weight: 700;
          }

          .transactions__btn {
            text-align: right;
          }
        }
      }
    `]
})

export class SummaryComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    data = data
    income = data.filter(i => i.type === 'income').length
    outcome = data.filter(i => i.type === 'outcome').length
    investments = data.filter(i => i.type === 'investment').length
    loans = data.filter(i => i.type === 'loan').length

}
