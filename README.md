# Firebase-API

# Screenshots
<img src = "http://ui2n.com/git-screenshots/fire1.png" width="200" height="auto">
<img src = "http://ui2n.com/git-screenshots/fire2.png" width="200" height="auto">
<img src = "http://ui2n.com/git-screenshots/fire3.png" width="200" height="auto">
<img src = "http://ui2n.com/git-screenshots/fire4.png" width="200" height="auto">


# Setting up the sample
<ul>
  <li>Create a Firebase Project using the Firebase Console.</li>
  <li>Clone or download this repo.</li>
  <li>You must have the Firebase CLI installed. If you don't have it install it with <b>npm install -g firebase-tools</b> and then   configure it with <b>firebase login</b>.</li>
  <li>Configure the CLI locally by using firebase use --add and select your project in the list.</li>
  <li>Install dependencies locally by running: cd functions; npm install;</li>
</ul>

# Deploy and test
This sample comes with a web-based UI for testing the function. To test locally do:
<ul>
  <li>Start serving your project locally using <b>firebase serve --only hosting,functions</b></li>
  <li>Open the app in a browser at <b>https://localhost:5000</b>.</li>
  <li>Sign in to the web app in the browser using Google Sign-In</li>
  <li>Create messages and explore them using the List and Detail sections.</li>
  <li>Sign out. You should no longer be able to access the API.</li>
</ul>


