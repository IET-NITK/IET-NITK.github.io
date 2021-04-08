import csv


class members:
    def __init__(self, name=None, roll=None, email=None, linkedin=None, github=None, facebook=None, instagram=None, phone=None, sigs=None):
        self.name = None if name == None else name.title()
        self.roll = roll
        self.email = email
        self.linkedin = linkedin
        self.github = github
        self.facebook = facebook
        self.instagram = instagram
        self.sigs = sigs
        self.passoutYr = 2000+int(roll[0:1])
        self.alumni = True if 2000+int(self.roll[0:2]) <= 2020 else False

    def __str__(self):
        # print(self)
        return "{},{},{},{},{},{},{},{},{}".format(self.name, self.roll, self.sigs, self.email, self.linkedin, self.github, self.facebook, self.instagram, self.passoutYr, self.alumni)

    def get(self):
        return [self.name, self.roll, self.sigs, self.email, self.linkedin, self.github, self.facebook, self.instagram, self.passoutYr, self.alumni]


data = []
with open('s1.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        data.append(members(name=row['name'],
                            phone=row['number'], roll=row['roll']))
        line_count += 1

with open('members.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["name", "roll", "sigs", "email", "linkedin",
                     "github", "facebook", "instagram", "passoutYr", "alumni"])
    for i in data:
        writer.writerow(i.get())
        # y=i.copy()
