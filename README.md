# simplepractice

Notes on the implementation: 

1. Passing config parameters, I am not sure how it's usually done with Ember and if there is something special, my idea was that usually you have something like .env file, which get looked into during build, so the idea is to read params like clinicianID from there, I didn't want to spend time on figuring out how to add .env into ember project, so for now it's just hardcoded in config/environment. And about URL, I understand it's for API, and it is part of adapter, can be as well read from config
2. Re "Setup the structure as you would building the entire widget to show your architectural forward thinking" - it's a bit hard to demonstrate it with the framework that you basically don't know. My minimal goal was to understand some basics of Ember and to have app do what is required. But I will try to explain what I would do further to make architecture better
    - I did move navigation item as separated component, since it's quite repetitive, but I also still see room for improvement there, maybe I would further create some glimmer(or how it's called? :)  component with tracked properties, that would calculate if item isActive or isPassed, based on a selection we have present.  
    - controllers for service and location are very similar, maybe I would try to make it reusable, or make some general _stepContent_ controller(? maybe not per se, because as I get it controllers aren't very common for Ember app these days) that would take which step we are setting and reading, but again not sure how it should be done with Ember since a lot of different entities like Route/Controller/Service/Component 
    - I was thinking to make component for _selection_ service, that would concern about navigation, but I realized, that if our app is only a scheduler, and is not that big, it doesn't make sense to have things less explicit(meaning removing it from application.hbs) and it looks a bit like over-thinking :)
    - Next point, it wasn't mention in the task, and I also didn't do it, but it would def be a next step, to handle errors from API, and aslo loading state, I read there's some special things for this in Ember, but my time is also limited so only mentioning it in words.
    - I didn't work on animations, I know it's doable to make _route_ fade out and next one to fade in, with some transition helpers, but I think it's second after loadign/error states.
3. Re Styling, I used some library that ports Twitter Bootstrap to Ember, in the end I didn't use any component from there, only styles basically.

 
In general it was an interesting activity, I still can do things using basically new framework, but I would def spend way less time if it was React, just because I already have some handy things that I use in my projects, also I think it would better show my architectural thinking, because here I just wanted it to work at least )) 
 
-

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd simpleppractice`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
