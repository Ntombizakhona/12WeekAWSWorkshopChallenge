_Week Eight_

# Container Orchestration & Kubernetes

## The 12-Week AWS Workshop Challenge with Virginia Ansah
------------------------------------------------------

After mastering [Infrastructure as Code & DevOps](https://medium.com/infrastructure-as-code-devops-2a6908b7762c) practices: building CloudFormation stacks, writing Terraform modules, designing CI/CD pipelines, and automating deployments – the next evolution in your AWS journey is **Container Orchestration & Kubernetes.**

You can automate infrastructure perfectly, but without containerization, your applications remain tightly coupled to specific servers, difficult to scale efficiently, and slow to deploy.

Containers change the deployment paradigm: from “_configure a server for this application_” to “**run this immutable package anywhere**.” Orchestration changes operations: from “_manage individual containers_” to “**declare desired state and let the platform handle everything.**”

This week’s focus on **Docker, Amazon ECS, AWS Fargate, Amazon EKS (Kubernetes), and AWS App Mesh** represents the foundation of modern cloud-native applications: workloads that scale from zero to thousands of instances automatically, deploy in seconds not minutes, and recover from failures without human intervention.

The container revolution transforms everything:

1.  **Applications become portable:** Same container runs locally and in production.
2.  **Deployments become instant:** No server configuration
3.  **Scaling becomes automatic:** Orchestrators manage capacity
4.  **Resource utilization improves dramatically:** Pack more workloads per server

Rather than explaining container services, this article challenges you with **20 carefully crafted questions** that test your ability to design real container architectures. These aren’t theoretical – they’re the questions you’ll face when choosing between ECS and EKS, optimizing container images, designing service meshes, or explaining scaling strategies to stakeholders.

Try answering each question before researching. Better yet, build complete containerized applications with orchestration, then document your architecture decisions in your own article, if you want…

20 Essential Questions on AWS Container Orchestration & Kubernetes
------------------------------------------------------------------

### Docker Fundamentals and Best Practices

**1.** Your Docker image is 2.5GB and takes 10 minutes to pull in production, causing slow deployments and wasted bandwidth. How do you optimize image size using multi-stage builds, Alpine/distroless base images, and proper layer ordering to reduce it to under 200MB, and what security benefits does a smaller image provide beyond speed?

**2.** Your container runs as root user (UID 0) with full capabilities, creating massive security risk if compromised. How do you implement least-privilege containers: running as non-root user, dropping unnecessary Linux capabilities, setting read-only root filesystem, and using USER directive in Dockerfile – and what attacks does this prevent?

**3.** Every code change triggers a full Docker rebuild taking 15 minutes because layers aren’t cached effectively. How do you structure your Dockerfile to maximize cache hits (dependencies before code, proper COPY ordering, .dockerignore), and how does BuildKit improve build performance and reproducibility?

**4.** Your application needs database passwords and API keys. Should you bake them into the image, pass via environment variables, or inject from AWS Secrets Manager/Systems Manager Parameter Store? How do you prevent secrets from appearing in images, logs, or `docker history`, and what’s the security model for runtime secret injection?

**5.** Your containerized application writes logs to files inside the container, making debugging production issues nearly impossible. How do you implement proper observability: logging to stdout/stderr for CloudWatch Logs, structured JSON logging, health check endpoints, graceful shutdown handling (SIGTERM), and metrics export (Prometheus/OpenTelemetry)?

### Amazon ECS and AWS Fargate

**6.** You’re choosing between AWS Fargate (serverless containers) and ECS on EC2 (managed instances). Fargate costs more per vCPU/GB but requires zero server management. ECS on EC2 is cheaper at scale but requires managing instances, patching, and capacity. At what scale (CPU hours, request volume) does the cost crossover happen, and what operational factors beyond cost influence the decision?

**7.** Your ECS service experiences traffic spikes from 10 to 1,000 requests per second unpredictably. How do you design autoscaling: ECS Service Auto Scaling based on target tracking (CPU, memory, ALB request count), combined with Cluster Auto Scaling or Fargate’s automatic capacity, and what metrics trigger scale-up/scale-down events?

**8.** Your ECS tasks need to communicate with each other and with RDS databases in private subnets. How does awsvpc networking mode work, when do tasks need public IPs versus NAT Gateway, how does ECS Service Discovery (AWS Cloud Map) enable service-to-service communication, and how do you route external traffic via Application Load Balancer versus internal traffic via service discovery?

**9.** A compromised task shouldn’t be able to access other services or AWS APIs beyond its specific needs. How do you implement defense in depth: IAM Roles for Tasks (per-task permissions), task-level security groups (fine-grained network control), VPC endpoints (private ECR/Secrets Manager access), and container image scanning (Amazon ECR scan on push with blocking policies)?

**10.** You need to deploy a new version of your ECS service without downtime and with automatic rollback if errors increase. Should you use ECS rolling deployments, blue/green deployments with AWS CodeDeploy, or canary deployments? How do CloudWatch alarms trigger automatic rollback, and how do you test rollback procedures before you need them in production?

### Amazon EKS and Kubernetes

**11.** Your team is debating Amazon ECS versus Amazon EKS. ECS is simpler and AWS-native, but EKS offers Kubernetes portability and ecosystem. What specific workload requirements, team skills, and organizational factors push you toward EKS (multi-cloud strategy, complex scheduling, Kubernetes-native tooling, operator pattern, Helm charts) versus ECS (AWS-native integrations, simplicity, faster learning curve)?

**12.** You’re designing worker node strategy for EKS: managed node groups (AWS-managed EC2), self-managed nodes (full control), Karpenter (dynamic, intelligent provisioning), or EKS on Fargate (serverless pods). What are the tradeoffs in cost, operational complexity, flexibility, and scaling speed, and when would you use a combination of these approaches?

**13**. Each pod in your EKS cluster needs an IP address from your VPC. With the default VPC CNI plugin, you’ll exhaust IP addresses when scaling to 1,000+ pods. How do you solve this: VPC CNI prefix delegation (assign /28 prefixes to nodes), secondary CIDR ranges for pods, or alternative CNI plugins (Calico, Cilium) – and what’s the impact on pod density and networking performance?

**14.** Your EKS pods need fine-grained AWS permissions without sharing a single broad IAM role. How does IAM Roles for Service Accounts (IRSA) work using OIDC federation, how do you map Kubernetes service accounts to IAM roles, what’s the security model compared to node-level IAM roles, and how do you implement least privilege at the pod level?

**15**. External traffic needs to reach your Kubernetes services, which may run across multiple node groups and availability zones. Should you use the AWS Load Balancer Controller (creates ALB/NLB per Ingress), Kubernetes Service type LoadBalancer, or API Gateway? How do you handle TLS certificates (AWS Certificate Manager, cert-manager), DNS (Route 53, ExternalDNS), and cross-availability zone traffic costs?

### Kubernetes Scaling and Resilience

**16.** Your application experiences predictable daily traffic patterns (peak at noon, low at night) and unpredictable viral spikes. How do you combine Horizontal Pod Autoscaler (HPA based on CPU/memory/custom metrics), Vertical Pod Autoscaler (VPA for right-sizing), and Cluster Autoscaler or Karpenter (add/remove nodes) to handle both patterns efficiently while minimizing cost?

**17.** During a node upgrade, all pods on the node are terminated simultaneously, causing brief downtime. How do PodDisruptionBudgets prevent this by ensuring minimum replicas stay available during voluntary disruptions, how do you configure proper readiness/liveness probes so unhealthy pods don’t receive traffic, and what’s the difference between graceful shutdown and forced termination?

**18.** Your deployment updates trigger rolling updates that sometimes fail halfway through, leaving the application in a broken state with mixed versions. How do you implement safe rollouts: deployment strategies (RollingUpdate vs Recreate), health checks that pause rollouts on failures, maxUnavailable and maxSurge settings, and how do you quickly rollback using `kubectl rollout undo` or GitOps?

**19.** Network policies are disabled by default in EKS, meaning any pod can talk to any other pod and external services. How do you implement network segmentation using Kubernetes Network Policies (with Calico, Cilium, or AWS Security Groups for Pods) to enforce least-privilege communication, block egress to untrusted destinations, and create zero-trust networking within your cluster?

**20.** Your Kubernetes cluster hosts multiple teams/applications with different security, compliance, and resource requirements. How do you implement multi-tenancy: Kubernetes namespaces for logical isolation, ResourceQuotas to prevent resource hogging, LimitRanges for default resource limits, RBAC for access control, and Pod Security Standards (baseline, restricted) to enforce security policies per namespace?

Bonus Questions
---------------

> **Important**
> 
> **End of support notice: On September 30, 2026, AWS will discontinue support for AWS App Mesh. After September 30, 2026, you will no longer be able to access the AWS App Mesh console or AWS App Mesh resources.**

### Service Mesh with AWS App Mesh

**21.** Your microservices architecture has 20 services communicating with each other, and you’re manually implementing retries, timeouts, circuit breakers, and mTLS in every service’s code. When does a service mesh like AWS App Mesh justify its complexity by centralizing these cross-cutting concerns in sidecar proxies (Envoy), and what specific problems does it solve that you can’t solve with application code or API Gateway alone?

**22**. You want to implement mutual TLS (mTLS) between all services for zero-trust networking. How does AWS App Mesh automatically configure Envoy sidecars to establish mTLS using certificates from AWS Certificate Manager Private CA, how do you enforce that only mesh-enrolled services can communicate, and what’s the performance impact of encryption on service-to-service calls?

**23**. You’re deploying a new version of a critical service and want to test it with 5% of production traffic before full rollout. How do you implement weighted routing in AWS App Mesh using virtual routers and routes to split traffic between versions, what CloudWatch metrics indicate whether the canary is healthy, and how do you quickly shift traffic back if errors increase?

**24.** Your App Mesh spans services running on both Amazon ECS and Amazon EKS. How does Envoy proxy integration differ between ECS (sidecar container in task definition) and EKS (Envoy injected via mutating webhook), and what challenges arise when services on different compute platforms need to communicate through the mesh?

**25.** App Mesh provides retry logic, timeout configuration, and circuit breaking at the mesh level rather than in application code. How do you design these resilience patterns: exponential backoff retries with maximum attempts, per-request and per-retry timeouts, circuit breaker thresholds (consecutive errors, ejection time), and how do you test that these protections actually prevent cascading failures under load?

Additional Resources
--------------------

### [AWS Containers Immersion Day Workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/ed1a8610-c721-43be-b8e7-0f300f74684e/en-US)

> Running containers in the AWS Cloud allows you to build robust, scalable applications and services.
> 
> Join AWS for a deep dive into running containers using Amazon EKS, Amazon Elastic Container Service (ECS), and AWS Fargate.
> 
> Throughout this workshop, our container experts will host live demonstrations and hands-on labs covering what you need to know to get started and build modern applications using containers in the cloud.

### [Amazon Elastic Container Service Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)

> Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service that helps you easily deploy, manage, and scale containerized applications. As a fully managed service, Amazon ECS comes with AWS configuration and operational best practices built-in.
> 
> It’s integrated with both AWS tools, such as Amazon Elastic Container Registry, and third-party tools, such as Docker.
> 
> This integration makes it easier for teams to focus on building the applications, not the environment.
> 
> You can run and scale your container workloads across AWS Regions in the cloud, and on-premises, without the complexity of managing a control plane.

### [Amazon ECR User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)

> Amazon Elastic Container Registry (Amazon ECR) is an AWS managed container image registry service that is secure, scalable, and reliable. Amazon ECR supports private repositories with resource-based permissions using AWS IAM.
> 
> This is so that specified users or Amazon EC2 instances can access your container repositories and images.
> 
> You can use your preferred CLI to push, pull, and manage Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts.

### [AWS App Mesh User Guide](https://docs.aws.amazon.com/app-mesh/latest/userguide/what-is-app-mesh.html)

> AWS App Mesh is a service mesh that makes it easy to monitor and control services. A service mesh is an infrastructure layer dedicated to handling service-to-service communication, usually through an array of lightweight network proxies deployed alongside the application code.
> 
> App Mesh standardizes how your services communicate, giving you end-to-end visibility and helping to ensure high availability for your applications.
> 
> App Mesh gives you consistent visibility and network traffic controls for every service in an application.

### [AWS Copilot CLI](https://aws.github.io/copilot-cli/)

> Your toolkit for containerized applications on AWS
> 
> AWS Copilot is an open source command line interface that makes it easy for developers to **build**, **release**, and **operate** production ready containerized applications on AWS App Runner, Amazon ECS, and AWS Fargate.

### [Play With Kubernetes](https://labs.play-with-k8s.com/)

> Play with Kubernetes is a labs site provided by [Docker](https://docker.com/) and created by Tutorius.
> 
> Play with Kubernetes is a playground which allows users to run K8s clusters in a matter of seconds.
> 
> It gives the experience of having a free Alpine Linux Virtual Machine in browser.
> 
> Under the hood Docker-in-Docker (DinD) is used to give the effect of multiple VMs/PCs.

### [Kubernetes Documentation](https://kubernetes.io/docs/home/)

> Kubernetes is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications.
> 
> The open source project is hosted by the Cloud Native Computing Foundation ([CNCF](https://www.cncf.io/about)).

### [Amazon EKS Best Practices Guide](https://docs.aws.amazon.com/eks/latest/best-practices/introduction.html)

> Welcome to the EKS Best Practices Guides.
> 
> The primary goal of this project is to offer a set of best practices for day 2 operations for Amazon EKS.
> 
> We elected to publish this guidance to GitHub so we could iterate quickly, provide timely and effective recommendations for variety of concerns, and easily incorporate suggestions from the broader community.

### [EKS Workshop](https://www.eksworkshop.com/)

> EKS Workshop
> 
> Practical exercises to learn about Amazon Elastic Kubernetes Service

### [DockerDocs](https://docs.docker.com/build/building/best-practices/)

> Building best practices
> 
> [Use multi-stage builds](https://docs.docker.com/build/building/best-practices/#use-multi-stage-builds)
> 
> Multi-stage builds let you reduce the size of your final image, by creating a cleaner separation between the building of your image and the final output. Split your Dockerfile instructions into distinct stages to make sure that the resulting output only contains the files that are needed to run the application.

### [Virginia Ansah](https://www.linkedin.com/in/virginia-ansah-03938b230/)

> Virginia Ansah is a DevOps Engineer and Cloud Engineer based in Ghana, certified in AWS and KCNA.
> 
> With a strong passion for cloud technologies and modern infrastructure, she brings practical experience and a clear, beginner-friendly teaching style that makes learning both exciting and accessible.

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: **hands-on experimentation, targeted research, and community engagement.**

Don’t just read about Kubernetes pods – deploy real applications, watch pods reschedule when nodes fail, trigger autoscaling under load, and debug networking issues between services.

Build complete container workflows: Dockerfile → ECR → ECS/EKS → load balancer → monitoring → autoscaling.

Break things systematically: delete nodes, exhaust IP addresses, misconfigure health checks, exceed resource limits.

When you encounter concepts you don’t fully grasp, dive into AWS documentation, explore the EKS Best Practices Guide, study Kubernetes patterns from the CNCF, dissect Helm charts from popular applications, and read production incident reports to learn from others’ failures.

But here’s where the magic multiplies: bring your questions to learning communities, engage in debates about ECS vs EKS tradeoffs, share your container optimization techniques, and most importantly, answer questions from fellow learners.

Teaching is the ultimate test of understanding – when you can explain why Fargate costs more but saves operational time, walk someone through debugging pod networking issues, help optimize someone’s container images from 2GB to 200MB, or guide a team through their first Kubernetes deployment with proper security, you’re not just helping them; you’re cementing your own expertise.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Container Orchestration & Kubernetes](https://ntombizakhona.medium.com/container-orchestration-kubernetes-bfb9d057cdf5)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**22 November 2025**
