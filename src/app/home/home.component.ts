import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { GlobalDataObj } from "~/app/shared/interfaces/global-data.interfaces";
import { CovidDataService } from "~/app/core/services/covid-api.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    globalData: GlobalDataObj;

    constructor(private dataService: CovidDataService) {
    }

    ngOnInit(): void {
        this.dataService.fetchGlobalData().subscribe((d) => {
            this.globalData = d;
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
