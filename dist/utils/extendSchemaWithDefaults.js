export const extendSchemaWithDefaults = (schema, defaults) => {
    Object
        .keys(defaults)
        .forEach(prop => {
        const type = schema.properties[prop];
        if (type) {
            schema.properties[prop] = {
                type,
                default: defaults[prop],
            };
        }
    });
    return schema;
};
//# sourceMappingURL=E:/JavaScript/workout/utils/extendSchemaWithDefaults.js.map