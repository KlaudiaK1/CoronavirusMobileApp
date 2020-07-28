import { Component, Input } from "@angular/core";
import { CurrentDataObj } from "~/app/shared/interfaces/current-data.interfaces";

@Component({
    selector: "covid-cards",
    templateUrl: "./covid-cards.component.html",
    styleUrls: ["./covid-cards.component.css"]
})
export class CovidCardsComponent {

    @Input() currentStats: CurrentDataObj;

}
