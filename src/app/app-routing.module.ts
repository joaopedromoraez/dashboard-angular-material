import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PersonagensComponent } from './modules/personagens/personagens.component';
import { FileUploadComponent } from './modules/file-upload/file-upload.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {path: '', component: DashboardComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'personagens', component: PersonagensComponent},
    {path: 'file-upload', component: FileUploadComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
