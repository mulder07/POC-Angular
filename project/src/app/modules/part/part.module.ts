import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1Component } from './components/part1/part1.component';
import { Part2Component } from './components/part2/part2.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

@NgModule({
  declarations: [
    Part1Component,
    Part2Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
   ])
  ]
})
export class PartModule { }
