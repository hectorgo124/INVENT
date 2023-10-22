import { Component, ViewChild } from '@angular/core';
import { GetCompanyDto, Shipment } from '../core/api/models';
import { Column } from '../models/column';
import { CompaniesService, ShipmentsService } from '../core/api/services';
import {
  ApexDataLabels,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  theme: ApexTheme | any;
  title: ApexTitleSubtitle | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  fill: any;
  colors: any;
  markers: any;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('pie-chart') pieChart!: ChartComponent;
  public pieChartOptions!: Partial<ChartOptions>;
  public chartOptions!: Partial<ChartOptions>;

  shipments: Shipment[] = [];
  companies: GetCompanyDto[] = [];
  columns: Column[] = [];
  total: number = 0;
  pieChartData: { company: string; totalShipments: number }[] = [];
  chartData: any = [];
  nCompanies! : number;

  constructor(
    private _shipmentsService: ShipmentsService,
    private companiesService: CompaniesService
  ) {}

  ngOnInit(): void {
    this.getLast5Shipments();
    this.getTotalShipments();
    this.getDialyShipments();
    this.getNCompanies();
  }

  getNCompanies() {
    this.companiesService.companiesControllerGetTotalNCompanies().subscribe((res)=> this.nCompanies = res);
  }

  getLast5Shipments() {
    this._shipmentsService
      .shipmentsControllerFindAll({ limit: 5, page: 1 })
      .subscribe({
        next: (res: any) => {
          res = JSON.parse(res);
          this.shipments = res.shipmentsDTO;
          this.total = res.total;

          let columnsProp = Object.keys(this.shipments[0]);

          columnsProp = columnsProp.splice(0, columnsProp.length - 2);

          this.columns = columnsProp.map((col) => ({
            id: col,
            title: col.toUpperCase(),
          }));
        },
      });
  }

  getTotalShipments() {
    this.companiesService
      .companiesControllerTotalShipmentsByCompany()
      .subscribe({
        next: (res: any) => {
          this.pieChartData = JSON.parse(res);
          this.initPieChart();
        },
      });
  }

  getDialyShipments() {
    this._shipmentsService
      .shipmentsControllerGetDailyShipmentsData()
      .subscribe({
        next: (res : any) => {
          this.chartData = JSON.parse(res);
          this.initChart();
        },
      });
  }

  initChart() {
    const dates: string[] = [];
    const totals: number[] = [];

    this.chartData.forEach((day: any) => {
      dates.push(day.date);
      totals.push(day.count);
    });

    this.chartOptions = {
      title: {
        text: 'Shipments per day',
      },
      series: [
        {
          name: 'Shipments per day',
          data: totals,
        },
      ],
      colors: ['#165b63'],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
        stacked: true,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0.6,
          stops: [10, 90, 100],
        },
      },
      markers: {
        size: 5,
        colors: ['#08a0b2'],
        strokeColor: '#083e44',
        strokeWidth: 3,
      },
      xaxis: {
        type: 'datetime',
        categories: dates,
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy',
        },
      },
    };
  }

  initPieChart() {
    const totals: number[] = [];
    const labels: string[] = [];
    this.pieChartData.forEach((comp) => {
      totals.push(comp.totalShipments);
      labels.push(comp.company);
    });

    this.pieChartOptions = {
      series: totals,
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels,
      theme: {
        monochrome: {
          enabled: true,
          color: '#165b63',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      title: {
        text: 'Total companies shipments',
      },
    };
  }
}
