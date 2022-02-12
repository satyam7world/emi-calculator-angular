import {Injectable} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
//  https://www.youtube.com/watch?v=ANyOZIcGvB8
// https://fireship.io/lessons/seo-angular-part-1-rendertron-meta-tags/
export class SeoService {

  constructor(private meta: Meta) {
  }

  generateTags(config: { title?: any; description?: any; image?: any; slug?: any; }) {
    // default values
    config = {
      title: 'Emicalcu.in - Calculate emi and loan online',
      description: 'Calculate emi online instantly, Just by entering three values ie. Tenure, Principal Amount, Interest. With features to estimate the number and change the Currency sign in reatime',
      image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80',
      slug: '',
      ...config
    }

    this.meta.updateTag({name: 'twitter:card', content: 'summary'});
    // this.meta.updateTag({name: 'twitter:site', content: 'emicalcu.in'});
    this.meta.updateTag({name: 'twitter:title', content: config.title});
    this.meta.updateTag({name: 'twitter:description', content: config.description});
    this.meta.updateTag({name: 'twitter:image', content: config.image});

    this.meta.updateTag({property: 'og:type', content: 'article'});
    this.meta.updateTag({property: 'og:site_name', content: 'Emicalcu.in'});
    this.meta.updateTag({property: 'og:title', content: config.title});
    this.meta.updateTag({property: 'og:description', content: config.description});
    this.meta.updateTag({property: 'og:image', content: config.image});
    this.meta.updateTag({property: 'og:url', content: `https://emicalcu.in/${config.slug}`});
  }
}
