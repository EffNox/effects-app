import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects/index';
import { environment } from '../environments/environment';
import { appReducers } from './store/app.reducer';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, AppRoutingModule, SharedModule,
    UsuariosModule, HttpClientModule, StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, }),
    EffectsModule.forRoot(effectsArr)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
