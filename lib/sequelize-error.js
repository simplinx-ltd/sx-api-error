"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFromSequelizeError = void 0;
const get_base_class_1 = require("./get-base-class");
function createFromSequelizeError(err) {
    if (!err || !err.constructor || !err.constructor.name)
        return null;
    const errInClasses = get_base_class_1.getBaseClassNames(err.constructor);
    //Check Error is Sequelize Error
    if (!errInClasses.includes('BaseError'))
        return null;
    if (errInClasses.includes('ValidationError')) {
        err.message = `${err['errors'][0].message}, field: ${err['errors'][0].path}, value: ${err['errors'][0].value}`;
    }
    err.name = err.name.includes('Sequelize') ? err.name.replace('Sequelize', '') : err.name;
    return err;
}
exports.createFromSequelizeError = createFromSequelizeError;
