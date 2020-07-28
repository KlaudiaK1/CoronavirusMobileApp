import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

@Component({
  selector: "drop-down-list",
  templateUrl: "./drop-down-list.component.html",
  styleUrls: ["./drop-down-list.component.css"]
})
export class DropDownListComponent {

    @Input() countries: Array<string>;
    @Output() countrySelected = new EventEmitter<string>();

    country: string;

    selectedIndex = 1;
    items: Array<string>;

    constructor() {
        this.items = [];
        for (let i = 0; i < 5; i++) {
            this.items.push("data item " + i);
        }
    }

    onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
        this.country = this.countries[args.newIndex];
        this.countrySelected.emit(this.country);
        console.log(this.country);
    }

    updateValues(country: string) {
        this.country = country;
        this.countrySelected.emit(country);
        console.log(country);
    }
}
