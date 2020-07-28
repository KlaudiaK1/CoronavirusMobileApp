import { Component, OnInit } from "@angular/core";
import { CovidDataService } from "~/app/core/services/covid-api.service";
import { DailyDataObj } from "~/app/shared/interfaces/daily-data.interfaces";
import { CurrentDataObj } from "~/app/shared/interfaces/current-data.interfaces";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Countries",
    templateUrl: "./countries.component.html"
})
export class CountriesComponent implements OnInit {

    currentData: CurrentDataObj;
    dailyData: Array<DailyDataObj> = [];
    countriesData: Array<string> = [];

    constructor(private dataService: CovidDataService) {
    }

    ngOnInit(): void {

        this.dataService.fetchCountries().subscribe((data) => {
            this.countriesData = data;
        });
        this.dataService.fetchCurrentData("Poland").subscribe((d) => {
            this.currentData = d;
        });
        this.dataService.fetchDailyData("Poland").subscribe((d) => {
            this.dailyData = d;
        });
    }
    onSelect(country: string): void {
        this.dataService.fetchCurrentData(country).subscribe((d) => {
            this.currentData = d;
        });
        this.dataService.fetchDailyData(country).subscribe((d) => {
            this.dailyData = d;
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
