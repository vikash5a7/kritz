import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com1Component } from './question/number-4/com1/com1.component';
import { Com2Component } from './question/number-4/com2/com2.component';
import { Com3Component } from './question/number-4/com3/com3.component';
import { NavBarComponent } from './question/number-4/nav-bar/nav-bar.component';
import { Number2Component } from './question/number2/number2.component';

const routes: Routes = [
  { path: "2", component: Number2Component },
  {
    path: "nav", component: NavBarComponent,
    children: [
      { path: "first-comp", component: Com1Component },
      { path: "second-comp", component: Com2Component },
      { path: "third-comp", component: Com3Component },
    ],
  },

  { path: '', redirectTo: '/nav', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
