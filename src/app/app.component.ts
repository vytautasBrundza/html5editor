import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { error } from 'util';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private dataService:DataService) { }
	title = 'app';
	imgNo = 1;
	getData() {
		this.dataService.getJSON().subscribe(
			(response)=> {
				console.log(response); this.dataService.data = JSON.parse(response._body)},
			(error)=> console.log(error)
		)
	}
	outputData() {
		this.dataService.stringify();
	}
	selectImage(n) {
		this.imgNo = n;
	}
	setImage(i,j) {
		this.dataService.data.tileData[i][j].img = this.imgNo;
	}
}
