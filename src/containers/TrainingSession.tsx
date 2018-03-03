import {
  connect,
  ComponentClass,
} from 'react-redux';
import {
  ITrainingSessionDataProps,
  TrainingSession as TrainingSessionComponent,
} from '../components/TrainingSession';
import { Guid } from '../models/Guid';
import { IAppState } from '../models/state/IAppState';
import {  } from 'react';

interface ITrainingSessionContainerProps {
  id: Guid;
}

const mapStateToProps = (state: IAppState, { id }: ITrainingSessionContainerProps): ITrainingSessionDataProps => ({
   session: state.sessions[id],
});

export const TrainingSession: ComponentClass<ITrainingSessionContainerProps> = connect(
  mapStateToProps,
)(TrainingSessionComponent);
