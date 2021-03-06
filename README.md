# the_mindful_pomodoro

Looking to get in the zone in a mindful way? look no further – The Mindful Pomodoro has all you need! Including, but not limited to:

- A set 25 minute 'focus' period
- A 'breathe' function for pausing the timer
- A 'reset' function that allows you to reset the timer
- A 5 minute rest period which can be extended by a further 5 minutes (as many times as you like xD)
- A timer alarm and alert that informs you when your 25 minutes has passed, as well as when your rest interval is over.

## Building the timer

A really cool, fun, novel, and challenging exprience! It was my favourite part of the pre-course assignment and it felt good to be using good ol' Vanilla JS again, after a brief respite, seeing as though we had prevously been handed challenges focusing on CSS and HTML.

My ideas for this timer were pretty bold to begin with. I was hoping to incororate some of Oli's 'stretch goals', which, to some degree, I did do. But, unfortunately, I haven't made the 'focus' timer function changeable, meaning it is only set to countdown from 25 minutes. The 'rest' timer is slgightly more flexible: it alerts the user when 5 minutes has passd, but they ahve the option following this to rest fr another 5 minutes every time it finishes. They also have the option to 'reset' the timer all over again if they wish, which allows them to start another 25 minute focus period. 

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

Once these conditions are met, the alarm and alert run (see above). Following this, I run pretty much the same conditions for the 'restSecs – whch then activates the 5 minute rest timer, which is still part of the same function.

In the end, after stuggling with trying to incorporate 'forms' into the HTML/JS to have the user enter the timer period they wished for, I decided to just over haul everything and make it as short, sweet, and simpel as possible – both in design and in features. Hence, The Mindful Pomodoro was born!

## Design and features

As mentioned above, the approach was simply to be sleak and simple.

