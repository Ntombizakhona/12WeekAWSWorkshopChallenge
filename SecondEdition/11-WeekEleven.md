_Week Eleven_

# Enterprise Security, Governance & FinOps

## The 12-Week AWS Workshop Challenge with Emil Lubikowski & Esther Awudu
----------------------------------------------------------------------

After mastering [Monitoring, Logging & Observability](https://medium.com/monitoring-logging-and-observability-760cb718dbe1?postPublishedType=repub): understanding how to see what’s happening in your systems — the next evolution is learning how to govern what’s allowed to happen and ensure it’s financially sustainable.

This is the layer where _individual builders_ become **organizational thinkers.**

[Observability](https://medium.com/monitoring-logging-and-observability-760cb718dbe1?postPublishedType=repub) tells you _what_ is happening. Security and Governance decide what **should** happen. FinOps ensures what happens doesn’t bankrupt the business.

This week’s focus on **AWS Organizations, Control Tower, GuardDuty, Security Hub, WAF, Shield, and FinOps** represents the foundation of enterprise cloud operations.

It’s where real-world constraints collide with technical possibilities: compliance requirements that override convenience, shared accounts that need isolation, guardrails that prevent well-meaning engineers from creating security incidents, and the uncomfortable reality that cloud costs drift silently without discipline.

These aren’t just “enterprise” concerns, they’re the concerns of any team that wants to operate AWS responsibly beyond the proof-of-concept phase.

Rather than explaining these services, this article challenges you with **25** carefully crafted questions that test your ability to design governance structures, implement security controls, protect applications, and optimize costs.

Try answering each question before researching. Better yet, build the governance structures, enable the security services, and create the cost dashboards, then document your decisions in your own article, if you want…

25 Essential Questions on Enterprise Security, Governance & FinOps
------------------------------------------------------------------

### AWS Organizations & Control Tower (Governance at Scale)

**1.** Why do mature AWS environments use multiple accounts instead of one “big account,” and how do accounts reduce blast radius, simplify billing, and improve security boundaries compared to using multiple VPCs in one account?

**2.** How would you design an AWS Organizations account structure for a mid-size company (dev, staging, prod, security, log archive, shared services)? What workloads belong in which account, and why?

**3.** What is the difference between AWS Organizations Service Control Policies (SCPs) and IAM policies? What can SCPs prevent even if IAM would otherwise allow it?

**4.** If a developer has AdministratorAccess in an account, can they still be blocked from disabling CloudTrail or deleting S3 buckets? How do SCPs and Control Tower guardrails enforce “non-negotiables”?

**5.** What does AWS Control Tower actually set up for you (landing zone, accounts, guardrails, audit/logging accounts), and when is Control Tower a better choice than “rolling your own” multi-account governance?

**6.** What’s the practical difference between Control Tower preventive guardrails (SCP-based) and detective guardrails (Config-based)? When do you need each?

**7.** How do you implement centralized logging in an enterprise AWS environment? What should flow into a log archive account (CloudTrail, Config, VPC Flow Logs), and how do you protect it from deletion or tampering?

**8.** You need to allow teams to build fast, but you also need consistent baseline security. How do you balance autonomy vs governance using account vending, guardrails, standard IaC templates, and shared services?

### GuardDuty & Security Hub (Detection and Posture Management)

**9.** What is GuardDuty actually detecting (e.g., suspicious API calls, compromised credentials, crypto mining, port scanning), and why is it valuable even if you already have CloudWatch logs and CloudTrail?

**10.** GuardDuty alerts that an IAM access key is being used from an unusual location and is calling high-risk APIs. What are the first three actions you take, and what evidence do you gather before disabling anything?

**11.** What is the difference between GuardDuty (threat detection) and Security Hub (posture management + aggregation)? How do they complement each other?

**12.** Security Hub can aggregate findings from multiple services (GuardDuty, Inspector, Macie, etc.). What’s the benefit of centralizing findings, and what becomes harder if each service is reviewed separately?

**13.** What are security standards in Security Hub (AWS Foundational Security Best Practices, CIS benchmarks), and how do you choose which standard(s) to enforce in different environments?

**14.** A Security Hub control fails: “S3 buckets should prohibit public access.” How do you respond in a way that is technically correct _and_ doesn’t break legitimate workloads (e.g., public websites, public assets)?

**15.** How do you operationalize Security Hub findings so they don’t become noise? What’s your strategy for severity thresholds, ticketing integration, automation, and owner assignment?

### AWS WAF & AWS Shield (Protecting Applications and Availability)

**16.** What is AWS WAF protecting you from that security groups and NACLs do not? Give examples of application-layer threats (SQL injection, XSS, bot traffic) versus network-layer controls.

**17.** Where can you attach AWS WAF (CloudFront, ALB, API Gateway), and how does placement change what you can protect and how much latency you introduce?

**18.** How do managed rule groups in WAF (AWS Managed Rules, partner rules) compare to writing custom rules? When do managed rules give enough protection, and when do you need custom logic?

**19.** What are WAF rate-based rules, and how do you use them to reduce brute force attacks or bot-driven scraping without blocking legitimate high-traffic spikes?

**20.** What is AWS Shield Standard versus Shield Advanced? When is Shield Advanced worth paying for (cost, DDoS Response Team, financial protection), and what does it _not_ replace (WAF rules, good architecture)?

**21.** If you run a critical public-facing application, what’s your complete “availability protection” stack beyond WAF/Shield — CloudFront, multi-AZ, auto scaling, load balancing, circuit breakers, and failover?

### FinOps & Cost Optimization (Engineering with Financial Discipline)

**22.** What is FinOps in the cloud context, and why is it not just a finance team responsibility? What roles do engineering, product, and finance each play?

**23**. If your AWS bill increased by 40% this month with no user growth, what are the first places you investigate (Cost Explorer, CUR, anomaly detection, top services by spend), and what are the most common root causes (idle resources, data transfer, over-provisioned instances, logging explosions)?

**24**. How do you design cost visibility and accountability from day one using tagging strategy, cost allocation tags, AWS Organizations consolidated billing, and chargeback/showback models?

**25.** These are some of the the major cost optimization levers across AWS:

1.  Rightsizing
2.  Reserved Instances
3.  Savings Plans
4.  Spot Instances
5.  Lifecycle Policies & Intelligent Tiering
6.  Data Transfer Optimization (CloudFront, VPC endpoints, same-AZ traffic)
7.  Cost Control through Monitoring, Logging & Observability

…so when should you consider using each?

Additional Resources
--------------------

### [Emil Lubikowski](https://www.linkedin.com/in/emil-lubikowski-69b25092/)

> A DevOps Engineer, AWS & Terraform Specialist, Xebia AWS Guild Master
> [Emil](https://www.linkedin.com/in/emil-lubikowski-69b25092/) brings a decade of hands-on experience building and optimizing cloud systems across global teams.
> 
> From AWS infrastructure to CI/CD and FinOps, he’s passionate about helping engineers understand how small decisions impact performance, security, and cost.

### [Esther Awudu](https://www.linkedin.com/in/esther-awudu-33690320b/)

> A Cloud Instructor, AWS Practitioner, DevSecOps & IaC Advocate
> [Esther](https://www.linkedin.com/in/esther-awudu-33690320b/) has trained 500+ learners across Africa, helping them move from beginners to confident, job-ready cloud builders.
> 
> With a gift for simplifying complex topics, she brings practical insights in cloud security, Terraform, and DevSecOps — all rooted in real-world experience.

### [AWS Organizations User Guide](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

> **Centrally manage your environment as you scale your AWS resources**
> 
> AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources.
> 
> Using Organizations, you can create accounts and allocate resources, group accounts to organize your workflows, apply policies for governance, and simplify billing by using a single payment method for all of your accounts.

### [AWS Control Tower User Guide](https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html)

> AWS Control Tower offers a straightforward way to set up and govern an AWS multi-account environment, following prescriptive best practices. AWS Control Tower _orchestrates_ the capabilities of several other [AWS services](https://docs.aws.amazon.com//controltower/latest/userguide/integrated-services.html), including AWS Organizations, AWS Service Catalog, and AWS IAM Identity Center, to build a landing zone in less than an hour. Resources are set up and managed on your behalf.
> 
> AWS Control Tower orchestration extends the capabilities of AWS Organizations. To help keep your organizations and accounts from _drift_, which is divergence from best practices, AWS Control Tower applies controls (sometimes called _guardrails_). For example, you can use controls to help ensure that security logs and necessary cross-account access permissions are created, and not altered.
> 
> If you are hosting more than a handful of accounts, it’s beneficial to have an orchestration layer that facilitates account deployment and account governance. You can adopt AWS Control Tower as your primary way to provision accounts and infrastructure. With AWS Control Tower, you can more easily adhere to corporate standards, meet regulatory requirements, and follow best practices.

### [Amazon Guard Duty User Guide](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html)

> Amazon GuardDuty is a threat detection service that continuously monitors, analyzes, and processes AWS data sources and logs in your AWS environment. GuardDuty uses threat intelligence feeds, such as lists of malicious IP addresses and domains, file hashes, and machine learning (ML) models to identify suspicious and potentially malicious activity in your AWS environment. The following list provides an overview of potential threat scenarios that GuardDuty can help you detect:
> 
> Compromised and exfiltrated AWS credentials.
> 
> Data exfiltration and destruction that can lead to a ransomware event. Unusual patterns of login events in the supported engine versions of Amazon Aurora and Amazon RDS databases, that indicate anomalous behavior.
> 
> Unauthorized cryptomining activity in your Amazon Elastic Compute Cloud (Amazon EC2) instances and container workloads.
> 
> Presence of malware in your Amazon EC2 instances and container workloads, and newly uploaded files in your Amazon Simple Storage Service (Amazon S3) buckets.
> 
> Operating system-level, networking, and file events that indicate unauthorized behavior on your Amazon Elastic Kubernetes Service (Amazon EKS) clusters, Amazon Elastic Container Service (Amazon ECS) — AWS Fargate tasks, and Amazon EC2 instances and container workloads.

### [AWS Security Hub User Guide](https://docs.aws.amazon.com/securityhub/latest/userguide/what-are-securityhub-services.html)

> AWS Security Hub and AWS Security Hub CSPM are AWS services that protect your cloud environment. The services complement each other. When used together, they provide valuable insight into the security posture of your AWS environment.

### [AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html)

> AWS WAF is a web application firewall that lets you monitor the HTTP(S) requests that are forwarded to your protected web application resources. You can protect the following resource types:
> 
> Amazon CloudFront distribution
> 
> Amazon API Gateway REST API
> 
> Application Load Balancer
> 
> AWS AppSync GraphQL API
> 
> Amazon Cognito user pool
> 
> AWS App Runner service
> 
> AWS Verified Access instance
> 
> AWS Amplify
> 
> AWS WAF lets you control access to your content. Based on criteria that you specify, such as the IP addresses that requests originate from or the values of query strings, the service associated with your protected resource responds to requests either with the requested content, with an HTTP 403 status code (Forbidden), or with a custom response.

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: **hands-on experimentation, targeted research, and community engagement.**

Don’t just read about SCPs: write them, test them, break things intentionally, and learn what they actually block.

Enable GuardDuty, generate sample findings, and practice incident response procedures.

Configure Security Hub, review every failing control, understand why it matters, and document your exception process.

Attach WAF to a test application, simulate attacks, and watch rules trigger.

Create cost dashboards, set anomaly alerts, and investigate your own bill like a detective.

When concepts feel unclear, dive into AWS documentation, study the AWS Security Reference Architecture, read FinOps Foundation materials.

But here’s where the magic multiplies: bring your questions to learning communities, engage in debates about multi-account strategies, share your incident response runbooks, and most importantly, help others understand these concepts.

Teaching is the ultimate test of understanding: when you can explain why SCPs and IAM policies aren’t the same thing, walk someone through it.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Enterprise Security, Governance & FinOps](https://ntombizakhona.medium.com/enterprise-security-governance-finops-e3d741036651)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**13 December 2025**
