import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'settings',
  component: SettingsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
