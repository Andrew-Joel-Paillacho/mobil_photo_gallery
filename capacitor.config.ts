import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
  SplashScreen: {
    launchShowDuration: 3000, // 3 segundos
    launchAutoHide: true,
    backgroundColor: "#ffffff",
    androidSplashResourceName: "splash",
    showSpinner: false
  }
}
};

export default config;
