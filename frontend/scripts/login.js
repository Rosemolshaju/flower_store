document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        body: JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password"),
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const result = await response.json();
    alert(result.msg || "Login failed");
});
