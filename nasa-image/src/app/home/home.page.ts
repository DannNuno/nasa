import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  imageData: any;
  selectedDate: string = new Date().toISOString().split('T')[0]; // fecha inicial (dia actual)

  constructor(private nasaService: NasaService) {}

  /*ngOnInit(){
    this.nasaService.getImageOfTheDay().subscribe((data)=>{
      this.imageData = data;
    });
  }*/

    ngOnInit() {
      this.loadImage(this.selectedDate); // imagen inicial
    }
  
    loadImage(date: string) {
      this.nasaService.getImageByDate(date).subscribe(
        (data) => {
          this.imageData = data;
        },
        (error) => {
          console.error('Error fetching image:', error);
        }
      );
    }
  
    onDateChange(event: any) {
      this.selectedDate = event.detail.value; // actualizar fecha
      this.loadImage(this.selectedDate);
    }

}
