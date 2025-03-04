// @ts-ignore
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'todoapp',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
};

export default config;
