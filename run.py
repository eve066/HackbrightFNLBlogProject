# Grabs the app & runs it - app exists from init.py file
from socialblog import app
from socialblog import routes

if __name__ == '__main__':
    app.run(debug=True)
