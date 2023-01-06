const user = { email: "ggg@google.com" };

// What's really nice about Try and Catch is that we can handle errors without stopping the entire script
try {
  // Produce a Reference Error
  // myFunction();

  // // Produce a TypeError
  // null.myFunction()

  //   // Produce a SyntaxError
  // eval('hello world')

  // // produce a URIError
  // decodeURIComponent('%')

  if (!user.name){
      //  Create error
      throw 'User has no name'
      // gives also the line number and the file name
      // throw new SyntaxError('user has no name')
  }
} catch (error) {
  // Return error
  console.log(error);
  // //  Return only error's message
  // console.log(error.message);
  // // return only the type of error
  // console.log(error.name);
  // // For testing what kind of error we have
  // console.log(error instanceof ReferenceError);
  // console.log(error instanceof TypeError);
} finally {
  // This runs, no matter what the result of anything up
  console.log("finally runs without of results... ");
}

// though we have error above, program continues and implement below link
console.log("program continues...");
