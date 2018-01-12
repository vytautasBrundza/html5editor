import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class DataService{
	public apiHost: string = './assets/data/starter_map.data';
	data: any;
	textdata: string;
    constructor(private http: Http) {
    }

    public getJSON():any {
		return this.http.get(this.apiHost);
	 }
	 public stringify():void {
		this.textdata = JSON.stringify(this.data);
	 } 
}