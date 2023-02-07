# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You will first need to make a foreign key called cohort_id that will go in the Student model. Next you need to go into the Cohort app model and add "has_many :students" and then go into the Student app model and add "belongs_to :cohort".

Researched answer: In order to fix this mistake you will first need to make a new migration called add_columns_to_student. Then, you will need to go into the new db/migrate and add: "add_column :students, :cohort_id, :integer". Make sure you save the file and then $rails db:migrate in the terminal to migrate the new changes. The foreign key called cohort_id that will go in the Student model. Next you need to go into the Cohort app model and add "has_many :students" and then go into the Student app model and add "belongs_to :cohort".

2. Which RESTful routes must always be passed params? Why?

Your answer: I believe the RESTFUL routes that must always be passed params are: show, edit, update, and destroy. These are passed params because they will need access to the params id for each individual entry in the database.

Researched answer: The RESTFUL routes that must always be passed params are: show, edit, update, destroy, and create. Show, edit, update, and destroy are passed params because they will need access to the params id for each individual entry in the database. Create is passed params through a method that makes sure that users are only entering data that is wanted into the database.

3. Name three rails generator commands. What is created by each?

Your answer: Rails generate model, rails generate migration, and I can't remember a third. Rails generate model is used to create a model for the database that you are creating. Rails generate migration is used to create a model to be able to edit and add colummns to whatever model you would like to update.

Researched answer: Three rails generator commands are: rails g model, rails g migration, and rails g controller. Rails g model is used to create a model for the database that you would like to use for your application. An example of this would be: rails g model Person name:string birth_date:date location:string. Rails g migration is used to create a model to be able to edit and add columns to an existing model. An example would be: rails g migration add_columns_to_person. Rails g controller is used to create a controller for you rails application. If I put rails g controller Main into the terminal rails would create an app controller called main_controller.rb, app/views/main, main_helper.rb, and main.scss.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Controller#Method: students#index, used to display a list/index of all the students.

action: "POST" location: /students
Controller#Method: students#create, create a new student database entry

action: "GET" location: /students/new
Controller#Method: students#new, return an HTML form for creating a new student

action: "GET" location: /students/2
Controller#Method: students#show, display a specific student

action: "GET" location: /students/2/edit
Controller#Method: students#edit, return an HTML form for editing a student

action: "PATCH" location: /students/2
Controller#Method: students#update, update a specific student

action: "DELETE" location: /students/2
Controller#Method: students#destroy, delete a specific student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

Movie Tracker App
Story 1: In order to interact with the Movie tracker application, as a user of the application, I need to see a list of all movies I'd like to track.

Story 2: In order to interact with the Movie tracker application, as a user of the application, I need to see the details of one movie. 

Story 3: In order to interact with the Movie tracker application, as a user of the application, I need to see a form where I can fill out information to add a new movie to the app.

Story 4: In order to interact with the Movie tracker application, as a user of the application, I need to be able to create a new movie on the app.

Story 5: In order to interact with the Movie tracker application, as a user of the application, I need to be able to delete a movie from the app.

Story 6: In order to interact with the Movie tracker application, as a user of the application, I need to see a form to update an existing movie on the app.

Story 7: In order to interact with the Movie tracker application, as a user of the application, I need to be able to update an existing movie on the app.

Story 8: In order to create a secure Movie tracker application, as a developer of the application, I need to make sure that only valid data is entered into the database.

Story 9: In order to interact with the Movie tracker application, as a user of the application, I need to see pleasant stylings on the app.

Story 10: In order to interact with the Movie tracker application, as a user of the application, I need to be able to access the application on a live url.
