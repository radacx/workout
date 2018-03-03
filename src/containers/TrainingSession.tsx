import {
  ComponentClass,
  connect,
  Dispatch,
} from 'react-redux';
import {
  ITrainingSessionCallbackProps,
  ITrainingSessionDataProps,
  TrainingSession as TrainingSessionComponent,
} from '../components/TrainingSession';
import { Guid } from '../models/Guid';
import { IAppState } from '../models/state/IAppState';
import { navigateTo } from '../actions/thunk/navigateTo';

interface ITrainingSessionContainerProps {
  id: Guid;
}

const mapStateToProps = (state: IAppState, { id }: ITrainingSessionContainerProps): ITrainingSessionDataProps => ({
   session: state.sessions[id],
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): ITrainingSessionCallbackProps => ({
  openTrainingSessionForm: () => dispatch(navigateTo('TrainingSessionForm')),
});

export const TrainingSession: ComponentClass<ITrainingSessionContainerProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingSessionComponent);
