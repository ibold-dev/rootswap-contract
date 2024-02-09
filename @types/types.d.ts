export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            RPCURL: string;
            PRIVKEY: string;
            LOCALURL:string;
        }
    };
};