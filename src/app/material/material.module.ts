import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatMenuModule, MatCardModule, MatGridListModule, MatListModule } from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule,
  MatListModule
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
