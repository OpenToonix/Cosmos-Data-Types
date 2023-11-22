export declare namespace net {
  class NetConnection {
    public static defaultObjectEncoding: number;

    public readonly connected: boolean;
    public readonly connectedProxyType: string;
    public readonly farID: string;
    public readonly nearID: string;
    public readonly nearNonce: string;
    public readonly protocol: string;
    public readonly unconnectedPeerStreams: Array<unknown>;
    public readonly uri: string;
    public readonly usingTLS: boolean;

    public client: Object;
    public maxPeerConnections: number;
    public objectEncoding: number;
    public proxyType: string;

    constructor();

    public addHeader(
      operation: string,
      mustUnderstand: boolean,
      param?: Object
    ): void;

    public call(
      command: string,
      responder?: Object,
      ...arguments: Array<unknown>
    ): void;

    public close(): void;

    public connect(command: string, ...arguments: Array<unknown>): void;
  }

  class SharedObject {
    public client: Object;
    public data: Object;
    public defaultObjectEncoding: number;
    public fps: number;
    public objectEncoding: number;
    public readonly size: number;

    constructor();

    public clear(): void;

    public close(): void;

    public connect(myConnection: NetConnection, params?: String): void;

    public flush(minDiskSpace?: number): string;

    public getLocal(
      name: string,
      localPath?: string,
      secure?: boolean
    ): SharedObject;

    public getRemote(
      name: string,
      remotePath?: string,
      persistence?: boolean,
      secure?: boolean
    ): SharedObject;

    public send(...arguments: Array<unknown>): void;

    public setDirty(propertyName: string): void;

    public setProperty(propertyName: string, value?: Object): void;
  }
}
