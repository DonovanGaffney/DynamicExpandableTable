import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenerateFromArrayComponent } from './TableGenerator/generate-from-array/generate-from-array.component';
import { GenerateFromObjectComponent } from './TableGenerator/generate-from-object/generate-from-object.component';
import { InitialTableRouterComponent } from './TableGenerator/initial-table-router/initial-table-router.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateFromArrayComponent,
    GenerateFromObjectComponent,
    InitialTableRouterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
