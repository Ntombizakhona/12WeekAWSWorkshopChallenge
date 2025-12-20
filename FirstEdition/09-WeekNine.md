_Week Nine_
# Event Driven Architecture


Event Driven Architecture
-------------------------

Event Driven Architecture refers to a responsive design that allows you to configure triggers that will respond to a particular system event.

### Example of a Simple Event Driven Architecture

[**AWS Lambda**](https://medium.com/12-weeks-aws-workshop-challenge-8f648fed7ec7)**:** Lambda is a core serverless service on AWS. With AWS Lambda, you can run code without provisioning or managing servers.

**Amazon Simple Email Service (SES):** Amazon SES is a fully managed emailing service.

[**Amazon Simple Storage Service (S3**](https://medium.com/@ntombizakhona/12-week-aws-workshop-challenge-fe4fe0f30ebd)**):** Amazon S3 is a fully managed, highly available, and scalable storage service, with a wide range of use cases such as websites, backups, archives, and cloud-native applications.

**You can create a Lambda function that will trigger a SES email to be sent to you when an object is uploaded or deleted on your Amazon S3 bucket.**

### Benefits of Event Driven Architecture

Event Driven Architectures are beneficial when it comes to the management and communication between [serverless](https://medium.com/12-weeks-aws-workshop-challenge-8f648fed7ec7), loosely coupled, cloud-native microservices applications.

Creating a simple Event Driven Architecture
-------------------------------------------

Do you have a simple EDA?

**Yes?** Well, that’s cool. See you in my next post then.

**No?** Ok, no big deal. Let’s create a simple Event Driven Architecture using AWS Lambda, Amazon SES and Amazon S3.

Prerequisites
-------------

### To create an Event Driven Architecture Using AWS Lambda you will need:

(1) to read this Blog Post: [12 Weeks AWS Workshop Challenge — Week Eight (Serverless)](https://medium.com/12-weeks-aws-workshop-challenge-8f648fed7ec7) to familiarize yourself with basic Lambda concepts.

(2) an [AWS account](https://medium.com/@ntombizakhona/12-weeks-aws-workshops-challenge-267dbd668df3) to configure the resources

(3) an accessible email address to receive SES emails

(4) a text editor

(5) understand basic python3

(6) ability to edit a simple python file

(7) know how to use and navigate AWS SDKs & Documentation

(8) [an Amazon S3 bucket](https://medium.com/@ntombizakhona/12-week-aws-workshop-challenge-fe4fe0f30ebd) in the us-east-1 (N. Virginia) region

(9) an [image](https://cdn-images-1.medium.com/max/800/1*D5gU7o3R1EEupqQLcwINRA.png) to upload into the bucket. (save it as Lambda.png)

Step by Step Guide
------------------

### Create SES Verified Identity

**1.** Login to the **AWS Management Console** using your IAM user name.

**2.**  You will be using the **US East (N. Virginia) us-east-1 region**. So, on the top right navigation bar, make sure **N. Virginia** is selected.

**3.**  On the top left corner, click on the **Services** button.

**4.**  Select **Business Applications** on the left side of the drop down menu.

**5.**  Select **Amazon Simple Email Service.**

**6.**  Under Configurations, Click **Verified Identities.**

**7.**  Click **Create identity.**

**8.**  Identity type: **Email address.**

**9.**  Email address: **Enter _your_ email address.**

**10.**  Click **Create identity.**

**11.**  Identity status: **Verification pending.**

**12.**  Navigate to your email client.

**13.**  Click on the link to authorize your email address.

**14.**  **Congratulations!** You have successfully verified an email address. You can now start sending email from this address.

**15.**  Navigate back to SES. Identity status: **Verified.**

### Create an Amazon S3 Bucket

**1.**  On the top left corner, click on the **Services** button.

**2.**  Select **Storage** on the left side of the drop down menu.

**3.**  Select **S3.**

**4.**  Click the **Create bucket** button.

**5.**  AWS Region: **US-East (N. Virginia) us-east-1.**

**6.**  Bucket name: **_your-unique-bucket-name_.** Amazon S3 bucket names must be globally unique, so make sure you choose a globally unique name.

**7.**  Object ownership: **ACLs disabled (recommended).**

**8.**  Block Public Access settings for this bucket: make sure **Block all public access** is checked.

**9.**  Bucket Versioning: **Disable.**

**10.**  Leave everything as default and click **Create bucket.**

**11.**  Click on the Bucket name you just created.

**12.**  Click **Close**.

### Create a Lambda Function

**1.**  Your bucket and your Lambda function must be in the same region. On the top right navigation bar, make sure **N. Virginia** is selected.

**2.**  On the top left corner, click on the **Services** button.

**3.** Select **Compute** on the left side of the drop down menu.

**4.** Select **Lambda.**

**5.**  Click **Create a function.**

**6.**  Select **Use a blueprint.**

**7.**  Blueprint name: **Get S3 object (python3.10)**

**8.**  Function name: **myEventFunction.**

**9.**  Execution role: **Create a new role from AWS policy templates.**

**10.**  Role name: **myEventRole.**

**11.**  Policy templates — optional: A**mazon S3 read only permissions** and **Amazon SES bounce permissions.**

**12.**  Lambda function code: **Peruse and leave as default.**

**13.**  S3 Trigger. Bucket: **select your bucket.**

**14.**  Event Types: Select **All object create events** and **All object delete events.**

**15.**  Prefix — optional: **Leave unchecked.**

**16.**  Suffix — optional: **Leave unchecked.**

**17.**  Recursive invocation: **Check the acknowledgement.**

**18.**  Click **Create function.**

**19.**  **Congratulations!** Your function is created.

**20.**  On the top left corner, click on the **Services** button.

**21.**  Select **Security, Identity & Compliance**on the left side of the drop down menu.

**22.**  Select **IAM.**

**23.**  Click **Roles.**

**24.**  Click **myEventRole.**

**25.**  Click Add permissions: **Attach policies.**

**26.**  Search and check: **AmazonSESFullAccess.**

**27.**  Click **Add permissions.**

**28.**  Navigate to the following [AWS Documentation](https://docs.aws.amazon.com/ses/latest/dg/send-an-email-using-sdk-programmatically.html)**: Sending an email through Amazon SES using an AWS SDK.**

**29.**  Select Python and paste the code to your text editor.

**30.**  Follow the instructions on the template.

**31.**  Sender: **Your details.**

**32.**  Recipient: **Your email address.**

**33.**  CONFIGURATION_SET: **Comment it out.**

**34.**  AWS_REGION: **us-east-1**

**35.**  SUBJECT: **Event Driven Architecture Notification**

**36.**  BODY_TEXT: **Leave as default**

**37.**  BODY_HTML: **Leave as default**

**38.**  CHARSET: **Leave as default**

**39.**  client: **Leave as default**

**40.**  Comment out: **ConfigurationSetName=CONFIGURATION_SET**

**41.**  **Leave everything as default** and copy the contents of the file.

**42.**  Navigate back to your Lambda function.

**43.**  Click **Code.**

**44.**  Select the **lambda_function.py** file.
**45.**  Delete everything, and replace it with the contents of the file you just edited.

**46.**  Click **Deploy.**

**47.**  Successfully updated the function **myEventFunction**.

**48.**  Navigate to your Amazon S3 bucket: **Upload a file.**

**49.**  Check your emails. You should receive the **Event Driven Architecture Notification.**

**50.**  **Congratulations!** You have created a simple Event Driven Architecture.

Important: Clean Up Resources
-----------------------------

Don’t get a [**Bill Shock**](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/checklistforunwantedcharges.html) by leaving unnecessary resources running, because as from the [1st of February 2024, AWS has started charging for IP addresses](https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/#:~:text=Effective%20February%201%2C%202024%20there,attach%20to%20an%20EC2%20instance).).

**1.** Navigate back to AWS Lambda.

**2.**  Click **Functions.**

**3. ** Check **myEventFunction.**

**4.** Click **Delete.**

**5.**  Type **delete** and confirm deletion.

**6.**  Click **Close.**

**7.**  Navigate to your Amazon S3 Bucket.

**8.**  Delete unnecessary objects in your bucket or delete your bucket if you specifically created one for this tutorial.

### End of Step by Step Guide

Conclusion
----------

Congratulations! In this **Step by Step Guide**, you created an AWS Lambda function that responds to object uploads and deletions on an Amazon S3 bucket, and sends an email notification using Amazon SES.

…And theoretically, you understand the basics of event driven architecture. The more you work with microservices, you will configure more complex event driven monitoring and notification systems.

Blog Post Summary
-----------------

### Theory

Introduction to Event Driven Architecture.

### Practical

Creating a simple Event Driven Architecture using AWS Lambda, Amazon SES and Amazon S3.

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Event Driven Architecture](https://ntombizakhona.medium.com/12-weeks-aws-workshop-challenge-c3a131afe821)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**02 February 2024**

