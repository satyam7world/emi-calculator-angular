import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
  }

  dataTextResponseResult: string;

  tenureInYear: number = 1;
  interestRate: number = 10;
  principalAmount: number = 10000;

  // ngModelOne: NgModel

  constructor() {

  }

  ngOnInit(): void {

  }

  onInputValueChanged(event: Event) {
    // (event.target as HTMLInputElement).value;
    let htmlInputElement = (event.target as HTMLInputElement);
    this.dataTextResponseResult = htmlInputElement.value
  }

  /**
   * @link https://stackoverflow.com/a/34428613/11815154
   * used this instead of banana to observe and change the value before
   * setting to other places*/
  onNgModelChange($event: any, id: any) {
    this.tenureInYear = $event
    this.principalAmount = $event
    this.interestRate = $event
    console.log(id)
  }
}
