import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

export const router: Routes = [
    { path: '', component: ResumeComponent, pathMatch: 'full' },
    { path: 'portfolio', component: PortfolioComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);