import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // Add custom icon
    this.matIconRegistry.addSvgIcon(
      'settings-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/outline-settings-24px.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'home-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/outline-home-24px.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'lock-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icon/outline-lock-24px.svg')
    );
  }
}
