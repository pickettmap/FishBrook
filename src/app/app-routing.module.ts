import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent} from '../app/components/pages/login-page/login-page.component';
import { LandingPageComponent} from '../app/components/pages/landing-page/landing-page.component';
import { CreateGroupPageComponent } from './components/pages/create-group-page/create-group-page.component';
import { GroupPageComponent } from './components/pages/group-page/group-page.component';
import { LeaderboardPageComponent } from './components/pages/leaderboard-page/leaderboard-page.component';
import { MyCatchesPageComponent } from './components/pages/my-catches-page/my-catches-page.component';
import { MyGroupsPageComponent } from './components/pages/my-groups-page/my-groups-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ViewFishPageComponent } from './components/pages/view-fish-page/view-fish-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AuthGuardService } from './services/auth-guard.service'
import { RegisterGearComponent } from './components/util/register-gear/register-gear.component';

const routes: Routes = [
  { path: 'welcome', component: LandingPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'creategroup', component: CreateGroupPageComponent, canActivate:[AuthGuardService]},
  { path: 'groups', component: GroupPageComponent, canActivate:[AuthGuardService]},
  { path: 'home', component:HomePageComponent, canActivate:[AuthGuardService]},
  { path: 'leaderboard', component: LeaderboardPageComponent, canActivate:[AuthGuardService]},
  { path: 'mycatches', component: MyCatchesPageComponent, canActivate:[AuthGuardService]},
  { path: 'registergear', component: RegisterGearComponent, canActivate:[AuthGuardService]},
  { path: 'mygroups', component: MyGroupsPageComponent, canActivate:[AuthGuardService]},
  { path: 'aquarium', component: ViewFishPageComponent, canActivate:[AuthGuardService]},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
