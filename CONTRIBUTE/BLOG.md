# Contribution Guide
## Blog Writers

All blog content is located in `content/blog/`.

### Add a Blog Article

- Make a folder in `content/blog/`. Note that the name of the folder will correspond to the route your blog would eventually take, i.e.:
  A blog under folder name **hello-world** would be accessible at `\blog\hello-world`.
- Add an `index.md` file under this folder. This is the markdown file where your blog would be.
- Always start your markdown file with the following parameters:
  ```markdown
  ---
  title: Blog Title Here
  authors: ['Rajamani']
  image: image.jpg
  publishDate: "YYYY-MM-DD"
  ---

  Blog Excerpt: The first paragraph of your blog is what will be displayed as a preview in the Blogs page.

  Continue your story from the next paragraph.
  ```

  Please note that the `image.jpg` should be an image in the same folder as `index.md`. This will be the thumbnail image for the blog article.

- All images your blog would need must also be in the same folder as `index.md`. 


