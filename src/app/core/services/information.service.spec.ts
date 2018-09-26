import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoadGuardService } from './load-guard.service';

describe('LoadGuardService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }));

  it('should be created', () => {
    const service: LoadGuardService = TestBed.get(LoadGuardService);
    expect(service).toBeTruthy();
  });
});
