# Joining an Existing Project

Week 11 Assignment - Joining an Existing Project (Reddit clone)

## Requirements 
- Deployed to Vercel ✅

## Stretch Requirements 
- Fix page titles on post pages to match the post title ✅
- Handle the error when you click to vote while not logged in to show a nice error message ✅

## Reflection

For this assignment, we were tasked to join an exisiting project that is working on a prototype Reddit-style app. 

At first, it was a little overwhelming when we were given the assignment, but once I read through the README.md regarding the steps and breaking it down, it made more sense to me. Once I forked the repository and cloned it, I added a ```.env.local``` file with all environment variables needed for the project. After adding all that in and deploying it on Vercel, everything seems to be working as intended.

I implemented a stretch goal by displaying a user-friendly error message when someone tries to vote without being logged in. In ```Vote.jsx```, the code already throws an error in this case, but it wasn’t very clear to users. To improve the experience, I added an ```error.js``` file in the ```/app``` directory that provides a clearer message when an unauthenticated user attempts to vote.

Another stretch goal I implemented was adding dynamic metadata to each post page. Initially, I wasn't sure how to approach it, so I reviewed the Next.js documentation on metadata and referred back to a class demo for guidance. After that, things clicked for me. I used the ```id``` of the post as the page title and pulled the ```title``` from the ```posts``` table to generate the meta description dynamically. I tested this using Chrome DevTools and confirmed that the metadata updates correctly - the title and description change for each post I click on. 

Working with a codebase I didn't build from scratch was a challenge in itself, but I appreciated the experience, as it closely reflects what real-world development is often like. It took some time to familiarise myself with the structure and logic of the app. Once the environment variables were properly set up so the app could run without errors when testing it on ```localhost```, I was able to log in/log out successfully, as well as add posts and comments. I also implemented a few stretch goals. While I would have liked to tackle more, time was limited since we only had a day to complete and submit the assignment, so I focused on just a few. 

## Resources
- https://www.youtube.com/watch?v=H-1ozULYdyc 
- https://authjs.dev/getting-started/deployment 
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata