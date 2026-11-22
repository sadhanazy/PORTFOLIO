
const projectData = {
  wazuh: {
    number: "CASE FILE / 001",
    category: "SIEM / DETECTION ENGINEERING",
    title: "SSH Brute-Force Detection & SIEM Lab",
    summary:
      "A practical Wazuh detection lab designed to understand how repeated SSH authentication failures can be identified, investigated and tuned to reduce false-positive noise.",
    tags: [
      "Wazuh SIEM",
      "Linux endpoints (5 hosts)",
      "Custom detection rules",
      "MITRE ATT&CK"
    ],
    blocks: [
      [
        "WHY I BUILT IT",
        "I wanted to understand how a SOC analyst detects automated brute-force attacks and reduces false-positive alerts in a SIEM."
      ],
      [
        "OBJECTIVE",
        "Simulate SSH brute-force activity across Linux endpoints, write custom detection rules and map adversary behaviour."
      ],
      [
        "WHAT I DID",
        [
          "Set up Wazuh SIEM for log ingestion.",
          "Connected five Linux endpoints for monitoring.",
          "Simulated automated SSH brute-force attacks.",
          "Analysed authentication logs and failure patterns.",
          "Authored three custom SIEM detection rules.",
          "Tuned thresholds to flag five failed logins in 30 seconds.",
          "Mapped adversary behaviour to MITRE ATT&CK."
        ]
      ],
      [
        "SKILLS DEVELOPED",
        [
          "Linux log ingestion and monitoring.",
          "Custom SIEM rule creation.",
          "Alert threshold tuning.",
          "False-positive reduction.",
          "Detection logic and ATT&CK mapping."
        ]
      ],
      [
        "OUTCOME",
        "Built a working Wazuh detection lab with three custom rules that flagged SSH brute-force activity while reducing false-positive noise."
      ],
      [
        "REAL-WORLD RELEVANCE",
        "Repeated authentication failures can be an early sign of credential-guessing activity. Threshold-based detection and careful tuning help SOC teams identify suspicious patterns without overwhelming analysts."
      ]
    ],
    evidence: [
      "Custom Wazuh XML detection rules",
      "Wazuh alert dashboard screenshots",
      "Simulated SSH attack logs",
      "MITRE ATT&CK technique mapping"
    ]
  },

  splunk: {
    number: "CASE FILE / 002",
    category: "THREAT HUNTING / SIEM",
    title: "Splunk Enterprise Threat Hunting & Detection Lab",
    summary:
      "A multi-operating-system log analysis lab using Splunk Enterprise, SPL searches and dashboards to investigate suspicious authentication and web activity.",
    tags: [
      "Splunk Enterprise",
      "SPL",
      "Linux & Windows logs",
      "Splunk Dashboards"
    ],
    blocks: [
      [
        "WHY I BUILT IT",
        "I wanted to understand how analysts centralise multi-OS logs, hunt for web and login attacks, and build real-time alert dashboards."
      ],
      [
        "OBJECTIVE",
        "Deploy Splunk Enterprise to collect Linux and Windows logs, write SPL queries and detect suspicious activity."
      ],
      [
        "WHAT I DID",
        [
          "Deployed Splunk Enterprise for centralised log collection.",
          "Ingested and parsed Linux auth.log/access.log and Windows Event Logs.",
          "Simulated web attacks and SSH brute-force activity.",
          "Wrote threshold-based SPL queries to isolate SSH brute-force attempts.",
          "Built real-time dashboards to flag directory enumeration and web scraping.",
          "Detected active XSS injection payloads in web access logs.",
          "Documented threat-hunting queries and findings."
        ]
      ],
      [
        "SKILLS DEVELOPED",
        [
          "Multi-OS log ingestion and parsing.",
          "SPL query writing and threshold tuning.",
          "Real-time SIEM dashboard design.",
          "Web and authentication threat hunting."
        ]
      ],
      [
        "OUTCOME",
        "Built a working Splunk Enterprise lab with real-time dashboards and SPL queries to detect web and SSH brute-force activity."
      ],
      [
        "REAL-WORLD RELEVANCE",
        "Centralised telemetry and repeatable searches help analysts investigate activity across systems, identify suspicious patterns and communicate findings through dashboards."
      ]
    ],
    evidence: [
      "Lab architecture diagram",
      "Splunk dashboard screenshots",
      "Custom SPL detection queries",
      "Sample Linux and Windows logs",
      "Investigation notes",
      "GitHub repository — URL to be added"
    ]
  },

  threatintel: {
    number: "TOOL / 003",
    category: "SECURITY AUTOMATION / THREAT INTELLIGENCE",
    title: "ThreatIntel-SOAR-Automation",
    summary:
      "A Python IOC enrichment tool that accepts suspicious IPv4 addresses, queries AbuseIPDB and produces a structured CSV risk report to support faster triage.",
    tags: [
      "Python 3",
      "AbuseIPDB V2 API",
      "REST APIs",
      "JSON / CSV"
    ],
    blocks: [
      [
        "WHY I BUILT IT",
        "Manual triage of Indicators of Compromise can slow down SOC investigations. I wanted to automate IP reputation lookups and risk reporting."
      ],
      [
        "OBJECTIVE",
        "Create a Python tool that ingests suspicious IPv4 addresses, queries threat-intelligence APIs and generates a structured CSV risk report."
      ],
      [
        "WHAT I DID",
        [
          "Built a Python script to ingest IPv4 targets from text files and arrays.",
          "Connected to the AbuseIPDB V2 API using authenticated requests.",
          "Parsed JSON responses to extract Abuse Confidence Scores and country codes.",
          "Tracked historical security reports registered against each IP.",
          "Exported enriched threat data into a structured CSV report."
        ]
      ],
      [
        "SKILLS DEVELOPED",
        [
          "Automating SOC triage tasks with Python.",
          "Integrating and querying threat-intelligence REST APIs.",
          "Parsing JSON payloads.",
          "Structuring automated reports and CSV output."
        ]
      ],
      [
        "OUTCOME",
        "Built a working SOAR automation script that enriches suspicious IPs and outputs actionable CSV threat reports in seconds."
      ],
      [
        "REAL-WORLD RELEVANCE",
        "IP reputation enrichment can add context to indicators during alert triage. Automating repetitive lookups helps analysts spend more time validating and investigating relevant activity."
      ]
    ],
    evidence: [
      "Python automation script",
      "Sample input IP feeds and output CSV reports",
      "API response screenshots",
      "GitHub repository — ThreatIntel-SOAR-Automation (URL to be added)"
    ]
  },

  forensics: {
    number: "INVESTIGATION / 004",
    category: "NETWORK FORENSICS / WEB RECONNAISSANCE",
    title: "Web-Attack-Network-Forensics",
    summary:
      "A packet-analysis investigation of automated web directory enumeration, using Wireshark to identify request patterns, response anomalies and network IoCs.",
    tags: [
      "Wireshark",
      "Kali Linux",
      "DIRB v2.22",
      "Metasploitable 2",
      "HTTP"
    ],
    blocks: [
      [
        "WHY I BUILT IT",
        "I wanted to understand how attackers scan web servers during reconnaissance and how a SOC analyst can spot those patterns in raw network traffic."
      ],
      [
        "OBJECTIVE",
        "Capture and analyse an automated directory brute-force attack using Wireshark and extract indicators of compromise from HTTP traffic."
      ],
      [
        "WHAT I DID",
        [
          "Set up Kali Linux as the attacker and Metasploitable 2 as the target server.",
          "Simulated automated web directory brute-force activity using DIRB.",
          "Captured live network traffic and filtered HTTP GET requests in Wireshark.",
          "Identified traffic spikes of over 1,000 requests in 30 seconds from a single IP.",
          "Analysed HTTP 404 versus 200 response patterns to confirm exposed directories, including /phpMyAdmin/ and /cgi-bin/.",
          "Archived the filtered packet capture and documented the IoCs."
        ]
      ],
      [
        "SKILLS DEVELOPED",
        [
          "Capturing and filtering HTTP traffic.",
          "Recognising automated web reconnaissance patterns.",
          "Analysing response-code anomalies.",
          "Extracting and documenting network-based IoCs."
        ]
      ],
      [
        "OUTCOME",
        "Completed a network-forensics investigation of a web reconnaissance attack and documented extracted IoCs alongside the packet capture file."
      ],
      [
        "REAL-WORLD RELEVANCE",
        "A high volume of sequential web requests and unusual response patterns can indicate automated directory discovery. Packet-level context helps analysts validate and document suspicious activity."
      ]
    ],
    evidence: [
      "Filtered packet capture — web_scan_forensics.pcap",
      "Wireshark traffic analysis screenshots",
      "List of discovered IoCs",
      "GitHub repository — Web-Attack-Network-Forensics (URL to be added)"
    ]
  }
};


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("is-open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(open)
  );
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});


// PROJECT MODAL ELEMENTS

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

let lastFocusedElement = null;


// CREATE PROJECT DETAIL BLOCKS

function createDetailBlock([heading, content]) {
  const block = document.createElement("section");

  block.className = "detail-block";

  const title = document.createElement("h3");

  title.textContent = heading;

  block.appendChild(title);

  if (Array.isArray(content)) {
    const list = document.createElement("ul");

    content.forEach(item => {
      const li = document.createElement("li");

      li.textContent = item;

      list.appendChild(li);
    });

    block.appendChild(list);

  } else {
    const paragraph = document.createElement("p");

    paragraph.textContent = content;

    block.appendChild(paragraph);
  }

  return block;
}


// OPEN PROJECT DETAILS

function openProject(key) {
  const project = projectData[key];

  if (!project) return;

  lastFocusedElement = document.activeElement;

  document.getElementById("modalCategory").textContent =
    project.category;

  document.getElementById("modalNumber").textContent =
    project.number;

  document.getElementById("modalTitle").textContent =
    project.title;

  document.getElementById("modalSummary").textContent =
    project.summary;


  // PROJECT TECHNOLOGY TAGS

  const tags = document.getElementById("modalTags");

  tags.replaceChildren();

  project.tags.forEach(tag => {
    const span = document.createElement("span");

    span.textContent = tag;

    tags.appendChild(span);
  });


  // PROJECT INFORMATION

  const content = document.getElementById("modalContent");

  content.replaceChildren(
    ...project.blocks.map(createDetailBlock)
  );


  // PROJECT EVIDENCE

  const evidence = document.getElementById("modalEvidence");

  evidence.replaceChildren();

  project.evidence.forEach(item => {
    const div = document.createElement("div");

    div.className = "evidence-item";

    div.textContent = item;

    const note = document.createElement("span");

    note.textContent = "PLACEHOLDER / ADD PUBLIC LINK";

    div.appendChild(note);

    evidence.appendChild(div);
  });


  // SHOW MODAL

  modal.classList.add("is-open");

  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  modalClose.focus();
}


// CLOSE PROJECT DETAILS

function closeProject() {
  modal.classList.remove("is-open");

  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}


// PROJECT CARD CLICK EVENTS

document.querySelectorAll("[data-project]").forEach(card => {
  card.addEventListener("click", () => {
    openProject(card.dataset.project);
  });
});


// CLOSE BUTTON

modalClose.addEventListener("click", closeProject);


// CLOSE WHEN CLICKING OUTSIDE THE MODAL

modal.querySelector("[data-close-modal]").addEventListener(
  "click",
  closeProject
);


// CLOSE MODAL USING ESCAPE KEY

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    modal.classList.contains("is-open")
  ) {
    closeProject();
  }
});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();
