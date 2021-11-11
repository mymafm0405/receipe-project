import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepiesListComponent } from './recepies/recepies-list/recepies-list.component';
import { RecepieItemComponent } from './recepies/recepies-list/recepie-item/recepie-item.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header/header.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { TestComponent } from './test/test/test.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MidoComponent } from './mido/mido.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { Mido2Component } from './mido2/mido2.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionOverviewExample } from './expansion/expansion.component';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './recepies/start/start.component';
import { EditRecepieComponent } from './recepies/edit-recepie/edit-recepie.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recepies', pathMatch: 'full' },
  {
    path: 'recepies',
    component: RecepiesComponent,
    children: [
      { path: '', component: StartComponent, pathMatch: 'full' },
      { path: 'new', component: EditRecepieComponent },
      { path: ':id/edit', component: EditRecepieComponent },
      { path: ':id', component: RecepieDetailsComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RecepiesComponent,
    RecepiesListComponent,
    RecepieItemComponent,
    RecepieDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
    TestComponent,
    MidoComponent,
    Mido2Component,
    ExpansionOverviewExample,
    StartComponent,
    EditRecepieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
