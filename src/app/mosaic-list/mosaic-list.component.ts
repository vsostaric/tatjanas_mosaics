import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mosaic} from '../model/Mosaic';

@Component({
  selector: 'app-mosaic-list',
  templateUrl: './mosaic-list.component.html',
  styleUrls: ['./mosaic-list.component.css']
})
export class MosaicListComponent implements OnInit {

  mosaics: Mosaic[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('./assets/mosaics.json').subscribe(data => {
      this.mosaics = this.sortMosaics(data['mosaics']);
    });
  }

  private sortMosaics(mosaics: Mosaic[]) {
    return mosaics.sort((one, two) => (one.created > two.created ? -1 : 1));
  }

  openImg(image) {
    debugger;
    document.getElementById('gallery_pic_' + image).style.display = 'block';
  }

  closeImg(image) {
    debugger;
    document.getElementById('gallery_pic_' + image).style.display = 'none';
  }
}
