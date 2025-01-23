type Constructor<T = {}> = new (...args: any[]) => T;
export declare function classMix<BaseClass extends Constructor, Mixins extends Constructor[]>(Base: BaseClass, ...Mixins: Mixins): BaseClass & Constructor<InstanceType<Mixins[number]>>;
export {};
