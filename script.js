//Creating arrays

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);

//Output: (3) ['My first blog post', 'My second blog post', 'My third blog post']
//0: "My first blog post"
//1: "My second blog post"
//2: "My third blog post"

//Accessing items - access via index

console.log(blogPosts[0]); //Output: "My first blog post"
console.log(blogPosts[1]); //Output: "My second blog post"
console.log(blogPosts[2]); //Output: "My third blog post"

//Adding items

blogPosts[3] = "My fourth blog post";

console.log(blogPosts);

//Output: (3) ['My first blog post', 'My second blog post', 'My third blog post']
//0: My first blog post
//1: My second blog post
//2: My third blog post
//3: My fourth blog post

console.log(blogPosts[3]); //Output: "My fourth blog post"

//Adding items alternative

blogPosts.push("My fifth blog post");

console.log(blogPosts);
console.log(blogPosts[4]); //Output: "My fifth blog post"

//Arrays

const faveFood = ["pasta", "pizza", "pancakes"];
console.log(faveFood);

const faveColour = ["pink", "purple", "blue"];
console.log(faveColour);

const faveNumbers = ["7", "13", "30"];
console.log(faveNumbers);
