from flask import Flask
import jinja2

app = Flask(__name__, template_folder='templates')
SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
username="route2sabya",
password="sauda365",
hostname="route2sabya.mysql.pythonanywhere-services.com",
databasename="route2sabya$development",
)
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'sauda365#####'
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'route2sabya@gmail.com'
app.config["MAIL_PASSWORD"] = 'qnxbvdojyqbanhih'


from partA.models import db
def create_app():
    #app = Flask(__name__, template_folder='templates')
    db.init_app(app)

    return app





from partA.routes import mail

mail.init_app(app)

#mail.init_app(app)







import partA.routes




