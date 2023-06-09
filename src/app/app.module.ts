import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { TimeDurationPipe } from './timeDuration.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BorderCardDirective } from './border-card.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, MatTooltipModule],
  declarations: [
    AppComponent,
    PageHeadingComponent,
    TimeDurationPipe,
    BorderCardDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
