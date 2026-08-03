# 🛡️ WAF-Shield & Cluster Stress Testing Suite

<p align="center">
  <img src="https://pipeline-stress-tester.onrender.com/og-image.jpg" alt="XIO Stress Tester Performance Dashboard Banner" width="100%" style="border-radius: 12px; max-width: 800px;" />
</p>

---

## 🌟 Special Thanks

We would like to express our gratitude and appreciation to the following state-of-the-art AI systems and developer tools for their exceptional guidance, synthesis, and support throughout the engineering of this application:

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

The application will bind to `http://localhost:3000` automatically. Open the UI, configure your attack intensity, and launch your WAF probe benchmarks!

---

## ☁️ Running on Google Cloud Console

You can run and deploy this high-performance stress testing engine directly using the **Google Cloud Console** via **Cloud Shell**, **Cloud Run**, or **Compute Engine (VM)**.

### Option A: Running in Google Cloud Shell (Quick & Easy)
Cloud Shell provides a free, pre-configured VM with all tools installed.
1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Click the **Activate Cloud Shell** button (top-right terminal icon 🐚).
3. Run the following commands to clone and start the tester:
   ```bash
   # Clone the repository
   git clone https://github.com/Quincunx33/Pipeline-Stress-Tester.git
   cd Pipeline-Stress-Tester

   # Install dependencies (using npm or bun)
   npm install

   # Build the bundle and start the server
   npm run build
   npm run start
   ```
4. Click the **Web Preview** button in the Cloud Shell toolbar (top right of the terminal window) and select **Preview on port 3000** to open the interactive UI!

---

### Option B: Deploying to Google Cloud Run (Recommended for Scalability)
Cloud Run is a fully managed serverless platform that automatically scales containerized applications.
1. Make sure you are logged in to your GCP project in Cloud Shell:
   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```
2. Enable the required Google APIs:
   ```bash
   gcloud services enable run.googleapis.com artifactregistry.googleapis.com
   ```
3. Deploy directly from the source code:
   ```bash
   gcloud run deploy pipeline-stress-tester \
     --source . \
     --port 3000 \
     --allow-unauthenticated \
     --region us-central1
   ```
4. Once completed, Google Cloud Run will provide a **Service URL** (e.g., `https://pipeline-stress-tester-xxx.run.app`). Open that URL in your browser to start stress testing!

---

### Option C: Running on a Compute Engine VM Instance
If you want a dedicated machine with maximum outbound bandwidth and network throughput:
1. Create a modern Debian-based VM instance with network access:
   ```bash
   gcloud compute instances create stress-tester-vm \
     --image-family=debian-11 \
     --image-project=debian-cloud \
     --machine-type=e2-medium \
     --tags=http-server,stress-tester-port \
     --metadata=startup-script="curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs git && npm install -g pm2"
   ```
2. Create a firewall rule to allow traffic on port 3000 (if you want to access the UI from your local computer's browser):
   ```bash
   gcloud compute firewall-rules create allow-stress-tester \
     --allow=tcp:3000 \
     --target-tags=stress-tester-port
   ```
3. SSH into your newly created VM:
   ```bash
   gcloud compute ssh stress-tester-vm
   ```
4. Inside the VM, clone and run with PM2 (daemon process manager):
   ```bash
   git clone https://github.com/Quincunx33/Pipeline-Stress-Tester.git
   cd Pipeline-Stress-Tester
   npm install
   npm run build
   pm2 start dist/server.cjs --name stress-tester
   ```
5. Open your browser and go to `http://<YOUR_VM_EXTERNAL_IP>:3000`.

---

*Developed with ❤️ to protect and fortify web infrastructures globally.*
