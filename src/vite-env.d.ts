/// <reference types="vite/client" />

declare global {
  interface Window {
    accelerateParticles: (accelerate: boolean) => void;
  }
}

export {};
