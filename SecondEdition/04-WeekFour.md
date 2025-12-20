_Week Four_

# Storage Solutions & Data Management

## The 12-Week AWS Workshop Challenge with Frederica Efia Birago Owusu
-------------------------------------------------------------------

After mastering [Network Architecture & Security](https://medium.com/@ntombizakhona/network-architecture-security-5af48766ee41): designing VPCs, configuring subnets, implementing security controls, and establishing hybrid connectivity, the next critical layer in your AWS journey is Storage Solutions and Data management.

You can architect the most secure, well-designed network, but without the right storage strategy, your applications won’t scale efficiently, your costs will spiral, and your data won’t be protected.

Storage is where architectural decisions have lasting consequences. Choose the wrong storage type, and you’ll pay 10x more than necessary. Forget lifecycle policies, and you’ll store data you don’t need. Skip backup strategies, and you’ll lose everything when disaster strikes. Misunderstand performance characteristics, and your application will crawl under load.

This week’s focus on S3, EBS, EFS, Storage Gateway, and Glacier represents the foundation of how AWS applications store, retrieve, protect, and optimize data across different use cases — from millisecond-latency databases to decade-long archival storage.

Rather than explaining storage services, this article challenges you with 20 carefully crafted questions that test your ability to make real storage architecture decisions. These aren’t theoretical — they’re the questions you’ll face when designing data lakes, optimizing costs, ensuring business continuity, or explaining data durability to stakeholders.

Try answering each question before researching. Better yet, create architecture diagrams showing your storage strategy and publish them as your own article, if you want…

20 Essential Questions on AWS Storage Solutions & Data Management
-----------------------------------------------------------------

### S3 Buckets and Lifecycle Policies

**1.** You’re building a photo-sharing application that receives 10,000 uploads daily. Users frequently access photos for the first 30 days, rarely after 90 days, and almost never after a year. How do you design an S3 lifecycle policy that optimizes cost while maintaining performance, and what storage classes would you transition objects through?

**2.** Your security team requires that all data in S3 be encrypted at rest and wants to control the encryption keys. What are the three encryption options available (SSE-S3, SSE-KMS, SSE-C), when would you choose each one, and what are the cost and operational tradeoffs?

**3.** A developer accidentally deleted an entire S3 bucket containing critical production data. How do you design an S3 bucket strategy that protects against accidental deletion while still allowing legitimate deletions? (Consider versioning, MFA Delete, object lock, and bucket policies.)

**4.** Your application serves static website assets (images, CSS, JavaScript) from S3 to users globally. Users in Asia report slow load times while US users have no issues. How do you optimize S3 performance for global access, and what role does CloudFront CDN play in your architecture?

**5.** You have 500TB of log files in S3 that you’re required to keep for compliance for 7 years but will never access unless there’s a legal investigation. What’s the most cost-effective storage strategy, and how do S3 Glacier Instant Retrieval, Flexible Retrieval, and Deep Archive differ in cost and retrieval time?

### EBS Volumes and Snapshots

**6.** You’re launching an EC2 instance to run a PostgreSQL database. What’s the difference between General Purpose SSD (gp3), Provisioned IOPS SSD (io2), Throughput Optimized HDD (st1), and Cold HDD (sc1), and which would you choose for a production database that requires consistent performance?

**7.** Your application requires 100TB of block storage attached to a single EC2 instance with 64,000 IOPS and sub-millisecond latency. What EBS volume type can deliver this, and how do IOPS, throughput, and volume size relate to cost and performance?

**8.** You take daily EBS snapshots of your production volumes for backup. How are EBS snapshots stored, how is the first snapshot different from incremental snapshots, and what happens to your snapshots if you delete the original volume?

**9.** Your EC2 instance in us-east-1a has failed, and you need to restore it in us-east-1b from an EBS snapshot. What are the exact steps to restore service, and what limitations should you be aware of regarding cross-AZ and cross-Region snapshot usage?

**10.** Your application experiences performance degradation during the first use of an EBS volume restored from a snapshot. What causes this “first-touch penalty,” how does EBS Fast Snapshot Restore (FSR) solve it, and when is the additional cost justified?

### Elastic File System (EFS)

**11.** You have multiple EC2 instances that need to share the same file system for user uploads. When would you choose EFS over EBS, and what are the architectural differences between block storage (EBS) and file storage (EFS)?

**12.** Your application uses EFS but experiences inconsistent performance — sometimes fast, sometimes slow. How do EFS performance modes (General Purpose vs. Max I/O) and throughput modes (Bursting vs. Provisioned) affect application performance, and how do you choose the right combination?

**13.** You have 10TB of files in EFS, but analysis shows only 2TB has been accessed in the past 90 days. How do EFS Lifecycle Management and EFS Infrequent Access (IA) storage class reduce costs, and what happens when users access files moved to IA?

**14.** You need to access your EFS file system from on-premises servers. How do you establish connectivity using AWS Direct Connect or VPN, what are the performance considerations, and how does latency affect usability for different workload types?

**15.** Your application requires POSIX-compliant file permissions, supports thousands of concurrent connections, and needs to scale to petabytes. Why is EFS suitable for this use case while S3 is not, and what are the cost implications of using EFS at scale?

### AWS Storage Gateway & Glacier

**16.** Your company has 50TB of data in an on-premises file server that needs gradual migration to AWS while maintaining local access during the transition. How does AWS Storage Gateway (File Gateway, Volume Gateway, Tape Gateway) solve this, and which type fits a file server migration scenario?

**17.** You’re implementing a hybrid backup strategy where backups need to be stored in AWS but must be instantly accessible locally for fast recovery. How does Volume Gateway in cached mode differ from stored mode, and which provides better local recovery time?

**18.** Your organization has a tape-based backup system with existing backup software (Veeam, Veritas) but wants to eliminate physical tapes and ship tapes offsite. How does Tape Gateway enable “cloud-based tape” that works with existing backup workflows, and what cost savings does this provide?

**19.** You need to archive 100TB of medical records that must be retained for 10 years, will almost certainly never be accessed, but must be retrieved within 12 hours if requested for legal reasons. Should you use S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive, and what are the cost and retrieval time tradeoffs?

**20.** Your compliance team requires that archived data in Glacier cannot be deleted or modified for 7 years (WORM — Write Once Read Many). How do S3 Object Lock, Glacier Vault Lock, and retention modes (compliance vs. governance) enforce immutability, and what happens if you try to delete locked objects?

Additional Resources
--------------------

### [Amazon Simple Storage Service User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

> Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.
> 
> Amazon S3 provides management features so that you can optimize, organize, and configure access to your data to meet your specific business, organizational, and compliance requirements.

### [Amazon EBS User Guide](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)

> Amazon Elastic Block Store (Amazon EBS) provides scalable, high-performance block storage resources that can be used with Amazon Elastic Compute Cloud (Amazon EC2) instances.

### [Amazon Elastic File System User Guide](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html)

> Amazon Elastic File System (Amazon EFS) provides serverless, fully elastic file storage so that you can share file data without provisioning or managing storage capacity and performance.
> 
> Amazon EFS is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files. Because Amazon EFS has a simple web services interface, you can create and configure file systems quickly and easily.
> 
> The service manages all the file storage infrastructure for you, meaning that you can avoid the complexity of deploying, patching, and maintaining complex file system configurations.

### [AWS Storage Workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/74237958-77c8-4e7f-a02f-ae201a04d759/en-US/setup)

> An AWS Storage focused workshop, that introduces several AWS storage services with a focus on storage security best practices, data migration strategies, storage performance tuning, and backup.

### [Frederica Efia Birago Owusu](https://www.linkedin.com/in/fredericaefiabiragoowusu/)

> AWS Cloud engineer building resilient solutions and making cloud computing easy for all.
> 
> Teaching and mentoring is at the heart of what I do, especially when it comes to helping women in STEM break barriers and stereotypes.
> 
> I am also actively involved in wireless communication research, where I explore next-generation technologies driving modern-day communication.

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: hands-on experimentation, targeted research, and community engagement.

Don’t just read about S3 lifecycle policies — create them, test different transition rules, monitor how objects move between storage classes, and calculate actual cost savings.

When you encounter concepts you don’t fully grasp, dive into AWS documentation, pricing calculators, and Well-Architected reviews to build deeper understanding.

But here’s where the magic multiplies: bring your questions to learning communities, engage in discussions, and most importantly, answer questions from fellow learners.

Teaching is the ultimate test of understanding — when you can explain why Glacier Deep Archive costs 1/10th of S3 Standard or walk someone through restoring from an EBS snapshot, you’re not just helping them; you’re cementing your own expertise.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Storage Solutions & Data Management](https://ntombizakhona.medium.com/storage-solutions-data-management-68a0441eaf0a)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**25 October 2025**
