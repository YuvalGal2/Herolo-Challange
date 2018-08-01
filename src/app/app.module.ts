import { BooksService } from './shared/books.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CaptializedTextPipe } from './books/pipes/captialized-text.pipe';
import { AddBookComponent } from './books/add-book/add-book.component';
import { DeleteBookComponent } from './books/delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    EditBookComponent,
    CaptializedTextPipe,
    AddBookComponent,
    DeleteBookComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [EditBookComponent,AddBookComponent,DeleteBookComponent],
  providers: [BooksService,CaptializedTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
