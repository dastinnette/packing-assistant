#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
import datetime

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Location, Trip

class Users(Resource):
    def post(self):
        data = request.get_json()
        user = User(username=data['username'], email=data['email'], password_hash=data['password'])
        db.session.add(user)
        db.session.commit()
        session['user_id'] = user.id 
        return make_response({'user': user.to_dict()}, 201 )

api.add_resource(Users, '/api/v1/users')  

class Locations(Resource):
    def get(self):
        return [[location.to_dict() for location in Location.query.all()], 200]
    
api.add_resource(Locations, '/api/v1/locations')

class LocationById(Resource):
    def get(self, id):
        location = Location.query.get(id)
        if not location:
            return make_response({'erorr': 'location not found'}, 404)
        return make_response(location.to_dict(), 200)

api.add_resource(LocationById, '/api/v1/locations/<int:id>')

class Trips(Resource):
    def get(self):
        return [[trip.to_dict() for trip in Trip.query.all()], 200]

api.add_resource(Trips, '/api/v1/trips')

@app.route('/api/v1/authorized')
def authorized():
    try:
        user = User.query.filter_by(id=session.get('user_id')).first()
        return make_response(user.to_dict(), 200)
    except:
        return make_response({ "error": "User not found"}, 404)

@app.route('/api/v1/logout', methods=['DELETE'])
def logout():
    session['user_id'] = None 
    return make_response('', 204)

@app.route('/api/v1/login', methods=['POST'])
def login():
    data = request.get_json()
    try:
        user = User.query.filter_by(username=data['username']).first()
        if user.authenticate(data['password']):
            session['user_id'] = user.id
            return make_response({'user': user.to_dict()}, 200)
        else:
            return make_response({'error': 'incorrect password'}, 401)
    except:
        return make_response({'error': 'username incorrect'}, 401)

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

