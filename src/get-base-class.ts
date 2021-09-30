export function getBaseClassNames(o: unknown): string[] {
    const list = [];
    if (o instanceof Function) {
        let baseClass = o;

        let remainingTryCount = 20;
        while (baseClass && remainingTryCount--) {
            list.push(baseClass.name);

            const newBaseClass = Object.getPrototypeOf(baseClass);
            if (newBaseClass && newBaseClass !== Object && newBaseClass.name) {
                baseClass = newBaseClass;
            } else {
                break;
            }
        }

        return list;
    }
    return null;
}
