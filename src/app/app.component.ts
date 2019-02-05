import {Component, OnInit, ViewChild} from '@angular/core';
import {Mosaic} from './model/Mosaic';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public mosaics: Mosaic[];
  public imageUrlArray: String[] = [
    'http://localhost:4200/assets/spilimbergo/gallery/Spilimbergo1.jpg',
    'http://localhost:4200/assets/spilimbergo/gallery/Spilimbergo2.jpg',
    'http://localhost:4200/assets/spilimbergo/gallery/Spilimbergo3.jpg',
    'http://localhost:4200/assets/spilimbergo/gallery/Spilimbergo4.jpg',
    'http://localhost:4200/assets/spilimbergo/gallery/Spilimbergo5.jpg',
    'http://localhost:4200/assets/spilimbergo/gallery/Spilimbergo6.jpg',
    'http://localhost:4200/assets/spilimbergo/gallery/Spilimbergo7.jpg'
  ];

  constructor(private http: HttpClient, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.http.get('./assets/mosaics.json').subscribe(data => {
      this.mosaics = this.sortMosaics(data['mosaics']);
    });
  }

  private sortMosaics(mosaics: Mosaic[]) {
    return mosaics.sort((one, two) => (one.created > two.created ? -1 : 1));
  }

}
