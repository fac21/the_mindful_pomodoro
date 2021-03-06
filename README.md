# the_mindful_pomodoro

Looking to get in the zone in a mindful way? look no further – The Mindful Pomodoro has all you need! Including, but not limited to...

## Design and features

- A sleak, simple user interface to get you feeling mindful and 'in the zone'
- A set 25 minute 'focus' period
- A 'breathe' function for pausing the timer
- A 'reset' function that allows you to reset the timer
- A 5 minute rest period which can be extended by a further 5 minutes (as many times as you like xD)
- A timer alarm and alert that informs you when your 25 minutes has passed, as well as when your rest interval is over.

## Building the timer

A really cool, fun, novel, and challenging exprience! It was my favourite part of the pre-course assignment and it felt good to be using good ol' Vanilla JS again, after a brief respite, seeing as though we had prevously been handed challenges focusing on CSS and HTML.

My ideas for this timer were pretty bold to begin with. I was hoping to incororate some of Oli's 'stretch goals', which, to some degree, I did do. But, unfortunately, I haven't made the 'focus' timer function changeable, meaning it is only set to countdown from 25 minutes. The 'rest' timer is slgightly more flexible: it alerts the user when 5 minutes has passd, but they ahve the option following this to rest for another 5 minutes every time it finishes. They also have the option to 'reset' the timer all over again if they wish, which allows them to start another 25 minute focus period. 

In the end, after stuggling with trying to incorporate 'forms' into the HTML/JS to have the user enter the timer period they wished for, I decided to just overhaul everything and make it as short, sweet, and simle as possible – both in design and in features. And hence – The Mindful Pomodoro was born!

In terms of the code I wrote, I wrote one main function for the timer:

```
function pomodoro(){
    //Focus time countdown

    if(focusSecs.innerText != 0){
        focusSecs.innerText--;
    } else if(focusMins.innerText != 0 && focusSecs.innerText == 0){
        focusSecs.innerText = 59;
        focusMins.innerText--;
}

if (focusSecs.innerText < 10 && focusSecs.innerText > 0) {
    focusSecs.innerText = "0" + focusSecs.innerText;
}

if (focusMins.innerText == 0 && focusSecs.innerText == 0 && restMins.innerText == 5 && restSecs.innerText == "00") {
        alarm.play();
        alert("You're totally in the zone! Click OK to take a 5 minute rest 🧘");

}

```

Once these conditions are met, the alarm and alert run (see above). Following this, I run pretty much the same conditions for the 'restSecs – whch then activates the 5 minute rest timer, which is still part of the same function:

```
  if(focusMins.innerText == 0 && focusSecs.innerText == 0){
      if(restSecs.innerText != 0){
          restSecs.innerText--;
      } else if(restMins.innerText != 0 && restSecs.innerText == 0){
          restSecs.innerText = 59;
          restMins.innerText--;
      }  if (restSecs.innerText < 10 && restSecs.innerText > 0) {
          restSecs.innerText = "0" + restSecs.innerText;
      } else if (restMins.innerText ==  0 && restSecs.innerText == 0)  {
 alarm.play();
 alert("You're all Zenned out! Click OK to rest for 5 more minutes. OR, press reset to restart the timer! 🙏")
 restMins.innerText = 5;
}
}

}
```

You may be wondering why I reset the 'restMins' to 5 mins upin completing the timer – won't that just invoke the alert that pops up after the first 'focus' time is completed? No. Why? because when the timer(s) countdown to 0, it does not match the condition of 00. See the following lines of code as a demonstration:

```
if (focusSecs.innerText < 10 && focusSecs.innerText > 0) {
    focusSecs.innerText = "0" + focusSecs.innerText;
}
```

I originally wrote the above code because I didn't like that the seconds counted down straight from 10 to 9 rather than 10 to '09'. In the end, it became quite an important part of the function. Why? Because when the 5 minutes rest is up, it automatically re-runs again straight from the 5 minutes rest timer (after the user clicks 'O' to the alert) – just incase the user wants another 5 minutes rest. If this wasn't the case, the user would get the same alert that they got when the first 'focus' time had run. when the user completes their rest interval, they can then either press 'breathe' to pause the timer or 'reset' to to reset the timer without being harassed by alarms and alerts.


## What I learned

I learned more about the 'innerText' feature of JavaScript, having only used 'innerHTML' previously. I feel as though I further solidified my knowledge of DOM manipulation. I also learned how to incoprorate 'setInterval()' and 'clearInterval()' – neither of which I had previously come across. In all honesty, it was a fairly challenging exericse ut fortunately not *too* challenging. I perhaps tried to challnege myself too much oirignally by wanting to make the user have full flexibility over their input times for focus and rest periods. So, oen thing I learned is that forms can be. bit of a pain to use, as it added a real layer of complexity that my final solution doesn't have. I realise that my eventual project is pretty primitive, but it does all the things it was set out to achieve. So I'm pretty pleased with the end result as well as the main points covered and learned throughout the project.

