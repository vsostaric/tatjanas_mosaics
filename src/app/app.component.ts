import {Component, OnInit} from '@angular/core';
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

  constructor(private http: HttpClient, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.http.get('./assets/mosaics/mosaics.json').subscribe(data => {
      this.mosaics = this.sortMosaics(data['mosaics']);
    });
  }

  private sortMosaics(mosaics: Mosaic[]) {
    return mosaics.sort((one, two) => (one.created > two.created ? -1 : 1));
  }

  openModal(content) {
    debugger;
    this.modalService.open(content, {centered: true});
  }

}
