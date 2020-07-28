import { Component, Input } from "@angular/core";
import { GlobalDataObj } from "~/app/shared/interfaces/global-data.interfaces";

@Component({
    selector: "global-covid-cards",
    templateUrl: "./global-covid-cards.component.html",
    styleUrls: ["./global-covid-cards.component.css"]
})
export class GlobalCovidCardsComponent {

    @Input() globalData: GlobalDataObj;

}
