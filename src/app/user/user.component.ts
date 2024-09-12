import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAll, selectFemales, selectJon, selectMales, User, UserState } from './user.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  all$: Observable<User[]>;
  males$: Observable<User[]>;
  females$: Observable<User[]>;
  jon$: Observable<User[]>;

  constructor(private userStore: Store<UserState>) {
    this.all$ = userStore.select(selectAll);
    this.males$ = userStore.select(selectMales);
    this.females$ = userStore.select(selectFemales);
    this.jon$ = userStore.pipe(select(selectJon));
  }

}
