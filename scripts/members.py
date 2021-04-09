import csv
import json
import hashlib

# s1 done


class members:
    def __init__(self, name=None, position="Executive Member", roll=None, email=None, linkedin=None, github=None, facebook=None, instagram=None, phone=None, sigs=[]):
        self.name = None if name == None else name.title()
        self.roll = roll
        self.email = email
        self.phone = phone
        self.linkedin = linkedin
        self.github = github
        self.facebook = facebook
        self.instagram = instagram
        self.sigs = sigs
        self.position = position
        self.passoutYr = 2000+int(roll[0:1])
        self.alumni = True if 2000+int(self.roll[0:2]) <= 2020 else False

    def json(self):
        return {
            'name': self.name,
            'position': self.position,
            'sigs': self.sigs,
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
        }


with open('members.json') as data_file:
    old_data = json.load(data_file)


def find(objl, condition, variable):
    for i in range(len(objl)):
        if(objl[i][condition] == variable.title()):
            print("Found",variable)
            return i
    print("New entry", variable)
    return None


with open('s1.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1

        index = find(old_data, 'name', row['name'])
        jsonobject = members(name=row['name'],phone=row['number'], roll=row['roll']).json()
        if(index == None):
            old_data.append(jsonobject)
        else:
            old_data[index] = {**jsonobject, **old_data[index]}
        line_count += 1


with open('members.json', 'w') as outfile:
    json.dump(old_data, outfile, indent=4, sort_keys=True)
