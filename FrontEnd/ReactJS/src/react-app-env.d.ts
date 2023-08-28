/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_SERVER_URL_LARAVEL: string
        REACT_APP_SERVER_URL_NODE: string
        }
    }