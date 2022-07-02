import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpregisterComponent } from './empregister/empregister.component';
import { EmpviewallComponent } from './empviewall/empviewall.component';

const routes: Routes = [
  //Employee Register Path
{
  path:'',component:EmpregisterComponent
},
{
  path:'view',component:EmpviewallComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
