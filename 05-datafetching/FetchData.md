### React Interview Challenge: User Post Viewer

#### Objective:

Create a simple React application that fetches and displays a list of users and their posts from the JSON Placeholder API. The application should have two main components: a user list and a post viewer.

#### Requirements:

1.  **Setup:**

    - Use functional components and hooks.

2.  **Fetching Data:**

    - Utilize the `fetch` API or any HTTP client like Axios to asynchronously fetch data from the JSON Placeholder API.
    - Relevant endpoints:
      - Users: `https://jsonplaceholder.typicode.com/users`
      - Posts: `https://jsonplaceholder.typicode.com/posts?userId={userId}`

3.  **User List:**

    - Display a list of users fetched from the API.
    - Each user item should display at least the user's name.
    - When a user is clicked, fetch and display the user's posts in the Post Viewer component.

4.  **Post Viewer:**

    - This component should display the posts of the selected user.
    - Each post should at least display the title and body.
