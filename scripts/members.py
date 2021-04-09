import csv
import json
import hashlib

# s5 done

from difflib import SequenceMatcher

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

class members:
    def __init__(self, name=None, position="Executive Member", passoutYr=None,image=None,roll=None, email=None, linkedin=None, github=None, facebook=None, instagram=None, phone=None, sigs=[]):
        self.name = None if name == None else name.title()
        self.roll = roll
        self.email = email
        self.phone = phone
        self.linkedin = linkedin
        self.github = github
        self.facebook = facebook
        self.image= image
        self.instagram = instagram
        self.sigs = sigs
        self.position = position
        if(roll):
            self.passoutYr = 2000+int(roll[0:2])+4
        else:
            self.passoutYr= int(passoutYr)
        if(roll):
            self.alumni = True if 2000+int(self.roll[0:2])+4 <= 2020 else False
        else:
            self.alumni = True if int(passoutYr)<=2020 else False

    def json(self):
        return {
            'name': self.name,
            'position': self.position,
            'sigs': self.sigs,
            'roll': self.roll,
            'social': {
                'email': self.email,
                'github': self.github,
                'facebook': self.facebook,
                'instagram': self.instagram,
                'linkedin': self.linkedin,
                'phone': self.phone,
            },
            'passoutYr': self.passoutYr,
            'alumni': self.alumni,
            'image': self.image
        }


with open('members.json') as data_file:
    old_data = json.load(data_file)


def find(objl, condition, variable):
    for i in range(len(objl)):
        if(objl[i][condition] == variable.title()):
            print("Found",variable.title())
            return i
    print("New entry", variable.title())
    return None

def merge(o1,o2):
    def todoornot(b,a,value):
        return a if b==value else b
    o3=o1.copy()
    o3['roll']= todoornot(o2['roll'],o1['roll'],None)
    if(o2['sigs']!=o3['sigs']):
        o3['sigs']+=o2['sigs']
    
    if(o1['position']=="Executive Member"):
        o3['position']=o2['position']
    elif(o1['position']==o2['position']):
        o3['position']=o1['position']
    elif(o2['position']=="Executive Member" and o1['position']!="Executive Member"):
        o3['position']=o1['position']
    elif(int(input("Is '{}' above '{}'?".format(o2['position'],o1['position'])))==1):
        o3['position']=o2['position']
    # o3['position']= todoornot(o2['position'].title(),o1['position'],"Executive Member")
    o3['passoutYr']= todoornot(o2['passoutYr'],o1['passoutYr'],None)
    o3['alumni']= todoornot(o2['alumni'],o1['alumni'],None)
    o3['social']={
        'email': todoornot(o2['social']['email'],o1['social']['email'],None),
        'github': todoornot(o2['social']['github'],o1['social']['github'],None),
        'facebook': todoornot(o2['social']['facebook'],o1['social']['facebook'],None),
        'instagram': todoornot(o2['social']['instagram'],o1['social']['instagram'],None),
        'linkedin': todoornot(o2['social']['linkedin'],o1['social']['linkedin'],None),
        'phone': todoornot(o2['social']['phone'],o1['social']['phone'],None)
    }
    # print(o2.keys())
    for i in o2.keys():
        if(i not in o3.keys()):
            print("Indice {} missing. Now added w value {}".format(i,o2[i]))
            o3[i]=o2[i]
    return o3
    

# with open('s10.csv', mode='r') as csv_file:
#     csv_reader = csv.DictReader(csv_file)
#     line_count = 0
#     for row in csv_reader:
#         if line_count == 0:
#             line_count += 1

#         index = find(old_data, 'name', row['name'])
#         # print(row)
#         jsonobject = members(name=row['name'],phone=row['phone'],roll=row['roll'],sigs=[row['sig']]).json()
#         if(index == None):
#             old_data.append(jsonobject)
#         else:
#             old_data[index] = merge(old_data[index],jsonobject)
#         line_count += 1


# with open('members.json', 'w') as outfile:
#     json.dump(old_data, outfile, indent=4, sort_keys=True)

# results = [ item['roll'] for item in old_data ]
# print(results)
x=0
# for i in range(len(results)):
#     # print("Comparing for {}".format(results[i]))
#     for j in range(len(results)):
#         if(i!=j):
#             smx=similar(results[i],results[j])
#             if(smx>=0.9):
#                 x+=1
#                 print("Similar {}: {} \t {}".format(round(smx,2),results[i],results[j]))
# print("{} Suspects {} Members".format(x,len(results)))

for i in range(len(old_data)):
    if(len(old_data[i]['roll'])==7):
        old_data[i]['roll']=old_data[i]['roll'][0:2]+"1"+old_data[i]['roll'][2:]
    if(old_data[i]['position']!="Executive Member"):
        if(len(old_data[i]['position'].split("("))==1 and old_data[i]['passoutYr']<=2020):
            yx=input("Enter year when {} was {}: ".format(old_data[i]['name'],old_data[i]['position']))
            if(yx!=''):
                old_data[i]['position']+=" ("+yx+")"
            else:
                print("Skipped")

with open('members.json', 'w') as outfile:
    json.dump(old_data, outfile, indent=4, sort_keys=True)

