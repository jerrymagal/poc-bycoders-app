import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import { CpfPipe } from './pipe/cpf-pipe';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    ToastModule,
    TableModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide:  DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
