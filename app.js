const app = document.getElementById("app");

function navigate(page) {
  if (page === "home") {
    app.innerHTML = `
      <section style="max-width:900px;margin:60px auto;text-align:center;">
        <h2 style="font-size:48px;margin-bottom:16px;">DSA Midterm Prep</h2>
        <p style="font-size:20px;color:#666;">Site is working now.</p>
      </section>
    `;
  }

  if (page === "study") {
    app.innerHTML = `
      <section style="max-width:900px;margin:60px auto;">
        <h2>Study</h2>
        <p>Study section is working.</p>
      </section>
    `;
  }

  if (page === "exam") {
    app.innerHTML = `
      <section style="max-width:900px;margin:60px auto;">
        <h2>Exam</h2>
        <p>Exam section is working.</p>
      </section>
    `;
  }
}

window.navigate = navigate;
navigate("home");
