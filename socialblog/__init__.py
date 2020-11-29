# imports
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail
#from flask_uploads import UploadSet, IMAGES, configure_uploads
#from werkzeug.utils import secure_filename
#from werkzeug.datastructures import FileStorage

UPLOAD_FOLDER = 'static/uploads/'

# Configuration
app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
db = SQLAlchemy(app)
Migrate(app, db)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')
mail = Mail(app)

# Configure the image uploading via Flask-Uploads
#images = UploadSet('images', IMAGES)
#configure_uploads(app, images)


# Uploads
#UPLOADS_DEFAULT_DEST = TOP_LEVEL_DIR + '/static/img/'
#UPLOADS_DEFAULT_URL = 'http://localhost:5000/static/img/'

#UPLOADED_IMAGES_DEST = TOP_LEVEL_DIR + '/static/img/'
#UPLOADED_IMAGES_URL = 'http://localhost:5000/static/img/'
