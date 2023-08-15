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
    path: 'transporte',
    loadChildren: () => import('./pages/transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'saude',
    loadChildren: () => import('./pages/saude/saude.module').then( m => m.SaudePageModule)
  },
  {
    path: 'ia',
    loadChildren: () => import('./pages/ia/ia.module').then( m => m.IaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'ia-detalhe',
    loadChildren: () => import('./ia-detalhe/ia-detalhe.module').then( m => m.IaDetalhePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
