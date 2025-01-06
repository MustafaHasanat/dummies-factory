// Utility function to mix classes
type Constructor<T = {}> = new (...args: any[]) => T;

export function classMix<BaseClass extends Constructor, Mixins extends Constructor[]>(
    Base: BaseClass,
    ...Mixins: Mixins
): BaseClass & Constructor<InstanceType<Mixins[number]>> {
    class Mixed extends Base {
        constructor(...args: any[]) {
            super(...args);
            Mixins.forEach((Mixin) => {
                Object.assign(this, new Mixin());
            });
        }
    }

    Mixins.forEach((Mixin) => {
        Object.getOwnPropertyNames(Mixin.prototype).forEach((name) => {
            if (name !== "constructor") {
                Object.defineProperty(
                    Mixed.prototype,
                    name,
                    Object.getOwnPropertyDescriptor(Mixin.prototype, name)!
                );
            }
        });
    });

    return Mixed as BaseClass & Constructor<InstanceType<Mixins[number]>>;
}
