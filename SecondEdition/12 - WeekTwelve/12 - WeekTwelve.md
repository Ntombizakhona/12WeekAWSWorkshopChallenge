*WEEK 12*

# Capstone Project & Architecture Review


The 12-Week AWS Workshop Challenge by Paula Wakabi
--------------------------------------------------



### [1: Cloud Fundamentals](https://medium.com/cloud-fundamentals-dd915a1552a1)

> The Principle of Least Privilege is a practice whereby you only grant the user basic, minimum permissions based on their role, and the task that they need to do. It is a good idea, and best practice to use an IAM user for everyday tasks, instead of the Root User.

### [2: Compute Services & EC2 Mastery](https://medium.com/compute-services-ec2-mastery-1eac3c13e10c)

> AWS compute services are designed to meet the varied demands of modern applications, from small-scale projects to enterprise-grade solutions. These services provide scalable computing power that helps you to build, deploy, and manage applications.
> 
> Whether you need to launch virtual machines, run containerized applications, or run code without managing servers, AWS compute services provide the flexibility to match your specific workload needs. — AWS Documentation

### [3: Network Architecture & Security](https://medium.com/network-architecture-security-5af48766ee41)

> You can deploy the most optimized compute resources, but without proper network architecture, your applications won’t communicate securely or scale reliably.
> 
> Network design is where theory meets reality in AWS. You can launch Lambda functions and RDS databases all day, but if your VPC design is flawed, your subnets are misconfigured, or your security groups are too permissive, you’re building on shaky ground.

### [4: Storage Solutions & Data Management](https://medium.com/storage-solutions-data-management-68a0441eaf0a)

> You can architect the most secure, well-designed network, but without the right storage strategy, your applications won’t scale efficiently, your costs will spiral, and your data won’t be protected.
> 
> Storage is where architectural decisions have lasting consequences. Choose the wrong storage type, and you’ll pay 10x more than necessary. Forget lifecycle policies, and you’ll store data you don’t need. Skip backup strategies, and you’ll lose everything when disaster strikes. Misunderstand performance characteristics, and your application will crawl under load.

### [5: Database Services & Architecture](https://medium.com/database-services-architecture-ba69d0cf9690)

> You can store files perfectly, but without the right database strategy, your applications can’t efficiently query, update, or scale the structured data that powers modern software.
> 
> Storage is about _where_ you put data. Databases are about _how_ you structure, access, and guarantee the integrity of that data under load.

### [6: Serverless & Event Driven Architecture](https://medium.com/serverless-event-driven-architecture-c29a6aa04536)

> You can design perfect databases, but without the right compute and integration patterns, your applications remain tightly coupled, difficult to scale, and expensive to operate.
> 
> Databases store your data. Serverless compute processes it — without you ever provisioning, patching, or scaling a single server.

### [7: Infrastructure as Code & DevOps](https://medium.com/infrastructure-as-code-devops-2a6908b7762c)

> You can architect perfect serverless systems, but without automation, every deployment is risky, every environment is inconsistent, and scaling across teams becomes chaos.
> 
> Infrastructure as Code transforms _“click and hope”_ into **“commit and deploy.”** DevOps practices turn _“works on my machine”_ into **“works in production, repeatedly, safely.”**

### [8: Container Orchestration & Kubernetes](https://medium.com/container-orchestration-kubernetes-bfb9d057cdf5)

> You can automate infrastructure perfectly, but without containerization, your applications remain tightly coupled to specific servers, difficult to scale efficiently, and slow to deploy.
> 
> Containers change the deployment paradigm: from “_configure a server for this application_” to “**run this immutable package anywhere**.” Orchestration changes operations: from “_manage individual containers_” to “**declare desired state and let the platform handle everything.**”

### [9: Data Analytics, AI & Machine Learning](https://medium.com/data-analytics-ai-machine-learning-c291ee34e5c8)

> You can run perfect containerized applications, but without the ability to extract insights from data and embed intelligence into those applications, you’re missing the competitive advantage that defines modern software.
> 
> Analytics and AI/ML represent a paradigm shift: from “_store data and hope someone can make sense of it_” to “**automatically discover patterns, predict outcomes, and make intelligent decisions at scale.**” From “_hire data scientists to manually build models”_ to “**empower developers to embed ML into applications using managed services.**”

### [10: Monitoring, Logging & Observability](https://medium.com/monitoring-logging-and-observability-760cb718dbe1)

> You can architect perfect solutions, but without proper observability, you’re flying blind when something goes wrong at 3 AM.
> 
> Monitoring, Logging, and Observability aren’t just about dashboards and alerts. They’re about **understanding:** being able to ask arbitrary questions about your systems and get meaningful answers, even for problems you didn’t anticipate, well, especially for problems you didn’t anticipate.

### [11. Enterprise Security, Governance & FinOps](https://medium.com/enterprise-security-governance-finops-e3d741036651)

> This is the layer where _individual builders_ become **organizational thinkers.**
> 
> [Observability](https://medium.com/monitoring-logging-and-observability-760cb718dbe1?postPublishedType=repub) tells you _what_ is happening. Security and Governance decide what **should** happen. FinOps ensures what happens doesn’t bankrupt the business.

…The next evolution is finally putting it all together with a capstone project that includes an end to end deployment, adheres to the well architected framework, implements multi-region and disaster recovery strategies so that you can advance your career in the cloud, or build or whatever your aspirations are with the cloud!

_Lets Build!_

CloudPulse
----------

CloudPulse is an end-to-end Task Management Application that combines my passion for Web Development with Cloud Architecture. It features a polished, responsive web frontend paired with a RESTful API: all running entirely on AWS Serverless Infrastructure, meaning no servers to provision or manage, with automatic scaling and pay-per-use pricing.

As a Web Developer at heart and a Cloud Engineer in my soul, I wanted CloudPulse to be more than just a backend exercise. The project showcases thoughtful UI/UX design, clean frontend code, and seamless integration with cloud services: [**CloudPulse Live Demo**](http://cloudpulse-frontend.s3-website-us-east-1.amazonaws.com/) _(What you will build after completing this guide…if you complete this hands-on exercice, I hope you complete this tutorial!)_

CloudPulse serves as a **_beginner friendly_**, practical capstone that implements and demonstrates the core AWS concepts introduced in earlier weeks of the [**12-Week AWS Workshop Challenge (2025 Edition)**](https://medium.com/list/12week-aws-workshop-challenge-ii-1eb8fc71a0b4) **by** [**Paula Wakabi**](https://medium.com/@paulawakabi) from deploying and securing cloud resources to building, operating, and iterating on a production-grade serverless application.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*r5Q5shY4qSh2uEYWRIWwAg@2x.jpeg)

### Table of Contents

**_1._** _Set Up Your Personal AWS Account_

**2.** _Setup Your IAM User Account_

**3.** _Enable Multifactor Authentication_

**4.** _DynamoDB Database Setup_

**5.** _Lambda Functions Creation_

**6.** _API Gateway Configuration_

**7.** _S3 Bucket for Front End Hosting_

**8.** _Frontend Application Deployment_

**9.** _Testing and Validation_

**10.** _Monitoring Setup_

**11.** _Cost Management_

**12.** _Trouble Shooting_

**13.** _Cleanup Procedures_

**14.** _Well Architected Framework_

**15.** _Advanced Architecture Patterns_

_1. Set Up Your Personal AWS Ac_count
--------------------------------------

I know _(and hope)_ you’re eager to get started, so in this practical, hands-on tutorial we’ll:

1.  Set up an **AWS Root Account** for _Administration and Billing_
2.  Create an **IAM User** for _Development_
3.  And enable **Multi-Factor Authentication** (MFA) to _secure your accounts_

### Prerequisites

1.  An Email Address
2.  Debit or Credit Card
3.  Authenticator App (_you can choose from the_ [_list of compatible applications_](https://aws.amazon.com/iam/features/mfa/?audit=2019q1)) for Multifactor Authentication (MFA)

### Set Up Your Personal AWS Account

_Your personal AWS account is your own space where you can explore, create, and innovate freely. It’s perfect for learning and experimenting with new skills, working on personal projects, developing and testing applications, hosting your website or blog, and storing and managing your personal data. With your personal AWS account, you have the freedom to try new things, showcase your talents, and bring your ideas to life._

**Step 01:** Open your favourite web browser and type in: [**aws.amazon.com**](https://aws.amazon.com/)

There are so many links (you think).

But, don’t worry, just focus on the top right corner, there should be an **Black Button**, waiting for you to click on it.

**Step 02:** Click on the **Create account** button on the top right corner of your screen.

After you click on the **Create AWS Account** button**,** you should be redirected to the portal, where you will create your AWS account.

New accounts get to start with $100 (R1500+)in AWS credits now, isn’t that cool?

> Try AWS at no cost for up to 6 months
> 
> Start with USD $100 in AWS credits, plus earn up to USD $100 by completing various activities.

**Step 03:** Enter your **Root user email address** & your preferred **AWS Account Name**, and click **Verify Email Address.**

**Step 04:** Confirm your email address with the **Verification Code** in order to proceed.

The code can take up to 5 minutes to arrive and is valid for 60 seconds, so ensure you provide it timeously, or request a new one.

Once you have verified your email address, you will move on and create your password.

**Step 05:** **Create Your Password.**

**Create Your Password** and click continue, and you will find the **Contact Information page.**

**Step 06:** **Choose your account plan**

Select **Choose free plan.**

**Step 07:** **Contact Information**

**How do you Plan to use AWS?**

**Select:** Personal — for your own projects

Then fill out the rest of the form accordingly with **your personal details.**

**Nearby AWS Region selection _— optional_**

**Enabling nearby AWS Regions can provide benefits including improved performance. Uncheck the Region to prevent its usage.**

**Check:** Enable Africa (Cape Town) Region

_You can enable the region near you, but we will be using the United States North Virginia region when we build._

Read and agree to the AWS Customer Agreement.

**Check:** I have read and agree to the terms of the [AWS Customer Agreement](https://aws.amazon.com/agreement/) .

Click Agree and Continue.

**Step 08:** Enter your **Billing Information**

Make sure you have a valid payment method.

> Our verification process holds USD $1 (or equivalent) for 3–5 days to verify your account and prevent fraud.

Click **Continue.**

**Step 09:** **Confirm your identity via text message or call.**

Click **Continue.**

**Step 10:** **Select a Support Plan:** Select **Basic support — Free.**

Click **Complete Sign Up.**

**Step 11: Congratulations!** That’s what you should see next, as AWS starts activating your account, it won’t take long at all, if you followed the steps properly.

You will receive an email when your account has been activated.

**Step 12:** Click **Go to the AWS Management Console** button, while you wait for your activation email.

**Step 13:** **Welcome to Amazon Web Services,** says the activation email. Now head back to the AWS Management Console and log in with the Root User Email Account and Password that you configured in **Step 03** and **Step 05.**

**Step 14:** Click **Sign In.**

**Step 15:** There it is, in all it’s glory, the **AWS Management Console!**

### The AWS Management Console

_The AWS Management Console is your one-stop shop for managing your AWS services and resources!_

_From this central hub, you can easily monitor, manage and modify your resources, applications and services, all in one place._

_It’s designed to be easy to use, even if you’re new to AWS, so you can get started right away!_

**Step 16:** Quickly familiarize yourself with the console.

**Categorical List of Services Offered By AWS:** On the left side of the menu, click on **‘Services’** to see a list of all the amazing services AWS offers, organized by category.

**Step 17:** Click on the circled question mark button **(?)** to see some of the official **support resources** offered by AWS.

**Step 18:** On the right, click on **N. Virginia** ▼, and marvel at the numerous regions that contribute to AWS’s global infrastructure.

**Step 19:** On the farthest right, click on your **Account Name**, and this is where you’ll find the more advanced administrative controls for your account, such as Billing and Account creation.

**Step 20:** Navigate back to the top left corner. Click on **⋮⋮⋮** **Services.**

**Step 21:** Select **Security, Identity & Compliance** on the left side of the drop down menu.

2. Setup Your IAM User Account
-------------------------------

### Create an IAM (Identity And Access Management) User

_Your IAM account is your gateway to secure and controlled access to your AWS resources. With an IAM account, you can share access with others while maintaining granular control over permissions, ensuring that each user has only the access they need._

**Step 22:** Select **IAM.**

You should be redirected to the IAM Dashboard.

**Step 23:** Navigate to the left side, under ▼ **Access Management**, select **Users.**

**Step 24:** Click the **Create Users** button.

**Step 25:** **Specify User Details.**

**Step 25.1: User name:** CloudPulse

**Check**: Provide user access to the AWS Management Console — _optional_

**Step 25.2: “Are you providing console access to a person?”**

Click **I want to create an IAM User.**

**Step 25.3:** **Console Password.**

Select a **Custom Password,** that follows the password principles, that you can see below the text-area.

**Custom Password:** @CloudPulseAdmin#2025!

**Step 25.4:** **Users must create a new password at next sign-in — Recommended:** uncheck.

Click **Next.**

**Step 26:** You are now in the **Set Permissions** screen.

It is best practice to attach policies to a group, but since you’re creating your first user, and have no groups yet, select **Attach Policies directly.**

**Step 27:** Search for and select **AdministratorAccess**

_We are using the AdministratorAccess policy for brevity, but it is considered a best practice (important and necessary) to select the most restrictive policy as this ensures that users and applications only have the permissions they need, reducing the risk of data breaches and unauthorized access._

_You should always incrementally add the relevant permissions as time goes on._

Click **Next.**

**Step 28:** **Review and Create** your User Details and Permissions summary, and click **Create User.**

✅**Green banner:** User created successfully.

You can view and download the user’s password and email instructions for signing in to the AWS Management Console.

**Step 29:** **Congratulations.** You have created an IAM User.

**Step 30:** Copy the **Console Sign-In URL, Username and Password.**

Click **View user.**

**Step 31: Summary**

Click **Create access key**

**Use case:** Command Line Interface (CLI)

**Confirmation**: check _I understand the above recommendation and want to proceed to create an access key._

Click **Next**

**Step 32:** Click **Create access key**

**Step 33:** Click **Download .csv file**

Click **Done.**

**Step 34:** Click **Security Credentials**

Scroll to **Multi-factor authentication (MFA)**

💡**Verification:** You should see the user created successfully with access keys displayed

3. Enable Multifactor Authentication
-------------------------------------

_Multifactor authentication (MFA) boosts account security by demanding more than just a password to log in, much like accessing a safe requires both the combination and a physical key._

_Just as a password is like the combination, MFA adds a second form of verification like a code, biometric scan, or app-generated code to ensure only authorized individuals can unlock and access their accounts._

_This way, even if someone knows your password, they won’t be able to get into your account without that second form of verification. It adds an extra layer of security to keep your account safe, providing an additional barrier against unauthorized access and giving you peace of mind that your personal information is protected_

**Step 35:** Click **Assign MFA device**

**Step 36: Select MFA Device**

**MFA Device name:** CloudPulse

**MFA Device:** Authenticator app

Click **Next.**

**Step 37: Set Up Device**

Download an Authenticator app

Personally, I recommend **Authy** because you can seamlessly access it from multiple devices and it’s an authenticator app that hasn’t given me problems; however, you can choose from the [list of compatible applications](https://aws.amazon.com/iam/features/mfa/?audit=2019q1) presented to you, or use your existing authenticator app.

**Scan the QR code.**

**Enter two Consecutive Codes from your MFA device** to validate it.

Click **Add MFA.**

✅**Green banner:** MFA device assigned

You can register up to 8 MFA devices of any combination of the currently supported MFA types with your AWS account root and IAM user. With multiple MFA devices, you only need one MFA device to sign in to the AWS console or create a session through the AWS CLI with that user.

💡 **Verification:** You should see **MFA device assigned**

**Step 38:** Copy the **Console sign in link**

Enter the Console Sign-In URL in your browser, so that you can sign in as the IAM user you just created.

How do you know that you’re logged in as an IAM User?

Check the top right corner.

Click **account name (account-id)** ▼

You should see your IAM Username there.

**_Let’s Build!_**

4. DynamoDB Database Setup
---------------------------

_DynamoDB is a fully managed NoSQL database by AWS. It stores data as flexible key-value pairs (not rigid tables like SQL)._

_Key features:
Fast millisecond response times
Scalable handles millions of requests automatically
Serverless no servers to manage, AWS handles everything_

_DynamoDB is like a giant, super-fast filing cabinet. You give each file a unique label (key), and AWS finds it instantly no matter how many files you have._

**Step 39: Navigate to DynamoDB Console**

Click **Create table**

**Table Details**

**Table name:** CloudPulseTasks

**Partition key:** userId (String)

**Sort key:** taskId (String)

**Table Settings:** Default Settings

Click **Create table**

**Wait for Table Creation**

Status should change from _Creating_ to **Active**

This usually takes 1–2 minutes

✅**Green banner:** The CloudPulseTasks table was created successfully.

💡**Verification:** Table status shows **Active** and you can see it in the Tables list

**Step 40: Configure Table Settings**

Click on your table name **CloudPulseTasks**

Go to **Backups** tab

**Point-in-Time Recovery:** click **Edit**

Check: **Turn on point-in-time recovery**

**Backup recovery period: 35** ▼ **days**

Click **Save Changes**

✅**Green banner:** Successfully turned on point-in-time recovery for the **CloudPulseTasks** table. The backup recovery period is set to **35 days**.

**Step 41: Review Table Details**

Click **Settings**

**General Information**

Note the Table ARN

💡**Verification:** Partition key is **userId** (String) and Sort key is **taskId** (String) and **Point-in-time recovery (PITR) is** On

5. Lambda Functions Creation
-----------------------------

_AWS Lambda is a serverless compute service that lets you run small pieces of code_ **_functions_** _without managing servers._

_You upload your code, and Lambda automatically runs it when triggered (for example by an HTTP request, a file upload to S3, or a scheduled timer), scaling up or down as needed,_ **_you pay only for the time your code runs._**

**Step 42: Navigate to Lambda Console**

**Step 43:** Navigate to the **Lambda** console

Click **Create function**

**Create function:** Author from scratch

**Function name:** cloudpulse-task-handler

**Runtime:** Node.js 24.x

Click **Create function**

**Getting started:** Click **Dismiss**

✅ **Green banner:** Successfully created the function **cloudpulse-task-handler**. You can now change its code and configuration. To invoke your function with a test event, choose “Test”.

Click **[>_] Cloudshell**

```
aws lambda update-function-configuration --function-name cloudpulse-task-handler --runtime nodejs18.x
```

💡**Verification:** Runtime is **Node.js 18.x**

**Step 44: Configure Function Code**

Click **Code**

In the code editor, replace the default code with:

```
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, QueryCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
const client = new DynamoDBClient({});
const dynamodb = DynamoDBDocumentClient.from(client);
const TABLE_NAME = 'CloudPulseTasks';
export const handler = async (event) => {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    };
    
    try {
        const { httpMethod, pathParameters, body } = event;
        
        // Handle CORS preflight
        if (httpMethod === 'OPTIONS') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ message: 'CORS preflight successful' })
            };
        }
        
        const userId = pathParameters?.userId || 'default-user';
        
        switch (httpMethod) {
            case 'GET':
                return await getTasks(userId, headers);
            case 'POST':
                return await createTask(userId, JSON.parse(body), headers);
            case 'PUT':
                return await updateTask(userId, pathParameters.taskId, JSON.parse(body), headers);
            case 'DELETE':
                return await deleteTask(userId, pathParameters.taskId, headers);
            default:
                return {
                    statusCode: 405,
                    headers,
                    body: JSON.stringify({ error: 'Method not allowed' })
                };
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error', details: error.message })
        };
    }
};
async function getTasks(userId, headers) {
    const params = {
        TableName: TABLE_NAME,
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
            ':userId': userId
        }
    };
    
    const result = await dynamodb.send(new QueryCommand(params));
    
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ tasks: result.Items })
    };
}
async function createTask(userId, taskData, headers) {
    const taskId = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();
    
    const task = {
        userId,
        taskId,
        title: taskData.title,
        description: taskData.description || '',
        status: taskData.status || 'PENDING',
        priority: taskData.priority || 'MEDIUM',
        createdAt: timestamp,
        updatedAt: timestamp,
        dueDate: taskData.dueDate || null,
        tags: taskData.tags || []
    };
    
    const params = {
        TableName: TABLE_NAME,
        Item: task
    };
    
    await dynamodb.send(new PutCommand(params));
    
    return {
        statusCode: 201,
        headers,
        body: JSON.stringify({ task })
    };
}
async function updateTask(userId, taskId, updateData, headers) {
    const timestamp = new Date().toISOString();
    
    const params = {
        TableName: TABLE_NAME,
        Key: { userId, taskId },
        UpdateExpression: 'SET #status = :status, updatedAt = :updatedAt',
        ExpressionAttributeNames: {
            '#status': 'status'
        },
        ExpressionAttributeValues: {
            ':status': updateData.status,
            ':updatedAt': timestamp
        },
        ReturnValues: 'ALL_NEW'
    };
    
    const result = await dynamodb.send(new UpdateCommand(params));
    
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ task: result.Attributes })
    };
}
async function deleteTask(userId, taskId, headers) {
    const params = {
        TableName: TABLE_NAME,
        Key: { userId, taskId }
    };
    
    await dynamodb.send(new DeleteCommand(params));
    
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Task deleted successfully' })
    };
}
```

**Step 45:** Click **Deploy (Ctrl+Shift+u)**

✅ **Green banner:** Successfully updated the function **cloudpulse-task-handler**.

💡**Verification:** Function code is saved and **Last modified** timestamp is updated

### Configure Lambda Permissions

**Step 46: Add DynamoDB Permissions**

Go to **Configuration** tab

Click **Permissions** in left sidebar

**Execution role**

Click on the execution **Role name** (opens in new tab)

**Step 47: Attach DynamoDB Policy**

Click **Add permissions** ▼: Attach policies

Search for **AmazonDynamoDBFullAccess**

Select it and click **Add permissions**

✅ **Green banner:** Policy was successfully attached to role.

**💡Verification:** Policy appears in the **Permissions policies** list

### Test Lambda Function

**Step 48: Create Test Event**

Go back to **Lambda function**

Click **Test** tab

Click **Create new event**

**Event name:** test-get-tasks

**Template:** API Gateway AWS Proxy

Replace the JSON with:

```
{
  "httpMethod": "GET",
  "pathParameters": {
    "userId": "test-user"
  },
  "headers": {
    "Content-Type": "application/json"
  }
}
```

**Step 49:** Click **Test**

✅ **Executing function: succeeded**

**6.** _API Gateway Configuration_
-----------------------------------

_Amazon API Gateway is a service for creating and managing APIs. It sits in front of your backend (often AWS Lambda), receives requests from clients (like a web or mobile app), handles things like routing, authentication, throttling, and monitoring, then passes the request to your backend and returns the response._

### Create API Gateway

**Step 50:** Navigate to the **API Gateway** Console

Click **Create API**

**REST API:** Click **Build**

**Step 51**: **Create REST API**

**API Details:** New API

**API Name:** cloudpulse-api

**Description _— optional:_** CloudPulse Task Management API

**API endpoint type:** Regional

**Security policy — _new:_** SecurityPolicy_TLS13_1_2_2021_06

Click **Create API**

✅ **Green banner:** Successfully created REST API ‘cloudpulse-api (txq04j0xia)’.

### Configure API Resources and Methods

**_Resource_**_s are the API’s URL paths (endpoints).
Example: /users, /users/{id}, /orders_

**_Methods_** _are the HTTP actions you can perform on a resource (what the client is trying to do).
Example: GET, POST, PUT, DELETE_

**Step 52**: **Create /tasks Resource**

Select the root **/** resource

Click **Create resource**

**Resource Path:** /

**Resource Name:** tasks

**✓ CORS (Cross Origin Resource Sharing)**

Click **Create resource**

✅**Green banner:** Successfully created resource ‘/tasks’

**Step 53**: **Create User-Specific Resource**

Select **/tasks** resource

Click **Create Resource**

**Resource Path:** /tasks

**Resource Name:** {userId}

**✓ CORS (Cross Origin Resource Sharing)**

Click **Create resource**

✅**Green banner:** Successfully created resource ‘/tasks/{userId}’

**Step 54**: **Create Task-Specific Resource**

Select **userId** resource

Click **Create resource**

**Resource Path:** /tasks/{userId}

**Resource Name:** {taskId}

**✓ CORS (Cross Origin Resource Sharing)**

Click **Create resource**

✅**Green banner:** Successfully created resource ‘/tasks/{userId}/{taskId}’

### Add HTTP Methods

**Step 55**: **Add GET Method for All Tasks**

Select **/{userId}** resource

Click **Create Method**

Method type: **GET** ▼

**Integration type:** Lambda Function

**us-east-1 ▼:** cloudpulse-task-handler

Click **Create method**

✅ **Green banner: Successfully created** method ‘GET’ in ‘{userId}’. Redeploy your API for the update to take effect.

**Step 56**: **Add POST Method for Creating Tasks**

Select **/userId** resource

Click **Create Method**

Method type: **POST** ▼

**Integration type:** Lambda Function

**us-east-1 ▼:** cloudpulse-task-handler

Click **Create method**

✅ **Green banner: Successfully created** method ‘POST’ in ‘{userId}’. Redeploy your API for the update to take effect.

**Step 57**: **Add PUT Method for Updating Tasks**

Select **/userId/taskId** resource

Click **Create method**

Method type: **PUT** ▼

**Integration type:** Lambda Function

**us-east-1 ▼:** cloudpulse-task-handler

Click **Create method**

✅ **Green banner: Successfully created** method ‘PUT’ in ‘{taskId}’. Redeploy your API for the update to take effect.

**Step 58**: **Add DELETE Method**

Select **/userId/taskId** resource

Click **Create method**

Method type: **DELETE**▼

**Integration type:** Lambda Function

**us-east-1 ▼:** cloudpulse-task-handler

Click **Create method**

✅ **Green banner:Successfully created** method ‘DELETE’ in ‘taskId’. Redeploy your API for the update to take effect.

### Enable CORS

**Step 59**: **Configure CORS for Each Resource**

Select **/{userId}** resource

Click **Enable CORS**

**Access-Control-Allow-Methods:**

**✓ GET**

**✓ OPTIONS**

**✓ POST**

**Access-Control-Allow-Headers:** Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token

**Access-Control-Allow-Origin:** *

Click **Save**

✅ **Green banner: Successfully enabled CORS**

▶ **Details**

**Step 60**: **Enable CORS** **for Task-Specific Resource**

Select **/userId/taskId** resource

Click **Enable CORS**

**Access-Control-Allow-Methods:**

**✓ PUT**

**✓ DELETE**

**✓ OPTIONS**

**Access-Control-Allow-Headers:** Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token

**Access-Control-Allow-Origin:** *

Click **Save**

✅ **Green banner: Successfully enabled CORS**

▶ **Details**

### **Deploy API**

**Step 61**: **Create Deployment**

Click **Deploy API**

**Stage:** New Stage

**Stage name:** prod

**Stage description:** Production stage

Click **Deploy**

✅ **Green banner: Successfully created** deployment for cloudpulse-api. This deployment is active for prod.

**Step 62**: **Note API Endpoint**

Copy the **Invoke URL** (e.g., `https://abc123.execute-api.us-east-1.amazonaws.com/prod`)

Save this URL, you’ll need it for the frontend

**💡Verification:** API is deployed and you can see the invoke URL

### **Test API Endpoints**

**Step 63**: **Test Endpoint**

Select your **CloudPulse API**

Navigate to **/task OPTIONS**

Click **TEST**

Request Body:

```
{
"userId": "test-user",
"title": "Console Test Task",
"description": "Testing from AWS Console"
}
```

Click **Test** → Verify 200 response

**Status 200**

```
Method completed with status: 200
```

**💡Verification:** API returns JSON response with empty tasks array

**7.** _S3 Bucket for Front End Hosting_
----------------------------------------

_A bucket is a container in Amazon S3 (Simple Storage Service) where you store files (called “objects”) like images, videos, backups, or any data._

**Step 64**: **Navigate to S3 Console**

Click **Create bucket**

**General configuration**

**AWS Region**

**US East (N. Virginia) us-east-1**

**Bucket type:** General purpose

**Bucket name:** cloudpulse-frontend-_[YOUR-ACCOUNT-ID]_

_Add [YOUR-ACCOUNT-ID] to make the bucket name unique._

_S3 Bucket Names Must Be Globally Unique_

_Every S3 bucket name must be unique across all AWS accounts worldwide, not just within your own account._

_Why?
Because bucket names become part of a public URL:
https://my-bucket-name.s3.amazonaws.com_

_If someone else already has that name, you can’t use it._

**Block Public Access:** Uncheck

**Check** “I acknowledge that the current settings might result in this bucket and the objects within becoming public”

**Bucket Versioning:** Enable

**Default encryption:** Server-side encryption with Amazon S3 managed keys (SSE-S3)

Click **Create bucket**

✅ **Green banner: Successfully created bucket “cloudpulse-frontend”**

**Step 65**: **Configure Static Website Hosting**

Go to **Properties** tab

Scroll to **Static website hosting**

Click **Edit**

**Static website hosting:** Enable

**Index document:** index.html

**Error document:** index.html

Click **Save changes**

✅ **Green banner:** Successfully edited static website hosting.

**Step 66**: **Configure Bucket Policy**

**Bucket policy:** Click **Edit**

Add this policy (replace BUCKET-NAME):

```
{
    "Version": "2012-10-17",
    "Statement": [        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::BUCKET-NAME/*"
        }
    ]
}
```

Click **Save changes**

✅ **Green banner:** Successfully edited bucket policy.

**8.** _Frontend Application Deployment_
----------------------------------------

### **Create Frontend Files**

**Step 67**: **Create index.html**

Create a new file called **index.html** with this content:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CloudPulse - Task Management</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>CloudPulse</h1>
            <p class="subtitle">Serverless Task Management</p>
        </header>
        <main class="main-content">
            <section class="task-form-section">
                <h2>Add New Task</h2>
                <form id="taskForm" class="task-form">
                    <div class="form-group">
                        <label for="taskTitle">Task Title *</label>
                        <input type="text" id="taskTitle" name="title" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="taskDescription">Description</label>
                        <textarea id="taskDescription" name="description" rows="3"></textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="taskPriority">Priority</label>
                            <select id="taskPriority" name="priority">
                                <option value="LOW">Low</option>
                                <option value="MEDIUM" selected>Medium</option>
                                <option value="HIGH">High</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="taskDueDate">Due Date</label>
                            <input type="date" id="taskDueDate" name="dueDate">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="taskTags">Tags (comma-separated)</label>
                        <input type="text" id="taskTags" name="tags" placeholder="work, urgent, meeting">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Add Task</button>
                </form>
            </section>
            <section class="tasks-section">
                <div class="tasks-header">
                    <h2>Your Tasks</h2>
                    <button id="refreshTasks" class="btn btn-secondary">Refresh</button>
                </div>
                
                <div class="filter-controls">
                    <select id="statusFilter">
                        <option value="">All Status</option>
                        <option value="PENDING">Pending</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                    
                    <select id="priorityFilter">
                        <option value="">All Priority</option>
                        <option value="HIGH">High</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="LOW">Low</option>
                    </select>
                </div>
                
                <div id="tasksContainer" class="tasks-container">
                    <div class="loading">Loading tasks...</div>
                </div>
            </section>
        </main>
        <div id="notification" class="notification hidden"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**Step 68**: **Create styles.css**

Create a new file called **styles.css** with this content:

```
/* CSS Custom Properties for Dark Theme */
:root {
    --bg-primary: #000000;
    --bg-secondary: #1a1a1a;
    --bg-tertiary: #333333;
    --text-primary: #ffffff;
    --text-secondary: #f8f9fa;
    --text-muted: #999999;
    --accent-primary: #4a90e2;
    --accent-secondary: #357abd;
    --border-color: #444444;
    --shadow-color: rgba(0, 0, 0, 0.5);
    --success-color: #28a745;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --info-color: #17a2b8;
}
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    min-height: 100vh;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
/* Header Styles */
.header {
    text-align: center;
    margin-bottom: 40px;
    padding: 20px 0;
    border-bottom: 2px solid var(--border-color);
}
.header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.subtitle {
    color: var(--text-muted);
    font-size: 1.1rem;
}
/* Main Content Layout */
.main-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    align-items: start;
}
/* Form Styles */
.task-form-section {
    background-color: var(--bg-secondary);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 6px var(--shadow-color);
}
.task-form-section h2 {
    margin-bottom: 20px;
    color: var(--text-primary);
    font-size: 1.5rem;
}
.form-group {
    margin-bottom: 20px;
}
.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}
.form-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--text-secondary);
    font-weight: 500;
}
.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 12px 16px;
    background-color: var(--bg-tertiary);
    border: 2px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 14px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}
.form-group textarea {
    resize: vertical;
    min-height: 80px;
}
/* Button Styles */
.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.btn-primary {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: white;
}
.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}
.btn-secondary {
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}
.btn-secondary:hover {
    background-color: var(--border-color);
}
.btn-success {
    background-color: var(--success-color);
    color: white;
}
.btn-danger {
    background-color: var(--danger-color);
    color: white;
}
/* Tasks Section */
.tasks-section h2 {
    color: var(--text-primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
}
.tasks-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.filter-controls {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}
.filter-controls select {
    padding: 8px 12px;
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    color: var(--text-primary);
}
/* Task Cards */
.tasks-container {
    display: grid;
    gap: 15px;
}
.task-card {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.task-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-color);
}
.task-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
}
.task-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}
.task-priority {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}
.priority-high {
    background-color: var(--danger-color);
    color: white;
}
.priority-medium {
    background-color: var(--warning-color);
    color: black;
}
.priority-low {
    background-color: var(--info-color);
    color: white;
}
.task-description {
    color: var(--text-muted);
    margin-bottom: 15px;
    line-height: 1.5;
}
.task-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 0.9rem;
    color: var(--text-muted);
}
.task-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 15px;
}
.tag {
    background-color: var(--bg-tertiary);
    color: var(--text-secondary);
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
}
.task-actions {
    display: flex;
    gap: 10px;
}
.task-actions .btn {
    padding: 6px 12px;
    font-size: 0.8rem;
}
/* Status Styles */
.status-pending {
    border-left: 4px solid var(--warning-color);
}
.status-in-progress {
    border-left: 4px solid var(--info-color);
}
.status-completed {
    border-left: 4px solid var(--success-color);
}
/* Notification Styles */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
}
.notification.show {
    transform: translateX(0);
}
.notification.hidden {
    display: none;
}
.notification.success {
    background-color: var(--success-color);
}
.notification.error {
    background-color: var(--danger-color);
}
.notification.info {
    background-color: var(--info-color);
}
/* Loading and Empty States */
.loading {
    text-align: center;
    color: var(--text-muted);
    padding: 40px;
    font-style: italic;
}
.empty-state {
    text-align: center;
    color: var(--text-muted);
    padding: 40px;
}
.empty-state h3 {
    margin-bottom: 10px;
    color: var(--text-secondary);
}
/* Responsive Design */
@media (max-width: 768px) {
    .main-content {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .tasks-header {
        flex-direction: column;
        align-items: stretch;
        gap: 15px;
    }
    
    .filter-controls {
        flex-direction: column;
    }
    
    .task-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .task-actions {
        flex-wrap: wrap;
    }
    
    .container {
        padding: 15px;
    }
    
    .header h1 {
        font-size: 2rem;
    }
}
@media (max-width: 480px) {
    .task-form-section {
        padding: 20px;
    }
    
    .task-card {
        padding: 15px;
    }
    
    .task-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
}
/* Accessibility Improvements */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
/* Focus Styles for Keyboard Navigation */
.btn:focus,
input:focus,
textarea:focus,
select:focus {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
}
/* High Contrast Mode Support */
@media (prefers-contrast: high) {
    :root {
        --border-color: #666666;
        --bg-secondary: #111111;
        --bg-tertiary: #222222;
    }
}
```

**Step 69**: **Create script.js**

Create a new file called **script.js** with this content:

```
// Configuration
const CONFIG = {
    API_BASE_URL: 'YOUR_API_GATEWAY_URL_HERE', // Replace with your API Gateway URL
    USER_ID: 'default-user'
};
// DOM Elements
const taskForm = document.getElementById('taskForm');
const tasksContainer = document.getElementById('tasksContainer');
const refreshButton = document.getElementById('refreshTasks');
const statusFilter = document.getElementById('statusFilter');
const priorityFilter = document.getElementById('priorityFilter');
const notification = document.getElementById('notification');
// State Management
let tasks = [];
let filteredTasks = [];
// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});
function initializeApp() {
    // Check if API URL is configured
    if (CONFIG.API_BASE_URL === 'YOUR_API_GATEWAY_URL_HERE') {
        showNotification('Please configure your API Gateway URL in script.js', 'error');
        return;
    }
    
    // Set up event listeners
    taskForm.addEventListener('submit', handleTaskSubmit);
    refreshButton.addEventListener('click', loadTasks);
    statusFilter.addEventListener('change', applyFilters);
    priorityFilter.addEventListener('change', applyFilters);
    
    // Load initial tasks
    loadTasks();
}
// API Functions
async function apiRequest(endpoint, options = {}) {
    const url = `${CONFIG.API_BASE_URL}${endpoint}`;
    
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    const requestOptions = { ...defaultOptions, ...options };
    
    try {
        const response = await fetch(url, requestOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}
async function loadTasks() {
    try {
        showLoading();
        const response = await apiRequest(`/tasks/${CONFIG.USER_ID}`);
        tasks = response.tasks || [];
        applyFilters();
        showNotification('Tasks loaded successfully', 'success');
    } catch (error) {
        console.error('Failed to load tasks:', error);
        showNotification('Failed to load tasks. Please check your API configuration.', 'error');
        showEmptyState('Failed to load tasks');
    }
}
async function createTask(taskData) {
    try {
        const response = await apiRequest(`/tasks/${CONFIG.USER_ID}`, {
            method: 'POST',
            body: JSON.stringify(taskData)
        });
        
        tasks.unshift(response.task);
        applyFilters();
        showNotification('Task created successfully', 'success');
        return response.task;
    } catch (error) {
        console.error('Failed to create task:', error);
        showNotification('Failed to create task', 'error');
        throw error;
    }
}
async function updateTaskStatus(taskId, status) {
    try {
        const response = await apiRequest(`/tasks/${CONFIG.USER_ID}/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify({ status })
        });
        
        const taskIndex = tasks.findIndex(task => task.taskId === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex] = response.task;
            applyFilters();
        }
        
        showNotification('Task updated successfully', 'success');
        return response.task;
    } catch (error) {
        console.error('Failed to update task:', error);
        showNotification('Failed to update task', 'error');
        throw error;
    }
}
async function deleteTask(taskId) {
    try {
        await apiRequest(`/tasks/${CONFIG.USER_ID}/${taskId}`, {
            method: 'DELETE'
        });
        
        tasks = tasks.filter(task => task.taskId !== taskId);
        applyFilters();
        showNotification('Task deleted successfully', 'success');
    } catch (error) {
        console.error('Failed to delete task:', error);
        showNotification('Failed to delete task', 'error');
        throw error;
    }
}
// Event Handlers
async function handleTaskSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(taskForm);
    const taskData = {
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
        priority: formData.get('priority'),
        dueDate: formData.get('dueDate') || null,
        tags: formData.get('tags') ? formData.get('tags').split(',').map(tag => tag.trim()).filter(tag => tag) : []
    };
    
    if (!taskData.title) {
        showNotification('Task title is required', 'error');
        return;
    }
    
    try {
        await createTask(taskData);
        taskForm.reset();
    } catch (error) {
        // Error already handled in createTask
    }
}
function applyFilters() {
    const statusFilterValue = statusFilter.value;
    const priorityFilterValue = priorityFilter.value;
    
    filteredTasks = tasks.filter(task => {
        const statusMatch = !statusFilterValue || task.status === statusFilterValue;
        const priorityMatch = !priorityFilterValue || task.priority === priorityFilterValue;
        return statusMatch && priorityMatch;
    });
    
    renderTasks();
}
// UI Rendering Functions
function renderTasks() {
    if (filteredTasks.length === 0) {
        if (tasks.length === 0) {
            showEmptyState('No tasks yet. Create your first task above!');
        } else {
            showEmptyState('No tasks match your current filters.');
        }
        return;
    }
    
    const tasksHTML = filteredTasks.map(task => createTaskCard(task)).join('');
    tasksContainer.innerHTML = tasksHTML;
}
function createTaskCard(task) {
    const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date';
    const createdDate = new Date(task.createdAt).toLocaleDateString();
    const tags = task.tags && task.tags.length > 0 
        ? task.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')
        : '';
    
    const statusClass = `status-${task.status.toLowerCase().replace('_', '-')}`;
    const priorityClass = `priority-${task.priority.toLowerCase()}`;
    
    return `
        <div class="task-card ${statusClass}">
            <div class="task-header">
                <h3 class="task-title">${escapeHtml(task.title)}</h3>
                <span class="task-priority ${priorityClass}">${task.priority}</span>
            </div>
            
            ${task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : ''}
            
            <div class="task-meta">
                <span>Due: ${dueDate}</span>
                <span>Created: ${createdDate}</span>
            </div>
            
            ${tags ? `<div class="task-tags">${tags}</div>` : ''}
            
            <div class="task-actions">
                ${task.status !== 'COMPLETED' ? `
                    <button class="btn btn-success" onclick="updateStatus('${task.taskId}', 'COMPLETED')">
                        Complete
                    </button>
                ` : ''}
                
                ${task.status === 'PENDING' ? `
                    <button class="btn btn-secondary" onclick="updateStatus('${task.taskId}', 'IN_PROGRESS')">
                        Start
                    </button>
                ` : ''}
                
                ${task.status === 'IN_PROGRESS' ? `
                    <button class="btn btn-secondary" onclick="updateStatus('${task.taskId}', 'PENDING')">
                        Pause
                    </button>
                ` : ''}
                
                <button class="btn btn-danger" onclick="confirmDeleteTask('${task.taskId}')">
                    Delete
                </button>
            </div>
        </div>
    `;
}
function showLoading() {
    tasksContainer.innerHTML = '<div class="loading">Loading tasks...</div>';
}
function showEmptyState(message) {
    tasksContainer.innerHTML = `
        <div class="empty-state">
            <h3>No Tasks Found</h3>
            <p>${message}</p>
        </div>
    `;
}
// Global Functions (called from HTML)
window.updateStatus = async function(taskId, status) {
    try {
        await updateTaskStatus(taskId, status);
    } catch (error) {
        // Error already handled in updateTaskStatus
    }
};
window.confirmDeleteTask = function(taskId) {
    if (confirm('Are you sure you want to delete this task? This action cannot be undone.')) {
        deleteTask(taskId);
    }
};
// Utility Functions
function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.remove('hidden');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 300);
    }, 3000);
}
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
// Error Handling
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
    showNotification('An unexpected error occurred', 'error');
});
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    showNotification('An unexpected error occurred', 'error');
});
```

**Step 70: Configure API URL in Frontend**

Update **script.js** with your **API URL**

Open **script.js**

Find the line: **API_BASE_URL: ‘YOUR_API_GATEWAY_URL_HERE’**

Replace with your actual API Gateway URL from **Step 62**

**Example:** API_BASE_URL: ‘https://abc123.execute-api.us-east-1.amazonaws.com/prod'

### Upload Files to S3

**Step 71: Go back to your S3 bucket in AWS Console1**

Click **Upload**

Drag and drop or select these files:

1.  **index.html**
2.  **styles.css**
3.  **script.js**

Click **Upload**

✅ **Green banner: Upload succeeded**

For more information, see the **Files and folders** table.

**💡Verification:** Files are uploaded

### Test Your Application

**Step 72: Access Your Website**

Go to your **S3 bucket**

Click **Properties** tab

Find **Static website hosting**

Click the **Bucket website endpoint** URL

**Step 73: Test Application Features**

Create a new task with title **Test Task**

Set priority to **High**

Add description **Testing CloudPulse application**

Click **Add Task**

Verify the task appears in the task list

Try updating task status to **In Progress**

Try completing the task

Test the delete functionality

**💡Verification:** You can create, view, update, and delete tasks successfully

**9.** _Testing and Validation_
-------------------------------

### Comprehensive Application Testing

**Step 74: Browser Developer Tools Testing**

Press F12 to open developer tools, or right Click and Select **Inspect**

Go to **Console** tab

Look for any JavaScript errors **(should be none)**

Go to **Network** tab

Create a task and watch the API calls

**💡Verification:** API responses return status 200/201

**Step 75: Cross-Browser Testing**

Test in Chrome, Firefox, Safari, and Edge

Verify theme displays consistently

Test responsive design on mobile devices

**Step 76: API Endpoint Testing**

Test **GET**: [YOUR_API_URL]/tasks/default-user

Should return JSON with tasks array

```
{"tasks":[{"createdAt":"2026-01-10T21:57:05.024Z","description":"Leverage the AWS Community to Certify with Confidence","dueDate":"2026-01-12","priority":"HIGH","status":"IN_PROGRESS","tags":[],"title":"12 Weeks Workshop Challenge: Capstone Project","updatedAt":"2026-01-10T21:57:46.224Z","userId":"default-user","taskId":"task-1768082225024-j1akcqedl"},{"userId":"default-user","updatedAt":"2026-01-10T22:05:03.284Z","dueDate":"2026-01-31","status":"PENDING","createdAt":"2026-01-10T22:05:03.284Z","priority":"HIGH","description":"Watching the API Calls","tags":[],"title":"API Test Task","taskId":"task-1768082703284-kys7qdegs"}]}
```

Test with browser or tools like Postman

**💡Verification:** All tests pass without errors

### DynamoDB Data Verification

**Step 77: Navigate to DynamoDB Tables**

Click on **CloudPulseTasks** table

Click **Explore table items**

Verify your test tasks are stored correctly

Check all fields: userId, taskId, title, description, status, priority, createdAt, updatedAt

**💡Verification:** Task data is properly stored in DynamoDB

### CloudWatch Logs Verification

**Step 78: Check Lambda Function Logs**

Go to **CloudWatch** in AWS Console

Under **Logs ▼**

Click **Log management**

Under **Log groups,** Find **/aws/lambda/cloudpulse-task-handler**

Click on **/aws/lambda/cloudpulse-task-handler**

Click on the latest **log stream**

Verify function executions are logged without errors

**💡Verification:** Lambda function logs show successful executions

**10.** _Monitoring Setup_
--------------------------

### **Create CloudWatch Dashboard**

**Step 79:** **Go to CloudWatch in AWS Console**

Click **Dashboards**

Click **Create dashboard**

**Dashboard name:** CloudPulse-Monitoring

Click **Create dashboard**

**Step 80:** **Add Lambda Metrics Widget**

**Data sources type:** CloudWatch

**Data type:** Metrics

**Widget type:** Line

Click **Next**

Select **Lambda**

Click **By Function name**

Metrics: Select your **cloudpulse-task-handler** function

Choose metrics: **Duration, Invocations, Errors**

Click **Create widget**

Click **Save**

**Step 81:** **Add API Gateway Metrics Widget**

Click **(+)**

**Data sources type:** CloudWatch

**Data type:** Metrics

**Widget type:** Number

Click **Next**

Select **API Gateway**

Click **By API name**

Choose your API and add: **Count, Latency, 4XXError, 5XXError**

Click **Create widget**

Click **Save**

**Step 82:** **Add DynamoDB Metrics Widget**

Click **(+)**

**Data sources type:** CloudWatch

**Data type:** Metrics

**Widget type:** Line

Click **Next**

Select **DynamoDB**

Click **Table Metrics**

Choose your Table and add: **ConsumedReadCapacityUnits, ConsumedWriteCapacityUnits**

Click **Create widget**

**Step 83:** **Save Dashboard**

Click **Save**

**💡Verification:** Dashboard shows metrics from all services

### Set Up CloudWatch Alarms

**Step 84: Create Lambda Error Alarm**

Go to **CloudWatch**

**Alarms ▼**

Click **All alarms**

Click **Create alarm**

Click **Select metric**

Select metric: **Lambda → By Function Name → cloudpulse-task-handler → Errors**

Click **Select metric**

**Statistic:** Sample count

**Period:** 5 minutes

**Threshhold type:** Static

**Whenever Errors is…:** Greater

**than…: 0**

Click **Next**

**Alarm state trigger:** In Alarm

**Step 85: Send a notification to the following SNS topic:** Create a new topic

**Create a new topic…:** CloudPulseTopic

**Email endpoints that will receive the notification…:** Your email address

Click **Create topic**

Confirm Subscription

✅ **Subscription confirmed!**

**You have successfully subscribed.**

Click **Next**

**Alarm Name:** CloudPulse-Lambda-Errors

Click **Next**

Click **Create alarm**

✅ **Green banner: Successfully created alarm CloudPulse-Lambda-Errors.**

**Step 86: Create API Gateway 5XX Error Alarm**

Click **Create alarm**

Click **Select metric**

Select metric: **API Gateway→ By API Name → cloudpulse-api → 5XXError**

Click **Select metric**

**Statistic:** Sample count

**Period:** 5 minutes

**Threshhold type:** Static

**Whenever Errors is…:** Greater

**than…: 0**

Click **Next**

**Alarm state trigger:** In Alarm

**Send a notification to the following SNS topic:** Select an existing topic

**Send a notification to…: CloudPulseTopic**

Click **Next**

**Alarm name:** CloudPulse-API-5XX-Errors

Click **Next**

Click **Create alarm**

✅ **Green banner: Successfully created alarm CloudPulse-API-5XX-Errors.**

**💡Verification:** Alarms are created and show “OK” status

**11.** _Cost Management_
-------------------------

### Set Up Budget Alerts

**_Enable multi-session support so you can easily login to the Root User Account and IAM User._**

**Step 87: Navigate to Billing Console**

Under **Budgets and Planning,** Click **Budgets**

Click **Create budget**

**Step 88: Choose budget type**

**Budget Setup:** Customized (advanced)

**Budget type:** Cost budget — Recommended

Click **Next**

**Step 89: Set your budget**

**Budget name:** CloudPulse

**Period:** Monthly

**Budget renewal type:** Expiring budget

**Start Month:** Jan 2026

**End Month:** March 2026

**Budgeting method:** Fixed

**Budget amount:** $25.00

**Budget scope:** All AWS services (Recommended)

Click **Next**

**Step 90: Configure alerts**

Click **Add an alert threshold**

**Threshold:** 80 % of budgeted amount

**Trigger:** Actual

**Email recipients**: [your-email@example.com]

Click **Next**

**Step 91:** Click **Next**

**Step 92:** Click **Create budget**

✅ **Green banner:** Your budget **CloudPulse** has been created successfully.

**💡Verification:** Budget is created and shows current spend

### **Review Cost Explorer**

**Step 93:** **Go to Cost Explorer in Billing dashboard**

Under **Cost and Usage Analysis:** explore and configure as you see fit

Review costs by service, etc.

**💡Verification:** You can see breakdown of costs by AWS service

**12.** _Trouble Shooting_
--------------------------

### **Common Issues and Solutions**

**_Issue 1: API Gateway CORS Errors_**

**Problem:** Browser console shows CORS errors when making API calls

**Solution:**

**1.** Go to API Gateway console

**2.** Select your API → Resources

**3**. For each resource, click “Actions” → “Enable CORS”

**4**. Ensure “Access-Control-Allow-Origin” is set to “*”

**5.** Deploy API again

**_Issue 2: Lambda Function Timeout_**

**Problem:** API calls take too long or timeout

**Solution:**

**1.** Go to Lambda console

**2.** Click your function → Configuration → General configuration

**3.** Increase timeout to 30 seconds

**4.** Save changes

**_Issue 3: DynamoDB Access Denied_**

**Problem:** Lambda function logs show DynamoDB access denied errors

**Solution:**

**1.** Go to IAM console

**2.** Find your Lambda execution role

**3.** Attach “AmazonDynamoDBFullAccess” policy

**4.** Test function again

**_Issue 4: S3 Website Not Loading_**

**Problem:** S3 website endpoint returns access denied

**Solution:**

**1.** Check bucket policy allows public read access

**2.** Verify “Block all public access” is disabled

**3.** Ensure files are marked as public

**_Issue 5: Tasks Not Displaying_**

**Problem:** Frontend loads but no tasks appear

**Solution:**

**1.** Check browser console for JavaScript errors

**2.** Verify API URL is correctly configured in script.js

**3.** Test API endpoint directly in browser

**4.** Check Lambda function logs for errors

**_Getting Additional Help_**

If you encounter issues not covered here:

**1.** Check AWS CloudWatch logs for detailed error messages

**2**. Use browser developer tools to inspect network requests

**3.** Verify all AWS service configurations match this guide

**4.** Ask Q in your console.

**13.** _Cleanup Procedures_
----------------------------

### **Important for Cost Control**

_When you’re done experimenting with CloudPulse, follow these steps to avoid ongoing charges._

**Step 94: Delete S3 Bucket Contents**

Go to **S3** console

Click on your **bucket name**

Select all objects

Click **Delete**

Type **delete** to confirm

After objects are deleted, delete the bucket itself

**Step 95: Delete API Gateway**

Go to API Gateway console

Select your API

Click **Delete**

Type **confirm** to delete

**Step 96: Delete Lambda Function**

Go to Lambda console

Select your function

Click Actions → Delete

Type confirm to delete

**Step 97: Delete DynamoDB Table**

Go to DynamoDB console

Select your table

Click “Delete”

Type confirm to delete

**Step 98: Delete CloudWatch Resources**

Delete custom dashboards

Delete custom alarms

Delete log groups

**Step 99: Delete IAM User (Optional)**

Go to IAM console

Delete attached policies from user

Delete access keys

Delete the user

**Step 100: Verify Cleanup**

1. Go to Billing dashboard

2. Check Cost Explorer to verify no ongoing charges

3. Review each service console to ensure resources are deleted

**⚠️ Important: A**lways verify cleanup is complete to avoid unexpected charges.

Well Architected Framework
--------------------------

Congratulations! You have successfully built and deployed CloudPulse, a serverless task management application that exemplifies the AWS Well-Architected Framework principles.

Through this hands-on implementation, you’ve created an application that achieves o**perational excellence** through comprehensive documentation and validation procedures, maintains **security** through IAM roles and encryption, ensures **reliability** via serverless architecture and automatic scaling, delivers **performance efficiency** with right-sized resources and managed services, **optimizes costs** through pay-per-use pricing models, and promotes **sustainability** by eliminating idle resources.

CloudPulse demonstrates that following Well-Architected principles from the beginning results in applications that are not only functional but also secure, scalable, cost-effective, and environmentally responsible, proving that good architecture is the foundation of successful cloud applications.

**Advanced Architecture Patterns**
----------------------------------

### **Disaster Recovery Strategy**

CloudPulse’s current single-region deployment provides excellent availability within one AWS region, but true enterprise resilience requires disaster recovery planning.

A comprehensive DR strategy would involve implementing cross-region replication for DynamoDB using Global Tables, deploying Lambda functions in multiple regions with Route 53 health checks for automatic failover, replicating S3 static websites across regions with CloudFront origin failover, and establishing automated backup procedures with point-in-time recovery testing.

The serverless architecture significantly simplifies DR implementation since there are no servers to replicate, only data and configuration. Consider implementing a pilot light DR pattern where a minimal version runs in a secondary region, ready to scale up during a disaster, or a warm standby approach with reduced capacity running continuously for faster recovery times.

### **Multi-Region Architecture**

Expanding CloudPulse to a multi-region architecture would provide global performance optimization and enhanced fault tolerance.

This involves deploying identical infrastructure stacks in multiple AWS regions (e.g., us-east-1, eu-west-1, ap-southeast-1), implementing DynamoDB Global Tables for automatic multi-region data replication with eventual consistency, using Route 53 geolocation routing to direct users to their nearest region for optimal latency, and configuring CloudFront with multiple regional origins for global content delivery.

The challenge lies in managing data consistency across regions, while DynamoDB Global Tables handle this automatically, you must design your application to handle eventual consistency scenarios where a task created in one region might not immediately appear in another. Consider implementing conflict resolution strategies for concurrent updates and monitoring cross-region replication lag to ensure acceptable user experience globally.

### **Concluding Remarks**

Key Learning Outcomes
---------------------

1.  Understanding of AWS serverless architecture
2.  Experience with AWS Console and service configuration
3.  Knowledge of modern web development
4.  Best practices for security, monitoring, and cost management
5.  Troubleshooting skills for cloud applications

**_Remember to always follow AWS best practices for security and cost optimization in your future projects!_**

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._
# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Capstone Project & Architecture Review](https://ntombizakhona.medium.com/capstone-project-architecture-review-38db82027d5f)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**11 January 2026**
