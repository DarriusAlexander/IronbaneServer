/*
    This file is part of Ironbane MMO.

    Ironbane MMO is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Ironbane MMO is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Ironbane MMO.  If not, see <http://www.gnu.org/licenses/>.
*/




var MovingObstacle = DynamicMesh.extend({
    init: function(position, rotation, id, param, metadata) {



        this._super(position, rotation, id, param, metadata);




    },
    tick: function(dTime) {

        if ( this.mesh ) {

            var time = (new Date()).getTime();


            switch (this.movementType) {
                case MovingObstacleMovementTypeEnum.SINEWAVEX:
                    this.localPosition.x = this.startPosition.x + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    break;
                case MovingObstacleMovementTypeEnum.SINEWAVEY:
                    this.localPosition.y = this.startPosition.y + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    break;
                case MovingObstacleMovementTypeEnum.SINEWAVEZ:
                    this.localPosition.z = this.startPosition.z + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    break;
                case MovingObstacleMovementTypeEnum.SINEWAVEXY:
                    this.localPosition.x = this.startPosition.x + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    this.localPosition.y = this.startPosition.y + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    break;
                case MovingObstacleMovementTypeEnum.SINEWAVEXZ:
                    this.localPosition.x = this.startPosition.x + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    this.localPosition.z = this.startPosition.z + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    break;
                case MovingObstacleMovementTypeEnum.SINEWAVEYZ:
                    this.localPosition.y = this.startPosition.y + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    this.localPosition.z = this.startPosition.z + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    break;
                case MovingObstacleMovementTypeEnum.SINEWAVEXYZ:
                    this.localPosition.x = this.startPosition.x + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    this.localPosition.y = this.startPosition.y + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    this.localPosition.z = this.startPosition.z + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    break;
                case MovingObstacleMovementTypeEnum.SINEWAVEXYZ2:
                    this.localPosition.x = this.startPosition.x + (Math.sin((time/1000.0)*this.speedMultiplier*0.9)*this.distanceMultiplier);
                    this.localPosition.y = this.startPosition.y + (Math.sin((time/1000.0)*this.speedMultiplier)*this.distanceMultiplier);
                    this.localPosition.z = this.startPosition.z + (Math.sin((time/1000.0)*this.speedMultiplier*1.1)*this.distanceMultiplier);
                    break;
                case MovingObstacleMovementTypeEnum.ROTATIONX:
                    this.changeRotation = true;
                    this.rotation.x = ((time/100.0)*this.speedMultiplier)%360;
                    break;
                case MovingObstacleMovementTypeEnum.ROTATIONY:
                    this.changeRotation = true;
                    this.rotation.y = ((time/100.0)*this.speedMultiplier)%360;
                    break;
                case MovingObstacleMovementTypeEnum.ROTATIONZ:
                    this.changeRotation = true;
                    this.rotation.z = ((time/100.0)*this.speedMultiplier)%360;
                    break;
                case MovingObstacleMovementTypeEnum.ROTATIONXY:
                    this.changeRotation = true;
                    this.rotation.x = ((time/100.0)*this.speedMultiplier)%360;
                    this.rotation.y = ((time/100.0)*this.speedMultiplier)%360;
                    break;
                case MovingObstacleMovementTypeEnum.ROTATIONXZ:
                    this.changeRotation = true;
                    this.rotation.x = ((time/100.0)*this.speedMultiplier)%360;
                    this.rotation.z = ((time/100.0)*this.speedMultiplier)%360;
                    break;
                case MovingObstacleMovementTypeEnum.ROTATIONYZ:
                    this.changeRotation = true;
                    this.rotation.y = ((time/100.0)*this.speedMultiplier)%360;
                    this.rotation.z = ((time/100.0)*this.speedMultiplier)%360;
                    break;
                case MovingObstacleMovementTypeEnum.ROTATIONXYZ:
                    this.changeRotation = true;
                    this.rotation.x = ((time/100.0)*this.speedMultiplier)%360;
                    this.rotation.y = ((time/100.0)*this.speedMultiplier)%360;
                    this.rotation.z = ((time/100.0)*this.speedMultiplier)%360;
                    break;
                case MovingObstacleMovementTypeEnum.ROTATIONXYZ2:
                    this.changeRotation = true;
                    this.rotation.x = ((time/100.0)*this.speedMultiplier*0.9)%360;
                    this.rotation.y = ((time/100.0)*this.speedMultiplier)%360;
                    this.rotation.z = ((time/100.0)*this.speedMultiplier*1.1)%360;
                    break;
                default:
                    this.changeRotation = true;
                    this.position.lerpSelf(this.targetPosition, dTime*2);
                    this.rotation.lerpSelf(this.targetRotation, dTime*20);
                    break;
            }

// this.localPosition.y = 1;
//
//                    this.changeRotation = true;
//                    this.rotation.x = 180;
//                    //this.rotation.y = 0;
//                    this.rotation.z = 0;

        }

        this._super(dTime);

        //this.updateRotation();

    }
});


