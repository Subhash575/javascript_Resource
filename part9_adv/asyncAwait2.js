//Further learning more about Async and await.

function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetch Post Data");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetch Comment Data");
    }, 3000);
  });
}

//For getting both data we do this:-

async function getBlogData() {
  try {
    //Generally way for fetching multiple promise.

    // console.log("Fetching Blog data:-");
    // const post = await fetchPostData();
    // const comment = await fetchCommentData();
    // console.log(post);
    // console.log(comment);
    // console.log("Fetch compelete");

    //Better Way for fetching the promise is:- we use promise.all() which take the array.
    console.log("Fetching Blog data:-");

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(postData);
    console.log(commentData);
    console.log("Fetch compelete");
  } catch (error) {
    //Always first write the error.
    console.error("Error Fetching Blog Data:" + error);
  }
}

getBlogData();
