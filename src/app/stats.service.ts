import { Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StatsService {
    constructor(private http: Http) {}
    saveStats(stats: any) {
        return this.http.post('https://heinels-ng-http.firebaseio.com/statsjson', stats);
    }

    getStatsData() {
        return this.http .get('http://localhost:8080/stats');
    }
}