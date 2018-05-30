import { Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ProductComponent } from './product/product.component';

export const APP_ROUTES : Routes = [
    {
       path : "",
       redirectTo : "product",
       pathMatch : "full"
    },{
        path :"product",
        component : ProductComponent
    },{
        path : 'filter',
        component : FilterComponent
    },{
        path : "**",
        redirectTo : "product",
        pathMatch : 'full'
    }
]