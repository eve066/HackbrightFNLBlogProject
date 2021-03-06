# HackbrightFNLBlogProject

Paws Unite is a social blog where pet owners and their friends can share information and view other user's posts about their favorite pet. Users can add images from their desktop,  update, delete and create new posts. They can also view additional information such as find a pet shelter and local events in their area by clicking on the upcoming events link.  Users can also review login data, posts and compare current vs previous users by clicking on their Dashboard. 

This Flask application has a home page with a form for new users to sign up and a button for returning users to log in.
After the user logs in, the home page utilizing 3 SQLAlchemy queries displays all users post, including the current user.

When the users clicks on add a "new post" a new form prompts users to provide title, content and add an image from their desktop. This feature was generated by queriyign SQlAlchemy aalong with a few flask routes.

Technologies:

Backend: SQLite, JSON, SQL Alchemy, Python, Flask, 
Frontend: HTML, CSS, Bootstrap and Chart.js
Data: JSON


To run Paws Unite:

Install Flask

Clone or fork this repo:
https://github.com/eve066/HackbrightFNLBlogProject

```
Create and activate a virtual environment inside your HackbrightFNLBlogProject directory:
python3 -m venv env
source env/bin/activate

```
Install the dependencies:
pip install -r requirements.txt

```
Source your keys from your secrets.sh file into your virtual environment:
source secrets.sh

```
Set up the database and create the database tables:
createdb socialblog
python3 run.py

```

Run the app:
python3 run.py

```
You can now navigate to 'localhost:5000/' to access Paws Unite.
