import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { QuillModule } from 'ngx-quill';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClassComponent } from './class/class.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SingleBlockComponent } from './single-block/single-block.component';
import { DoubleBlockComponent } from './double-block/double-block.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    TextBlockComponent,
    TextEditorComponent,
    SingleBlockComponent,
    DoubleBlockComponent,
    NavbarComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot(),
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    EditorModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
