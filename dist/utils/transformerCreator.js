import { createTransform } from 'redux-persist';
const flattenArray = (arr, result = []) => {
    for (let i = 0, length = arr.length; i < length; i++) {
        const value = arr[i];
        if (Array.isArray(value)) {
            flattenArray(value, result);
        }
        else {
            result.push(value);
        }
    }
    return result;
};
export const transformerCreator = ({ config, nestedConfigs }) => {
    let configs;
    if (nestedConfigs) {
        configs = flattenArray(Object
            .keys(nestedConfigs)
            .map(key => nestedConfigs[key])
            .concat(config));
    }
    else {
        configs = [
            config,
        ];
    }
};
const transformerCreatorForConfig = (config) => Object
    .keys(config)
    .map(name => createTransform(state => state, config[name], {
    whitelist: [
        name,
    ],
}));
//# sourceMappingURL=E:/JavaScript/workout/utils/transformerCreator.js.map