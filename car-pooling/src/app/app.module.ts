import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from '../app/components/feed/feed.component';
import { PostComponent } from '../app/components/post/post.component';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot([{path: 'feed', component: FeedComponent},
                          {path: 'post', component: PostComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
