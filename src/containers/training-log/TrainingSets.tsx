import { ComponentClass } from 'react';
import { connect } from 'react-redux';
import {
  ITrainingSetsDataProps,
  TrainingSets as TrainingSetsComponent,
} from '../../components/training-log/TrainingSets';
import { IAppState } from '../../models/state/IAppState';
import { Guid } from '../../models/Guid';
import { homogenousObjectToArray } from '../../utils/homogenousObjectToArray';

interface TrainingSetsContainerProps {
  readonly exerciseId: Guid;
}

const mapStateToProps = (state: IAppState, { exerciseId }: TrainingSetsContainerProps): ITrainingSetsDataProps => ({
  sets: homogenousObjectToArray(state.sessions[state.formIds.session].exercises[exerciseId].sets),
});

export const TrainingSets: ComponentClass<TrainingSetsContainerProps> = connect(
  mapStateToProps,
)(TrainingSetsComponent);
