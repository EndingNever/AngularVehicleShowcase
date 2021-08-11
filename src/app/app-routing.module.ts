import { PorscheComponent } from './german/porsche/porsche.component';
import { MercedesComponent } from './german/mercedes/mercedes.component';
import { AudiComponent } from './german/audi/audi.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { ItalianComponent } from './italian/italian.component';
import { GermanComponent } from './german/german.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'German', component: GermanComponent, children: [
    {path: '', component: GermanComponent},
    {path: ':make', component: AudiComponent},
    {path: ':make', component: PorscheComponent},
    {path: ':make', component: MercedesComponent}
  ]},
  { path: 'Italian', component: ItalianComponent},
  { path: 'Japanese', component: JapaneseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
