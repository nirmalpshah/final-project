final-project
=============
## Features
* User authentication
* Create a top-level question from the root page (login required)
* Answer questions or post responses to any part of the question hierarchy from the questions detail page


## To help with grading:

### 1. 12 pts) Demonstrate best-practice use of Rails MVC architecture
> Done to the best of my knowledge
### 2. 12 pts) Use all four HTTP methods (GET, POST, PATCH, DELETE) at least once
> GET and POST are used throughout.  DELETE is used in Session
###3. 12 pts) Allow users to sign up, sign in, and sign out using cookie-based sessions.
> DONE
### 4. 5 pts) User accounts must use industry-strength password encryption or OAuthcompliant authentication data exchange.
> Using bcrypt
### 5. 5 pts) Contain at least six models
> Due to time constraints, I was only able to complete 4 of my models
### 6. 5 pts) Contain at least one many-to-many association
> Questions have a many-to-many association with themselves, using the Answers table as a join table
### 7. 5 pts) Use at least three model callbacks
> User, Question, and Category each use a callback
### 8. 5 pts) Use at least three validation rules
> User uses 2, and Category uses 1
### 9. 5 pts) Maintain HTTP session state (e.g. user authentication)
> DONE
### 10. 2 pts) Use at least one controller filter action
> ApplicationController uses one
### 11. 2 pts) Populate the database via seed data
> Done. Please populate db with seed data before creating other data

### 20 pts) Use and demonstration of understanding of at least one of the following:
### 1.2. Intelligent use Javascript or CoffeeScript to create a responsive user interface
> I chose advanced javascript as my elective component.  I have used jQuery and bootstrap throughout to make a fluid user interface.  Additionally, I have used underscore.js for client-side html templates. Some rails-oriented javascript methodologies were not observed in favor of placing focus on javascript library features
