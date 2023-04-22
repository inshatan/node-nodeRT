  export class PlaylistsContract {
    constructor();
  }

  export enum PlaylistFormat {
    windowsMedia,
    zune,
    m3u,
  }

  export class Playlist {
    files: Object;
    constructor();

    static loadAsync(file: Object, callback: (error: Error, result: Playlist) => void): void ;


    saveAsync(callback: (error: Error) => void): void ;

    saveAsAsync(saveLocation: Object, desiredName: string, option: number, callback: (error: Error, result: Object) => void): void ;
    saveAsAsync(saveLocation: Object, desiredName: string, option: number, playlistFormat: PlaylistFormat, callback: (error: Error, result: Object) => void): void ;

  }

