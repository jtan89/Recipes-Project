import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatMenuModule, MatCardModule, MatGridListModule } from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule
];


@NgModule({

  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
