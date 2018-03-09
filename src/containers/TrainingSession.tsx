import {
  connect,
  ComponentClass,
} from 'react-redux';
import {
  ITrainingSessionCallbackProps,
  ITrainingSessionDataProps,
  TrainingSession as TrainingSessionComponent,
} from '../components/TrainingSession';
import { Guid } from '../models/Guid';
import { IAppState } from '../models/state/IAppState';
import { Dispatch } from 'redux';
import { setSessionId } from '../actions';

interface ITrainingSessionContainerProps {
  id: Guid;
}

const mapStateToProps = (state: IAppState, { id }: ITrainingSessionContainerProps): ITrainingSessionDataProps => ({
   session: state.sessions[id],
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): ITrainingSessionCallbackProps => ({
  setSessionId: (sessionId: Guid) =>
    dispatch(setSessionId(sessionId)),
});

export const TrainingSession: ComponentClass<ITrainingSessionContainerProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingSessionComponent);
