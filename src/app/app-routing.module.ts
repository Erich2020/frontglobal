import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './views/pantallas/personas/personas.component';

const routes: Routes = [
  {path:'',
  component: PersonasComponent 
},
{ path: '**', 
component: PersonasComponent 
},
{ path: '/users', 
component: PersonasComponent 
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

