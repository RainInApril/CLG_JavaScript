function windowApiDemo() {
    console.log("Message after 2 seconds:");
    setTimeout(() => console.log("Delayed message"), 2000);
    // The () and => together form the concise syntax for arrow functions.

    const intervalID = setInterval(() => console.log("Repeating"), 1000);
    setTimeout(() => clearInterval(intervalID), 5000);

    console.log("Current location:", window.location);
    console.log("Session history:", window.history);

    localStorage.setItem("name", "Quinton");
    localStorage.setItem("age", "4");
    console.log("Cat's info:", localStorage.getItem("name"), localStorage.getItem("age"));
}

windowApiDemo();