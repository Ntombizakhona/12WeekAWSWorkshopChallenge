_Week Six_

# Serverless & Event Driven Architecture

## The 12-Week AWS Workshop Challenge with Emmanuel Mingle
-------------------------------------------------------

After mastering [Database Services & Architecture](https://medium.com/database-services-architecture-ba69d0cf9690): choosing between RDS and DynamoDB, optimizing Aurora performance, implementing caching strategies, and migrating legacy databases – the next transformative layer in your AWS journey is **Serverless & Event-Driven Architecture**.

You can design perfect databases, but without the right compute and integration patterns, your applications remain tightly coupled, difficult to scale, and expensive to operate.

Databases store your data. Serverless compute processes it – without you ever provisioning, patching, or scaling a single server.

This week’s focus on **_Lambda, API Gateway, AppSync, Step Functions, EventBridge, SQS, and SNS_** represents a fundamental paradigm shift: from _infrastructure you manage_ to **business logic you write**.

From _servers that run 24/7 whether busy or idle_ to **code that executes only when needed and scales automatically**.

From _monolithic applications_ to **loosely coupled, event-driven systems.**

The serverless model changes everything:

1.  **You pay only for execution time** _(not idle time)_
2.  **AWS handles all scaling** (_from zero to millions of requests)_, and
3.  **You focus purely on code** (_no OS patches, no capacity planning, no server management)_.

But with this power comes new challenges: cold starts, execution limits, distributed debugging, and architectural complexity…

Rather than explaining serverless services, this article challenges you with **20 carefully crafted questions** that test your ability to design real event-driven architectures.

These aren’t theoretical – they’re the questions you’ll face when building APIs, orchestrating workflows, processing events at scale, or decoupling microservices.

Try answering each question before researching. Better yet, build working serverless applications and document your architecture decisions in your own article, if you want…

20 Essential Questions on AWS Serverless & Event-Driven Architecture
--------------------------------------------------------------------

### AWS Lambda Advanced Patterns

**1.** Your Lambda function processes uploaded images from S3 – resizing, compressing, and storing results. Sometimes it takes 2 seconds, sometimes 8 minutes depending on image size. What is Lambda’s maximum execution timeout, and what architectural pattern would you use for long-running image processing that exceeds Lambda limits (Step Functions, ECS Fargate, hybrid approach)?

**2.** You deployed a Lambda function behind API Gateway, and users complain about occasional 2–3 second delays on the first request after periods of inactivity, but subsequent requests are fast. What causes Lambda cold starts, how do provisioned concurrency solve this, and what’s the cost tradeoff between eliminating cold starts versus accepting occasional latency?

**3.** Your Lambda function needs to connect to an RDS database in a private VPC subnet. How does VPC Lambda configuration work, why does it add latency to cold starts, and what’s the difference between Lambda with VPC access versus Lambda with RDS Proxy for connection pooling?

**4.** A single Lambda invocation can process one message or batch multiple messages. You’re processing 1 million SQS messages, each taking 100ms to process. Should you process one message per invocation or batch 10 messages per invocation, and how does batch size affect cost, latency, and error handling?

**5.** Your Lambda function occasionally fails due to transient errors (network timeouts, rate limits from external APIs). How do you implement retry logic using Lambda’s native retry behavior, dead-letter queues (DLQ), and exponential backoff, and when would you handle retries in code versus relying on AWS managed retries?

### API Gateway and GraphQL with AppSync

**6.** You’re building a REST API with Lambda backend. What’s the difference between API Gateway REST API and HTTP API, why does HTTP API cost 70% less, and when would you still choose REST API despite the higher cost (WebSocket support, request validation, caching)?

**7.** Your API receives 10,000 requests per second during peak hours, and 90% of those requests return the same data. How does API Gateway caching reduce Lambda invocations and costs, what’s the difference between stage-level and method-level caching, and how do you invalidate cached responses when data changes?

**8.** API Gateway has a hard limit of 29 seconds for Lambda integration timeout. Your Lambda function occasionally takes 45 seconds to process complex reports. What architectural patterns solve this (async invocation with S3 presigned URLs, Step Functions with callback tokens, splitting into smaller functions)?

**9.** You’re building a real-time chat application where clients need bidirectional communication with the server. How do WebSocket APIs in API Gateway differ from REST APIs, how do you handle connection lifecycle ($connect, $disconnect, $default routes), and what’s the cost model for WebSocket connections?

**10.** Your mobile app needs to query complex, nested data relationships (users → posts → comments → likes). Should you build a REST API with multiple endpoints or use AWS AppSync with GraphQL, and how does AppSync’s resolver pipeline reduce over-fetching and under-fetching compared to REST?

### Step Functions for Workflows

**11.** You have a multi-step order processing workflow: validate payment → update inventory → send confirmation email → notify warehouse. If any step fails, you need to rollback previous steps. How do Step Functions orchestrate this workflow, handle errors with Catch and Retry, and implement compensation logic (saga pattern) for distributed transactions?

**12.** What’s the difference between Step Functions Standard Workflows and Express Workflows? When would you choose Express Workflows for high-volume, short-duration executions (IoT, streaming), and when do Standard Workflows’ guaranteed exactly-once execution and longer duration limits matter?

**13.** Your workflow needs to wait for human approval before proceeding – sometimes for hours or days. How do Step Functions callback patterns (task tokens) enable long-running, asynchronous steps where external systems or humans signal completion, and how does this differ from polling?

**14.** You’re orchestrating a machine learning pipeline: data preparation → model training → model evaluation → deployment. Training takes 6 hours. How do Step Functions integrate with SageMaker, ECS, and Lambda to coordinate long-running tasks, and what error handling ensures expensive training jobs don’t repeat unnecessarily?

**15.** Step Functions charge per state transition. Your workflow processes 1 million items, and for each item you call a Lambda function (1 million transitions). How can you optimize costs using Map state to process items in parallel, and what’s the difference between inline Map (max 40 parallel) and distributed Map (unlimited parallelism)?

### EventBridge, SQS, and SNS

**16.** Your application has multiple microservices that need to react when a new user signs up (send welcome email, create profile, trigger analytics, provision resources). Should you tightly couple services with direct API calls, or use EventBridge event bus for loose coupling? How does event-driven architecture improve scalability and reduce dependencies?

**17.** What’s the difference between Amazon SNS (Simple Notification Service) and Amazon SQS (Simple Queue Service)? When would you use SNS fan-out (one message to many subscribers) versus SQS queuing (one message consumed once), and how do you combine them for pub/sub patterns?

**18.** Your Lambda function processes messages from SQS but occasionally fails. If you don’t configure it correctly, failed messages get reprocessed infinitely. How do SQS visibility timeout, message retention, and dead-letter queues (DLQ) work together to handle failures, and what’s the difference between Standard queues (at-least-once, high throughput) and FIFO queues (exactly-once, ordered)?

**19.** You’re building a multi-tenant SaaS where each customer’s events (orders, payments, logins) need to trigger different workflows. How does EventBridge content-based filtering route events to specific targets based on event attributes, and how does this differ from SNS filter policies?

**20**. Your system receives 50,000 events per second from IoT devices. Each event needs processing by 5 different services (analytics, storage, alerting, ML, archival). How do you design an event-driven architecture using EventBridge as event bus, multiple Lambda consumers, SQS for buffering bursts, and DLQ for failed processing – and what are the cost implications of this fan-out pattern?

Additional Resources
--------------------

### [**Serverless Applications Lens — AWS Well-Architected Framework**](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/welcome.html)

> This document describes the Serverless Applications Lens for the [AWS Well-Architected Framework](https://aws.amazon.com/well-architected).
> 
> The document covers common serverless applications scenarios and identifies key elements to ensure that your workloads are architected according to best practices.

### [Serverless Land](https://serverlessland.com/)

> This site brings together the latest information, blogs, videos, code, and learning resources for AWS Serverless.
> 
> Learn to use and build apps that scale automatically on low-cost, fully-managed serverless architecture.

### [Event Driven Architectures](https://docs.aws.amazon.com/wellarchitected/latest/serverless-applications-lens/event-driven-architectures.html)

> Event-driven architectures are becoming a popular and preferable way of building large distributed microservice-based applications. This approach helps you build scalable, resilient, agile and cost-effective solutions.
> 
> Using AWS serverless services to implement event-driven approach will allow you to build scalable, fault tolerant applications. You can use messaging services like Amazon SQS for reliable and durable communication between microservices. For fan out of the events you can use Amazon SNS topics. If you need event filtering and routing you can utilize Amazon EventBridge.

### [Serverless Patterns](https://catalog.workshops.aws/serverless-patterns/en-US)

> Serverless applications are built using many services in a few common architecture patterns. Although customer scenarios are unique, the patterns emerge again and again.
> 
> In this workshop, you will learn serverless best practices by building production-ready code for an application.

### [The Serverlesspresso workshop!](https://catalog.us-east-1.prod.workshops.aws/workshops/28e7066a-b0bb-42ad-a0e9-8e8eeeb51133/en-US)

> In this workshop, you will deploy a [serverless](https://aws.amazon.com/serverless/) backend that supports a pop-up coffee shop.
> 
> You will then test your application using front-end applications that are provided.

### [The AWS Serverless Developer Experience Workshop](https://catalog.workshops.aws/serverless-developer-experience/en-US)

> The AWS Serverless Developer Experience Workshop is a comprehensive, hands-on training program designed to equip developers with practical serverless development skills using the [**AWS Serverless Application Model (AWS SAM)**](https://aws.amazon.com/serverless/sam/) and **AWS SAM CLI**.
> 
> The workshop employs a practical, code-centric approach, emphasizing direct implementation and real-world scenario exploration to ensure you develop serverless development skills across several critical areas including distributed event-driven architectures, messaging patterns, orchestration, and observability.
> 
> You will explore open-source tools, [Powertools for AWS](https://powertools.aws.dev/) , and simplified CI/CD deployments with Gitea Actions. By the end, you will be familiar with serverless developer workflows, microservice composition using AWS SAM, serverless development best practices, and applied event-driven architectures.

### [Emmanuel Mingle](https://www.linkedin.com/in/emmanuel-mingle/)

> Emmanuel is an educator at heart, with a deep passion for helping others grow in their cloud journey.
> 
> His experience spans across diverse sectors, from finance and government to renewable energy and core technology industries, giving him a rich perspective on how cloud solutions power real-world innovation.
> 
> Emmanuel believes in “educating one person at a time”
> Inspiring others to build their confidence, skills, and purpose in the world of cloud and technology.

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: **hands-on experimentation, targeted research, and community engagement**.

Don’t just read about Lambda cold starts — trigger thousands of concurrent invocations, measure latency, test provisioned concurrency, and see the cost difference firsthand.

When you encounter concepts you don’t fully grasp, dive into AWS documentation, serverless patterns from AWS Serverless Land, and Well-Architected Serverless Lens to build deeper understanding.

But here’s where the magic multiplies: bring your questions to learning communities, engage in discussions, and most importantly, answer questions from fellow learners.

Teaching is the ultimate test of understanding — when you can explain why EventBridge decouples better than direct Lambda invocations, walk someone through debugging a failed Step Functions execution, or help optimize someone’s serverless costs you’re not just helping them, you’re cementing your own expertise.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qSM0B_VCjthuKgYknr7fJg@2x.jpeg)

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Serverless & Event Driven Architecture](https://ntombizakhona.medium.com/serverless-event-driven-architecture-c29a6aa04536)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**08 November 2025**
