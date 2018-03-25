import {
  connect,
  ComponentClass,
} from 'react-redux';
import {
  TrainingSessionCallbackProps,
  TrainingSessionDataProps,
  TrainingSession as TrainingSessionComponent,
} from '../../components/training-log/TrainingSession';
import { Guid } from '../../models/Guid';
import { AppState } from '../../models/state/AppState';
import { Dispatch } from 'redux';
import { setSessionId } from '../../actions/actionCreators';

type Props = Readonly<{
  id: Guid;
}>;

const mapStateToProps = (
  state: AppState,
  { id }: Props,
): TrainingSessionDataProps => ({
  session: state.sessions[ id ],
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>): TrainingSessionCallbackProps => ({
  setSessionId: (sessionId: Guid) =>
    dispatch(setSessionId(sessionId)),
});

export const TrainingSession: ComponentClass<Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingSessionComponent);
