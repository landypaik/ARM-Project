/*Custom gesture controls for ARM-project 
for HackHolyoke 2014.
This part was written by Ryan Brill. Other team members: Jason Azares, Juan Corzo, Landon Paik.
*/

#include<"myojs-0.8.18.js">

//set up an instance of the Myo
var myMyo = Myo.create(); //Defaults to id 0

//function for fingers spread
myMyo.on('fingers_spread', function(edge)
{
    if(!edge) return;
    alert('Hello Myo!');
    myMyo.vibrate();
}