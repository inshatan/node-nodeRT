  export class SizeInt32 {
    width: number;
    height: number;
    constructor();
  }

  export class GraphicsCaptureItem {
    displayName: string;
    size: SizeInt32;
    constructor();

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Direct3D11CaptureFrame {
    contentSize: SizeInt32;
    surface: Object;
    systemRelativeTime: number;
    constructor();

    close(): void;
  }

  export class Direct3D11CaptureFramePool {
    dispatcherQueue: Object;
    constructor();

    static create(device: Object, pixelFormat: number, numberOfBuffers: number, size: SizeInt32): Direct3D11CaptureFramePool;


    recreate(device: Object, pixelFormat: number, numberOfBuffers: number, size: SizeInt32): void;

    tryGetNextFrame(): Direct3D11CaptureFrame;

    createCaptureSession(item: GraphicsCaptureItem): GraphicsCaptureSession;

    close(): void;
    addListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    on(type: "FrameArrived", listener: (ev: Event) => void): void ;
    off(type: "FrameArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GraphicsCaptureSession {
    constructor();

    static isSupported(): boolean;


    startCapture(): void;

    close(): void;
  }

  export class GraphicsCapturePicker {
    constructor();

    pickSingleItemAsync(callback: (error: Error, result: GraphicsCaptureItem) => void): void ;

  }

