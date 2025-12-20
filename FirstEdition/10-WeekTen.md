_Week Ten_
# Analytics


We are currently living in the ultimate digital age, where most of us are continuously using numerous devices such as routers, speakers, phones, watches, laptops, AR headsets, TVs…you name it. All these devices are constantly emitting data, a lot of data, millions of **terabytes** of data, daily! This data needs to be collected, cleaned, transformed and analyzed in order to achieve actionable insights that will streamline decision making processes, to achieve a particular, optimal result. This is where **Data Analytics** comes in.

What is Data Analytics?
-----------------------

Data Analytics is the process of collecting raw data, cleaning it and transforming it so that it can be consumed visually, usually in the form of graphs, so that it can be further analyzed to detect various trends, patterns, and anomalies that will be interpreted and lead you to draw suitable conclusions.

Data Analytics is not restricted to the business industry only where stakeholders want to accumulate profits, detect fraudulent activities, and improve customer satisfaction.

Data Analytics can be transformative in the sports world, where the players can use their previous games to generate statistics that will improve their future performance. Coaches can analyze their teams, and make more strategic decisions when it comes to choosing players.

Regardless of whichever industry or sector, whether it’s Retail, Business, Finance, Government, Health, Sports…data analytics gives you a competitive advantage, and better understanding of your data, and most importantly, better decision making.

AWS offers multiple Data Analytics services that you can leverage to suit your use case.

Data Analytics Services on AWS
------------------------------

AWS offers various Analytics services, I just cut, pasted and quoted this directly from the console. Feel free to open the AWS Management Console and analyze each service yourself.

### Amazon Athena

> Amazon Athena is an interactive query service that makes it easy to analyse data in Amazon S3 and other federated data sources using standard SQL.

### AWS Clean Rooms

> Create clean rooms in just a few clicks
> 
> AWS Clean Rooms helps companies and their partners more easily and securely analyse and collaborate on their collective datasets, without sharing or revealing underlying data.

### Amazon CloudSearch

> Amazon CloudSearch manages all the server resources needed to build and deploy search indexes. All you have to do is upload your data to a search domain and start submitting requests.

### AWS Data Exchange

> AWS Data Exchange makes it easy for customers to find, subscribe to, and use third-party data from a wide range of providers.
> 
> We offer data delivery through files, tables, and APIs from 250+ providers, all in one place. With a vast catalog of 3,000+ data products and straightforward subscription options using AWS account credentials, AWS Data Exchange makes it easy for customers to ingest third-party data and analyze it with a wide variety of AWS analytics and machine learning services.

### Amazon DataZone

> Unlock data across organizational boundaries with built-in governance
> 
> Discover and share data at scale across organizational boundaries with built-in governance and access controls, removing the undifferentiated heavy lifting of making data accessible to everyone.

### Amazon EMR

> Easily run and scale Apache Spark, Apache Hive, Presto and other big data workloads.
> 
> Amazon EMR is a cloud big data platform for running large-scale distributed data processing jobs, interactive SQL queries and Machine Learning (ML) applications using an open-source analytics framework, such as Apache Spark, Apache Hive, Presto and more.

### AWS Entity Resolution

> Easy-to-configure, machine learning powered entity resolution service
> 
> AWS Entity Resolution is a fully managed entity resolution service that lets you easily match and link related records stored across multiple applications, channels, and data stores using flexible, configurable workflows that take only minutes to set up.

### **Amazon FinSpace**

> Data processing and analytics for capital markets with Managed kdb Insights
> 
> Amazon FinSpace is a suite of services that allow you to create a capital markets data processing hub where customers can build and run the data processing and analytics systems that are core to their business.

### AWS Glue

> AWS Glue is a serverless data integration service.

### AWS Glue DataBrew

> Clean and normalize data up to 80% faster
> 
> AWS Glue DataBrew is a visual data preparation tool that enables users to clean and normalize data without writing any code, to reduce the time it takes to prepare data for analytics and machine learning (ML) by up to 80% compared to today’s conventional, code-based data preparation. You can choose from over 250 pre-built transformations to automate data preparation tasks, such as filtering anomalies, converting data to standard formats, and correcting invalid values, all without the need to write code.

### Amazon Kinesis services

> Collect, process, and analyze data streams in real time.

### Amazon Kinesis Data Firehose

> Real-time streaming delivery for any data, at any scale, and at low-cost.
> 
> Amazon Kinesis Data Firehose provides the easiest way to reliably ingest, transform, and deliver streaming data into data lakes, data warehouses, and analytics services.

### AWS Lake Formation

> Create and manage data lakes with centralized access control across Amazon Web Services
> 
> The easiest way to create and manage your data lake on Amazon S3

### Amazon Managed Service for Apache Flink

> Get actionable insights from streaming data in real time.
> 
> Amazon Managed Service for Apache Flink makes it easy to build stream processing applications and analyze streaming data in real time with Apache Flink.

### Amazon Managed Streaming for Apache Kafka (Amazon MSK)

> A fully managed, highly available and secure Apache Kafka service.
> 
> Amazon MSK makes it easy for you to migrate, build and run real-time streaming applications on Apache Kafka.

### **Amazon OpenSearch Service**

> Search, visualize, and analyze up to petabytes of text and unstructured data

### Amazon Redshift

> Fast, fully managed, petabyte-scale cloud data warehouse.
> 
> Amazon Redshift makes it easier for you to run and scale analytics without having to manage your data warehouse. Get insights by running real-time and predictive analytics on all of your data, across operational databases, data lake, data warehouse, and thousands of third-party datasets.

### Amazon Redshift

> Fast, easy to use business analytics

Amazon OpenSearch
-----------------

Amazon OpenSearch is a scalable, flexible, secure, stable search and analytics service that seamlessly integrates with various services.

As Aram Koukia (

[Aram Koukia](https://medium.com/u/756d64882585?source=post_page---user_mention--f72f7eee0002---------------------------------------)

) explains in [Introduction to Amazon OpenSearch](https://medium.com/@aramkoukia/introduction-to-amazon-opensearch-a3c111f61123)

> You can use OpenSearch to search any kind of data that you can index in Amazon ES, including text, numbers, dates, and geospatial data. You can also use OpenSearch to search data in different formats, such as JSON and XML.
> 
> OpenSearch provides a simple and cost-effective way to perform advanced search operations on your data stored in Elasticsearch, it is easy to use, and can be integrated with other AWS services like AWS Lambda, Amazon S3 and Amazon CloudFront.

### [Amazon OpenSearch Use Cases](https://docs.aws.amazon.com/whitepapers/latest/big-data-analytics-options/elasticsearch.html#ideal-usage-patterns-es)

Amazon OpenSearch is ideal for analyzing various logs, social media sentiments and monitor mobile applications.

Creating a simple OpenSearch Serverless Dashboard
-------------------------------------------------

Do you have an OpenSearch Dashboard?

**Yes?** Well, that’s cool. See you in my next post then.

**No?** Ok, no big deal. Let’s create a simple OpenSearch Serverless Collection so we can create a Dashboard to visualize and analyze sample data!

Let’s Build.

Prerequisites
-------------

### To create a Simple OpenSearch Dashboard

(1) an [AWS account](https://medium.com/@ntombizakhona/12-weeks-aws-workshops-challenge-267dbd668df3) to configure the resources

(2) understand how to edit a basic JSON file.

Step by Step Guide
------------------

### Attach OpenSearch Policies to Your IAM User

**1.** Login to the **AWS Management Console** using your IAM user name.

**2.**  You will be using the **US East (N. Virginia) us-east-1 region**. So, on the top right navigation bar, make sure **N. Virginia** is selected.

**3.**  On the top left corner, click on the **Services** button.

**4.** Select **Security, Identity & Compliance** on the left side of the drop down menu.

**5.**  Click **IAM.**

**6.**  Click **Users.**

**7.**  Select your [**IAM User.**](https://medium.com/@ntombizakhona/12-weeks-aws-workshops-challenge-267dbd668df3)

**8.**  Select **Permissions.**

**9.**  Click **Add Permissions.**

**10.**  Select **Create inline policy.**

**11.**  Policy editor: JSON

**12.**  Replace your code with the following:

```
{
  "Version": "2012-10-17",
  "Statement": [    {
      "Action": [        "aoss:CreateCollection",
        "aoss:ListCollections",
        "aoss:BatchGetCollection",
        "aoss:DeleteCollection",
        "aoss:CreateAccessPolicy",
        "aoss:ListAccessPolicies",
        "aoss:UpdateAccessPolicy",
        "aoss:CreateSecurityPolicy",
        "aoss:GetSecurityPolicy",
        "aoss:UpdateSecurityPolicy",
        "iam:ListUsers",
        "iam:ListRoles"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
```

**13.** Click **Next.**

**14.** Policy name: **myOpenSearchPolicy**.

**15.** Click **Create policy.**

**16.** Green banner: **Policy myOpenSearchPolicy created.**

### Create OpenSearch Collection

**1.**  On the top left corner, click on the **Services** button.

**2.**  Select **Analytics** on the left side of the drop down menu.

**3.** Select **Amazon OpenSearch Service.**

**4.**  Under Serverless, Click **Dashboard.**

**5.**  Get started: Click **Get Started.**

**6.**  Collection name: **my-collection.**

**7.**  Description — optional: **My OpenSearch Serverless Collection.**

**8.**  Collection type: **Search**

**9.**  Deployment type: Uncheck **Enable redundancy (active replicas)**

**10.**  Security: **Standard Create**

**11.**  Encryption: **Use an AWS owned key.**

**12.**  Network Access Settings. Access Type: **Public.**

**13.**  Check: **Enable access to OpenSearch Endpoint** and **Enable access to OpenSearch Dashboards**

**14.**  Click **Next.**

**15.**  Data access policy options: **Uncheck Automatically match access policy settings**

**16.**  Select policy definition method: **Visual editor.**

**17.**  Click **Rule 1.**

**18.**  Rule name: **my-open-search-rule.**

**19.**  Click **Add principals.** Select **IAM Users and roles**.

**20.**  Properties: **Users.**

**21.**  Select **_yourUser._**

**22.**  Click **Save.**

**23.**  Grant permissions.

**24.**  Alias and template permissions: **Select all.**

**25.**  Index Permissions: **Select all.**

**26.**  Data access policy settings: **Create as a new data access policy.**

**27.** Access policy name: **my-opensearch-access.**

**28.**  Description — optional: **My OpenSearch Access Policy.**

**29.**  Review and create collection: Click **Submit.**

**30.**  Green banner: **Successfully created my-collection.**

**31.**  Overview. Status: **Active.**

### Create an Index

**1.**  Under **Overviews,** click the **OpenSearch Dashboards URL.**

**2.**  Welcome to OpenSearch Dashboards. Click **Add data.**

**3.**  Click the menu button.

**4.** Under **Management,** select **Dev Tools.**

**5.** Replace the code with **PUT my-index.**

**6.**  Click the play button to send request.

**7.** You should receive a success **200-OK** status with the following output:

```
{
  "acknowledged": true,
  "shards_acknowledged": true,
  "index": "my-index"
}
```

### Create an Index Pattern

**1.**  Under **Overviews,** click the **OpenSearch Dashboards URL.**

**2.**  Welcome to OpenSearch Dashboards. Click **Add data.**

**3.**  Click the menu button.

**4.**  Under **Management,** select **Stack Management.**

**5.**  Click **Index Patterns.**

**6.** Click **Create Index pattern.**

**7.**  Index Pattern name: **my-index.**

**8.**  Click **Next step.**

**9.** Click **Create index pattern.**

### View Dashboard

**1.**  Navigate back to your menu. Under **OpenSearch Dashboard**, click **Dashboard.**

**2.**  Click **Install some sample data.**

**3.**  Sample web logs. Click **Add data.**

**4.**  Click **View data.**

**5.**  View the different types of visualizations from the Web logs sample data.

Important: Clean Up Resources
-----------------------------

Don’t get a [**Bill Shock**](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/checklistforunwantedcharges.html) by leaving unnecessary resources running, because as from the [1st of February 2024, AWS has started charging for IP addresses](https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/#:~:text=Effective%20February%201%2C%202024%20there,attach%20to%20an%20EC2%20instance).).

**1.**  Navigate back to OpenSearch Service.

**2.**  Under **Serverless,** Click **Collections.**

**3.**  Check **my-collection.**

**4.**  Click **Delete.**

**5.**  Confirm **Delete.**

### End of Step by Step Guide

Conclusion
----------

Congratulations! In this **Step by Step Guide**, you created an OpenSearch Collection, and Dashboard and saw the different types of visualizations of the sample Web Traffic logs data.

…And theoretically, you understand the various types of Analytics services offered by AWS, especially Amazon OpenSearch. I hope the completion of the hands on tutorial made you realize, just how powerful, flexible and fast Amazon OpenSearch Serverless is, and the more you experiment with OpenSearch, you will create even more complex index patterns, queries and various relevant visualizations in an effort to make sense of your data.

Blog Post Summary
-----------------

### Theory

Introduction to Analytics on AWS and Amazon OpenSearch.

### Practical

Getting Started With Amazon OpenSearch Serverless by creating a Collection and a Dashboard.

Resources for Further Learning
------------------------------

### Analytics on AWS

**Whitepaper by AWS**: [Analytics](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/analytics.html)

### Amazon OpenSearch

**Whitepaper by AWS**: [Amazon OpenSearch Service](https://docs.aws.amazon.com/whitepapers/latest/big-data-analytics-options/elasticsearch.html)

**Blog Post by Aram Koukia**: [Introduction to Amazon OpenSearch](https://medium.com/@aramkoukia/introduction-to-amazon-opensearch-a3c111f61123)

**Blog Post by Jon Bonso (Tutorials Dojo):** [Amazon OpenSearch Service Cheat Sheet](https://tutorialsdojo.com/amazon-opensearch-service/)

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Analytics](https://ntombizakhona.medium.com/12-weeks-aws-workshop-challenge-f72f7eee0002)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**06 February 2024**

