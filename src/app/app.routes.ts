import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./pages/auth/routes").then(x => x.AUTH_ROUTES)
  },
  {
    path: "**",
    redirectTo: ""
  }
];
