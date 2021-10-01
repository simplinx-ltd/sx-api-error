import { getBaseClassNames } from './get-base-class';

export function createFromSequelizeError(err: Error): Error {
    if (!err || !err.constructor || !err.constructor.name) return null;

    const errInClasses = getBaseClassNames(err.constructor);
    //Check Error is Sequelize Error
    if (!errInClasses.includes('BaseError')) return null;

    if (errInClasses.includes('ValidationError')) {
        err.message = `${err['errors'][0].message}, field: ${err['errors'][0].path}, value: ${err['errors'][0].value}`;
    }
    err.name = err.name.includes('Sequelize') ? err.name.replace('Sequelize', '') : err.name;

    return err;
}
