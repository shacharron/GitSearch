import { TestBed, inject } from '@angular/core/testing';
import { RepoService } from './repo.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


describe('RepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoService],
      imports: [ HttpClientModule
      ],
    });
  });

  it('should be created', inject([RepoService], (service: RepoService) => {
    expect(service).toBeTruthy();
  }));
});
