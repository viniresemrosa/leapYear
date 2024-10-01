/* Leap Year Checker
It takes 365.25 days for earth to orbit the sun - a solar year. 🌎

In modern 365-day calendars, we rounded the number down.
 To make up for the missing quarter day,
  we add one day to our calendar approximately every four years.

These years are known as leap years and they include an extra day (i.e., February 29th) 
so that the end of the year aligns with the Earth completing a full rotation around the Sun. 
It’s a special day and people who are born on it are called “leaplings” or “leapers”.

But how do we know which year is a leap year? There are two possible cases:

It is a number divisible by 4 but not by 100.
It is a number divisible by 400.
Let's create a JavaScript program that does this!
Loop between 2000 and 3000, and use a control flow statement to only display numbers that are leap years.
 */

for (let num=2000;num>=2000 && num<=3000;num++){
    if (num%4==0 && num%100!=0){
        console.log(num);
    } else if (num%400==0){
        console.log(num);
    }
}
