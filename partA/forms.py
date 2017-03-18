from flask_wtf import Form
from wtforms import TextField, TextAreaField, SubmitField, validators, PasswordField
from partA.models import db, User

class ContactForm(Form):
    name = TextField("Name", [validators.Required("Please enter your name")])
    email= TextField("Email",[validators.Required("Please enter your email address"), validators.Email("Please enter your email address")])
    subject = TextField("Subject", [validators.Required("Please enter a subject")])
    message = TextAreaField("Message", [validators.Required("Please enter a message")])
    submit = SubmitField("Send")


class SignupForm(Form):
    firstname = TextField("First name", [validators.Required("Please enter your first name.")])
    lastname = TextField("Last name",[validators.Required("Please enter your last name.")])
    email = TextField("Email", [validators.Required("Please enter your email address"), validators.Email("Please enter your email address.")])
    password = PasswordField("Password",[validators.Required("Please enter a password")])
    submit = SubmitField("Create account")

    
    def __init__(self, *args,**kw):
        Form.__init__(self, *args,  **kw)

    def validate(self):
        if not Form.validate(self):
            return False

        user  = User.query.filter_by(email = self.email.data.lower()).first()
        if user:
            self.email.errors.append("That email is already taken.")
            return False

        else:
            return ''


class SigninForm(Form):
    email = TextField("Email",[validators.Required("Please enter your registered email address"), validators.Email("Please enter your registered email address")])
    password = PasswordField("Password",[validators.Required("Please enter your password")])
    submit = SubmitField("Sign In")

    def  __init__(self, *args, **kw):
        Form.__init__(self, *args,**kw)


    def  validate(self):
        if not Form.validate(self):
            return False

        user  = User.query.filter_by(email = self.email.data.lower()).first()
        if (user != None) and (user.check_password(self.password.data)== True):
            return 'OK'
        else:
            self.email.errors.append("Invalid e-mail or password")
            return False
