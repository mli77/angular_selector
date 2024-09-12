import { Action, createReducer, createSelector } from '@ngrx/store';

export enum Gender {
  MALE, FEMALE
};

export interface User {
  name: string,
  gender: Gender
};

export interface UserState {
  users: User[]
};

const initialState: User[] = [
  { name: 'Jon', gender: Gender.MALE },
  { name: 'Arya', gender: Gender.FEMALE },
  { name: 'Tyrion', gender: Gender.MALE },
  { name: 'Sansa', gender: Gender.FEMALE }
];

const _userReducer = createReducer(
  initialState
);

export function userReducer(state: User[] = initialState, action: Action) {
  return _userReducer(state, action);
}

export const selectAll = (state: UserState) => state.users;

export const selectMales = createSelector(selectAll, (users: User[]) => users.filter(user => user.gender === Gender.MALE));

export const selectFemales = createSelector(selectAll, (users: User[]) => users.filter(user => user.gender === Gender.FEMALE));

export const selectJon = createSelector(selectAll, selectMales, (users: User[]) => users.filter(user => user.name === 'Jon'));