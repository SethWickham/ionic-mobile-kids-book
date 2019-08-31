import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'beginning',
    loadChildren: './beginning/beginning.module#BeginningPageModule'
  },
  { path: 'middle', loadChildren: './middle/middle.module#MiddlePageModule' },
  { path: 'end', loadChildren: './end/end.module#EndPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactPageModule'
  },
  {
    path: 'story-beginning',
    loadChildren: './story/beginning/beginning.module#BeginningPageModule'
  },
  {
    path: 'story-middle',
    loadChildren: './story/middle/middle.module#MiddlePageModule'
  },
  { path: 'story-end', loadChildren: './story/end/end.module#EndPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
