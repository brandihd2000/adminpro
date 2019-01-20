import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";


import { InclementadorComponent } from '../components/inclementador/inclementador.component'
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component'

//share Module
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { AccountSettingComponent } from './account-setting/account-setting.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    ProgressComponent, 
    Graficas1Component,
    PagesComponent,
    InclementadorComponent,
    GraficoDonaComponent,
    AccountSettingComponent
],
    
  exports: [
    DashboardComponent, 
    ProgressComponent, 
    Graficas1Component,
    PagesComponent
  ],
  imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
  ]
})
export class PagesModule {}
