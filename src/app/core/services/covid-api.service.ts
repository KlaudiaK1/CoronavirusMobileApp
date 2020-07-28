import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { GlobalDataObj } from "~/app/shared/interfaces/global-data.interfaces";
import { CountriesData } from "~/app/shared/interfaces/countries-data.interfaces";
import { DailyDataObj } from "~/app/shared/interfaces/daily-data.interfaces";
import { CurrentDataObj } from "~/app/shared/interfaces/current-data.interfaces";

@Injectable({
    providedIn: "root"
})
export class CovidDataService {

    constructor(private readonly http: HttpClient) {
    }

    fetchCountries(): Observable<Array<string>> {
        const url = "https://api.covid19api.com/summary";

        return this.http.get<CountriesData>(url).pipe(map(({Countries}) => Countries.map(({Country}) => Country)));
    }

    fetchGlobalData(): Observable<GlobalDataObj> {
        const url = "https://api.covid19api.com/world/total";

        return this.http.get<GlobalDataObj>(url);
    }

    fetchDailyData(country): Observable<Array<DailyDataObj>> {
        const url = `https://api.covid19api.com/total/dayone/country/${country}`;

        return this.http.get<Array<DailyDataObj>>(url).pipe(map((data) => (data.map(({Country, Active, Recovered, Deaths, Date}) => ({
            Country,
            Active,
            Recovered,
            Deaths,
            Date
        })))));
    }

    fetchCurrentData(country): Observable<CurrentDataObj> {
        const today = new Date();
        const prevDay = new Date();
        prevDay.setDate(today.getDate() - 1);

        const url = `https://api.covid19api.com/country/${country}?from=${prevDay
            .toISOString()
            .substring(0, 10)}T00:00:00Z&to=${today
            .toISOString()
            .substring(0, 10)}T00:00:00Z`;

        return this.http.get<Array<CurrentDataObj>>(url).pipe(map(([{
            Country,
            Active,
            Recovered,
            Deaths
        }]) => ({Country, Active, Recovered, Deaths})));
    }
}
