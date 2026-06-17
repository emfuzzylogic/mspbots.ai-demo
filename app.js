(function () {
  "use strict";

  const prototypeUrl = "https://mspbots-demo-emilyfan.lovable.app/";
  const mapCopy = {
    happy: "Portal intake -> AI clarification -> structured draft -> Sarah approves -> PSA-ready ticket.",
    email: "Email intake -> AI parses intent -> draft tagged [AI Enriched - Missing Fields] -> automated follow-up collects missing context -> Sarah reviews.",
    missing: "Missing variables trigger a maximum 3-turn clarification loop. If the user drops out, the draft is tagged [Enrichment Incomplete] and routed to Sarah.",
    duplicate: "Duplicate scan checks office, floor, asset, issue class, and active PSA tickets before allowing a new work order.",
    unclear: "Low confidence or out-of-domain input routes to General Triage with a visible AI warning tag instead of confident categorization.",
    emergency: "High-criticality strings bypass clarification, set Priority: Critical / Emergency, and alert Sarah for immediate human review."
  };
  const roleCopy = {
    owner: ["Recover support capacity without adding headcount.", "Position AI intake as margin protection, SLA risk reduction, and higher platform automation yield."],
    manager: ["Turn messy intake into a predictable dispatch queue.", "Show fewer reassignment loops, higher metadata completeness, and lower queue backlog."],
    dispatcher: ["Review and approve, do not chase context.", "Sarah gets proposed category, priority, asset, impact, duplicate flags, and an explainability log."],
    technician: ["Start diagnostics with the right facts already attached.", "Dave receives asset, scope, error string, reboot status, and affected app context before touching the ticket."]
  };

  document.addEventListener("contextmenu", function (event) {
    if (event.target.closest(".protected, .revenue-matrix")) {
      event.preventDefault();
    }
  });

  document.getElementById("accessForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("reviewerName").value.trim();
    const email = document.getElementById("reviewerEmail").value.trim();
    if (!name || !email) return;
    sessionStorage.setItem("mspbotsReviewer", JSON.stringify({ name, email, grantedAt: new Date().toISOString() }));
    document.getElementById("contentHub").classList.remove("locked");
    document.getElementById("contentHub").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".accordion-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      const panel = button.nextElementSibling;
      const isOpen = panel.classList.contains("open");
      document.querySelectorAll(".accordion-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".accordion-panel").forEach((p) => p.classList.remove("open"));
      if (!isOpen) {
        button.classList.add("active");
        panel.classList.add("open");
      }
    });
  });

  document.querySelectorAll(".map-node").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll(".map-node").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      document.getElementById("mapDetail").textContent = mapCopy[button.dataset.path];
    });
  });

  document.querySelectorAll("[data-tabs='metricsTabs'] .tab-buttons button").forEach(function (button) {
    button.addEventListener("click", function () {
      const root = button.closest("[data-tabs]");
      root.querySelectorAll(".tab-buttons button").forEach((b) => b.classList.remove("active"));
      root.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      root.querySelector("[data-panel='" + button.dataset.tab + "']").classList.add("active");
    });
  });

  document.querySelectorAll(".role-buttons button").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll(".role-buttons button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      const copy = roleCopy[button.dataset.role];
      document.getElementById("roleMessage").innerHTML = "<h3>" + copy[0] + "</h3><p>" + copy[1] + "</p>";
    });
  });

  document.querySelectorAll("a[href='" + prototypeUrl + "']").forEach(function (link) {
    link.addEventListener("click", function () {
      sessionStorage.setItem("mspbotsPrototypeLaunched", new Date().toISOString());
    });
  });
})();
