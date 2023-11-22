export declare namespace events {
  interface IEventDispatcher {
    addEventListener(
      type: string,
      listener: Function,
      useCapture?: boolean,
      priority?: number,
      useWeakReference?: boolean
    ): void;

    dispatchEvent(event: Event): boolean;

    hasEventListener(type: string): boolean;

    removeEventListener(
      type: string,
      listener: Function,
      useCapture?: boolean
    ): void;

    willTrigger(type: string): boolean;
  }

  class EventDispatcher implements IEventDispatcher {
    constructor(target?: IEventDispatcher);

    addEventListener(
      type: string,
      listener: Function,
      useCapture?: boolean,
      priority?: number,
      useWeakReference?: boolean
    ): void;

    dispatchEvent(event: Event): boolean;

    hasEventListener(type: string): boolean;

    removeEventListener(
      type: string,
      listener: Function,
      useCapture?: boolean
    ): void;

    willTrigger(type: string): boolean;
  }
}
