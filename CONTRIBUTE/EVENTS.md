# Contribution Guide
## Event Recordkeeping

All events content is located in `content/events/`.

### Add a Blog Article

- Make a folder in `content/events/`. Note that the name of the folder will correspond to the route your blog would eventually take, i.e.:
  A blog under folder name **hello-world** would be accessible at `\events\hello-world`. Please choose your folder name such that it has relevance to the blog and its title.
- Add an `index.md` file under this folder. This is the markdown file where your blog would be.
- 
- Always start your markdown file with the following parameters:
  ```markdown
  ---
    title: Club Debate
    eventDate: "2020-01-22"
  ---

  Blog Excerpt: The first paragraph of your blog is what will be displayed as a preview in the Event's page (as an exerpt).

  Continue your story from the next paragraph.
  ```

- All images your article would need must also be in the same folder as `index.md`. 
- You must write your article in markdown **only**: in case you're unfamiliar, please check out this guide [here](https://guides.github.com/features/mastering-markdown/).
- Markdown in Gatsby also supports HTML tags: so simply copy the HTML embed code if you want to add a YouTube video.

