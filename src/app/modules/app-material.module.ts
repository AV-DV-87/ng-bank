import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
    exports: [
      MatToolbarModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatSidenavModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTableModule
    ]
  })

export class AppMaterialModule {

}
