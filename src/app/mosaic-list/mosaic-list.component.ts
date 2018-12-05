import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mosaic} from '../model/Mosaic';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mosaic-list',
  templateUrl: './mosaic-list.component.html',
  styleUrls: ['./mosaic-list.component.scss']
})
export class MosaicListComponent implements OnInit {

  public mosaics: Mosaic[];

  public clickedMosaic: Mosaic;

  constructor(private http: HttpClient, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.http.get('./assets/mosaics.json').subscribe(data => {
      this.mosaics = this.sortMosaics(data['mosaics']);
    });
  }

  private sortMosaics(mosaics: Mosaic[]) {
    return mosaics.sort((one, two) => (one.created > two.created ? -1 : 1));
  }

  openMosaicDetails(content, mosaic) {
    this.clickedMosaic = mosaic;
    this.modalService.open(content, {size: 'lg'});
  }

}
