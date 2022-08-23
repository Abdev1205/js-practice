// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the
// one used in Twitter?

let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

const myActualTweet = myTweets.slice(0,280);
const deletedTweet = myTweets.slice(280)
console.log(`Your Actual tweet are :-`);
console.log(myActualTweet);
console.log(`Length of Actual Tweet is ${myActualTweet.length} `)
console.log();
console.log(`Your deleted tweet are :-`);
console.log(deletedTweet);
console.log(`Length of Actual Tweet is ${deletedTweet.length} `)
