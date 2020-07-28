import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CountriesRoutingModule } from "./countries-routing.module";
import { CountriesComponent } from "./countries.component";
import { CovidCardsComponent } from "./covid-cards/covid-cards.component";
import { DropDownListComponent } from "./drop-down-list/drop-down-list.component";
import { DropDownModule } from "nativescript-drop-down/angular";
import { CovidChartComponent } from "./covid-chart/covid-chart.component";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CountriesRoutingModule,
        DropDownModule,
        NativeScriptUIChartModule
    ],
    declarations: [
        CountriesComponent,
        CovidCardsComponent,
        DropDownListComponent,
        CovidChartComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CountriesModule { }
