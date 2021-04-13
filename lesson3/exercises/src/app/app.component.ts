import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  rightEnabled: boolean = true;
  upEnabled: boolean = true;
  leftEnabled: boolean = true;
  downEnabled: boolean = true;
  

  handleTakeOff() {
    let result = window.confirm("Are you sure the shuttle is ready for takeoff?");
    if(result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.takeOffEnabled = false;
    }
  };

  handleMissionAbort(rocketImage) {
    let result = window.confirm("Are you sure you want to abort the mission?");
    if(result) {
      this.message = 'Mission Aborted.';
      this.color = 'red';
      this.height = 0;
      this.takeOffEnabled = true;
      rocketImage.style.bottom = '0px';
    }
  };

  handleLand(rocketImage) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = 'The shuttle has landed.';
    this.color = 'green';
    this.height = 0;
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
  };

  checkPosition(width, height) {
    if( this.height >= 320000 || this.height < 0 || this.width >= 430000 || this.width < 0) {
      this.color = 'orange'

      if(this.height >= 320000) {
        this.upEnabled = false;
      }
      if(this.height < 0) {
        this.downEnabled = false;
      }
      if(this.width >= 43000) {
        this.rightEnabled = false;
      }
      if(this.width < 0) {
        this.leftEnabled = false;
      }

    } else {
      this.color = 'blue'
      this.downEnabled = true;
      this.upEnabled = true;
      this.rightEnabled = true;
      this.leftEnabled = true;
    }
  };

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.checkPosition(this.height, this.width);
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) + -10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.checkPosition(this.height, this.width);
    }
    if (direction === 'up') {
      console.log(this.height)
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.checkPosition(this.height, this.width);
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) + -10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.checkPosition(this.height, this.width);
    }
      
 }




}
