import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

import  { Hero } from '../hero';
import  { SecondHero } from '../secondhero'
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/*
This is for the Template data binding. This is a one way binding.
export class HeroesComponent implements OnInit{

  hero: Hero = {
    id:1,
    name: 'Dragon Booster'
  };
  onSubmit = function (value) {
    console.log(value);
    if(value.firstName=="Vikram"){
      alert("Welcome World");
    }

  }

  mem = HEROES;

  second: SecondHero ={
    name:"Vikram",
    phone:9940859538
  }
  constructor(){}
  ngOnInit(){}
}*/
/*
export class HeroesComponent implements OnInit {

  constructor() { }

  hero ="Dragon Booster";

  ngOnInit() {
  }

}
*/
export class HeroesComponent implements OnInit{
  form;


  ngOnInit(){
    this.form = new FormGroup({
      firstName : new FormControl("Vimal"),
      secondName: new FormControl("MageshKumar")
    });
  }
  onSubmit = function (value) {
    console.log(value)
  }

}
