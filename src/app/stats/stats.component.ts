import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {StatsService} from '../stats.service';

@Component({ 
  selector: 'app-Stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private statsService : StatsService) { }

  StatsForm: FormGroup;
  Stats = {
    policyNumber: '',
    firstName: '',
    lastName: '',
    lossDetailDescription: '',
    dateOfLoss: '',
    StatsStatus: ''
  }
 
  ngOnInit() {
    this.StatsForm = new FormGroup({
      'policyNumber' : new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required) ,
      'lossDetailDescription': new FormControl(null),
      'dateOfLoss': new FormControl(new Date, Validators.required),
      'StatsStatus': new FormControl('reported')
    });
  }

  onSubmit() {
    this.Stats.policyNumber = this.StatsForm.value.policyNumber;
    this.Stats.firstName = this.StatsForm.value.firstName;
    this.Stats.lastName = this.StatsForm.value.lastName;
    this.Stats.lossDetailDescription = this.StatsForm.value.lossDetailDescription;
    this.Stats.dateOfLoss = this.StatsForm.value.dateOfLoss;

    console.log(this.Stats);
    this.statsService.saveStats(this.Stats)
    .subscribe((response) => console.log(response),
      (error) => console.log(error)
  );
    
  }


}
