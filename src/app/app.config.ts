import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
i
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {provideTranslateService} from '@ngx-translate/core';


const httpLoaderFactory: (http: HttpClient) =>
  TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      loader: {
        provide: TranslateHttpLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en',
    })]
};
