# Testing AI Models: Lessons From a Game-Changing Project

My previous project was a total game changer for me. It took me from a relatively straightforward audio driver testing gig into the deep waters of AI and model optimization. Specifically, I joined a team working on Intel's OpenVINO– an open-source toolkit designed to optimize and deploy AI inference across CPU, GPU, and VPU.

In plain terms, **OpenVINO** helps you convert and run AI models faster on Intel hardware. It was a significant shift from traditional ONNX or TensorFlow pipelines to a far more optimized Intermediate Representation (IR) format. This all happened just before ChatGPT became mainstream, back when LLMs were still mostly research toys, not everyday tools.

---

## Preparing for the Unknown

Starting with a new team and a new technology stack, I wanted to be well-prepared. So I began teaching myself the foundations of machine learning, language models, and – most importantly – how to test them properly. Fast forward a bit, and recently I needed to revisit that knowledge. Spoiler alert: it evaporates quickly if you don’t use it.

That’s why I’m writing this blog post – as a future reference for myself (and hopefully, it helps someone else too). Think of it as a **quick-start guide to AI testing** – yes, the magic keyword for your next CV update 😄.

---

## 1. Testing AI Model Performance: What Matters?

When working with OpenVINO, the number one thing that mattered to stakeholders was **performance**. Why? Because it’s what gets shown in promotional materials – showing how much faster the new hardware handles model training compared to the old stuff.

So a lot of my job revolved around **gathering performance metrics across different processors and models**. I got cozy with Excel at first, then moved into databases to manage the growing mountain of performance data.

At the heart of OpenVINO is the **Model Optimizer**, which converts models from TensorFlow, PyTorch, or ONNX into IR format. That makes it super important to **compare performance and accuracy pre- and post-conversion**.

### Key metrics during model training:

- **Training Time** – How long does it take to complete an epoch or reach convergence?
- **Compute Efficiency** – How much GPU/CPU/memory is consumed?
- **Scalability** – Can the model handle more data or multiple GPUs?
- **Algorithmic Efficiency** – What’s the tradeoff between model quality and computational cost?

📊 Tools like TensorBoard, Weights & Biases, or MLflow are great for monitoring and visualizing these metrics.

---

## 2. Testing LLM Inference Performance

When it comes to **Large Language Models (LLMs)** like GPT, Claude, or Mistral, the challenge shifts from training performance to **inference performance** – how well the model behaves when it's live and serving users.

### Key metrics here include:

- **Latency** – How fast is the response? Crucial for chatbots and voice assistants.
- **Throughput** – How many requests per second can it handle?
- **Cost per inference** – Especially important when you're deploying models in the cloud.
- **Optimization strategies** – Think token caching, kv-caching, or using optimized runtimes like ONNX or TensorRT.

You’ll also want to simulate:

- Different prompt lengths
- User concurrency
- Deployment environments (cloud vs edge)

---

## 3. Evaluating the Quality of LLM Output

Performance is one side of the coin. The other? **How good is the model’s response?**

### Here's a quick rundown of the most useful text evaluation metrics:

| Metric             | Focus               | Captures Meaning? | Best For                 |
| ------------------ | ------------------- | ----------------- | ------------------------ |
| **BLEU**           | Exact matches       | ❌ No             | Translation              |
| **ROUGE**          | Key content recall  | ❌ No             | Summarization, QA        |
| **METEOR**         | Meaning + order     | ⚠️ Somewhat       | Translation, NLP tasks   |
| **BERTScore**      | Semantic similarity | ✅ Yes            | Paraphrasing, open-ended |
| **LLM-as-a-Judge** | Holistic scoring    | ✅ Yes            | Complex, creative tasks  |

### Breakdown:

- **BLEU**: Looks at overlapping word sequences between the generated and reference texts. Fast and simple, but doesn’t account for meaning.
- **ROUGE**: Measures recall – how much of the original content is preserved. Popular in summarization.
- **METEOR**: Considers synonyms, stems, and word order. Offers better precision + recall balance.
- **BERTScore**: Uses pretrained models (like BERT) to assess semantic similarity. Much better for nuanced evaluation.
- **LLM-as-a-Judge**: The new kid on the block. Uses another language model (like GPT-4) to judge responses. It mimics human-level evaluation and is super flexible.

🧠 **Choosing the right one depends on your use case** – for complex or creative outputs, newer metrics like BERTScore and LLM-as-a-Judge will align better with human judgment.

---

## 4. Security Testing in LLMs

Security is an often overlooked but **critical part of testing** large language models – especially as they’re increasingly used in production environments and exposed to real users.

### Common Security Risks in LLMs:

- **Prompt injection** – Users manipulating inputs to make the model leak sensitive information or behave maliciously.
- **Data leakage** – Unintended memorization and regurgitation of training data, possibly including private data.
- **Model hallucinations** – Fabricated facts that can mislead users (and sometimes cause real-world harm).
- **Over-reliance on output** – Trusting the model’s response too much in high-stakes contexts like healthcare, legal, or finance.
- **Exposure via APIs** – Improper rate-limiting or authentication can lead to abuse or denial-of-service attacks.

### Security Testing Strategies:

- **Red teaming / adversarial testing** – Intentionally trying to break the model or expose weaknesses.
- **OWASP-style threat modeling** – Using frameworks like OWASP Top 10 for LLMs to guide testing efforts.
- **Input fuzzing** – Sending randomized or malformed inputs to see how the model handles edge cases.
- **Output filtering** – Applying moderation and validation layers post-inference.

---

## 📚 Further Reading

Here’s a handpicked list of helpful resources if you want to dive deeper:

- [Understanding BLEU and ROUGE Scores for NLP Evaluation (GeeksforGeeks)](https://www.geeksforgeeks.org/bleu-and-rouge-scores-nlp/)
- [BERTScore GitHub Repository](https://github.com/Tiiiger/bert_score)
- [Top 10 OWASP for LLMs – How to Test](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [LLM Latency Guidebook – Microsoft](https://aka.ms/llm-latency-guide)
- [CISO Guide: Penetration Testing for LLMs (BreachLock)](https://www.breachlock.com/resources/penetration-testing-llms/)
- [Key Metrics for LLM Evaluation – Athina](https://www.athina.ai/blog/llm-evaluation-metrics)
