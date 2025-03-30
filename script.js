document.addEventListener("DOMContentLoaded", function () {
    // Select the specific element after which you want to insert the text
    const targetElement = document.querySelector("h1"); // Change this to your desired element

    if (targetElement) {
        // Create a new paragraph element
        const p = document.createElement("p");
        p.textContent = "Hello, World!";
        
        // Insert the new paragraph right after the target element
        targetElement.insertAdjacentElement("afterend", p);
    }
});
