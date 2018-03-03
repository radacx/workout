import {
  connect,
  Dispatch,
} from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import { ITrainingSession } from '../models/interfaces/ITrainingSession';
import { addTrainingSession } from '../actions';
import {
  AddNewTrainingSession as AddNewTrainingSessionComponent,
  IAddNewTrainingSessionCallbackProps,
} from '../components/screens/AddNewTrainingSession';
import { ComponentClass } from 'react';
import { connectWithNavigationProps } from '../utils/connectWithNavigationProps';

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): IAddNewTrainingSessionCallbackProps => ({
  addNewTrainingSession: (session: ITrainingSession) =>
    dispatch(addTrainingSession(session)),
});

const AddNewTrainingSessionContainer: ComponentClass = connect(
  undefined,
  mapDispatchToProps,
)(AddNewTrainingSessionComponent);

export const AddNewTrainingSession =
  connectWithNavigationProps(
    AddNewTrainingSessionContainer,
    AddNewTrainingSessionComponent.NavigationProps,
  );
