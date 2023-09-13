export type IPipe<C, I, O> = (context: C, data: I) => O;

export interface IClassPipe<C, I, O> {
  call(context: C, data: I) : O;
}

export class Pipeline<C, I, O> {
  constructor(private readonly _pipe: IPipe<C, I, O>) {}

  static classPipe<C, I, O>(pipe: IClassPipe<C, I, O>) : Pipeline<C, I, O> {
    return new Pipeline<C, I, O>(pipe.call);
  }

  execute(context: C, data: I) : O { return this._pipe(context, data); }

  addPipe<T>(pipe: IPipe<C, O, T>) : Pipeline<C, I, T> { return new Pipeline((c, d) => pipe(c, this._pipe(c, d))); }
  addClassPipe<T>(pipe: IClassPipe<C, O, T>) : Pipeline<C, I, T> { return this.addPipe(pipe.call); }
}

