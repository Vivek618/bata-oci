import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { HomeComponent } from './home/home.component';
// import { NevBarComponent } from './nev-bar/nev-bar.component';

const routes: Routes = [
{
  path:"FormDetailComponent",
  component:FormDetailComponent,
  pathMatch:"full"
},
{
  path:"TableDetailComponent",
  component:TableDetailComponent,
  pathMatch:"full"
},
{
  path:"",
  component:HomeComponent,
  pathMatch:"full"
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
