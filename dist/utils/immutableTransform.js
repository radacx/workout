import { Map } from 'immutable';
import { transformerCreator } from './transformerCreator';
export const immutableTransform = transformerCreator({
    prepareState: (rawState) => Map(rawState),
    name: 'exercises',
});
//# sourceMappingURL=E:/JavaScript/workout/utils/immutableTransform.js.map