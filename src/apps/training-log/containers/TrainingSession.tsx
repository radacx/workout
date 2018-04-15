import PropTypes from 'prop-types';
import {
  connect,
  ComponentClass,
} from 'react-redux';
import {
  TrainingSessionCallbackProps,
  TrainingSessionDataProps,
  TrainingSession as TrainingSessionComponent,
} from '../components/TrainingSession';
import { Uuid } from '../../_types/Uuid';
import { IStore } from '../../_shared/store/IStore';
import { setSessionId } from '../actions/actionCreators';
import { Validation } from '../../_types/validation/Validation';
import { Dispatch } from '../../_types/actions/Dispatch';

type Props = {
  readonly id: Uuid;
};

const propTypes: Validation<Props> = {
  id: PropTypes.string.isRequired,
};

const mapStateToProps = ({ trainingLogApp }: IStore, { id }: Props): TrainingSessionDataProps => ({
  session: trainingLogApp.sessions[id],
});

const mapDispatchToProps = (dispatch: Dispatch): TrainingSessionCallbackProps => ({
  setSessionId: (sessionId: Uuid) =>
    dispatch(setSessionId(sessionId)),
});

const TrainingSession: ComponentClass<Props> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingSessionComponent);

TrainingSession.propTypes = propTypes;

export { TrainingSession };
