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
<<<<<<< HEAD
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
=======
import { MakoComponent } from './mako/mako.component';
import { SingleBlockComponent } from './single-block/single-block.component';
import { DoubleBlockComponent } from './double-block/double-block.component';
import { EditorModule } from '@tinymce/tinymce-angular';
>>>>>>> origin/Mako

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    TextBlockComponent,
    TextEditorComponent,
    MakoComponent,
    SingleBlockComponent,
    DoubleBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot(),
    NgbModule,
<<<<<<< HEAD
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
=======
    EditorModule
>>>>>>> origin/Mako
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
