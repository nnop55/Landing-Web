import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { CreateAccComponent } from './auth/create-acc/create-acc.component';
import { FeaturesComponent } from './features/features.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './router-guards/auth.guard';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: MainComponent },
  { path: 'createacc', component: CreateAccComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'features', component: FeaturesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
