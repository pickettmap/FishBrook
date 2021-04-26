import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';


import { LoginComponent } from './components/util/login/login.component';
import { RegisterComponent } from './components/util/register/register.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent} from './components/pages/register-page/register-page.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { ViewFishPageComponent } from './components/pages/view-fish-page/view-fish-page.component';
import { ViewCatchPageComponent } from './components/pages/view-catch-page/view-catch-page.component';
import { MyCatchesPageComponent } from './components/pages/my-catches-page/my-catches-page.component';
import { CatchDisplayComponent } from './components/util/catch-display/catch-display.component';
import { CatchListComponent } from './components/util/catch-list/catch-list.component';
import { LeaderboardPageComponent } from './components/pages/leaderboard-page/leaderboard-page.component';
import { GroupPageComponent } from './components/pages/group-page/group-page.component';
import { MyGroupsPageComponent } from './components/pages/my-groups-page/my-groups-page.component';
import { CreateGroupPageComponent } from './components/pages/create-group-page/create-group-page.component';
import { RegisterFishComponent } from './components/util/register-fish/register-fish.component';
import { RegisterGearComponent } from './components/util/register-gear/register-gear.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { DisplaycardComponent } from './components/ui/displaycard/displaycard.component';
import { GroupdropdownComponent } from './components/ui/groupdropdown/groupdropdown.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DisplaygridComponent } from './components/util/displaygrid/displaygrid.component';
import { LeaderboardentryComponent } from './components/ui/leaderboardentry/leaderboardentry.component';
import { LeaderboardlistComponent } from './components/util/leaderboardlist/leaderboardlist.component';
import { GroupentryComponent } from './components/ui/groupentry/groupentry.component';
import { GrouplistComponent } from './components/util/grouplist/grouplist.component';

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
    RegisterGearComponent,
    NavbarComponent,
    HomePageComponent,
    DisplaycardComponent,
    GroupdropdownComponent,
    DisplaygridComponent,
    LeaderboardentryComponent,
    LeaderboardlistComponent,
    GroupentryComponent,
    GrouplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    RouterModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
