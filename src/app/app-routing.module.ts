import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './widgets/page-not-found/page-not-found.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'positions',
    pathMatch: 'full',
}, {
    path: '**',
    component: PageNotFoundComponent,
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}