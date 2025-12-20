_Week Seven_

# Infrastructure as Code & DevOps

## The 12-Week AWS Workshop Challenge with Gerard Kounofo Njiti
------------------------------------------------------------

After mastering [Serverless & Event-Driven Architectures](https://medium.com/@ntombizakhona/serverless-event-driven-architecture-c29a6aa04536): building Lambda functions, orchestrating workflows with Step Functions, designing event-driven systems with EventBridge — the next critical evolution in your AWS journey is **Infrastructure as Code (IaC) and DevOps** practices.

You can architect perfect serverless systems, but without automation, every deployment is risky, every environment is inconsistent, and scaling across teams becomes chaos.

Infrastructure as Code transforms _“click and hope”_ into **“commit and deploy.”** DevOps practices turn _“works on my machine”_ into **“works in production, repeatedly, safely.”**

This week’s focus on CloudFormation, AWS CDK, Terraform, CodePipeline, CodeBuild, and GitOps represents the foundation of modern cloud operations: environments that are version-controlled, repeatable, testable, and auditable.

Where infrastructure changes go through the same rigorous review process as application code. Where deployments happen dozens of times per day without fear. Where disaster recovery means running a script, not heroic manual effort.

The shift from manual infrastructure to automated pipelines changes everything: mistakes become reproducible (and therefore fixable), knowledge becomes code (not tribal), compliance becomes automated (not manual checklists), and speed increases while risk decreases.

Rather than explaining IaC tools, this article challenges you with 20 carefully crafted questions that test your ability to design real automation strategies. These aren’t theoretical — they’re the questions you’ll face when choosing between CloudFormation and Terraform, designing CI/CD pipelines, managing multi-account deployments, or explaining rollback strategies to stakeholders.

Try answering each question before researching. Better yet, build complete IaC templates and working pipelines, then document your architecture decisions in your own article, if you want…

20 Essential Questions on AWS IaC & DevOps
------------------------------------------

### CloudFormation and AWS CDK

**1.** You need to deploy the same application stack across dev, staging, and production environments with different configurations (instance sizes, database capacity, security settings). Should you use CloudFormation with parameters, AWS CDK with context values, or separate templates per environment? What are the tradeoffs in maintainability, type safety, and drift risk?

**2.** Your team has Python and TypeScript developers who are comfortable with code but struggle with YAML/JSON. Should you adopt AWS CDK (infrastructure defined in programming languages) or stick with CloudFormation templates? How does CDK’s abstraction and type safety compare to CloudFormation’s explicit control and broader AWS service coverage?

**3.** You’re deploying a multi-tier application: VPC → RDS database → Lambda functions → API Gateway. If you put everything in one CloudFormation stack, updates become risky and slow. How do you structure this as multiple stacks using CloudFormation exports/imports, and how do you prevent circular dependencies that block deployments?

**4.** During a CloudFormation stack update, AWS determines that your RDS database needs replacement (instance class changed). This would cause data loss and hours of downtime. How do you prevent this catastrophic replacement using DeletionPolicy: Retain, RDS snapshots, blue-green database deployments, or update policies — and when is replacement actually the right choice?

**5.** Your CloudFormation template works perfectly in your AWS account but fails when others try to deploy it. How do you make templates portable across accounts and regions using pseudo parameters (AWS::Region, AWS::AccountId), mappings for region-specific AMIs, and Conditions for environment-specific resources?

### Terraform on AWS

**6.** You’re managing AWS infrastructure with Terraform across 5 AWS accounts (dev, staging, prod, security, shared-services). How do you structure Terraform state (separate state files per account/environment), manage state locking with DynamoDB, and secure state files in S3 with encryption and versioning?

**7.** Multiple teams are copying and pasting the same Terraform code for VPCs, security groups, and IAM roles. How do you create reusable Terraform modules, version them properly (semantic versioning), and distribute them via private module registry or Git repositories to eliminate code duplication?

**8.** Terraform wants to destroy and recreate your production database because you changed a minor configuration. How do you use lifecycle rules (create_before_destroy, prevent_destroy, ignore_changes) to control resource replacement behavior, and when would you intentionally force replacement versus applying changes in place?

**9.** You need to import 50 existing AWS resources (created manually or via CloudFormation) into Terraform management without disrupting them. What’s the process for terraform import, how do you generate matching configuration for existing resources, and how do you validate that Terraform’s plan shows no changes after import?

**10.** Your Terraform deployment failed halfway through, leaving infrastructure in a partially created state. Some resources exist, some don’t, and the state file may be inconsistent. How do you recover using terraform refresh, manual state manipulation (terraform state rm/mv), and how do you prevent state corruption with proper locking and backup strategies?

### CodePipeline and CodeBuild

**11.** Design an end-to-end CI/CD pipeline for a Lambda-based API: code commit → automated tests → security scanning → staging deployment → approval gate → production deployment. Which AWS services handle each stage (CodeCommit/GitHub, CodeBuild, CodePipeline, Lambda/CloudFormation deploy actions), and where do you inject quality gates?

**12.** Your CodeBuild project needs to access resources in a private VPC (RDS database for integration tests, ElastiCache for caching). How do you configure CodeBuild to run in a VPC, what are the networking requirements (subnets, security groups, NAT Gateway), and what performance impact does VPC configuration have on build times?

**13.** CodePipeline supports multiple deployment strategies via CodeDeploy: all-at-once, blue/green, canary (linear, exponential). Your production Lambda API serves critical traffic and cannot afford downtime. Which deployment strategy do you choose, what CloudWatch alarms trigger automatic rollback, and how do you test rollback before you need it?

**14.** Your CodeBuild project pulls dependencies from npm, pip, and Maven repositories, and builds take 15 minutes because dependencies download every time. How do you implement build caching (local cache, S3 cache, Docker layer caching) to reduce build times, and what are the tradeoffs between cache speed and storage costs?

**15.** You need to deploy the same application to 20 different AWS accounts (one per customer in a SaaS model). How do you design CodePipeline to deploy across multiple accounts using cross-account IAM roles, maintain separate configurations per customer, and ensure deployments can be rolled back independently?

### GitOps and Continuous Deployment

**16.** Your team adopts GitOps: all infrastructure and application configuration lives in Git, and automated systems reconcile actual state with desired state in Git. How does this differ from traditional CI/CD, what tools enable GitOps on AWS (Argo CD, Flux for Kubernetes; CodePipeline for Lambda/ECS), and what are the security implications of Git as the single source of truth?

**17.** You want to deploy to production multiple times per day without manual approvals, but you need safety mechanisms to prevent bad deployments from reaching users. How do you combine automated testing (unit, integration, load), canary deployments (1% of traffic first), synthetic monitoring (CloudWatch Synthetics), and feature flags (AWS AppConfig) to enable safe continuous deployment?

**18.** A developer accidentally commits AWS credentials to your Git repository. Your GitOps pipeline automatically deploys from this repo. How do you design pipeline security to prevent credential leakage (secrets scanning with tools like git-secrets, Secrets Manager integration, IAM roles for service accounts), and what’s your incident response when credentials are exposed?

**19.** Your application deployment succeeded, but a configuration change 3 hours later broke production. How do you implement deployment versioning and rollback strategies: Git revert and redeploy, CodeDeploy rollback, blue-green environment swap, or database migration rollback — and how do you test that rollback actually works?

**20.** You’re managing Kubernetes workloads on EKS and want GitOps-based deployment. Should you use Argo CD, Flux, or AWS-native tools? How do these GitOps controllers watch Git repositories, apply changes to clusters, detect drift, and handle secrets (sealed secrets, external secrets operator, SOPS)?

Additional Resources
--------------------

### [Introduction to DevOps on AWS Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html)

> A fundamental principle of DevOps is to treat infrastructure the same way developers treat code.
> 
> Application code has a defined format and syntax.
> 
> If the code is not written according to the rules of the programming language, applications cannot be created.
> 
> Code is stored in a version management or source control system that logs a history of code development, changes, and bug fixes.
> 
> When code is compiled or built into applications, we expect a consistent application to be created, and the build is repeatable and reliable.

### [AWS CloudFormation User Guide](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

> AWS CloudFormation is a service that helps you model and set up your AWS resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS.
> 
> You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and CloudFormation takes care of provisioning and configuring those resources for you.
> 
> You don’t need to individually create and configure AWS resources and figure out what’s dependent on what; CloudFormation handles that. The following scenarios demonstrate how CloudFormation can help.

### [AWS Cloud Development Kit (AWS CDK) v2 Developer Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html)

> The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework for defining cloud infrastructure in code and provisioning it through AWS CloudFormation.

### [AWS CodePipeline User Guide](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html)

> AWS CodePipeline is a continuous delivery service you can use to model, visualize, and automate the steps required to release your software.
> 
> You can quickly model and configure the different stages of a software release process.
> 
> CodePipeline automates the steps required to release your software changes continuously.

### [AWS CodeBuild User Guide](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html)

> AWS CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy.
> 
> CodeBuild eliminates the need to provision, manage, and scale your own build servers.
> 
> It provides prepackaged build environments for popular programming languages and build tools such as Apache Maven, Gradle, and more.
> 
> You can also customize build environments in CodeBuild to use your own build tools.
> 
> CodeBuild scales automatically to meet peak build requests.

### [AWS CodeDeploy User Guide](https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html)

> CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances, serverless Lambda functions, or Amazon ECS services.

### [DevOps Guidance AWS Well-Architected](https://docs.aws.amazon.com/wellarchitected/latest/devops-guidance/devops-guidance.html)

> Drawing from Amazon’s own transformative journey and the expertise gained by AWS in managing cloud services at global scale, the AWS Well-Architected Framework DevOps Guidance offers a structured approach that organizations of all sizes can follow to cultivate a high-velocity, security-focused culture capable of delivering substantial business value using modern technologies and DevOps best practices.

### [Practicing Continuous Integration and Continuous Delivery on AWS Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/practicing-continuous-integration-continuous-delivery/welcome.html)

> This paper explains the features and benefits of using continuous integration and continuous delivery (CI/CD) along with Amazon Web Services (AWS) tooling in your software development environment.
> 
> Continuous integration and continuous delivery are best practices and a vital part of a DevOps initiative.

### [Introduction to Terraform on AWS Workshop](https://catalog.workshops.aws/terraform101/en-US)

> In this workshop, you will leverage Terraform as the Infrastructure as Code (**IaC**) tool to deploy a simple `Wordpress` application into AWS.

### [Building CI/CD pipelines for Lambda canary deployments using AWS CDK](https://catalog.us-east-1.prod.workshops.aws/workshops/5195ab7c-5ded-4ee2-a1c5-775300717f42/en-US)

> This workshop will guide you through the steps from creating your first AWS CDK project (using Python)

### [Gerard Kounofo Njiti](https://www.linkedin.com/in/gerardnjiti/)

> A Technical Consultant (Software & AWS Cloud Engineer) at NTT DATA DACH, Germany
> 
> Where he specializes in software development and cloud infrastructure provisioning.

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: **hands-on experimentation, targeted research, and community engagement.**

Don’t just read about CloudFormation drift — deliberately create drift by manually modifying resources in the console, run drift detection, and practice remediation strategies.

Build a complete CI/CD pipeline from scratch: commit infrastructure code, watch it flow through build/test/deploy stages, intentionally break deployments, and practice rollback procedures. Test disaster recovery by deleting an entire environment and recreating it from your IaC templates — time how long it takes and identify gaps in your automation.

When you encounter concepts you don’t fully grasp, dive into AWS documentation, study the AWS DevOps Guidance whitepapers, explore open-source IaC patterns on GitHub, and dissect production-grade Terraform modules to understand how experienced engineers structure reusable infrastructure.

But here’s where the magic multiplies: bring your questions to learning communities, engage in debates about CloudFormation vs Terraform tradeoffs, share your pipeline designs for feedback, and most importantly, answer questions from fellow learners.

Teaching is the ultimate test of understanding — when you can explain why blue-green deployments reduce risk better than in-place updates, walk someone through debugging a failed CloudFormation stack, help optimize someone’s build times from 20 minutes to 3 minutes, or guide a team through their first automated deployment, you’re not just helping them; you’re cementing your own expertise.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._


# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Infrastructure As Code & DevOps](https://ntombizakhona.medium.com/infrastructure-as-code-devops-2a6908b7762c)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**15 November 2025**
