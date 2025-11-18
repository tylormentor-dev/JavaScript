
// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object
// - If userId is negative or zero, reject with an error
// - User data should include: id, name, email, and registrationDate

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "Tylor",
                    email: "Tylor@gmail.com",
                    registrationDate: new Date()
                });
            } else {
                reject(new Error("UserId should be positive"));
            }
        }, 1500);
    });
}
fetchUserData(0)
    .then(user => console.log("User data fetched:", user))
    .catch(err => console.log("Error:", err.message)

);



// TODO: Create a function that uses template literals for HTML generation

function personal(id, name, email, registrationDate) {
    return `
        <div class="person">
            <p>Id: ${id}</p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Registration Date: ${registrationDate}</p>
        </div>
    `;
}
console.log(personal(1, "Tylor", "Tylor@gmail.com", "4 June 2025"));

// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error


function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error("userId must be positive!"));
        return;
      }
      const posts = [
        { id: 1, title: "Visionary", content: "You are what you envision yourself to be.", userId },
        { id: 2, title: "Road to Success", content: "Your success reflects your hard work.", userId },
        { id: 3, title: "Life", content: "When life gives you lemons, teach life who's boss.", userId }
      ];
      resolve(posts);
    }, 1000);
  });
}



// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain


function getUserAndPosts(userId) {
  return fetchUserData(userId)
    .then(user => {
      return fetchUserPosts(user.id).then(posts => {
        return { ...user, posts };
      });
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
}
getUserAndPosts(74)
  .then(data => console.log("Combined data:", data))
  .catch(err => console.log("Caught error:", err.message));

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data


async function getUserAndPostsAsync(userId) {
    try {
        console.log("Fetching user...");
        const user = await fetchUserData(userId);
        console.log("Fetching posts...");
        const posts = await fetchUserPosts(user.id);
        console.log("Combining data...");
        return { ...user, posts };
    } catch (error) {
        console.error("Error in async function:", error.message);
        throw error;
    }
}
getUserAndPostsAsync(74)
    .then(data => console.log("Async combined:", data))
    .catch(err => console.log("Async error:", err.message));


// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users


async function fetchMultipleUsers(userIds) {
    const promises = userIds.map(id =>
        fetchUserData(id).catch(err => null)
    );
    const results = await Promise.all(promises);
    return results.filter(user => user !== null);
}
// TEST
fetchMultipleUsers([1, 2, -3, 4])
    .then(data => console.log("Fetched users:", data));



// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately


async function fetchUsersWithPosts(userIds) {
    const users = await fetchMultipleUsers(userIds);
    const postPromises = users.map(user =>
        fetchUserPosts(user.id)
            .then(posts => ({ ...user, posts }))
            .catch(() => ({ ...user, posts: [] }))
    );
    return Promise.all(postPromises);
}
// TESTING //
fetchUsersWithPosts([1, 2, 3])
    .then(data => console.log("Users and posts:", data));

// TODO: Test success cases
// single user fetch
fetchUserData(1).then(console.log);
//  multiple user fetch
fetchMultipleUsers([1, 2, 3, -1]).then(console.log);
// error handling
getUserAndPostsAsync(22).then(console.log);
