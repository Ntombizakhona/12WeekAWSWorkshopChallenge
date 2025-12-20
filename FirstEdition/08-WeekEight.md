_Week Eight_
# Serverless

What is Serverless Computing?
-----------------------------

Serverless Computing refers to building applications without provisioning, managing, and operating servers or managing the underlying resources.

### **Benefits of Serverless Computing**

**Don’t Manage Servers:** with server management abstracted by the cloud or service provider, developers get to focus on building and deploying applications, which in turn leads to productivity, quick to market and customer satisfaction.

**Pay As You Go:** The Consumption Based Model of serverless computing means that you only pay for the compute power and services provisioned, and you can therefore terminate and launch resources at will. You will not be charged when your function is idle and not in use.

**High Availability:** Serverless services are usually fully managed by the cloud provider, which means that you have autoscaling and load balancing enabled which ensures that your application has high availability.

AWS Lambda
----------

AWS Lambda is a core serverless service on AWS. With AWS Lambda, you can run code without provisioning or managing servers. This simply means that you can upload your code, and integrate your Lambda function(s) with other serverless services in the AWS ecosystem because it can run code in response to events.

AWS Lambda has a variety of use cases, such as web applications, data processing, and automation.

### Languages Supported by AWS Lambda:

1.  Node.js
2.  Java
3.  C#
4.  Python
5.  Go
6.  Ruby
7.  PowerShell
8.  Runtime API: for additional programming languages not natively supported by AWS Lambda.

### Components of AWS Lambda

**Lambda Function:** a lambda function is your code.

**Lambda Layers:** a lambda layer contains your dependencies.

**Concurrency:** concurrency in Lambda refers to functions running at the same time.

**Handler:** your function that is called by Lambda.

**Lambda Invocation Models:** you can invoke a function synchronously or asynchronously.

**Lambda Permissions:** _Resource Policy (Function Policy):_ A resource policy tells Lambda which users, roles, AWS Services or accounts have permission(s) to invoke a Lambda function. _IAM Execution Role:_ The IAM execution roles allows your function to interact with other resources.

**Lambda Limits:** _Memory:_ You can allocate up to 10 GB of memory to a Lambda function. _Timeout:_ The maximum timeout for a Lambda function is 15 minutes (900 seconds)

### Examples of Lambda Integrations with other AWS Serverless Services

**Amazon Simple Queue Service (SQS):** Amazon SQS is a fully managed, loosely coupled queuing service. AWS Lambda can respond to messages in Amazon SQS.

**Amazon Simple Notification Service (SNS):** Amazon SNS is a fully managed, messaging service that allows you to send notifications from the cloud. AWS Lambda can respond to notifications in Amazon SNS.

[**Amazon Simple Storage Service (S3**](https://medium.com/@ntombizakhona/12-week-aws-workshop-challenge-fe4fe0f30ebd)**):** Amazon S3 is a fully managed, highly available, and scalable storage service, with a wide range of use cases such as websites, backups, archives, and cloud-native applications. AWS Lambda can respond to the modification and alterations of objects in your Amazon S3 buckets.

**Amazon API Gateway:** Amazon API Gateway is a fully managed service for creating, maintaining, publishing APIs at any scale. AWS Lambda can respond to HTTP requests through API Gateway.

**Amazon DynamoDB:** Amazon DynamoDB is a fully managed NoSQL database. AWS Lambda can respond to table updates on Amazon DynamoDB.

**Amazon CloudWatch:** Amazon CloudWatch is a monitoring service. AWS Lambda can response to events or logs in CloudWatch.

**AWS Step Functions:** AWS Step Functions is a fully managed workflow service. AWS Lambda can response to state relations in AWS Step Functions.

Creating an AWS Lambda Function that Responds to an Amazon S3
-------------------------------------------------------------

Do you have an AWS Lambda Function?

**Yes?** Well, that’s cool. See you in my next post then.

**No?** Ok, no big deal. Let’s create a Lambda Function!

Prerequisites
-------------

### To create an AWS Lambda Function You Will Need

(1) an [AWS account](https://medium.com/@ntombizakhona/12-weeks-aws-workshops-challenge-267dbd668df3) to configure the resources

(2) understand basic node.js

(3) ability to edit a simple JSON file

(3) [an Amazon S3 bucket](https://medium.com/@ntombizakhona/12-week-aws-workshop-challenge-fe4fe0f30ebd) in the us-east-1 (N. Virginia) region

Step by Step Guide
------------------

### How to Create a Lambda Function

**1.**  Login to the **AWS Management Console** using your IAM user name.

**2.** You will be using the **US East (N. Virginia) (us-east-1) region**. So, on the top right navigation bar, make sure **N. Virginia** is selected.

**3.**  On the top left corner, click on the **Services** button.

**4.**  Select **Compute** on the left side of the drop down menu.

**5.**  Select **Lambda.**

**6.**  Click **Create a function.**

**7.**  Select **Use a blueprint.**

**8.**  Blueprint name: **Get S3 object (nodejs18.x)**

**9.**  Function name: **myFunction.**

**10.**  Execution role: **Create a new role from AWS policy templates**

**11.**  Role name: **myRole.**

**12.**  Policy templates — optional: A**mazon S3 read only permissions**

**13.**  Lambda function code: **Peruse and leave as default.**

**14.**  S3 Trigger. Bucket: **select a bucket in us-east-1 or c**[**reate a new bucket.**](https://medium.com/@ntombizakhona/12-week-aws-workshop-challenge-fe4fe0f30ebd)

**15.**  Event Types: Select **All object create events** and **All object delete events.**

**16.**  Prefix — optional: **Leave unchecked.**

**17.**  Suffix — optional: **Leave unchecked.**

**18.**  Recursive invocation: **Check the acknowledgement.**

**19.**  Click **Create function.**

**20.**  **Congratulations!** Your function is created.

**21.**  Download the following [image](https://cdn-images-1.medium.com/max/800/1*D5gU7o3R1EEupqQLcwINRA.png). Save it as **Lambda.png**

**22.**  Navigate to your Amazon S3 Buckets page.

**23.**  Select the Bucket you chose in Step 12.

**24.**  Objects: **Upload.**

**25.**  Add files: add **Lambda.png**

**26.**  Go to **Properties:** Copy the Amazon Resource Name of your bucket.

**27.**  Navigate back to your AWS Lambda Function page. Scroll down and click **Test.**

**28.**  Test event action: **Create new event.**

**29.**  Event name: **myEvent.**

**30.**  Event sharing settings: **Private.**

**31.**  Template — optional: **s3-put.**

**32.**  Update the **“name”** of the bucket, with your bucket name on **Line 23.**

**33.**  Update the **ARN**, with the ARN of your bucket on **Line 27.**

**34.**  Update the **“key”** of the object, with the file you uploaded: **Lambda.png** bucket name on **Line 30.**

**35.**  Click **Save.**

**36.**  Click **Test.**

**37.**  **Execution function: succeeded.** Click on the **logs** link.

**38.**  Navigate back to your bucket.

**39.**  Upload another file.

**40.**  Navigate back to your CloudWatch Log Streams.

**41.**  You should see an additional Log after uploading another object.

**42.**  Congratulations! You just created a Lambda function that responds to uploads on an S3 bucket.

Important: Clean Up Resources
-----------------------------

Don’t get a [**Bill Shock**](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/checklistforunwantedcharges.html) by leaving unnecessary resources running.

**1.**  Navigate back to AWS Lambda.

**2.**  Click **Functions.**

**3.**  Check **myFunction.**

**4.**  Click **Delete.**

**5.**  Type **delete** and confirm deletion.

**6.**  Click **Close.**

**7.**  Navigate to your Amazon S3 Bucket.

**8.**  Delete unnecessary objects in your bucket or delete your bucket if you specifically created one for this tutorial.

### End of Step by Step Guide

Conclusion
----------

Congratulations! In this **Step by Step Guide**, you created an AWS Lambda function that responds to object uploads and deletions on an Amazon S3 bucket.

…And theoretically, you touched upon the basic concepts of Serverless and AWS Lambda. The more you work with Serverless services and AWS Lambda, you will eventually configure more responsive, robust, cloud native, serverless event driven architecture that spans regions and zones!

Blog Post Summary
-----------------

### Theory

Introduction to Serverless and AWS Lambda.

### Practical

Creating an AWS Lambda Function that responds to Amazon S3 Object Puts and Deletes.

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Serverless](https://ntombizakhona.medium.com/12-weeks-aws-workshop-challenge-8f648fed7ec7)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**01 February 2024**

