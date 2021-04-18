import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent} from './components/pages/register-page/register-page.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { ViewFishPageComponent } from './components/pages/view-fish-page/view-fish-page.component';
import { ViewCatchPageComponent } from './components/pages/view-catch-page/view-catch-page.component';
import { MyCatchesPageComponent } from './components/pages/my-catches-page/my-catches-page.component';
import { CatchDisplayComponent } from './components/catches/catch-display/catch-display.component';
import { CatchListComponent } from './components/catches/catch-list/catch-list.component';
import { LeaderboardPageComponent } from './components/pages/leaderboard-page/leaderboard-page.component';
import { GroupPageComponent } from './components/pages/group-page/group-page.component';
import { MyGroupsPageComponent } from './components/pages/my-groups-page/my-groups-page.component';
import { CreateGroupPageComponent } from './components/pages/create-group-page/create-group-page.component';
import { RegisterFishComponent } from './components/util/register-fish/register-fish.component';
import { RegisterGearComponent } from './components/util/register-gear/register-gear.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LandingPageComponent,
    ViewFishPageComponent,
    ViewCatchPageComponent,
    MyCatchesPageComponent,
    CatchDisplayComponent,
    CatchListComponent,
    LeaderboardPageComponent,
    GroupPageComponent,
    MyGroupsPageComponent,
    CreateGroupPageComponent,
    RegisterFishComponent,
    RegisterGearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
