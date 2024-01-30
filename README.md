﻿Student: Bobby Li StudentID : [redacted]

WEB422NAA Assignment 2-4:

This assignment is the front-end REACT app that will be using my API hosted on heroku for Assignment 1.

This assignment uses various states and hooks in conjunction with a fetch call to my API to pull and manipulate data in json format. This allows me to call my API for specific data, then pass that down through my components as props so they could be displayed.
useContext was used for the majority of the states that returned multiple product objects so I could use a common .map function to iterate through them for display, but I used useState for specific situations wherein a simple array is returned or a single product object is returned. This saved on excessive use of props, although there's definitely room for improvement in streamlining the different methods used.

This app also uses environment variables that were configured on netlify, and the deployed website's domain is whitelisted in my back-end's CORS implementation. This is the hide my API from the code to prevent people from sniffing out my API and using it in unintended or unwanted manners.

There are still some refinements that can be made, for example the AllProducts and Bestseller components can be redundant and solved with a single component that changes based on the API call.

Pages:
Home
Product listing by selected category
Product details
Registration
Dummy page (for all links in the Footer as I have no relevant links; outside of the scope of the assignment)
