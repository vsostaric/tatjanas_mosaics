import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MosaicListComponent} from './mosaic-list/mosaic-list.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', component: MosaicListComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
