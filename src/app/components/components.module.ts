import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { FormsModule } from '@angular/forms';
import { C5Component } from './c3/c5/c5.component';



@NgModule({
  declarations: [
    // C1Component,
    // C2Component,
    // C3Component,
    // C4Component,
    // C5Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
