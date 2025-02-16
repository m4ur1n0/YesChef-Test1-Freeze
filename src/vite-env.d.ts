/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_HUGGING_FACE_API_KEY: string;
    readonly VITE_APP_HUGGING_FACE_API_URL: string;
    readonly VITE_APP_HUGGING_FACE_TOKEN_NAME: string;

    // Add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }