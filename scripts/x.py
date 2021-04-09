import yaml
import csv
with open('mem.yml', 'r') as f:
    doc = yaml.load(f)

# print(doc)
row_list=[]
for i in doc:
    row_list.append([i['name'],i['email'],i['linkedin'],i['image'],i['github'],i['facebook'],i['passoutYr'],i['position']])
with open('s8.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(row_list)