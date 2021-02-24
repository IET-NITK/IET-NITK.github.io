# Contribution Guide
## Auxillary Data Maintenance

All data which is not articles (ie not blogs, event reports or project reports) is saved in YAML files under `content/yml/`. The file names should be self explanatory:
- `authors.yml`: Club Members
- `projects.yml`: Projects Information
- `recrfaq.yml`: Recruitment FAQs
- `sig.yml`: SIG Information
- `smp.yml`: SMP Details

The template to update and add should be exactly like what's done before. Some of these fields end up *making* pages, ie. Member Name, Project Name, SIG Name. These fields are mandatory, else the website build would fail.