import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Number2Component } from './question/number2/number2.component';

const routes: Routes = [
  {path:"2",component:Number2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
