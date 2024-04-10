import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    loadComponent: () => import("./pages/home/home.component").then(x => x.HomeComponent)
  },
  {
    path: "auth",
    loadChildren: () => import("./pages/auth/routes").then(x => x.AUTH_ROUTES)
  },
  {
    path: "**",
    redirectTo: ""
  }
];
