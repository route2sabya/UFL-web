from partA import create_app
from flask import Flask, render_template, request,flash, session, redirect,url_for, g
from partA.forms import ContactForm, SignupForm, SigninForm
from flask_mail import Mail, Message
import jinja2
from partA.models import db,User
#from functools import wraps


app = create_app()
app.app_context().push()
my_loader = jinja2.ChoiceLoader([
    app.jinja_loader,
    jinja2.FileSystemLoader('\flask-app\app\partA\templates'),
])
app.jinja_loader = my_loader
mail = Mail()
"""
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash("You need to login first")
            return redirect(url_for('signin'))

    return wrap

"""

@app.route('/')
def home():
    return redirect(url_for('signin'))

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET','POST'])
def contact():
    form = ContactForm()

    if request.method == 'POST':
        if form.validate() ==False:
            flash('All fields required.')
            return render_template('contact.html', form=form)

        else:
            with app.app_context():
                msg = Message(form.subject.data, sender='contact@example.com', recipients=['route2sabya@gmail.com'])
                msg.body = """
                From: %s <%s>
                %s
                """ % (form.name.data, form.email.data, form.message.data)
                mail.send(msg)
                return render_template('contact.html', success=True)

    elif request.method == 'GET':
        return render_template('contact.html', form=form)

"""
@app.route('/testdb')
def testdb():
    if db.session.query("1").from_statement("SELECT 1").all():
        return 'It works.'
    else:
        return 'something is broken.'

"""
@app.route('/signup', methods = ['GET', 'POST'])
def signup():
    form = SignupForm()
    if request.method == 'POST':
        if form.validate() == False:
            flash("All fields required.")
            return render_template('signup.html',form=form)
        else:
            with app.app_context():
                newuser = User(form.firstname.data, form.lastname.data, form.email.data, form.password.data)
                db.session.add(newuser)
                db.session.commit()
                session['email'] = newuser.email


            return redirect(url_for('profile'))

            #return "[1] Create a new user [2] sign in theb user [3] redirect to the user's profile"

    elif request.method == 'GET':
        return render_template('signup.html', form=form)


@app.route('/profile')
#@login_required
def profile():
    if 'email' not in session:
        return redirect(url_for('signin'))
    else:
        return render_template('profile.html')




@app.route('/signin', methods = ['GET','POST'])
def signin():
    form = SigninForm()



    if request.method == 'POST':

        if form.validate() == False:
            #flash('username or password is invalid','error')
            return render_template('signin.html', form=form)
        else:
            #if 'email' in session:
                #return redirect(url_for('profile'))
            #else:

            session['email'] = form.email.data
        return redirect(url_for('profile'))





    elif request.method == 'GET':
        return render_template('signin.html',form=form)


@app.route('/signout', methods=['GET','POST'])
#@login_required
def signout():
    if 'email' not in session:
        return redirect(url_for('signin'))

    session.pop('email',None)
    return redirect(url_for('contact'))
