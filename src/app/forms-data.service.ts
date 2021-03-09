import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class FormsData implements InMemoryDbService {
  createDb() {
    const forms = [
      { id: 11, blocklist: [11, 12] },
      { id: 12, blocklist: [11] },
    ]
    return { forms };
  }

  genId(forms: Form[]): number {
    return forms.length > 0 ? Math.max(...forms.map(form => form.id)) + 1 : 11;
  }
}
