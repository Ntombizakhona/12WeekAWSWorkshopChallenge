_Week Four_
# Storage

When you think of storage on AWS, you will want to know what the advantages and benefits of using storage services on AWS are, because, you’re thinking of migrating from on-premises storage, or you’re just looking for better, alternative storage solutions. Well, the benefits of storage services on AWS are that you get to take advantage of the highly scalable, global infrastructure of AWS. These storage services are cost efficient, agile and easily accessible from across the internet or within private networks.

There are three types of ‘core’ storage services on AWS, namely, object, block, and file storage. The different storage offerings give you the opportunity to use the best solution for your scenarios, because it’s important to use the right tool for the job. We will briefly touch upon each of them, while primarily focusing on Amazon S3, which is AWS’s object storage offering, and the easiest one to get started with.

Types of Storage Services
-------------------------

### 1. Object Storage: Amazon Simple Storage (S3)

With Object Storage, unstructured data is stored as objects.

Amazon S3 is a highly available and durable object store.

**S3 Use Cases:** Disaster recovery, Archiving, Static Sites, Web Applications, Logs, Backups and Data Lakes.

**Cost**: With Object Storage, you will be charged based on the storage class, size of data in the bucket (capacity consumed), and data transfer out.

### 2. Block Storage: Amazon Elastic Block Storage (EBS)

With Block Storage, data is partitioned into segments, to put it simply data is stored in blocks. Block storage devices can either be hard-disk drives (HDDs), solid state drives (SSDs), or Non-Volatile Memory Express drives (NVMe).

Amazon EBS is an elastic, high-performance, durable, and, persistent block storage. You can attach and detach it from other services, and take snapshots of it for replication and restoration. EBS volumes can be encrypted at rest.

Aside from EBS, AWS also offers Amazon EC2 instance store, an ephemeral block storage option for your instances.

**EBS Use cases**: You can attach block storage to your throughput intensive compute applications, instances, and databases.

**Cost**: With Block Storage, you pay for the capacity you allocate. Pricing is based on the volume type, provisioned volume size, provisioned IOPS and throughput performance. The pricing varies per Availability Zone.

### 3. File Storage: Amazon Elastic File System (EFS)

With File Storage, data is organized in a hierarchical structure. File storage protocols can either be Server Message Block (SMB) and Network File System (NFS).

Amazon EFS is fully managed, highly available, durable, serverless, elastic and scalable.

Aside from Amazon EFS, AWS also offers Amazon FSx for Lustre and Amazon FSx for Windows File Server, which are managed file systems that are suitable for high performance computing (HPC), and migration solutions.

**EFS Use cases**: Home directories, content repositories and machine learning solutions.

**Cost**: With File Storage, you can choose whether you want to be charged based on allocated or consumed capacity. You pay for the storage used by your system.

In this blog post, we will primarily focus on Amazon S3, and configuring a simple bucket.

Amazon S3
---------

Amazon S3 is 99.99999999999 durable (that’s Ninety Nine Point Nine Nines of Durability) or the Eleven Nines of Durability as others would like to call it.

Amazon S3, which stands for Amazon **S**imple **S**torage **S**ervice is indeed: a simple **s**torage service with varied use cases. You can either just use it to store easily retrievable data, or you can configure a static website and applications, or use it as archival storage amongst others, as it integrates with a multitude of services and applications, within and outside of AWS.

You can store various types of data on S3, however, a single object can not be bigger than 5 terabytes.

### Amazon S3 Storage Classes

**Amazon S3 Standard** is the default storage type. It is suitable for your most active, frequently accessed data. You can use this storage class for static websites, log files, analytical data and configuration files.

**Amazon S3 Standard-Infrequent Access** is highly available and suitable for infrequently accessed data.

**Amazon S3 One Zone-Infrequent Access** is suitable for zonal infrequently accessed data.

**Amazon S3 Glacier Flexible Retrieval** is suitable for archival data that will need quick retrieval times. Data can be retrieved in 1 to 5 minutes.

**Amazon S3 Glacier Deep Archive** is suitable for archiving data that does not need to be frequently accessed and for long term data that needs to be retained for compliance purposes. This storage class has a 12 hour retrieval time.

**Amazon S3 Intelligent Tiering** is suitable for data that has unpredictable access patterns.

**Amazon S3 Express One Zone** is a high performance, single zone access storage class that has a lower request cost than Standard Storage, which makes it suitable for cost efficiency.

### Other Amazon S3 Features

**Versioning:** With Version control, you can have multiple versions of your object available in case you need older versions.

**MFA Delete:** You can protect the accidental deletion of your object by enabling Multifactor Authentication Delete, which will require authentication before you delete an object.

**Encryption:** You can enable default encryption, to encrypt your objects.

**Life Cycle Rules**: You can set lifecycle policies to transition your objects based on access. You can transition (move) them to lower tiers or expire (delete) them if they haven’t been accessed after a certain time period. ction

**Replication**: With replication, you can replicate (copy) objects in your bucket across region with cross-region replication or within the same region with same-region replication.

Creating an Amazon Simple Storage Bucket
----------------------------------------

Do you have an Amazon S3 Bucket?

**Yes?** Well, that’s cool. See you in my next post then, since you know everything.

**No?** Ok, no big deal, let’s create it quickly.

But why **would** you want (actually, need) a basic, personal Amazon S3 bucket in the first place? Well, thanks for asking. So let me tell you: I **hate** having ‘old’ data on my cellphones and devices. I don’t like having infrequently accessed photos and documents that are more than a month old just taking up space, so I upload them to my personal S3 bucket. Thanks to awesome features such as encryption, my data is secure. And I have lifecycle policies configured to transition or expire certain objects. Cool, right?

Prerequisites
-------------

### **To create an Amazon S3 Bucket you will need:**

(1) an [AWS account](https://medium.com/@ntombizakhona/12-weeks-aws-workshops-challenge-267dbd668df3) to configure the resources.

(2) an awesome imagination to configure a globally unique bucket name.

Okay! Let’s Build.

Step by Step Guide
------------------

### How to Create an Amazon S3 Bucket (via the Management Console)

At this point I assume you have occasionally experimented with the AWS Management Console, and you’re familiar with the interface because we will create a simple, basic Amazon S3 bucket to practice the aforementioned theory. Lets, go.

### Create S3 Bucket

**1.**  Login to the **AWS Management Console** using your IAM user name.

**2.**  On the top left corner, click on the **Services** button.

**3.** Select **Storage** on the left side of the drop down menu.

**4.**  Select **S3.**

**5.**  Click the **Create bucket** button.

**6.** AWS Region: **Africa (Cape Town) af-south-1.** I chose the region closest me, you should do the same.

**7.**  Bucket name: **a-uniq-bucket.** Amazon S3 bucket names must be globally unique, so make sure you choose a globally unique name.

**8.**  Object ownership: **ACLs disabled (recommended).**

**9.**  Block Public Access settings for this bucket: make sure **Block all public access** is checked.

**10.**  Bucket Versioning: **Disable.**

**11.**  Leave everything as default and click **Create bucket.**

**12.**  Click on the Bucket name you just created.

**13.**  Click **Upload**.

**14.**  Click **Add files**.

**15.**  Select your favourite picture from your device.

**16.**  Click **Upload**.

**17.**  Click **Close**.

**18.**  Observe your file in the in the **Objects** section.

**19.**  Congratulations you have created a bucket and uploaded a file into it.

### Important: Clean Up Resources

Even though you should make sure to terminate and delete resources configured during practice labs, if this is your first bucket, I recommend that you use it, maintain it, and see what you can do with it.

Just don’t get a **Bill Shock.**

### End of Step by Step Guide

Conclusion
----------

Congratulations! In this **Step by Step Guide**, you created an Amazon S3 Bucket and uploaded a file into it…

…And theoretically, you touched base on the types and use cases of core storage services on AWS. The more you work with AWS Services and with Amazon S3, you will come to find that you can configure more complex architectures, and you can use Amazon S3 for various solutions.

…And, you should constantly visit your Amazon S3 Bucket, and see how you can make it more secure, and create lifecycle policies, and versioning, and whatever your heart desires based on your activity or access patterns. I am sure that in no time at all, you will even be configuring it through the CLI and Bucket policies!

…And (last ‘and’ I promise) most importantly? It is rather quite **affordable.**

…And bye.

Blog Post Summary
-----------------

### **Theory**

Introduction to Storage on AWS.

### **Practical**

Creating an S3 Bucket & Uploading a File.
