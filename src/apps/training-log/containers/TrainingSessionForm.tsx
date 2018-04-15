import { connect } from 'react-redux';
import { IStore } from '../../_shared/store/IStore';
import {
  TrainingSessionForm as TrainingSessionComponent,
  TrainingSessionFormCallbackProps,
  TrainingSessionFormDataProps,
  TrainingSessionFormOwnProps,
} from '../components/TrainingSessionForm';
import { ComponentClass } from 'react';
import { UpdatedSession } from '../../_types/data/UpdatedSession';
import { updateTrainingSession } from '../actions/actionCreators';
import { Dispatch } from '../../_types/actions/Dispatch';

const mapStateToProps = ({ trainingLogApp }: IStore, { sessionId }: TrainingSessionFormOwnProps): TrainingSessionFormDataProps => {
  const { bodyweight, date } = trainingLogApp.sessions[sessionId];

  return {
    bodyweight,
    date,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): TrainingSessionFormCallbackProps => ({
  updateTrainingSession: (session: UpdatedSession) =>
    dispatch(updateTrainingSession(session)),
});

export const TrainingSessionForm: ComponentClass<TrainingSessionFormOwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingSessionComponent);
