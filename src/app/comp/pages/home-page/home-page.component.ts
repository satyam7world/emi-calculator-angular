import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InputType} from "../../../otros/enums/InputType";
import Calculator from "../../../otros/utils/Calculator";
import EmiRawData from "../../../otros/datapojo/EmiRawData";
import emiRawData from "../../../otros/datapojo/EmiRawData";
import {createEmiRawData} from "../../../otros/utils/creator/EmiRawDataCreator";

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

  inputTypeUI = InputType // Simple enum

  // ngModelOne: NgModel

  constructor() {

  }

  ngOnInit(): void {

  }

  /*  onInputValueChanged(event: Event) {
      // (event.target as HTMLInputElement).value;
      let htmlInputElement = (event.target as HTMLInputElement);
      this.dataTextResponseResult = htmlInputElement.value
    }*/

  /**
   * @link https://stackoverflow.com/a/34428613/11815154
   * used this instead of banana to observe and change the value before
   * setting to other places*/
  onNgModelChange($event: any, inputType: InputType) {
    switch (inputType) {
      case InputType.INTEREST:
        this.interestRate = $event
        break;
      case InputType.PRINCIPAL:
        this.principalAmount = $event;
        break;
      case InputType.TENURE:
        this.tenureInYear = $event;
        break;
      default:
        console.log(inputType)
    }

    let calc = new Calculator()
    let dataCollection: EmiRawData = createEmiRawData(this.principalAmount, this.interestRate, undefined, this.tenureInYear)
    this.dataTextResponseResult = calc.calculateEmi(dataCollection)
  }

}
