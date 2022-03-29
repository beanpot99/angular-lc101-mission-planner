import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   addItem(equipment:object){
    if(this.maximumAllowedMass-(this.cargoMass+equipment.mass)<=0.5 || this.cargoHold.length===this.maxItems){
      return false;
    }else{
      this.cargoHold.push(equipment);
    this.cargoMass+=equipment.mass;
      return true;
    }
   }
   
  isCargoFull(equipment:object){
    if(this.maximumAllowedMass-(this.cargoMass+equipment.mass)<=0.5 || this.cargoHold.length===this.maxItems){
      return true;
  }else{
    return false;
  }
   
   
}
 nearMaxMass(){
   if(this.maximumAllowedMass-this.cargoMass<=200){
     return true;
   }
 }
  emptyHold(){
    this.cargoHold=[];
    this.cargoMass=0;
  }
}