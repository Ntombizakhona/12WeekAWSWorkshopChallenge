_Week Ten_

# Monitoring, Logging & Observability

## The 12-Week AWS Workshop Challenge with Luis Valdivia Humareda
--------------------------------------------------------------

After mastering [Data Analytics, AI, & Machine Learning](https://medium.com/@ntombizakhona/data-analytics-ai-machine-learning-c291ee34e5c8) : building data lakes, training models, and deploying intelligent applications — the next critical capability is _knowing whether your systems are actually behaving the way you think they are_ through **Monitoring, Logging & Observability.**

You can architect perfect solutions, but without proper observability, you’re flying blind when something goes wrong at 3 AM.

Monitoring, Logging, and Observability aren’t just about dashboards and alerts. They’re about **understanding:** being able to ask arbitrary questions about your systems and get meaningful answers, even for problems you didn’t anticipate, well, especially for problems you didn’t anticipate.

This week’s focus on the **Three Pillars of Observability** (_Metrics, Logs, Traces_), along with monitoring and alerting strategies, represents the foundation of operational excellence.

It’s the difference between “_the system is down, I don’t know why_” and “**request latency spiked at 14:32, the database connection pool exhausted on service-B, triggered by a traffic surge from the new marketing campaign**.”

Before diving into AWS-specific tools (CloudWatch, X-Ray, OpenTelemetry), it’s worth testing your **conceptual understanding** of observability itself, because we have a tendency of always thinking about observability as an afterthought!

These 25 questions cover foundational theory and practical application.

Try answering each question in your own words before researching. If you can explain these concepts clearly, you’re ready to implement them effectively, especially in the dawn of autonomous systems, where we definitely need to monitor, log and observe what they’re doing. And then, you can write about it all if you want…

25 Essential Questions on Monitoring, Logging & Observability
-------------------------------------------------------------

### Foundational Concepts: Monitoring vs Observability

**1.** What is the fundamental difference between monitoring and observability, and why does having dashboards and alerts not automatically mean your system is “observable”?

**2**. Monitoring is often described as “asking predefined questions” while observability is “asking arbitrary questions.” What does this distinction mean in practice, and why does it matter when debugging issues you’ve never seen before?

**3.** A system can be heavily monitored but poorly observable. Describe a scenario where this happens: where you have plenty of metrics and alerts but still can’t figure out why something is broken.

**4**. Why does observability become exponentially more important as systems become more distributed and autonomous(microservices, serverless, event-driven, multi-region, agentic artificial intelligence)? What breaks about traditional monitoring approaches in these architectures?

**5.** Some engineers argue that “observability is a property of a system, not a tool you install.” What do they mean by this, and how does it change how you approach instrumenting applications from day one versus bolting on monitoring later?

The Three Pillars
-----------------

### 1 Metrics

**6.** Metrics are numerical measurements collected over time (CPU usage, request count, latency percentiles). What types of questions do metrics help you answer, and what are they NOT good at answering?

**7**. What is the difference between a counter, a gauge, and a histogram/distribution metric? Give an example of when you would use each type to measure different aspects of system behavior.

**8**. You’re monitoring API latency. Should you track the average (mean) latency or percentiles? Why can averages be misleading, and what do percentiles reveal that averages hide?

**9**. Metrics have dimensions (labels/tags) like `service=checkout`, `region=us-east-1`, `status=500`. How does high cardinality (too many unique dimension combinations) become a problem, and how do you balance granularity with cost and performance?

**10**. What is the difference between push-based metrics (application sends to collector) and pull-based metrics (collector scrapes from application)? When would you choose one approach over the other?

### 2 Logs

**11**. Logs are immutable, timestamped records of discrete events. What types of questions do logs help you answer that metrics cannot, and when do logs become essential for debugging?

**12**. What is the difference between unstructured logs (plain text) and structured logs (JSON with consistent fields)? Why does structured logging dramatically improve searchability, filtering, and correlation at scale?

**13**. Your application generates 10GB of logs per day. How do you decide what to log (verbosity levels: DEBUG, INFO, WARN, ERROR), and what are the costs of logging too much versus too little?

**14**. Log aggregation centralizes logs from hundreds of services into one searchable system. Why is centralization essential in distributed architectures, and what happens when you try to debug incidents by SSH-ing into individual servers to read local log files?

**15**. Logs without context are just noise. What fields should every log entry include to make it useful for debugging (timestamp, request ID, service name, user ID, trace ID)? How does consistent schema across services enable correlation?

### Traces

**16.** In a microservices architecture, a single user request might touch 15 different services. How does distributed tracing solve the problem of “following a request” through the entire system, and what would debugging look like without it?

**17**. What is a trace, what is a span, and how do they relate to each other?

**18**. How does trace context propagation work as in, how does a trace ID get passed from service A to service B to service C so that all spans are correlated into a single trace? What happens if propagation breaks?

**19.** Looking at a trace, you see that 80% of total request latency is spent in one span (database query). How do traces help you identify bottlenecks that would be invisible if you only had aggregate metrics or individual service logs?

**20**. Tracing every single request can be expensive at high volume. What is trace sampling (head-based vs tail-based), how do you decide what sampling rate to use, and what are the risks of sampling too aggressively?

### Connecting the Pillars

Correlation and Context
-----------------------

**21**. Metrics tell you “something is wrong,” logs tell you “what happened,” and traces tell you “where in the request path.” How do you connect these three pillars so that an alert (metric) leads you to relevant logs and traces for that specific incident?

**22.** A common pattern is: alert fires (metric) → you check the dashboard (more metrics) → you search logs filtered by time window → you find a trace ID → you view the full distributed trace. Walk through why each step is necessary and what you’d be missing if any pillar was absent.

**23.** What is a correlation ID (or request ID), and why should it appear in metrics labels, log entries, and trace spans? How does this single identifier unlock the ability to “pivot” between pillars during incident investigation?

Alerting and Incident Response
------------------------------

**24.** What makes an alert useful versus noisy? If your on-call engineer receives 50 alerts per day and ignores most of them, what has gone wrong with your alerting strategy, and how does this affect incident response?

**25.** What are SLIs (Service Level Indicators), SLOs (Service Level Objectives), and SLAs (Service Level Agreements)? How do SLO-based alerts (“error budget is burning too fast”) differ from threshold-based alerts (“CPU > 80%”), and why are SLOs often better for measuring what actually matters to users?

Additional Resources
--------------------

### [Luis Valdivia Humareda](https://www.linkedin.com/in/luis-valdivia-humareda/)

> I am a C-Level technology leader, professor, and senior developer with more than 15 years of experience designing and delivering scalable web applications, APIs, and cloud-native solutions.
> 
> Skilled in Node.js, React, PHP, Python, and AWS, I specialize in creating high-performance platforms and implementing best practices that drive business value.

### [One Observability Workshop](https://catalog.workshops.aws/observability/en-US)

> Welcome to the One Observability Workshop. This workshop provides you hands-on experience with a wide variety of tools AWS offers for monitoring and observability.
> 
> Whether your workload is on-prem or on AWS, or your application is a giant monolith or based on a modern microservice based architecture, our observability tools can help you get deeper insights into your application performance and health.
> 
> Our cost effective and native solutions provide powerful capabilities that enable you to identify bottlenecks, issues, and defects without you having to manually sift through various logs, metrics, and trace data.
> 
> Go ahead and play around with the workshop and please feel free to provide your feedback.

Concluding Remarks
------------------

The true transformation in your observability journey happens at the intersection of three practices: **hands-on experimentation, targeted research, and community engagement.**

Don’t just read about the three pillars: instrument a real application, generate load, simulate failures, and practice investigating incidents using metrics, logs, and traces together.

When concepts feel unclear, dive into observability blogs, read SRE books, explore OpenTelemetry documentation, and study how companies like Netflix, Uber, and Slack approach observability at scale.

But here’s where the magic multiplies: bring your questions to learning communities, share your debugging war stories, and most importantly, help others understand these concepts.

Teaching is the ultimate test of understanding: when you can explain why percentiles matter more than averages, walk someone else through it.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._


# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Data Analytics, AI & Machine Learning](https://ntombizakhona.medium.com/monitoring-logging-and-observability-760cb718dbe1)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**08 December 2025**
