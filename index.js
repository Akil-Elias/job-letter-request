document.getElementById("job-letter-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    await fetch("https://script.google.com/macros/s/AKfycby8V4tIW4ttH-h-2g8wXQ5AGd-cB-_E7S6BZNmvUNA7DHoaG8dsF__A0fROOKzUCPp_JQ/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    alert("Job letter request submitted successfully!");
    e.target.reset();
});