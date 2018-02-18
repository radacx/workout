import { createTransform } from 'redux-persist';
export const createTransforms = (config) => Object.keys(config)
    .map(name => createTransform(state => state, config[name], {
    whitelist: [
        name,
    ],
}));
//# sourceMappingURL=E:/JavaScript/workout/utils/createTransforms.js.map