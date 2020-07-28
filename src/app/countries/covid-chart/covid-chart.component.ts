import { Component, Input, OnInit } from "@angular/core";
import { DailyDataObj } from "~/app/shared/interfaces/daily-data.interfaces";

class ObservableArray {
}

@Component({
  selector: "covid-chart",
  templateUrl: "./covid-chart.component.html",
  styleUrls: ["./covid-chart.component.css"]
})
export class CovidChartComponent {

    lineChartData: Array<any> = [];
    lineChartLabels: Array<any> = [];

    @Input()
    set dailyStats(dailyStats: Array<DailyDataObj>) {
        const stats =  dailyStats.map((({Date, Active, Deaths, Recovered}) => ({Date, Active, Deaths, Recovered})));
        // const date = dailyStats.map(({ Date }) => Date);
        // const formattedDate = date.map((d) => new Date(d).toDateString());
        this.lineChartData = stats;
        // this.lineChartLabels = formattedDate;

    }
}
