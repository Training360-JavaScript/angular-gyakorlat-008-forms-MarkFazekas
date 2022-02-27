import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  // 1. Kiolvasni az id paramétert az URL-ből.
  // 2. Ezzel a paraméterrel meghívni az EventService.get metódust.
  event$: Observable<Event> = this.activatedRoute.params.pipe(
    switchMap( params => this.eventService.get(params['id']) )
  );

  // datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
  datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
  timePattern = /^(0[1-9]|[1][0-2])(am|pm)$/

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
  ) { }

  ngOnInit(): void {}


  onUpdate(eventForm, event: Event) {

  }
}
