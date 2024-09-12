import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMessage, selectUpperCaseMessage } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fromKey$: Observable<string>;
  fromMapFn$: Observable<string>;
  fromSelecctor$: Observable<string>;
  fromUppercaseSelector$: Observable<string>;
  
  constructor(private store: Store<{ message: string }>) {
    this.fromKey$ = store.select('message');
    this.fromMapFn$ = store.select((state) => state.message);
    this.fromSelecctor$ = store.select(selectMessage);
    this.fromUppercaseSelector$ = store.select(selectUpperCaseMessage);
  }
}
