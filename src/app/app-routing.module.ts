import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ia',
    loadChildren: () => import('./pages/ia/ia.module').then( m => m.IaPageModule)
  },
  {
    path: 'ia-detalhe',
    loadChildren: () => import('./ia-detalhe/ia-detalhe.module').then( m => m.IaDetalhePageModule)
  },
  {
    path: 'saude',
    loadChildren: () => import('./pages/saude/saude.module').then( m => m.SaudePageModule)
  },
  {
    path: 'transporte',
    loadChildren: () => import('./pages/transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'saude-detalhe',
    loadChildren: () => import('./saude-detalhe/saude-detalhe.module').then( m => m.SaudeDetalhePageModule)
  },
  {
    path: 'transporte-detalhe',
    loadChildren: () => import('./transporte-detalhe/transporte-detalhe.module').then( m => m.TransporteDetalhePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
