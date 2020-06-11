import { Injectable } from '@angular/core';
import { GlxInstructorsHttp } from '@galaxy/commons/http/instructor';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { finalize } from 'rxjs/operators';
import { GlxWorkshopsHttp } from '@galaxy/commons/http/workshop';
import { WorkshopRequest, Instructor } from '@galaxy/commons/models';
import { Router, ActivatedRoute } from '@angular/router';
import { Workshop } from '@galaxy/commons/models';
import { forkJoin } from 'rxjs';

@Injectable()
export class WorkshopUpdatePresenter {

  instructors: Instructor[] = [];
  workshop: Workshop;
  workshopId: string;

  constructor(
    private instructorsHttp: GlxInstructorsHttp,
    private workshopsHttp: GlxWorkshopsHttp,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  initial() {
    this.workshopId = this.route.snapshot.paramMap.get('id');
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    forkJoin({
      instructors: this.instructorsHttp.getAll(),
      workshop: this.workshopsHttp.getOne(this.workshopId)
    })
    .pipe(finalize(() => loading.close()))
    .subscribe(
      ({ instructors, workshop }) => {
        this.instructors = instructors;
        this.workshop = workshop;
      },
      (err) => {
        console.log(err);
      }
    );
    /*
    forkJoin([
      this.instructorsHttp.getAll(),
      this.workshopsHttp.getOne(workshopId)
    ])
    .pipe(finalize(() => loading.close()))
    .subscribe(
      ([ instructors, workshop ]) => {
        this.instructors = instructors;
        this.workshop = workshop;
      }
    );
    */

  }


  updateWorkshop(body: WorkshopRequest) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.workshopsHttp.update(this.workshopId, body)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => this.goWorkshops());
  }

  updateWorkshopPoster(poster: File) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    this.workshopsHttp.updatePoster(this.workshopId, poster)
    .pipe(finalize(() => loading.close()))
    .subscribe(realitveUrl => {
      this.workshop.updatePoster(realitveUrl);
    });
  }

  cancelWorkshops(){
    this.goWorkshops();
  }
  goWorkshops() {
    this.router.navigateByUrl('/administrador/talleres');
  }
}
