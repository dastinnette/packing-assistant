from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-_password_hash',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())
    trips = db.relationship('Trip', back_populates = 'user', cascade = 'all, delete-orphan')
    locations = association_proxy('trips', 'location')

    @property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, plain_text_password):
        byte_object = plain_text_password.encode('utf-8')
        encrypted_password_object = bcrypt.generate_password_hash(byte_object)
        hashed_password_string = encrypted_password_object.decode('utf-8')
        self._password_hash = hashed_password_string

    def authenticate(self, password_string):
        byte_object = password_string.encode('utf-8')
        return bcrypt.check_password_hash(self.password_hash, byte_object)
    
    def __repr__(self):
        return f'<User {self.id}: {self.username}>'
    
class Location(db.Model, SerializerMixin):
    __tablename__ = 'locations'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    weather = db.Column(db.String)
    vaccinations = db.Column(db.String)
    travel_advisory = db.Column(db.String)
    plug_adapter = db.Column(db.String)
    img = db.Column(db.String)
    description = db.Column(db.String)
    trips = db.relationship('Trip', back_populates = 'location', cascade = 'all, delete-orphan')
    users = association_proxy('trips', 'user')

    def __repr__(self):
        return f'<Location {self.id}: {self.name}>'
    
class Trip(db.Model, SerializerMixin):
    __tablename__ = 'trips'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
    date = db.Column(db.Date)
    packing_list = db.Column(db.String)
    user = db.relationship('User', back_populates = 'trips')
    location = db.relationship('Location', back_populates = 'trips')

    def __repr__(self):
        return f'<Trip {self.id}: Location {self.location_id}>'