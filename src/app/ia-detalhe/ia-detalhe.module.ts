import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IaDetalhePageRoutingModule } from './ia-detalhe-routing.module';

import { IaDetalhePage } from './ia-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IaDetalhePageRoutingModule
  ],
  declarations: [IaDetalhePage]
})
export class IaDetalhePageModule {}
