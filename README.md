## Overview 
A powerful web application for organizing and managing events of all sizes. Whether you're hosting a virtual conference, summit, concert, workshop, or community gathering, tessera provides an intuitive interface and robust features to ensure smooth and successful event management.

## Key Features (so far):
Event Creation and Management: Easily create and manage multiple events with customizable options for dates, locations, event details, pictures, and links.

User Registration and Authentication: Allow users to register, log in, and create their events.

## Tech Stack
- Node.js
- Next.js
- TypeScript
- TailwindCSS
- MongoDB
- Stripe (Still researching)
- Zod
- React Hook Form
- Shadcn
- uploadthing
- Clerk
- Vercel

## What I Hope to Achieve:
Ticketing System: Seamlessly handle ticket sales, including different pricing tiers, early-bird specials, and promo codes.

Payment Integration: Support for multiple payment gateways to process transactions efficiently and securely.

Seat selection: The ability to choose where you want to sit in a reserved seating event. Prices may vary based on seat location

Customizable Event Pages: Design and personalize event pages with rich content, including images, descriptions, and schedules.

Email Notifications: Automated email notifications for ticket confirmations, reminders, and updates.

## Work Log (5 hours each day):
Day 1: Learning more about Next.js, Typescript, Clerk, Mongoose, Vercel, ShadCn and much more. Lots and lots of wireframing. And finally icon and images creation.

Day 2: Working on the homepage and layout as well as the users profiles in Clerk. Lots of debugging.

Day 3: Working on setting up the backend with Mongoose as well as deploying with Vercel. Hooray!!

Day 4: Working on the "Create Event" page as well as the "Final Summary" page (and hopefully the future purchase ticket page). Lots and lots of debugging this day.

Day 5: Wokring on the homepage again. This time focusing on displaying created events. Thinking about making edits to the wireframe I had for this page (perhaps subcategory divs such as, Recommended for You, Popular Events, Newly Created, etc).

Day 6: Made an option so that if you are the organizer you can edit and delete your event easily. It also stores the previously entered data, so that editing an event is easier. Along with that 2 more events were made and now events listed under the same category will populate in a "Related Events" section under an event you visit.

Day 7: New logo created. More representative of how the platform operates.Also spent time researching how to implement a seating chart for events. However this is just a start.

Day 8: Began working on re-wireframing the My Profile page after the inital one.

Day 9: Modified events page a little so that it doesn't get overcrowded. Also began working on my profile page as well as a checkout button that will most likely incorporate Stripe for payments.

Day 10: Implemented a checkout page with Stripe. Working on setting up the backend for completed purchases.

Day 11: Debugging Stipe issues. Updating profile page to possibly display tickets that are purchased.

Day 12: Debugging Stripe issues.

Day 13: Still debugging Stripe issues. I feel like I am narrowing down what's going wrong.

Day 14: Finally resolved the database link issue for Stripe. Now will look into any webhook failures while pursuing more work on the website. As of now I will work on customizing acceptable formats of payments.

Day 15: Added an order details page for event organizers, that way the can see who is attending there events. I also finally got around to adding a functional search and filter for the home page. That way finding events on the platform is easier once there are more events taking up the page. I realized that navigation buttons were being shown even where there was a small amount of events displayed, this issue was resolved.