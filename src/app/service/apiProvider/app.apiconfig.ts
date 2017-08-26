import { InjectionToken } from '@angular/core';
import { AppConfig } from './IAppConfig';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.apiconfig');

export const API_CONFIG: AppConfig = {
    apiEndPoint: 'https://jsonplaceholder.typicode.com/posts',
    title: 'API'
}
