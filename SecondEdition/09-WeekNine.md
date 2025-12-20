_Week Nine_

# Data Analytics, AI & Machine Learning

## The 12-Week AWS Workshop Challenge with Kevin Tuei
--------------------------------------------------

After mastering [Container Orchestration & Kubernetes](https://medium.com/container-orchestration-kubernetes-bfb9d057cdf5): deploying applications to ECS and EKS, implementing service meshes, configuring autoscaling, and managing production workloads – the next transformative layer in your AWS journey is **Data Analytics, Artificial Intelligence, and Machine learning**.

You can run perfect containerized applications, but without the ability to extract insights from data and embed intelligence into those applications, you’re missing the competitive advantage that defines modern software.

Analytics and AI/ML represent a paradigm shift: from “_store data and hope someone can make sense of it_” to “**automatically discover patterns, predict outcomes, and make intelligent decisions at scale.**” From “_hire data scientists to manually build models”_ to “**empower developers to embed ML into applications using managed services.**”

This week’s focus on **Data Lakes** (_S3, AWS Glue, Lake Formation_), **Analytics Engines** _(Amazon Athena, Amazon Kinesis, Amazon Redshift)_, and **Amazon SageMaker** for ML workflows represents the foundation of intelligent applications: systems that learn from data, improve over time, and provide insights that drive business decisions.

The Analytics and AI/ML revolution changes everything:

1.  **Data becomes an asset:** Not just storage cost
2.  **Insights become automatic:** Not manual reports
3.  **Predictions become embedded:** Not separate systems
4.  **Intelligence Scales**: From prototype to billions of predictions

Rather than explaining analytics services, this article challenges you with **20 carefully crafted questions** that test your ability to design real data and ML architectures. These aren’t theoretical – they’re the questions you’ll face when building data lakes, choosing analytics engines, training ML models, or explaining AI strategy to stakeholders.

**!Note!**
----------

Analytics, AI, and machine learning are exceptionally broad and deep disciplines that are continuously evolving and branching into specialized subfields such as the current Agentic AI, and then data engineering, MLOps, computer vision, natural language processing, recommendation systems, time series forecasting, AutoML, responsible AI, and so many more.

Even though I tried to make it 25 questions (twenty essential + five bonus) I barely scratched the surface of what could easily be **150+** questions covering the full breadth of modern analytics, data, AI and ML practices.

_Anyways, try answering each question before researching. Better yet, build complete analytics pipelines and ML workflows, then document your architecture decisions in your own article, if you want…_

20 Essential Questions on AWS Analytics, AI & Machine Learning
--------------------------------------------------------------

### Data Lakes with S3, AWS Glue, and Lake Formation

**1**. You’re building a data lake for your organization’s raw logs, transactional data, and third-party feeds. How do you structure S3 buckets and prefixes using the medallion architecture (Bronze/Raw → Silver/Cleansed → Gold/Curated zones), what partitioning strategy (by date: year/month/day, by tenant, by data source) optimizes query performance and cost, and how do you handle late-arriving data without reprocessing entire datasets?

**2.** Your analytics queries on S3 scan terabytes of CSV/JSON files, resulting in R 10 000 ($500) monthly Athena costs and slow query times. How much can you reduce costs and improve performance by converting to columnar formats (Apache Parquet or ORC) with compression (Snappy, ZSTD), and what’s the process for converting existing data without downtime?

**3**. Your data schema evolves frequently: new fields added, data types changed, nested structures flattened. Should you use AWS Glue crawlers to automatically detect schema changes, or define explicit schemas in the Glue Data Catalog? How do you handle schema-on-read scenarios where downstream queries break when schemas change, and what’s your strategy for schema versioning?

**4**. Multiple teams across different AWS accounts need access to your data lake with fine-grained permissions: some analysts can see all customer data, others only anonymized aggregates, and some can only access specific tenants. When does AWS Lake Formation justify its complexity over S3 bucket policies, and how do you implement table-level, column-level, and row-level access control with tag-based permissions?

**5.** Your data lake contains sensitive customer PII (personally identifiable information), financial records, and health data subject to GDPR, HIPAA, POPIA and SOC 2 compliance. How do you design security: S3 Block Public Access enabled by default, AWS KMS encryption at rest, VPC endpoints for private access (no internet), S3 Access Points for per-application boundaries, CloudTrail and S3 access logging for audit trails, and how do you prove compliance to auditors?

### Data Ingestion and ETL with AWS Glue

**6**. You’re ingesting data from 50 different sources (databases, SaaS APIs, IoT devices, log files) into your data lake. Should you use AWS Glue ETL jobs (PySpark/Python shell), AWS Lambda for simple transformations, or AWS Data Migration Service for database replication? What factors (data volume, transformation complexity, latency requirements, cost) influence the choice?

**7**. Your Glue ETL job processes 10TB of data daily, transforming raw JSON into partitioned Parquet. The job takes 6 hours and costs R2000/day ($120/day). How do you optimize: using Glue job bookmarks to process only new data, adjusting DPU (data processing units) allocation, optimizing Spark operations (reducing shuffles, broadcast joins), and converting to Glue Streaming for lower latency?

**8**. New files arrive in your S3 raw zone every 5 minutes, and you want to trigger ETL processing automatically. Should you use S3 Event Notifications triggering Lambda/Glue, EventBridge rules polling S3, or AWS Step Functions orchestrating the workflow? How do you ensure exactly-once processing, handle failures with retries and dead-letter queues, and prevent duplicate data in your curated zone?

**9**. Your data pipeline has dependencies: raw data arrives → quality checks run → transformations execute → aggregations calculate → analytics tables update. If the quality check fails, downstream jobs shouldn’t run. How do you orchestrate this workflow using AWS Glue workflows, Step Functions, or Apache Airflow on Amazon MWAA (Managed Workflows for Apache Airflow), and what’s your error handling and alerting strategy?

10. Your Glue crawlers run nightly to discover new tables and partitions, but they sometimes misclassify data types or create inefficient partition structures. How do you balance automated discovery with manual schema control, use custom classifiers for proprietary data formats, and implement validation checks before publishing to the Glue Data Catalog?

### Analytics with Athena, Kinesis, and Redshift

**11**. Business analysts need to run ad-hoc SQL queries on petabytes of S3 data. Should you use Amazon Athena (serverless, pay-per-query), Amazon Redshift (persistent warehouse, predictable cost), or Amazon Redshift Spectrum (query S3 from Redshift)? What query patterns, concurrency requirements, and cost models drive this decision?

**12**. Your Athena queries scan entire S3 datasets even when users only need recent data, resulting in high costs and slow performance. How do you optimize using partition pruning (WHERE date >= ‘2024–01–01'), projection (synthetic partitions without MSCK REPAIR), columnar format and compression, CREATE TABLE AS SELECT (CTAS) for pre-aggregation, and query result caching?

**13.** Your application generates 1 million events per second that need real-time processing and near-real-time analytics. Should you use Amazon Kinesis Data Streams (low-latency custom processing), Kinesis Data Firehose (managed delivery to destinations), Amazon MSK (managed Apache Kafka), or Amazon Kinesis Data Analytics (stream processing with SQL/Flink) – and what are the tradeoffs in latency, throughput, operational complexity, and cost?

**14.** Your Kinesis stream experiences throttling because one shard receives 80% of traffic while others are idle (hot partition key problem). How do you choose partition keys that distribute load evenly, when do you need enhanced fan-out for multiple consumers, how does on-demand mode compare to provisioned shards, and what’s the process for resharding without data loss?

**15.** You’re loading streaming data into your data lake using Kinesis Data Firehose. How do you configure buffering (size and interval), enable dynamic partitioning (extract date/tenant from records), convert JSON to Parquet inline, handle late-arriving or out-of-order events, and implement Lambda transformations for data enrichment or filtering before delivery?

### Amazon Redshift for Data Warehousing

**16**. You’re choosing between Amazon Redshift provisioned clusters (RA3 with managed storage, DC2 for compute-dense workloads) and Redshift Serverless (automatic scaling, pay-per-use). What workload characteristics (predictable vs variable, query frequency, data volume) influence this decision, and how do you calculate the cost break-even point?

**17**. Your Redshift cluster experiences slow queries during peak hours when multiple teams run analytics simultaneously. How do you optimize performance: workload management (WLM) queues with memory and concurrency limits, concurrency scaling for automatic capacity, query monitoring rules to abort runaway queries, result caching, and materialized views for expensive aggregations?

**18.** Your data warehouse has 500TB of historical data in Redshift but analysts rarely query data older than 90 days. How does Redshift Spectrum let you query S3 directly (extending your warehouse to the data lake), what’s the cost model (per-TB scanned on S3 vs stored in Redshift), and how do you optimize with partitions, Parquet, and external schema management?

**19**. You need to load 5TB of data nightly from S3 into Redshift for analytics. How does the COPY command work with manifests for parallel loading, what compression codecs reduce storage and improve performance (LZO, ZSTD), how do you handle incremental updates (MERGE/UPSERT), and what’s the difference between ETL (transform before load) versus ELT (load then transform in Redshift)?

**20.** Multiple business units need access to different subsets of Redshift data without copying to separate clusters. How does Redshift data sharing work to share live data across clusters (producer/consumer model), what are the security and governance implications, and when would you use data sharing versus Redshift Spectrum versus exporting to S3?

**Bonus Questions**
-------------------

### Amazon SageMaker for ML Workflows

**21.** Your data science team wants to build custom ML models. Should you use Amazon SageMaker (end-to-end ML platform), AWS-managed AI services (Rekognition, Comprehend, Forecast for specific use cases), or build custom on EC2/EKS? What factors (team skills, customization needs, time-to-market, operational overhead) drive this decision?

**22**. You’re building a customer churn prediction model. Walk through the complete SageMaker ML workflow: how do you prepare data (SageMaker Data Wrangler, Feature Store for reusable features), train models (SageMaker Training with built-in algorithms or custom containers, distributed training for large datasets, hyperparameter tuning with automatic model tuning), evaluate models (SageMaker Experiments for tracking), and what metrics determine if a model is production-ready?

**23**. Your trained ML model needs to serve predictions in two scenarios: real-time API calls (latency <100ms) and batch processing of millions of records nightly. Should you use SageMaker real-time endpoints (persistent, low latency, higher cost), serverless inference (pay-per-request, automatic scaling), asynchronous inference (queue-based, longer processing), or batch transform (offline predictions) – and what are the cost and latency tradeoffs?

**24.** Your ML model in production is experiencing drift – prediction accuracy has dropped from 95% to 78% over 6 months because customer behavior has changed. How do you implement MLOps: SageMaker Model Monitor for data quality and model drift detection, automated retraining pipelines (SageMaker Pipelines for CI/CD), A/B testing with multiple model versions, and rollback strategies when new models underperform?

**25.** You have a complex ML workflow: data ingestion → feature engineering → training (trying 50 hyperparameter combinations) → model evaluation → deployment → monitoring. How do you orchestrate this using SageMaker Pipelines (DAG-based workflow with caching, conditions, parallel execution), integrate with Step Functions for cross-service orchestration, and implement proper error handling and notifications?

### !Note Again!

Yes, I’m repeating myself, and that’s intentional, because redundancy is important in the Cloud (uhm,ha ha). So you’ve already read that Analytics, AI, and Machine Learning are continuously evolving disciplines that branch into dozens of specializations:

Data Engineering.

MLOps.

Computer Vision.

NLP.

Recommendation Systems.

Time Series Forecasting.

AutoML.

Responsible AI.

_Data Here._

_Analytics There._

_AI This._

_ML That._

**All these topics are deep enough to be an entire career, individually!**

The list grows monthly. I mentioned it in the introduction, I’m mentioning it again now, and the reason is simple because this reality needs to sink in before you get discouraged.

Once again, these 20 + 5 questions barely scratch the surface of what could easily be 150+ questions, and we haven’t even touched my latest favourite development, **Agentic AI:**

_Autonomous systems that reason, plan, and act_, which is currently dominating emerging technology as a convergence of AI/ML capabilities and real-time analytics. The field is vast, it’s accelerating, and no single article (or even course) will make you an expert.

But that’s not the goal. The goal is to give you solid footing so you can choose your direction, start building, and understand that feeling overwhelmed isn’t failure, it’s the correct response to standing at the edge of something this big and fast-moving.

_I didn’t cover questions on Generative AI & Bedrock because they are rather quite straight forward and self explanatory in nature, thanks to the widespread adoption of Generative AI tools, and Kevin Teui covered it in this weeks session, if you missed it you can find the recording on the_ [_Discord Channel._](https://discord.com/invite/SdMYqBAyuZ)

ok…

Additional Resources
--------------------

### Kevin Tuei

> Kevin Tuei is a Senior Cloud Technology Consultant, AI/ML Practitioner, and Certified Educator with over 7 years of hands-on experience shaping the future of cloud and emerging technologies across the continent.
> 
> He is the founder and leader of multiple tech communities including the User GroupAI/ML Kenya where he shines in event facilitation, mentorship, and community building.

### [Amazon Simple Storage Service User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

> Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.
> 
> Amazon S3 provides management features so that you can optimize, organize, and configure access to your data to meet your specific business, organizational, and compliance requirements.

### [AWS Glue User Guide](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)

> AWS Glue is a serverless data integration service that makes it easy for analytics users to discover, prepare, move, and integrate data from multiple sources. You can use it for analytics, machine learning, and application development. It also includes additional productivity and data ops tooling for authoring, running jobs, and implementing business workflows.
> 
> With AWS Glue, you can discover and connect to more than 70 diverse data sources and manage your data in a centralized data catalog. You can visually create, run, and monitor extract, transform, and load (ETL) pipelines to load data into your data lakes. Also, you can immediately search and query cataloged data using Amazon Athena, Amazon EMR, and Amazon Redshift Spectrum.
> 
> AWS Glue consolidates major data integration capabilities into a single service. These include data discovery, modern ETL, cleansing, transforming, and centralized cataloging. It’s also serverless, which means there’s no infrastructure to manage. With flexible support for all workloads like ETL, ELT, and streaming in one service, AWS Glue supports users across various workloads and types of users.

### [AWS Lake Formation Developer Guide](https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html)

> AWS Lake Formation helps you centrally govern, secure, and globally share data for analytics and machine learning.
> 
> With Lake Formation, you can manage fine-grained access control for your data lake data on Amazon Simple Storage Service (Amazon S3) and its metadata in AWS Glue Data Catalog.

### [Amazon Athena User Guide](https://docs.aws.amazon.com/athena/latest/ug/what-is.html)

> Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard [SQL](https://docs.aws.amazon.com/athena/latest/ug/ddl-sql-reference.html).
> 
> With a few actions in the AWS Management Console, you can point Athena at your data stored in Amazon S3 and begin using standard SQL to run ad-hoc queries and get results in seconds.

### [Amazon RedShift Getting Started User Guide](https://docs.aws.amazon.com/redshift/latest/gsg/new-user-serverless.html)

> Get started with Amazon Redshift Serverless data warehouses
> 
> If you are a first-time user of Amazon Redshift Serverless, we recommend that you read the following sections to help you get started using Amazon Redshift Serverless.
> 
> The basic flow of Amazon Redshift Serverless is to create serverless resources, connect to Amazon Redshift Serverless, load sample data, and then run queries on the data.
> 
> In this guide, you can choose to load sample data from Amazon Redshift Serverless or from an Amazon S3 bucket.
> 
> The sample data is used throughout the Amazon Redshift documentation to demonstrate features.

### [Amazon Sagemaker AI Developer Guide](https://docs.aws.amazon.com/sagemaker/latest/dg/gs.html?icmpid=docs_sagemaker_lp%2Findex.html)

> Amazon SageMaker AI is a fully managed machine learning (ML) service. With SageMaker AI, data scientists and developers can quickly and confidently build, train, and deploy ML models into a production-ready hosted environment.
> 
> It provides a UI experience for running ML workflows that makes SageMaker AI ML tools available across multiple integrated development environments (IDEs).
> 
> With SageMaker AI, you can store and share your data without having to build and manage your own servers. This gives you or your organizations more time to collaboratively build and develop your ML workflow, and do it sooner.
> 
> SageMaker AI provides managed ML algorithms to run efficiently against extremely large data in a distributed environment.
> 
> With built-in support for bring-your-own-algorithms and frameworks, SageMaker AI offers flexible distributed training options that adjust to your specific workflows.
> 
> Within a few steps, you can deploy a model into a secure and scalable environment from the SageMaker AI console.

### [Sagemaker AI WorkShop](https://catalog.us-east-1.prod.workshops.aws/workshops/63069e26-921c-4ce1-9cc7-dd882ff62575/en-US)

> [Welcome to SageMaker AI Immersion Day](https://catalog.us-east-1.prod.workshops.aws/workshops/63069e26-921c-4ce1-9cc7-dd882ff62575/en-US#welcome-to-sagemaker-ai-immersion-day)
> 
> Amazon SageMaker AI Immersion Day helps customers and partners by providing an end to end understanding of building ML use cases.It covers feature engineering, understanding various in-built algorithms,MLOps and the steps needed to train, tune and deploy an ML model into a production-like environment.
> 
> It guides you in bringing your own model, working through how to perform a “lift-and-shift” from an on-premises ML workload into the Amazon SageMaker AI platform. It further demonstrates advanced concepts like Model Debugging, Model Monitoring and AutoML, and provides guidance on how to evaluate your machine leaning workload through the AWS ML Well Architected lens.
> 
> The workshop is primarily made for data scientists but can be executed by any person who would like to know more about machine learning with AWS

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: **hands-on experimentation, targeted research, and community engagement**.

Don’t just read about data lakes: build one, ingest messy real-world data, deal with schema evolution, implement proper partitioning, and watch query costs drop!

Create complete data pipelines: S3 → Glue → Athena, and streaming pipelines: Kinesis → Lambda → S3 → analytics.

Train actual ML models in SageMaker with real datasets, deploy them to endpoints, send test predictions, monitor for drift, and implement retraining.

Break things systematically: send malformed data, exceed service quotas, introduce data quality issues, simulate model degradation. When you encounter concepts you don’t fully grasp, dive into AWS documentation, explore the AWS Big Data Blog, study data lake and MLOps patterns from AWS Prescriptive Guidance, dissect open-source data engineering projects, and read ML production incident reports to learn from others’ mistakes.

But here’s where the magic multiplies: bring your questions to learning communities, engage in debates about batch vs streaming tradeoffs, share your data pipeline optimizations, and most importantly, answer questions from fellow learners.

Teaching is the ultimate test of understanding – when you can explain why Parquet reduces Athena costs by 90%, walk someone through debugging Glue job failures, help optimize someone’s Redshift queries from minutes to seconds, or guide a team through deploying their first production ML model with proper monitoring, you’re not just helping them; you’re cementing your own expertise.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._


# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Data Analytics, AI & Machine Learning](https://ntombizakhona.medium.com/data-analytics-ai-machine-learning-c291ee34e5c8)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**29 November 2025**
