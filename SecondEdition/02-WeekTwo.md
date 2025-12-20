_Week Two_

# Compute Services & EC2 Mastery

## The 12-Week AWS Workshop Challenge with Sunil Kumar
---------------------------------------------------


After mastering [Cloud Fundamentals](https://medium.com/@ntombizakhona/cloud-fundamentals-dd915a1552a1), the next critical step in your AWS journey is understanding **compute services** — the engines that power applications, process data, and respond to user requests.

This week’s focus on EC2, Auto Scaling, Load Balancers, Elastic Beanstalk, and Lambda represents the core of how modern applications run in the cloud.

Rather than simply explaining these services, this article challenges you with 20 carefully crafted questions designed to test not just what you know, but how deeply you understand it.

These questions mirror real-world scenarios you’ll encounter when architecting solutions, troubleshooting issues, or making cost optimization decisions.

Try answering each question before researching. Better yet, write out your responses and publish them as your own article… if you want.

20 Essential Questions on AWS Compute Services
----------------------------------------------

### Cloud Computing Foundations

**1.** How does cloud computing fundamentally change the way organizations approach capacity planning compared to traditional on-premises infrastructure?

**2.** If a startup expects unpredictable traffic patterns with potential viral spikes, what specific cloud computing characteristics make AWS more suitable than maintaining their own data center?

### EC2 Instances: The Foundation

**3.** You need to run a web application that serves customers globally. How does launching EC2 instances differ from running a physical server in your office, and what advantages does this provide for scaling and reliability?

**4.** You need to run a machine learning training job that will take 3 days to complete and can tolerate interruptions. Which EC2 pricing model would be most cost-effective, and why?

**5.** Your application requires consistent, predictable performance for a database server that will run 24/7 for the next three years. Which pricing model should you choose, and what’s your potential cost savings compared to On-Demand?

### EC2 Instance Types

**6.** What do the letters in instance type names like “t3.medium” or “c5.xlarge” represent, and how do you choose the right instance family for your workload?

**7.** Your web application is experiencing slow response times, and monitoring shows high CPU utilization at 95%. What two approaches could you take using different EC2 instance types to solve this problem?

**8.** When would you choose a compute-optimized (C-family) instance over a general-purpose (T-family) instance, and can you provide a specific use case for each?

### Auto Scaling Groups

**9.** What problem does an Auto Scaling Group solve that you cannot solve by simply launching multiple EC2 instances manually?

**10.** Explain the difference between “desired capacity,” “minimum capacity,” and “maximum capacity” in an Auto Scaling Group. What happens if you set desired capacity equal to maximum capacity?

**11.** Your e-commerce site experiences traffic spikes every day at noon. How would you configure your Auto Scaling Group to proactively handle this predictable pattern rather than reactively scaling after load increases?

**12.** If an EC2 instance in your Auto Scaling Group fails its health check, what happens next, and how does this improve application availability?

### Load Balancers

**13.** What is the primary purpose of a load balancer, and how does it work together with an Auto Scaling Group to create a highly available application?

**14.** AWS offers three types of load balancers: Application Load Balancer (ALB), Network Load Balancer (NLB), and Gateway Load Balancer (GLB). When would you use an ALB versus an NLB?

**15.** You have a web application with two different paths: **/api** should route to your API servers, and **/web** should route to your web servers. Which load balancer type supports this path-based routing, and how would you configure it?

### Elastic Beanstalk Deployment

**16.** How does Elastic Beanstalk differ from manually deploying an application on EC2 instances? What does Elastic Beanstalk manage for you automatically?

**17.** You’re a developer who wants to deploy a Node.js application to AWS without managing infrastructure. How does Elastic Beanstalk make this possible, and what AWS services does it provision behind the scenes?

**18.** What deployment strategies does Elastic Beanstalk support (e.g., All at once, Rolling, Blue/Green), and when would you choose one over the others based on downtime tolerance?

### Lambda Fundamentals

**19.** What is the fundamental difference between running code on EC2 versus running code on Lambda, and what does “serverless” actually mean in the context of Lambda?

**20.** You have a simple function that processes uploaded images (resizes them) whenever a user uploads to S3. Should you use EC2 or Lambda for this task, and what factors influenced your decision (consider cost, scaling, and operational overhead)?

Additional Resources
--------------------

### [Efficient and Resilient Workloads with Amazon EC2 Auto Scaling Workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/20c57d32-162e-4ad5-86a6-dff1f8de4b3c/en-US)

> This workshop is designed to get you familiar with the concepts and best practices for effectively and efficiently scaling Amazon EC2 capacity using Amazon EC2 Auto Scaling and its features, including predictive scaling and warm pools.
> 
> In this workshop you will assume the role of a Cloud Architect tasked with finding an efficient Auto Scaling solution for a sample application. You have been provided with a monolithic application which receives cyclical traffic; high usage during regular business hours and low usage during evenings and weekends. The application takes a long time (over 10 minutes) to initialize, causing a noticeable latency impact on application performance when scaling out.
> 
> In this workshop you will conduct exercises to find the correct Auto Scaling solution to ensure your application is ready in minimal time and scales quickly by launching capacity in advance of forecasted load without the need to overprovision.

### [**Choosing an AWS compute service for your workload**](https://docs.aws.amazon.com/compute-on-aws-how-to-choose/)

> Overview of AWS compute services
> 
> AWS compute services are designed to meet the varied demands of modern applications, from small-scale projects to enterprise-grade solutions. These services provide scalable computing power that helps you to build, deploy, and manage applications. Whether you need to launch virtual machines, run containerized applications, or run code without managing servers, AWS compute services provide the flexibility to match your specific workload needs.
> 
> Key concepts
> 
> Choosing the right AWS compute service involves balancing the following factors to match your specific workload needs, technical requirements, and business objectives to help you optimize for performance, cost, and ease of management.

### [Sunil Kumar](https://www.linkedin.com/in/cloudwithsunil/)

> As an independent corporate trainer, I help software companies and teams to accelerate their cloud transformation journeys while building internal expertise that lasts.
> 
> What I Do:
> I partner with software companies and technology partners to design, implement, and optimize cloud infrastructure on the Cloud. Beyond technical implementation, I train development teams and IT professionals to become self-sufficient cloud practitioners.
> 
> My Unique Approach:
> My expertise in hands-on cloud engineering and corporate training ensures your team gains both immediate results and long-term capabilities.
> 
> Recent Impact:
> Trained 500+ developers across multiple organizations on cloud-native development practices.
> 
> Helped 5 startups successfully migrate from on-premise to cloud-first architecture.

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: hands-on experimentation, targeted research, and community engagement.

Don’t just read about Auto Scaling Groups — create them in the console, trigger scale-out events, and watch instances launch.

When you encounter concepts you don’t fully grasp, dive into AWS documentation, whitepapers, and trusted blogs to build deeper understanding.

But here’s where the magic multiplies: bring your questions to learning communities, engage in discussions, and most importantly, answer questions from fellow learners.

Teaching is the ultimate test of understanding — when you can explain why Application Load Balancers differ from Network Load Balancers or walk someone through configuring their first Lambda function, you’re not just helping them; you’re cementing your own expertise.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Compute Services & EC2 Mastery](https://ntombizakhona.medium.com/compute-services-ec2-mastery-1eac3c13e10c)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**13 October 2025**
