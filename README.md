# TQNN Labs Website

Official website and developer portal for the **TQNN Fault-Tolerant Inference Platform**.

The TQNN Labs website serves as the public entry point to the TQNN ecosystem, providing developers, researchers, and organizations with everything needed to understand and integrate confidence-aware, fault-tolerant inference.

---

## Purpose

This repository contains the source code for **https://tqnnlabs.com**.

The website provides:

- Platform overview
- Developer documentation
- Python SDK resources
- Cloud API information
- Benchmark results
- Pricing
- Explorer account registration

---

## What is TQNN?

TQNN is a managed fault-tolerant inference platform designed for real-world data.

Unlike conventional inference systems that assume clean and complete inputs, TQNN evaluates prediction confidence, input integrity, and uncertainty before returning controlled inference decisions.

Applications include:

- Industrial automation
- Fault diagnosis
- Predictive maintenance
- Sensor systems
- Manufacturing
- Scientific computing
- Safety-critical AI

---

## Features

- Modern responsive website
- Developer-first documentation
- Explorer account onboarding
- Cloud API integration
- Benchmark showcase
- Python SDK resources
- Mobile friendly
- Search engine optimized

---

## Repository Structure

```text
/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── benchmarks/
├── docs/
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Related Repositories

| Repository | Description |
|------------|-------------|
| **tqnn** | Official Python SDK |
| **tqnn-benchmarks** | Public benchmarks and example notebooks |
| **tqnnlabs-website** | Official website and developer portal |

---

## Technology

- HTML5
- CSS3
- JavaScript
- Netlify
- Google Cloud Run
- GitHub

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/tqnnlabs/tqnnlabs-website.git
```

Run a local web server:

```bash
python -m http.server 8000
```

or

```bash
npx serve
```

---

## Deployment

Production deployments are automatically published through Netlify.

Every push to the main branch triggers a new deployment.

---

## Mission

TQNN exists because real-world data is rarely perfect.

Sensors fail.

Measurements become noisy.

Values go missing.

Confidence changes.

Instead of assuming perfect inputs, TQNN helps applications continue making informed, confidence-aware decisions when uncertainty is unavoidable.

---

## Learn More

**Website**

https://tqnnlabs.com

**Python SDK**

https://github.com/tqnnlabs/tqnn

**Benchmarks**

https://github.com/tqnnlabs/tqnn-benchmarks

---

© TQNN Labs. All rights reserved.
