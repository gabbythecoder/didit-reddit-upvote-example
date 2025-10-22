# Joining an Existing Project

Week 11 Assignment - Joining an Existing Project (Reddit clone)

## Requirements 
- Deployed to Vercel ✅

## Stretch Requirements 
- Handle the error when you click to vote while not logged in to show a nice error message ✅

## Reflection

For this assignment, we were tasked to join an exisiting project that is working on a prototype Reddit-style app. 

At first, it was a little overwhelming when we were given the assignment, but once I read through the README.md regarding the steps and breaking it down, it made more sense to me. Once I forked the repository and cloned it, I added a ```.env.local``` file with all environment variables needed for the project. After adding all that in and deploying it on Vercel, everything seems to be working as intended.

I implemented a stretch goal by displaying a user-friendly error message when someone tries to vote without being logged in. In ```Vote.jsx```, the code already throws an error in this case, but it wasn’t very clear to users. To improve the experience, I added an ```error.js``` file in the ```/app``` directory that provides a clearer message when an unauthenticated user attempts to vote.

## Resources
- https://www.youtube.com/watch?v=H-1ozULYdyc 
- https://authjs.dev/getting-started/deployment 