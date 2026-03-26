import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'repro',
  extras: {
    experimentalSlotFixes: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
