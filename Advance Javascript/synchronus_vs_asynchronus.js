// Asynchronous vs. synchronous programming
// Ultimately, the choice comes down to operational dependencies. Do you want the start of an operation to be dependent on the completion of another operation, or do you want it to run independently?

// Asynchronous is a non-blocking architecture, so the execution of one task isn’t dependent on another. Tasks can run simultaneously. Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it. Each task requires an answer before moving on to the next iteration.

// The differences between asynchronous and synchronous include:

// Async is multi-thread, which means operations or programs can run in parallel. Sync is single-thread, so only one operation or program will run at a time.
// Async is non-blocking, which means it will send multiple requests to a server. Sync is blocking — it will only send the server one request at a time and will wait for that request to be answered by the server.
// Async increases throughput because multiple operations can run at the same time. Sync is slower and more methodical.
// Differences aside, asynchronous and synchronous methods both offer advantages, but for different stakeholders: async for users, sync for developers.

// Asynchronous and synchronous methods offer advantages for different stakeholders; async for users, sync for developers.

// Asynchronous programming enhances a user’s experience by decreasing the lag time between when a function is called and when the value of that function is returned. In the real world, this translates to a faster, more seamless flow. For example, users want their apps to run fast, but it takes time to fetch data from an application programming interface (API). In these cases, asynchronous programming helps the app screens load faster, improving the user experience.

// Synchronous programming, on the other hand, is advantageous for developers. Quite simply, synchronous programming is much easier to code. It’s well supported among all programming languages, and as the default programming method, developers don’t have to spend time learning something new that could open the door to bugs.

// Use cases
// Programming makes our digital world run, but without the right pairing of programs and operations, chaos and poor user experiences would ensue. If operations are inappropriately relying on asynchronous programming, our digital world could spin into a mad, hyperactive frenzy. And if operations are inappropriately relying on synchronous programming, our digital world could come to a screeching halt. It’s imperative to understand when to use each type of programming.

// When to use async
// Asynchronous programming should only be used in programming independent tasks, where it plays a critical role. For instance, asynchronous programs are ideal for development projects with a large number of iterations. Because steps don’t have to follow a fixed sequence, asynchronous programming keeps development moving forward.

// Responsive UI is a great use case for asynchronous planning. Take, for example, a shopping app. When a user pulls up their order, the font size should increase. Instead of first waiting to load the history and update the font size, asynchronous programming can make both actions happen simultaneously.

// When to use sync
// Asynchronous programming is relatively complex. It can overcomplicate things and make code difficult to read. Synchronous programming, on the other hand, is fairly straightforward; its code is easier to write and doesn’t require tracking and measuring process flows (as async does). Because tasks are dependent on each other, there’s a need to know if they could run independently without interrupting each other.

// Synchronous programming could be appropriate for a shopping app, for example. When checking out online, a user wants to buy all of their items together, not individually. Instead of completing an order every time the user adds something to their cart, synchronous programming ensures that the payment method and shipping destination for all items are selected at the same time.

// How to choose between asynchronous and synchronous programming
// When deciding which approach to take, it may be helpful to think of asynchronous programming as adaptable, and synchronous programming as strict. Asynchronous programming is the multitasker, moving from one task to the other and alerting the system when each one is complete. Synchronous programming functions as a one-track mind, checking off one task at a time in a rigid sequence.

// Asynchronous programming allows more things to be done at the same time and is typically used to enhance the user experience by providing an effortless, quick-loading flow.

// Synchronous programming is best utilized in reactive systems. While it is simpler for developers to code and is recognized by every programming language, sync is resource-intensive and can slow things down.

// // 6️⃣:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// Asynchronous JavaScript Prog 

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();

