declare namespace NodeJS {
  export type ProcessEnv = {
    NODE_ENV: string;
    PORT: number;
    MONGODB_URL: string;
    BCRYPT_SALT_ROUND: number;
  };
}
