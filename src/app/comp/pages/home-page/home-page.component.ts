import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {InputType} from "../../../otros/enums/InputType";
import Calculator from "../../../otros/utils/Calculator";
import EmiRawData from "../../../otros/datapojo/EmiRawData";
import {createEmiRawData} from "../../../otros/utils/creator/EmiRawDataCreator";
import EmiResultResponse from "../../../otros/datapojo/EmiResultResponse";
import {ApexChart, ApexLegend, ApexNonAxisChartSeries, ApexResponsive, ChartComponent} from "ng-apexcharts";
import * as M from "materialize-css";

type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  // responsive: ApexResponsive[];
  labels: any;
  chartColor: any;
  legend: ApexLegend
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  @ViewChild('chartApexF') chart: ChartComponent;
  private everyThingInitForChart = false

  // todo : in setting def valu for interest principal and tenure

  // todo : angular json budget edited

  countries = [
    {id: 1, name: "United States"},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"}
  ];
  selectedValue = null;
  defaultCurrency: string = 'INR'

  ngAfterViewInit(): void {
    this.everyThingInitForChart = true;

    // const elems = document.querySelectorAll('select');
    // const instances = M.FormSelect.init(elems, {});

    // M.updateTextFields()


    M.AutoInit();

  }

  dataTextResponseResult: string;

  tenureInYear: number = 10;
  interestRate: number = 12;
  principalAmount: number = 10000;

  inputTypeUI = InputType // Simple enum

  // ngModelOne: NgModel

  emiResponseResult: EmiResultResponse = this.calculateEmi();

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [this.emiResponseResult.totalInterestOverTime, this.emiResponseResult.emiRawData.principal],
      chart: {
        type: "donut",
        dropShadow: {
          enabled: true,
          blur: 2,
        },
        animations: {
          enabled: true,
        },
      },
      labels: ["Interest", "Principal"],
      chartColor: ['#ff6b81', '#a4b0be', '#7bed9f', '#ff6b81', '#9C27B0'],
      legend: {
        position: "bottom",
      }
      /*      responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: "bottom"
                  }
                }
              }
            ]*/
    };

  }


  ngOnInit(): void {
    // For dropdown to work as they need init from Materialize Css library
    // const elems = document.querySelectorAll('select');
    // const instances = M.FormSelect.init(elems, {});

    this.setupSettingsControl()
  }

  setupSettingsControl() { // Will set the default option at startUp

  }


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
      // console.log(inputType)
    }

    this.calculateEmi()

  }

  calculateEmi(): EmiResultResponse {
    let calc = new Calculator()
    let dataCollection: EmiRawData = createEmiRawData(this.principalAmount, this.interestRate, undefined, this.tenureInYear)
    const data = calc.calculateEmi(dataCollection);
    this.emiResponseResult = data
    // update chart
    if (this.everyThingInitForChart) {
      console.log("updating chart data")
      this.chart.updateSeries([this.emiResponseResult.totalInterestOverTime,
        this.emiResponseResult.emiRawData.principal], true);

    }
    return data;
  }

  // Doughnut


  onSettingsNgModelChange($event: any) {
    console.log($event)
  }
}
