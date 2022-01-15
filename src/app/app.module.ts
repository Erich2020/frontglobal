import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './views/persistent/footer/footer.component';
import { ToolbarComponent } from './views/persistent/toolbar/toolbar.component';
import { FormGestionComponent } from './views/personas/gestion/form-gestion/form-gestion.component';
import { ItemPersonaComponent } from './views/personas/presentacion/item-persona/item-persona.component';
import { ListPersonasComponent } from './views/personas/presentacion/list-personas/list-personas.component';
import { environment } from 'src/environments/environment';
import { ApiUrlInterceptor, API_URL } from './controllers/httpInterceptor';
import { PersonasComponent } from './views/pantallas/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    FormGestionComponent,
    ItemPersonaComponent,
    ListPersonasComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ 
    
    {provide: API_URL, useValue: environment.ApiURL},
    {provide:HTTP_INTERCEPTORS, useClass:ApiUrlInterceptor, multi: true, deps: [API_URL]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
