_Week Five_

# Database Services & Architecture

## The 12-Week AWS Workshop Challenge with Eric Nyuydze Wiryenkfea
---------------------------------------------------------------

After mastering [Storage Solutions & Data Management](https://medium.com/storage-solutions-data-management-68a0441eaf0a): understanding S3 lifecycle policies, EBS volumes, EFS file systems, and archival strategies — the next critical layer in your AWS journey is **database services and architecture**.

You can store files perfectly, but without the right database strategy, your applications can’t efficiently query, update, or scale the structured data that powers modern software.

Storage is about _where_ you put data. Databases are about _how_ you structure, access, and guarantee the integrity of that data under load.

This week’s focus on **RDS, Aurora, DynamoDB, ElastiCache, MemoryDB, and migration strategies** represents the foundation of how applications persist and retrieve data — from traditional relational workloads requiring ACID transactions to NoSQL systems demanding millisecond latency at massive scale.

The wrong database choice costs you in three ways: **performance** (_slow queries frustrate users_), **cost** (_inefficient databases burn budget_), and **operational complexity** _(managing the wrong database type consumes engineering time)_. The right choice makes applications fast, resilient, and cost-effective.

Rather than explaining database services, this article challenges you with **20 carefully crafted questions** that test your ability to make real database architecture decisions.

These aren’t theoretical — they’re the questions you’ll face when choosing between SQL and NoSQL, designing for scale, optimizing query performance, or migrating legacy databases to the cloud.

Try answering each question before researching. Better yet, architect complete database solutions with diagrams and publish them as your own article, if you want…

20 Essential Questions on AWS Database Services & Architecture
--------------------------------------------------------------

### RDS and Aurora for Relational Data

**1.** Your e-commerce application requires strict ACID transactions, complex joins across multiple tables, and relational integrity constraints. Should you use RDS or DynamoDB, and what specific relational workload characteristics make RDS the right choice despite its operational complexity?

**2.** You’re choosing between Amazon RDS (managed MySQL) and Amazon Aurora (MySQL-compatible). Both support the same SQL syntax, but Aurora costs 20% more. What architectural advantages does Aurora provide that justify the cost (**hint:** _storage architecture, read replicas, failover time, and backtrack capability_)?

**3.** Your application’s read traffic is 10x higher than write traffic, and users across multiple regions complain about slow queries. How do RDS Read Replicas solve this, how many can you create, and what is the replication lag you should expect between primary and replica?

**4.** Your database crashed at 3 AM, and your application is down. You have automated backups enabled with a 7-day retention period. How does RDS point-in-time recovery work, what’s the difference between automated backups and manual snapshots, and what’s the maximum granularity for recovery (1 second, 5 minutes, or 1 hour)?

**5.** Your RDS instance is experiencing CPU throttling at 95% during peak hours, causing slow queries and timeouts. What are your three options to solve this and how do you decide which approach to take first?

### Aurora Specific Scenarios

**6.** What is Aurora’s storage architecture fundamentally different from traditional RDS databases? Explain how Aurora’s shared storage layer, 6-way replication across 3 AZs, and 10GB incremental backup work, and why this makes Aurora more resilient to failures.

**7.** Your application made a bad database migration at 9:00 AM that corrupted data, but you didn’t notice until 11:00 AM. How does Aurora Backtrack let you “rewind” the database to 9:00 AM without restoring from backup, and what are the limitations (time window, workload impact)?

**8.** You need to run analytics queries on production data without impacting your transactional application’s performance. How do Aurora Serverless v2 and Aurora Global Database solve different aspects of this problem, and when would you use each?

**9.** Aurora supports up to 15 read replicas, but how does Aurora’s reader endpoint differ from connecting to individual read replicas, and how does it automatically load balance queries across available replicas?

**10.** Your startup is growing unpredictably — some days you have 10 users, some days 10,000. How does Aurora Serverless v2 automatically scale compute capacity (ACUs) based on demand, and how do scaling cooldown periods and capacity units affect cost and performance?

### DynamoDB for NoSQL Workloads

**11.** Your application requires single-digit millisecond response times for 100,000 requests per second, flexible schema, and doesn’t need complex joins or transactions. Why is DynamoDB a better fit than RDS for this workload, and what are the architectural tradeoffs you’re accepting (query flexibility, consistency models)?

**12.** What is the difference between DynamoDB’s partition key and sort key, and why is choosing the right partition key critical for performance? Provide an example where a poor partition key choice causes “hot partitions” that throttle requests.

**13.** You need to query DynamoDB items by an attribute that isn’t your primary key (e.g., find all orders by customer email when your primary key is order ID). How do Global Secondary Indexes (GSI) and Local Secondary Indexes (LSI) differ, and what cost and performance implications does each have?

**14.** DynamoDB offers two capacity modes: Provisioned (you specify RCUs/WCUs) and On-Demand (pay per request). When would you choose Provisioned over On-Demand, and how do you calculate the right number of Read Capacity Units (RCUs) and Write Capacity Units (WCUs) for predictable workloads?

**15.** Your application writes critical financial transactions to DynamoDB and cannot tolerate any data loss. How does DynamoDB Point-in-Time Recovery (PITR) protect against accidental deletes, how does it differ from on-demand backups, and what is the recovery time objective (RTO) for each approach?

### ElastiCache and MemoryDB

**16.** Your application makes the same database query 1,000 times per second, and each query takes 50ms to execute. How does Amazon ElastiCache (Redis or Memcached) reduce database load and latency by caching results in memory, and what patterns (cache-aside, write-through, write-behind) should you use for different data consistency requirements?

**17.** You’re choosing between ElastiCache for Redis and ElastiCache for Memcached. Both provide in-memory caching, but Redis is more expensive. What advanced Redis features (data structures, persistence, pub/sub, transactions) justify the cost for workloads beyond simple key-value caching?

**18.** Your application requires microsecond read latency and Redis-compatible API, but also needs data durability and can’t lose cached data during node failures. How does Amazon MemoryDB for Redis differ from ElastiCache for Redis in architecture, durability guarantees, and use cases?

**19.** ElastiCache offers two node types: cache.t3 (burstable, low cost) and cache.r6g (memory-optimized, higher cost). How do you determine the right instance type based on cache hit rate, eviction rate, and memory requirements, and what CloudWatch metrics help you optimize?

**20.** Your Redis cluster is experiencing high latency during peak traffic. How do you scale ElastiCache horizontally using cluster mode (sharding) versus vertically (larger nodes), and what are the tradeoffs in complexity, cost, and downtime during scaling operations?

Bonus Questions
---------------

### Database Migration Strategies

**21.** You have a 5TB on-premises Oracle database that needs to migrate to AWS. What are the three AWS database migration approaches (rehosting to RDS, replatforming to Aurora PostgreSQL, refactoring to DynamoDB), and how do schema compatibility, downtime tolerance, and application changes influence your choice?

**22.** AWS Database Migration Service (DMS) supports ongoing replication during migration (CDC — Change Data Capture). How does DMS minimize downtime by keeping source and target databases synchronized during the cutover, and what is the typical migration process (full load, CDC, cutover)?

**23.** Your MySQL database uses features specific to MySQL (triggers, stored procedures, specific functions). How does the AWS Schema Conversion Tool (SCT) help when migrating to Aurora PostgreSQL, and what categories of schema objects can it convert automatically versus requiring manual refactoring?

**24.** You’re migrating a database with minimal downtime tolerance (less than 5 minutes). How do you design a blue-green deployment strategy using DMS for continuous replication, Route 53 for DNS failover, and application-level read/write splitting to achieve near-zero downtime?

**25.** Your migration succeeded, but the application in AWS is slower than on-premises. What are common post-migration performance issues (network latency, missing indexes, inefficient queries, undersized instances), and how do you use AWS Performance Insights and CloudWatch to diagnose and fix them?

Additional Resources
--------------------

### [Amazon RDS and Aurora Documentation](https://docs.aws.amazon.com/rds/)

> Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud.
> 
> It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks.
> 
> Amazon Aurora is a fully managed relational database engine that’s built for the cloud and compatible with MySQL and PostgreSQL. Amazon Aurora is part of Amazon RDS.

### [Amazon DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

> Amazon DynamoDB is a serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale.
> 
> DynamoDB addresses your needs to overcome scaling and operational complexities of relational databases. DynamoDB is purpose-built and optimized for operational workloads that require consistent performance at any scale.

### [Amazon Aurora User Guide for Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html)

> Amazon Aurora (Aurora) is a fully managed relational database engine that’s compatible with MySQL and PostgreSQL.
> 
> You already know how MySQL and PostgreSQL combine the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.
> 
> The code, tools, and applications you use today with your existing MySQL and PostgreSQL databases can be used with Aurora.
> 
> With some workloads, Aurora can deliver up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications.

### [Amazon ElastiCache Documentation](https://docs.aws.amazon.com/elasticache/)

> Amazon ElastiCache makes it easy to set up, manage, and scale distributed in-memory cache environments in the AWS Cloud. I
> 
> t provides a high-performance, resizable, and cost-effective in-memory cache, while removing the complexity associated with deploying and managing a distributed cache environment.
> 
> ElastiCache works with the Valkey, Redis OSS, and Memcached engines. To see which works best for you, see the “Comparing Valkey, Redis OSS, and Memcached self-designed caches” topic in the user guide.

### [Amazon MemoryDB Documentation](https://docs.aws.amazon.com/memorydb/)

> Amazon MemoryDB is a fully managed, Valkey- and Redis OSS-compatible, in-memory database.
> 
> It delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures.

### [AWS Database Migration Service Documentation](https://docs.aws.amazon.com/dms/)

> AWS Database Migration Service (AWS DMS) is a web service you can use to migrate data from your database that is on-premises, on an Amazon Relational Database Service (Amazon RDS) DB instance, or in a database on an Amazon Elastic Compute Cloud (Amazon EC2) instance to a database on an AWS service.
> 
> These services can include a database on Amazon RDS or a database on an Amazon EC2 instance.
> 
> You can also migrate a database from an AWS service to an on-premises database.
> 
> You can migrate between source and target endpoints that use the same database engine, such as from an Oracle database to an Oracle database. You can also migrate between source and target endpoints that use different database engines, such as from an Oracle database to a PostgreSQL database.

### [AWS Purpose Built Databases Workshop](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/93f64257-52be-4c12-a95b-c0a1ff3b7e2b/)

> A test tutorial for developers, DBAs and data engineers to get hands-on experience on how to migrate relational data to AWS purpose-built databases such as Amazon DynamoDB and Amazon Aurora using AWS DMS and build data processing applications on top of it.

### [Eric Nyuydze Wiryenkfea](https://www.linkedin.com/in/eric-nyuydze-wiryenkfea-198862162/)

> Hi, I’m Eric Nyuydze Wiryenkfea, a passionate Cloud and DevOps Engineer with over 5 years of experience transforming mission-critical AWS deployments into scalable, secure, and efficient solutions. I specialize in leveraging cutting-edge technologies to empower teams, streamline processes, and accelerate software delivery cycles.
> 
> From a non tech background and obsession for empowering others, I’ve trained and guided 100+ students from diverse backgrounds in AWS, Kubernetes, Docker, Terraform, Ansible, and CI/CD. I also actively contribute to the Cloud Native and DevOps community through speaking engagements, workshops, and hands-on labs.

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: **hands-on experimentation, targeted research, and community engagement.**

Don’t just read about DynamoDB partition keys—create tables with different designs, load test them, watch as hot partitions throttle requests, and learn from the pain.

When you encounter concepts you don’t fully grasp, dive into AWS documentation, database best practices whitepapers, and Well-Architected reviews to build deeper understanding.

But here’s where the magic multiplies: bring your questions to learning communities, engage in discussions, and most importantly, answer questions from fellow learners.

Teaching is the ultimate test of understanding—when you can explain why Aurora’s storage architecture provides better resilience than standard RDS or walk someone through designing a DynamoDB table with proper partition key distribution, you’re not just helping them; you’re cementing your own expertise.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Database Services & Architecture](https://ntombizakhona.medium.com/database-services-architecture-ba69d0cf9690)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**01 November 2025**
