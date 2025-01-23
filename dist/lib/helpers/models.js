export function classMix(Base, ...Mixins) {
    class Mixed extends Base {
        constructor(...args) {
            super(...args);
            Mixins.forEach((Mixin) => {
                Object.assign(this, new Mixin());
            });
        }
    }
    Mixins.forEach((Mixin) => {
        Object.getOwnPropertyNames(Mixin.prototype).forEach((name) => {
            if (name !== "constructor") {
                Object.defineProperty(Mixed.prototype, name, Object.getOwnPropertyDescriptor(Mixin.prototype, name));
            }
        });
    });
    return Mixed;
}
//# sourceMappingURL=models.js.map