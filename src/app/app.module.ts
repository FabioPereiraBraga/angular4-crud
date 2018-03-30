import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { PostNewComponent } from './post-new/post-new.component';
import { FormsModule } from '@angular/forms';

const appRouter: Routes = [
 {path: 'post', component: PostComponent},
 {path: 'post-new', component: PostNewComponent},
 {path: 'posts/:id/edit', component: PostNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostNewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
