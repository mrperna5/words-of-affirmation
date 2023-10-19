import { Component, OnInit } from '@angular/core';
import {Affirmation} from "./affirmation.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-affirmation',
  templateUrl: './affirmation.component.html',
  styleUrls: ['./affirmation.component.css']
})
export class AffirmationComponent implements OnInit {


  affirmations: Affirmation[] = [];
  currentAffirmation!: Affirmation;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAffirmations();
  }

  loadAffirmations() {
    this.http.get<Affirmation[]>('assets/data/affirmations.json').subscribe(data => {
      this.affirmations = data;
      this.generateRandomAffirmation();
    });
  }

  generateRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * this.affirmations.length);
    this.currentAffirmation = this.affirmations[randomIndex];
  }

}
