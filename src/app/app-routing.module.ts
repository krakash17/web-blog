import { NgModule } from '@angular/core';
import { Routes, RouterModule ,PreloadAllModules} from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {
    path:'', component:HomeComponent,
  }
  ,
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'posts', component:PostsComponent
  }
  ,
  {
    path:'single-post', component:SinglePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
