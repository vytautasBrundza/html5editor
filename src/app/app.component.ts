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
	walkable = 2;
	edit = 'img';
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
		if(this.edit=='img') {
			console.log('img');
			this.dataService.data.tileData[i][j].img = this.imgNo;
		} else if(this.edit=='walkable') {
			console.log('walkable '+this.walkable);
			this.dataService.data.tileData[i][j].walkable = this.walkable;
		}
			
	}
	walk(w) {
		this.walkable = w;
	}
	editMode(e) {
		this.edit = e;
	}
}
