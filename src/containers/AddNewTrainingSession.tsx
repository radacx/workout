import {
  connect,
  Dispatch,
} from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import { ITrainingSession } from '../models/interfaces/ITrainingSession';
import { addTrainingSession } from '../actions';
import {
  AddNewTrainingSession as AddNewTrainingSessionComponent,
  AddNewTrainingSessionCallbackProps,
} from '../components/screens/AddNewTrainingSession';
import { ComponentClass } from 'react';

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): AddNewTrainingSessionCallbackProps => ({
  addNewTrainingSession: (session: ITrainingSession) =>
    dispatch(addTrainingSession(session)),
});

export const AddNewTrainingSession: ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(AddNewTrainingSessionComponent);
