import { Action, createReducer, createSelector } from '@ngrx/store';

const initialState = 'Whatever you are, be a good one.';

const _messageReducer = createReducer(
  initialState
);

export function messageReducer(state: string = initialState, action: Action) {
  return _messageReducer(state, action);
}

export const selectMessage = (state: { message: string }) => state.message;

export const selectUpperCaseMessage = createSelector(selectMessage, (message: string) => message.toUpperCase());
