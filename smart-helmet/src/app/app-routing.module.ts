import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from './components/page/page.component';
import { HeaderComponent } from './components/productViewer/header/header.component';

const routes: Routes = [{
  path: '',
  component: PageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
