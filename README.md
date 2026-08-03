# 🛡️ WAF-Shield & Cluster Stress Testing Suite

> ### **"With great power comes great responsibility"**
> *This suite is designed solely for authorized network analysis, latency benchmarking, and firewall/WAF resilience audits. Always ensure explicit permission before initiating probes.*

---

## 🌟 Special Thanks to our AI Cohorts
This application was engineered with state-of-the-art developer guidance and synthesis from:
*   **Gemini** (Google DeepMind)
*   **DeepSeek**
*   **ChatGPT** (OpenAI)
*   **Claude** (Anthropic)
*   **Grok** (xAI)
*   **Kimi** (Moonshot)
*   **Manus**
*   **GitHub Copilot**
*   **Codeium**
*   **Tabnine**
*   **StarCoder**
*   **CodeLlama**

---

## ⚡ Key Highlights & Core Capabilities

This advanced benchmarking utility marries real-time cluster-based stress-testing with highly configurable security injection techniques. Test how your web application, content delivery network (CDN), Web Application Firewall (WAF), or Cloudflare integration performs under extreme stress and malicious load.

```
┌────────────────────────────────────────────────────────┐
│                  STRESS BENCHMARK ENGINE               │
│                                                        │
│  [HTTP/1.1] ───► ┌─────────────────────────┐ ───► WAF   │
│  [HTTP/2]   ───► │   PAYLOAD INJECTOR      │ ───► BLOCKED │
│  [HTTP/3]   ───► └─────────────────────────┘ ───► ALLOWED │
└────────────────────────────────────────────────────────┘
```

### 🎯 1. Security Test Modes
*   **Normal Load Test**: Standard pure-traffic load testing to measure baseline performance, concurrency capabilities, and hardware thresholds.
*   **Payload Injection (Body & Headers)**: Encapsulates classic attack vector payloads inside request headers and payload bodies to test real-time deep packet inspection on firewalls.
*   **Search Parameter Injection (Query Strings)**: Appends complex, multi-layered evasion attack vectors directly to HTTP query strings (`?q=pattern`).

### 💉 2. Built-in Security Vulnerability Probes
*   **SQL Injection (SQLi)**: Tautology bypass, union enumeration, database extraction patterns.
*   **Cross-Site Scripting (XSS)**: Active `<script>` injections, remote script event triggers, attribute-level bypasses.
*   **OS Command Injection**: Pipeline commands (`cat /etc/passwd`), shell chain evaluation ping-probes.
*   **Path & Directory Traversal**: Local file access parameters (`../../etc/passwd%00`).
*   **Header Flooding**: Oversized header block generations to test buffer boundaries.
*   **Slow Connections (Slowloris)**: Connection starvation, chunked keep-alive hold patterns.
*   **Regular Expression DoS (ReDoS)**: Evaluation patterns causing exponential backtracking logic.
*   **Template Injection (SSTI)**: Expression evaluations (`${7*7}`).
*   **Hash Collision**: JSON prototype pollution parameters and payload pollution.

---

## 📊 Telemetry & Live Interactive Analytics

### **Dashboard View**
*   **Real-time SSE Streams**: Visual charts showing Request Success Rate, CPU, and Latency profiles.
*   **Protocol Mix System Tracker**: Parallel benchmark distribution over HTTP/1.1, HTTP/2, and HTTP/3.
*   **WAF Defense Efficiency Indicator**: Shows precisely what percentage of attack vectors were caught, blocked, or dropped by your firewall vs. what made it through.

### **Exportable Reports**
*   Comprehensive testing summary.
*   CSV/JSON payload breakdown logs.
*   WAF blocked counts sorted by attack vector.

---

## 🛠️ Quick Start

### Prerequisites
Make sure you have Node.js and a package manager installed.

```bash
# Install dependencies
npm install

# Start the cluster stress engine
npm run dev
```

The application will bind to `http://localhost:3000` automatically. Open the UI, accept the disclaimer modal, configure your attack intensity, and launch your WAF probe benchmarks!

---

*Developed with ❤️ to protect and fortify web infrastructures globally.*
