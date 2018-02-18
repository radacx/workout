import { Record } from 'immutable';
export const TypedRecord = (defaultParams) => class extends Record(defaultParams) {
    constructor(params = defaultParams) {
        super(params);
        this.with = (params) => super.merge(params);
    }
};
//# sourceMappingURL=E:/JavaScript/workout/models/classes/TypedRecord.js.map