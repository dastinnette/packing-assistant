#!/usr/bin/env python3

# Local imports
from app import app
from models import db, User, Location, Trip 
from datetime import date 

with app.app_context():

    print("Deleting data...")
    Location.query.delete()
    Trip.query.delete()

    print("Grabbing User...")
    user1 = User.query.get(12)

    print("Creating Locations...")
    l1 = Location(name="Bangkok", weather="Jan: 80, Feb: 83, Mar: 85, Apr: 87, May: 86, Jun: 85, Jul: 84, Aug: 84, Sep: 83, Oct: 83, Nov: 82, Dec: 80", 
                  vaccinations="Hepatitis A/B, Malaria, Typhoid, Yellow Fever", travel_advisory="Exercise Increased Caution", plug_adapter="Type A/B/C/O", 
                  img="https://wallpapercave.com/wp/wp1916874.jpg",
                  description="The city, capital, and chief port of Thailand. Huge, sprawling, exciting, intoxicating, there is no lack of adjectives to describe Bangkok.")
    l2 = Location(name="Paris", weather="Jan: 40, Feb: 41, Mar: 46, Apr: 51, May: 58, Jun: 64, Jul: 68, Aug: 67, Sep: 61, Oct: 54, Nov: 46, Dec: 41", 
                  vaccinations="Hepatitis A/B", travel_advisory="Exercise Increased Caution", plug_adapter="Type C/E", 
                  img="https://imageio.forbes.com/specials-images/imageserve/6468ea7be5b5bee9d12e9948/eiffel-tour-and-Paris-cityscape/0x0.jpg?format=jpg&height=1835&width=2767",
                  description="One of the world's major centers of finance, diplomacy, commerce, culture, fashion, and gastronomy. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, it became known as the City of Light.")
    l3 = Location(name="Rome", weather="Jan: 45, Feb: 46, Mar: 51, Apr: 56, May: 64, Jun: 71, Jul: 76, Aug: 77, Sep: 70, Oct: 62, Nov: 53, Dec: 46", 
                  vaccinations="Hepatitis A/B", travel_advisory="Exercise Increased Caution", plug_adapter="Type C/F/L", 
                  img="https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp",
                  description="The Eternal City brims with ancient history, from the Colosseum to the port of Ostia Antica to majestic Vatican City and the Sistine Chapel. Because of its history, art, architecture, and beauty (and perhaps its gelato and pasta!) Rome is one of the world's most popular cities.")
    l4 = Location(name="Barcelona", weather="Jan: 47, Feb: 49, Mar: 53, Apr: 56, May: 62, Jun: 70, Jul: 75, Aug: 76, Sep: 71, Oct: 63, Nov: 54, Dec: 48", 
                  vaccinations="Hepatitis A/B", travel_advisory="Exercise Increased Caution", plug_adapter="Type C/F", 
                  img="https://static.independent.co.uk/2023/03/10/14/iStock-1320014700.jpg",
                  description="It is Spain's major Mediterranean port and commercial center and is famed for its individuality, cultural interest, and physical beauty.")
    l5 = Location(name="Tokyo", weather="Jan: 42, Feb: 43, Mar: 49, Apr: 58, May: 66, Jun: 72, Jul: 78, Aug: 81, Sep: 75, Oct: 65, Nov: 55, Dec: 47", 
                  vaccinations="Hepatitis A/B", travel_advisory="Exercise Normal Precaution", plug_adapter="Type A/B", 
                  img="https://media.cntraveler.com/photos/60341fbad7bd3b27823c9db2/4:3/w_4624,h_3468,c_limit/Tokyo-2021-GettyImages-1208124099.jpg",
                  description="A seaport, the capital of Japan, and the world's most populous metropolis.")
    l6 = Location(name="Istanbul", weather="Jan: 43, Feb: 43, Mar: 47, Apr: 54, May: 63, Jun: 72, Jul: 76, Aug: 77, Sep: 70, Oct: 62, Nov: 53, Dec: 47",  
                  vaccinations="Hepatitis A/B, Typhoid", travel_advisory="Exercise Increased Caution", plug_adapter="Type C/F", 
                  img="https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg",
                  description="Istanbul is a major port and the largest city in Turkey. The province and the city are situated on both sides of the Bosphorus, the strait that separates Europe from Asia.")
    l7 = Location(name="Cape Town", weather="Jan: 69, Feb: 69, Mar: 67, Apr: 63, May: 59, Jun: 56, Jul: 55, Aug: 56, Sep: 58, Oct: 61, Nov: 64, Dec: 68", 
                  vaccinations="Hepatitis A/B, Malaria, Yellow Fever", travel_advisory="Exercise Increased Caution", plug_adapter="Type C/M/N", 
                  img="https://traveler.marriott.com/wp-content/uploads/2022/12/aerial-view-cape-town-stadium-cape-town-south-africa-1920x1080-1.jpg",
                  description="Although it is a major political and economic center, its reputation still rests on its beautiful situation between mountain and sea.")
    l8 = Location(name="Marrakesh", weather="Jan: 54, Feb: 57, Mar: 62, Apr: 65, May: 71, Jun: 77, Jul: 84, Aug: 83, Sep: 77, Oct: 71, Nov: 62, Dec: 56",  
                  vaccinations="Hepatitis A/B, Typhoid", travel_advisory="Exercise Increased Caution", plug_adapter="Type C/E", 
                  img="https://lp-cms-production.imgix.net/2022-12/GettyImages-1124472714.jpeg",
                  description="Marrakech is known as the Pearl of the South or the red city and is a city in Morocco at the foot of the Atlas Mountains.")
    l9 = Location(name="Rio de Janeiro", weather="Jan: 81, Feb: 81, Mar: 80, Apr: 78, May: 74, Jun: 72, Jul: 71, Aug: 72, Sep: 72, Oct: 74, Nov: 76, Dec: 79",  
                  vaccinations="Hepatitis A/B, Malaria, Typhoid, Yellow Fever", travel_advisory="Exercise Increased Caution", plug_adapter="Type C/N", 
                  img="https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg",
                  description="Rio de Janeiro is one of the most visited cities in the Southern Hemisphere and is known for its natural settings, carnival, samba, bossa nova, and balneario beaches.")
    l10 = Location(name="Hanoi", weather="Jan: 62, Feb: 65, Mar: 69, Apr: 76, May: 82, Jun: 85, Jul: 85, Aug: 84, Sep: 82, Oct: 78, Nov: 72, Dec: 65", 
                   vaccinations="Hepatitis A/B, Malaria, Typhoid", travel_advisory="Exercise Normal Precaution", plug_adapter="Type A/B/C", 
                   img="https://i.natgeofe.com/n/eec95fc8-b3ae-4a41-9b6b-17c4d7b9300e/hanoigettyimages-641627204hr_16x9.jpg",
                   description="Hanoi offers well-preserved French colonial architecture, religious sites dedicated to Buddhism, Catholicism, Confucianism and Taoism, and several historical landmarks of Vietnamese imperial periods.")
    
    locations = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10]

    print("Creating Trips...")
    t1 = Trip(user=user1, location=l1, date=date(2024, 12, 25), packing_list="pants and shoes")

    trips=[t1]

    db.session.add_all(locations)
    db.session.add_all(trips)
    db.session.commit()

    print("Seeding done!")