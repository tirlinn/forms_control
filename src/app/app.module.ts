import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TextBlockComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    QuillModule.forRoot(),
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
