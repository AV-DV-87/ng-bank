import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
    exports: [
      MatToolbarModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatSidenavModule
    ]
  })

export class AppMaterialModule {

}
