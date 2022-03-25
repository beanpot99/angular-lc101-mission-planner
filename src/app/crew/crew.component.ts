import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  newCrewMem:string='Add a crew member!';
  firstMissionCheck:boolean=false;
  memberBeingEdited:object=null;
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }
  addCrew(memberName:string,isFirst:boolean){
    this.crew.push({name:memberName,firstMission: isFirst})
  }
  removeMember(crewMem: object){
    let index=this.crew.indexOf(crewMem);
    this.crew.splice(index,1);
  }
  edit(crewMem:object){
    this.memberBeingEdited =crewMem;
  }
  save(name:string, crewMem:object){
    crewMem['name']=updatedName;
    this.memberBeingEdited=null;
  }

}
