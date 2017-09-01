import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

// const appRoutes: Routes = [
//   {path: '', component:UserComponent},
//   {path: 'about',component:AboutComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component:UserComponent
      },
      {
        path: 'about',
        component:AboutComponent
      },
      {
        path: 'login',
        component:LoginComponent
      },
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
