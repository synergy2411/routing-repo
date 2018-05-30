import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight-directive';
import { UnlessDirective } from './directives/unless.directive';
import { NationalCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { CommentFormComponent } from './user/comment-form/comment-form.component';

import { DataService } from './services/data-service';

import { AuthService } from './services/auth-service';
import { ProductComponent } from './product/product.component';
import { APP_ROUTES } from './app.routing';

@NgModule({
  declarations: [   //Components, Pipes & Directives
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    NationalCodePipe,
    FilterPipe,
    FilterComponent,
    CommentFormComponent,

    ProductComponent
  ],
  imports: [      //All Modules : Built-in & Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    DataService,
    
    AuthService
  ],   //Services 
  bootstrap: [AppComponent]
})
export class AppModule { }
