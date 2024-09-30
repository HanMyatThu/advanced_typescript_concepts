/**
 * Class should have only 1 task or 1 responsible
 * encourages to separate different concerns into different classes
 * easy to maintain, test and debug
 */

/**
 * class without SRP
 */
class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost() {
    //implement logic here
  }

  updatePost() {
    // implement logic here
  }

  deletePost() {
    // implement logic here
  }

  displayBlog() {
    return `<h1>${this.title}</h1><br><p>${this.content}</p>`;
  }
}

/**
 * Applying SRP
 */
class BlogPostSrp {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost() {
    //implement logic here
  }

  updatePost() {
    // implement logic here
  }

  deletePost() {
    // implement logic here
  }
}

class blogPostDisplay {
  constructor(public blogPost: BlogPostSrp) {}

  displayBlog() {
    console.log(
      `<h1>${this.blogPost.title}</h1><br><p>${this.blogPost.content}</p>`
    );
  }
}

class BlogPostJson {
  constructor(public blogPost: BlogPostSrp) {}

  getJson() {
    return {
      title: this.blogPost.title,
      content: this.blogPost.content,
    };
  }
}

(function main() {
  const blogPostSrp = new BlogPostSrp(
    "Learn SRP",
    "This is a real work example"
  );

  const display = new blogPostDisplay(blogPostSrp);

  display.displayBlog();
})();
