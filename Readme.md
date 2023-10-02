# The Insurwave code test

## Introduction

Let's imagine a ship operating company having vessels traveling across the globe. The operators located in one of the headquarters are responsible for communication with vessel captains during their journey.  
To make their work easier they need to understand what is the local time at the ports where vessels stay as well as local weather conditions.

With this exercise, you will build a React app allowing the operator to retrieve that information in an easy manner.

The produced solution should:

- build with `npm run build` command,
- run with `npm start` command,
- contain all the necessary tests runnable with `npm test` command.

During writing the app, please include all the good practices that would be normally used during the day-to-day development.  
Please feel free to use any libraries, patterns or solution structure (including adding projects) that feels right for you.  

For obtaining the weather/time information, please integrate with https://www.weatherapi.com/ using a free account.

For the implementation, please follow the tickets written below.  
For every ticket, please prepare a separate commit/pull-request showing incremental work.  

During work on UI solution please present usage of CSS (you can use a design library) and testing practices.  
While usage of React is preferred, using other frameworks is acceptable, as long as the solution is functional and presents the good engineering practices.  
Using typescript is highly appreciated.  

During the interview session, the produced solution will be demoed, reviewed and discussed.  
You will then implement an additional requirement provided by the interviewers.  

## Ticket-1

As an operator,  
I want to know what is the local time and temperature in the specified city,  
So that I can efficiently coordinate the vessel crew staying in the port.

Please design and create a page returning the current weather conditions for the `city name` specified in the request, like: `Liverpool`, `Rotterdam` or `Busan, South Korea`.

Under the hood, the http://api.weatherapi.com/v1/current.json should be used for obtaining the details.
The screen should present the city name, region, country, local time and temperature in Celsius.

## Ticket-2

As an operator,  
I want to know what are the times of sunrise and sunset,  
So that I can better plan and coordinate the operations on the vessel.

Assuming previous changes are implemented and released to production, please extend the existing page with information of sunrise and sunset using the http://api.weatherapi.com/v1/astronomy.json api call.
