import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from 'src/demo/demo.component';
import { AppComponent } from './app.component';


const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: 'demo',
      component: DemoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
