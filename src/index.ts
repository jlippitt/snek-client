declare global {
  interface Window {
    snek?: Api;
  }
}

export interface Size {
  width: number;
  height: number;
}

export interface AudioOptions {
  sampleRate: number;
}

export interface AudioController {
  sendAudioData(buffer: AudioBuffer): void;
}

export interface Screen {
  image: ImageData;
  update(): void;
}

export interface BootstrapOptions {
  audio: AudioController;
  screen: Screen;
  romData: Uint8Array;
}

export interface GuiInterface {
  update(now: number): void;
  suspend(): void;
  resume(): void;
}

export interface EmulatorOptions {
  name: string;
  system: string;
  fileExtensions: string[];
  screen: Size;
  audio: AudioOptions;
  bootstrap(options: BootstrapOptions): GuiInterface;
}

export interface Api {
  register(options: EmulatorOptions): void;
}

export function register(options: EmulatorOptions) {
  if (!window.snek) {
    throw new Error('GUI not loaded');
  }

  window.snek.register(options);
}