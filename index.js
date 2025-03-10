const currentUser = 'Grace Hopper';

// 1. welcomeMessage should contain "Welcome to Flatbook, " followed by the value stored in currentUser
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// 2. excitedWelcomeMessage should contain the uppercased value of welcomeMessage
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// 3. shortGreeting should contain "Welcome, " followed by the first initial of the value stored in currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
