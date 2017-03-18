from flask import Flask
import jinja2



app = Flask(__name__, template_folder='templates')



ALLOWED_HOSTS = ['route2sabya.pythonanywhere.com']
app.secret_key = 'sauda365'
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'route2sabya@gmail.com'
app.config["MAIL_PASSWORD"] = 'trishamandal'

from partA.routes import mail
mail.init_app(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://route2sabya:sauda365@route2sabya.mysql.pythonanywhere-services.com'

from partA.models import db
if __name__  == '__main__':
    db.init_app(app)


import partA.routes




