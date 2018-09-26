import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { InformationService } from './information.service';

describe('InformationService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }));

  it('should be created', () => {
    const service: InformationService = TestBed.get(InformationService);
    expect(service).toBeTruthy();
  });
});
