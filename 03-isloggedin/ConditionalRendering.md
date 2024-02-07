### Practice Problem: User Authentication UI Component

#### Objective:

Create a React component named `AuthControl` that displays a login button if the user is not logged in and a logout button if the user is logged in. The component should use local storage to persist the user's logged-in state so that the state is maintained even if the page is refreshed.

#### Requirements:

1.  **Initial State Determination**:

    - On component mount, check local storage for an item named `isLoggedIn`. Use this to set the initial logged-in state of the user.
    - If `isLoggedIn` is not found in local storage, assume the user is not logged in.

2.  **Login/Logout Functionality**:

    - Implement a function to handle login. This function should:
      - Set the user's logged-in state to true.
      - Save this state to local storage.
    - Implement a function to handle logout. This function should:
      - Set the user's logged-in state to false.
      - Update local storage accordingly.

3.  **UI Elements**:

    - Display a "Login" button if the user is not logged in. Clicking this button should log the user in.
    - Display a "Logout" button if the user is logged in. Clicking this button should log the user out.
    - Optionally, display a welcome message when the user is logged in.

4.  **Persistence Across Sessions**:

    - Ensure that the login state persists across browser sessions using local storage. This means if the user is logged in and closes the browser, upon returning, they should still be logged in.

#### Implementation Guide:

1.  **Setup Your React Environment**:

    - If you haven't already, create a new React app using Create React App or your preferred setup.

2.  **Creating the `AuthControl` Component**:

    - In your project, create a new file named `AuthControl.js`.
    - Start by importing necessary hooks from React (`useState`, `useEffect`).
