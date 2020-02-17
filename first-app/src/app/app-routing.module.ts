import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './Third-component/third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { SixthComponentComponent } from './sixth-component/sixth-component.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceCallComponent } from './service-call/service-call.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'first-component', component:FirstComponentComponent },
  { path: 'Divya', component: SecondComponentComponent},
  { path: 'Third', component: ThirdComponentComponent},
  { path: 'fourth', component: FourthComponentComponent},
  { path: 'sixth', component: SixthComponentComponent},
  { path: 'service-call', component: ServiceCallComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
