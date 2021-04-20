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
import { ViewCatchPageComponent } from './components/pages/view-catch-page/view-catch-page.component';
import { ViewFishPageComponent } from './components/pages/view-fish-page/view-fish-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: LandingPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'creategroup', component: CreateGroupPageComponent},
  { path: 'groups', component: GroupPageComponent},
  { path: 'home', component:HomePageComponent},
  { path: 'leaderboard', component: LeaderboardPageComponent},
  { path: 'mycatches', component: MyCatchesPageComponent},
  { path: 'mygroups', component: MyGroupsPageComponent},
  { path: 'catch/:id', component: ViewCatchPageComponent},
  { path: 'aquarium', component: ViewFishPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
