import { TestBed } from '@angular/core/testing';

import { HeroesManagerService } from './heroes-manager.service';

describe('HeroesManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroesManagerService = TestBed.get(HeroesManagerService);
    expect(service).toBeTruthy();
  });
});
