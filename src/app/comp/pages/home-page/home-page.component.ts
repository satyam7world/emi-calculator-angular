import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {InputType} from "../../../otros/enums/InputType";
import Calculator from "../../../otros/utils/Calculator";
import EmiRawData from "../../../otros/datapojo/EmiRawData";
import {createEmiRawData} from "../../../otros/utils/creator/EmiRawDataCreator";
import EmiResultResponse from "../../../otros/datapojo/EmiResultResponse";
import {ApexChart, ApexLegend, ApexNonAxisChartSeries, ChartComponent} from "ng-apexcharts";
import * as M from "materialize-css";
import {environment} from "../../../../environments/environment";
import {SeoService} from "../../../seo.service";

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

  // todo : add , in value with option to change internation or indian . or ,


  ngAfterViewInit(): void {
    this.everyThingInitForChart = true;

    // const elems = document.querySelectorAll('select');
    // const instances = M.FormSelect.init(elems, {});

    // M.updateTextFields()


    // M.AutoInit();

    // setTimeout(() => {
    //   M.FormSelect.init(document.querySelectorAll('#displayCurrencySymbolSelectSetting'), {})
    // }, 0)

    //https://stackoverflow.com/a/56840868/11815154
    setTimeout(() => {
      M.AutoInit();
      // console.log('defInterest', this.defaultInterestRateNgModel)
    }, 0)

    // console.log('defInterest', this.defaultInterestRateNgModel)
  }

  dataTextResponseResult: string;

  // no update for settings input which will remain static unless user changed manually, value // https://stackoverflow.com/a/64864412/11815154
  defaultInterestNoUpdate = +(localStorage.getItem('defaultInterest') || environment.defaultInterest);
  defaultTenureTimeNoUpdate = +(localStorage.getItem('defaultTenureValue') || environment.defaultTenure);
  defaultPrincipalAmountNoUpdate = +(localStorage.getItem('idPrincipalDefault') || environment.defaultPrincipal);

  tenureTime: number = this.defaultTenureTimeNoUpdate
  //  https://stackoverflow.com/a/14668510/11815154 // +(string to number)
  interestRate: number = this.defaultInterestNoUpdate
  //idPrincipalDefault : the setter : settings one
  principalAmount: number = this.defaultPrincipalAmountNoUpdate


  // todo : 06/02/22 / add a setting option to convert value on toggle
  tenureUnitInMonth: boolean = false

  inputTypeUI = InputType // Simple enum

  // ngModelOne: NgModel

  emiResponseResult: EmiResultResponse = this.calculateEmi();

  public chartOptions: ChartOptions;

  // todo better select with default value as selected

  currencySymbols = [
    {value: '₹', nameX: "Indian Rupee Sign ₹"},
    {value: '$', nameX: "Dollar Sign $"},
    {value: '€', nameX: "Euro Sign €"},
    {value: '¥', nameX: "Yen Sign ¥"},
    {value: '£', nameX: "Pound Sign £"}];

  currencySymbolsNgModelNumber: string = localStorage.getItem("displayCurrencySymbolSelectSetting") || '₹';

  // currencySignAppendable = localStorage.getItem("displayCurrencySymbolSelectSetting") || '₹';

  public settingsRoundingOption = [
    {value: 'two-digit', nameX: "Show 2 digits decimal"},
    {value: 'no-rounding', nameX: "No Rounding"},
    {value: 'ceil', nameX: "(Ceil) Rounding Integer"},
    {value: 'floor', nameX: "(Floor) Rounding Integer"},
    {value: 'one-digit', nameX: "Show 1 digits decimal"},
    {value: 'three-digit', nameX: "Show 3 digits decimal"}
  ];
  settingsRoundingOptionNgModel: string = localStorage.getItem("numberRoundingSelectSetting") || environment.settingsRoundingOptionNgModelDefault

  constructor(private seo: SeoService) {
    this.chartOptions = {
      series: [this.emiResponseResult.totalInterestOverTimeAccurate, this.emiResponseResult.emiRawData.principal],
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

    this.seo.generateTags({})
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
        this.tenureTime = $event;
        break;
      case InputType.TENURE_UNIT_CHANGER:
        // console.log(this.tenureUnitInMonth)
        // console.log(inputType, $event)
        this.tenureUnitInMonth = $event
        break;
      default:
      // console.log(inputType)
    }

    this.calculateEmi()

  }

  calculateEmi(): EmiResultResponse {
    let calc = new Calculator()
    let dataCollection: EmiRawData;
    if (this.tenureUnitInMonth) {
      dataCollection = createEmiRawData(this.principalAmount, this.interestRate,
        this.tenureTime, undefined);
    } else {
      dataCollection = createEmiRawData(this.principalAmount, this.interestRate,
        undefined, this.tenureTime)
    }
    // console.log(this.settingsRoundingOptionNgModel)
    const data = calc.calculateEmi(dataCollection);
    this.emiResponseResult = data
    // update chart
    if (this.everyThingInitForChart) {
      // console.log("updating chart data")
      this.chart.updateSeries([this.emiResponseResult.totalInterestOverTimeAccurate,
        this.emiResponseResult.emiRawData.principal], true);

    }
    return data;
  }

  onSettingsNgModelChange($event: any): void { // No more required
    let data = ($event as HTMLInputElement)
    // console.log(data.id, data.value)
    switch (data.id) {
      case "displayCurrencySymbolSelectSetting":
        // console.log("helloca leed")
        // data.value contains a number so using the ngModel Value
        localStorage.setItem("displayCurrencySymbolSelectSetting", this.currencySymbolsNgModelNumber)
        break;
      case "numberRoundingSelectSetting":
        // data.value contains a number so using the ngModel Value
        localStorage.setItem("numberRoundingSelectSetting", this.settingsRoundingOptionNgModel)
        this.calculateEmi()
        break;
      case 'defaultTenureValue':
        console.log('defaultTenureValue', data.value)
        localStorage.setItem('defaultTenureValue', data.value)
        break;
      case 'idPrincipalDefault':
        console.log('idPrincipalDefault', data.value)
        localStorage.setItem('idPrincipalDefault', data.value)
        break;
      case 'defaultInterest':
        console.log('defaultInterest', data.value)
        localStorage.setItem('defaultInterest', data.value)
        break;

    }
  }
}


/*
*
*  currencySymbols = [
    {value: '&#8377', nameX: "Indian Rupee Sign &#8377;"},
    {value: '&dollar', nameX: "Dollar Sign &dollar;"},
    {value: '&euro', nameX: "Euro Sign &euro;"},
    {value: '&yen', nameX: "Yen Sign &yen;"},
    {value: '&pound', nameX: "Pound Sign &pound;"}];*/
