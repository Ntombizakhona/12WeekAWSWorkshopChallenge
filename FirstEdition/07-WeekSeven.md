_Week Seven_

# Containers
----------

In real life, when you think of containers, you think of large, heavy, steel boxes on a ship, delivering your SHEIN merchandise from across the ocean. But, in computing, containers refer to portable, lightweight services packaged with the relevant libraries and dependencies so that they can be isolated and run independently and in parallel.

Sometimes (all the time) these containers need to be monitored, managed, and used for different workloads and environments, and this is where **container orchestration** comes in…

Container Orchestration
-----------------------

Container Orchestration is the process of managing your containers by configuring, provisioning and deploying them. Container Orchestration allocates the relevant resources for your containers, and ensures that they have observability enabled such as monitoring and logging the health of the containers.

Container Orchestration is also responsible for autoscaling and load balancing your containers to ensure that there is high availability and that the networking traffic is routed appropriately to healthy resources.

Container Orchestration manages the entire lifecycle of your resources, from initial deployment to consequential updates and upgrades.

### **Benefits of Container Orchestration**

The benefits of Container Orchestration services are that they eliminate overhead for the developer as the orchestrators are easy to deploy and maintain, and they have tracing, logging and monitoring enabled.

Therefore, you should use Container Orchestrators if you want to easily manage your containers. Container Orchestration is even more beneficial in scenarios where there are numerous large and complex containers.

**Amazon Elastic Container Service** is an example of a Container Orchestration service.

**AWS Elastic Container Service**
---------------------------------

AWS Elastic Container Service (ECS) is a high-performance container orchestration service, it abstracts the need for you to install and use your own container orchestration software. Amazon ECS is fully managed, scalable, and allows you to run your containerized applications on the cloud by using either AWS Elastic Compute Cloud (EC2) Instance or by using AWSs serverless offering AWS Fargate.

### Benefits of Elastic Container Service

The Amazon Elastic Container Service is affordable and you get to take advantage of the AWS ecosystem of services for monitoring, logging, load balancing, and security. You also take advantage of the global, scalable, high available infrastructure of AWS.

You can run your Amazon ECS applications by either using **AWS Elastic Compute Cloud (EC2) or the serverless AWS Fargate.** AWS Fargate allows you to run your containers without managing servers or clusters.

### Docker

Docker allows you to deploy applications quickly. Docker is responsible for running and managing containers on ECS.

### Components of Elastic Container Service

**Task Definition:** A task definition is a template for running your tasks, which consists of configurations. A task definition is a JSON file that describes your containers. This text file can contain blueprints for your application that describe which launch type to use, and what data volumes should be used with the containers in your task.

**Task: A** task deploys containers onto your EC2 cluster. After you have configured your task definition, you can specify how many tasks you wish to launch.

**Task Placement Strategies:** With ECS you have various strategies on how you want your tasks to be configured.

**Service:** A service ensures that you have tasks running, as they manage tasks. If a task fails, the service will launch a healthy task.

**Cluster:** an ECS cluster is a logical grouping of EC2 instances that you can place your containers onto. A cluster can be comprised of a combination of EC2 launch types and Fargate launch types.

**Elastic Container Registry:** Amazon ECR is a fully managed Docker container registry where you can store your images and repositories in a AWS Elastic Container Registry (ECR).

**Cost?** You don’t pay for using AWS ECS, you will be charged for the running resources you provision.

Creating an AWS Elastic Container Cluster
-----------------------------------------

Do you have a running instance of an AWS Elastic Container?

**Yes?** Well, that’s cool. See you in my next post then.

**No?** Ok, no big deal. Let’s provision some resources.

Prerequisites
-------------

### To create an AWS Elastic Container Cluster you will need:

(1) an [AWS account](https://medium.com/@ntombizakhona/12-weeks-aws-workshops-challenge-267dbd668df3) to configure the resources.

Step by Step Guide
------------------

### How to Launch a WordPress Site using AWS Elastic Container Service: Fargate Launch Type

**1.**  Login to the **AWS Management Console** using your IAM user name.

**2.** You will be using the **US East (N. Virginia) (us-east-1) region**. So, on the top right navigation bar, make sure **N. Virginia** is selected.

**3.**  On the top left corner, click on the **Services** button.

**4.**  Select **Containers** on the left side of the drop down menu.

**5.**  Select **Elastic Container Service.**

**6.** Select **Create cluster.**

**7.**  Cluster name: **myCluster.**

**8.**  Infrastructure: **AWS Fargate (Serverlss).**

**9.**  Leave everything as default.

**10.**  Click **Create.**

**11.**  Click on **myCluster.**

**12.**  On Services, click **Create.**

**13.** Existing cluster: **myCluster.**

**14.**  Compute options: **Launch type.**

**15.**  Launch type: **FARGATE.**

**16.**  Platform version: **Latest.**

**17.**  Deployment Configuration. Application Type: **Service.**

**18.**  Task Definition (create a new Task definition): click **Task definitions.**

**19.**  Click **Create new task definition.**

**20.**  Task definition configuration. Task definition family: **my-task-definition.**

**21.**  Infrastructure requirements. Launch types: check **AWS Fargate.**

**22.**  OS, Architecture, Network mode. Operating system/ Architecture: **Linux/X86_64.**

**23.**  CPU: **1 vCPU.** Memory: **3 GB.**

**24.**  Container -1. Container details. Name: **my-app.** Image URI: **wordpress: 6.2**. Essential container: **Yes.**

**25.**  Leave everything as default. Click **Create.**

**26.**  Task definition successfully created. Navigate back to your **Create service** page.

**27.**  Family: **my-task-definition.** Revision: 1 (Latest).

**28.**  Service name: **my-service.**

**29.**  Service type: **Replica**

**30.**  Desired tasks: **2.**

**31.**  Leave everything as default. Click **Create.**

**32.**  Your service has been deployed successfully.

**33.**  Click on **my-service.**

**34.**  Navigate to **Tasks.**

**35.**  Click on the Task.

**36.**  Select **Networking.**

**37.**  Click on the default **Security Group.**

**38.**  Click **Edit inbound rules.**

**39.**  Click **Add rule.** Type: HTTP. Source: Anywhere-IPv4.

**40.**  Click **Add rule.** Type: HTTPS. Source: Anywhere-IPv4.

**41.**  Click **Save rules.**

**42.**  Navigate back to your tasks page. Open the **Public IP** address.

**43.**  You are redirected to the WordPress configuration page.

**44.**  Congratulations! You launched WordPress using Fargate.

**45.**  Clean Up.


Important: Clean Up Resources
-----------------------------

Don’t get a [**Bill Shock**](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/checklistforunwantedcharges.html) by leaving unnecessary resources running.

**1.**  Navigate back to Amazon ECS.

**2.**  Click **Clusters.**

**3.** Click **myCluster.**

**4.**  Click **Delete cluster.**

**5.**  Enter **delete myCluster.**

**6.** Click **Delete.**

### End of Step by Step Guide

Conclusion
----------

Congratulations! In this **Step by Step Guide**, you launched WordPress Site using the Amazon Elastic Container Service — Fargate launch type.

…And theoretically, you touched upon the basic concepts of containers, container orchestration and Amazon ECS. The more you work with Amazon Elastic Container Service, you will eventually configure more powerful and purpose-built containers, and integrate more services within the AWS ecosystem.

Blog Post Summary
-----------------

### Theory

Introduction to Containers, Container Orchestration and Amazon Elastic Container Service.

### Practical

Launching WordPress using an AWS Elastic Container Service — Fargate Launch Type.

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Containers](https://ntombizakhona.medium.com/12-weeks-aws-workshop-challenge-ab2f61db68f4)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**31 January 2024**

