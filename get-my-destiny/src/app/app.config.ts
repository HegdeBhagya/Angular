// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideZoneChangeDetection } from '@angular/core';
// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'; 
// import { HttpClient, provideHttpClient } from '@angular/common/http';


 
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),
//     provideClientHydration(),
//     importProvidersFrom(FormsModule),
//     provideHttpClient()
    
//   ]
// };

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import withFetch

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(FormsModule),
    provideHttpClient(withFetch()), provideAnimationsAsync() // Add withFetch() here
  ]
};
