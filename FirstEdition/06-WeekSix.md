_Week Six_
# Infrastructure as Code


Introduction to AWS CloudFormation
----------------------------------

AWS CloudFormation is an IaaS (Infrastructure-as-a-Service) service, that allows you to design and deploy your infrastructure as either YAML or JSON code.

The benefits of provisioning your infrastructure as code is that you get to easily replicate your infrastructure quickly across regions. The ease of replicability is an automation process, which reduces human error, and enhances efficiency and consistency in your code across regions.

CloudFormation has two main components: Stacks & Templates. With templates, you can provision various resources such as EC2 Instances and S3 Buckets, amongst others, and with stacks, you can manage your infrastructure and view multiple. A stack is a collection of templates and other stacks, which means that it can consist of one or more templates which are easy to create, delete, update or rollback.

CloudFormation is free to use, you will be charged for the resources you provision.

### Components of CloudFormation Templates

**AWS Template Version:** The format version is the first line you’ll see when working with a CloudFormation template. The current version is **2010–09–09.**

**Description** (Optional)**:** You can use the Description section to provide meaning about the purpose of the template.

**Metadata** (Optional)**:** You can use the Metadata section to provide more information about your template.

**Parameters** (Optional)**:** You can use Parameters to set inputs and and pass default values during creation.

**Mappings** (Optional)**:** You can use Mappings to map (point) values based in different regions.

**Conditions** (Optional): You can use Conditions to specify what your template should do based on a particular value.

**Resources** (Required): Resources are mandatory. You should define at least one resource that needs to be provisioned.

**Outputs (Optional):** You can use the Outputs section to declare values that you can import to other stacks. As a best practice, and for security reasons, you should not include any sensitive information in the Outputs section.

Creating an AWS CloudFormation Template
---------------------------------------

Do you have an AWS CloudFormation template?

**Yes?** Well, that’s cool. See you in my next post then.

**No?** Ok, no big deal. Let’s provision some resources using a simple Sample Template on AWS CloudFormation.

Prerequisites
-------------

### To create an AWS CloudFormation Template you will need:

(1) an [AWS account](https://medium.com/@ntombizakhona/12-weeks-aws-workshops-challenge-267dbd668df3) to configure the resources.

(2) basic understanding of [YAML](https://dev.to/wrijugh/yaml-101-46g8) (or just an ability to read YAML, it’s designed to be human readable and straightforward).

(3) an existing [EC2 KeyPair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html).

Step by Step Guide
------------------

### How to Create an AWS CloudFormation Template (via the Management Console)

**1.**  Login to the **AWS Management Console** using your IAM user name.

**2. ** We will be using the **US East (N. Virginia) (us-east-1) region**. So, on the top right navigation bar, make sure **N. Virginia** is selected.

**3.**  On the top left corner, click on the **Services** button.

**4.**  Select **Management & Governance** on the left side of the drop down menu.

**5.**  Select **CloudFormation.**

**6.**  Click on **Stacks** on the left side of your screen.

**7.**  Click the **Create Stack** button.

**8.**  Pre-requisite — Prepare template: **Use sample template.**

**9.**  Select a sample template. Sample templates: **Simple LAMP stack.**

**10.**  Click **Next.**

**11.**  Stack name: **MyStack.**

**12.**  DBName: **MyDatabase.**

**13.**  DBPassword: **MyPassword.**

**14.**  DBRootPassword: **MyPassword.**

**15.**  DBUser: **MyUser.**

**16.**  InstanceType: **t2.micro.**

**17.**  KeyName: select an existing KeyPair in the N. Virginia region.

**18.**  SSHLocation: **0.0.0.0/0**

**19.**  Click **Next.**

**20.**  Configure Stack options: **Leave everything as default.**

**21.**  Click **Next.**

**22.**  Review my stack: click **Submit.**

**23.**  Status: **CREATE_IN_PROGRESS.**

**24.**  Wait for: **CREATE_COMPLETE.**

**25.**  Click on **Stack Info:** This section shows you the StackID, Description, the Status of your stack, Creation time and whether or not Termination Protection is activated or deactivated.

**26.**  To enable Termination Protection you can click on **Stack Actions.**

**27.**  Select **Edit Termination Protection.**

**28.**  **Edit termination protection for MyStack?** Make sure the **Deactivated** radio button is selected.

**29.**  Click **Save.** In the Stack Info page, you can also view Tags, Stack Policy, Rollback Configurations, and Notification options. In our case, there is none.

**30.**  Click on **Events:** This section shows you time, and status of the resources you’re provisioning

**31.**  Click on **Resources:** This section shows the resources provisioned by your stack. In this case, it should be a **WebServerInstance** and **WebServerSecurityGroup.**

**32.**  Click on **Outputs:** This section shows you the URL for your stack.

**33.**  Click on the **URL link.**

**34.** You should see: **Welcome to the AWS CloudFormation PHP Sample** page.

**35.**  Navigate back to your AWS CloudFormation page.

**36.**  Click on **Parameters:** This section shows you the URL for your stack.

**37.**  Click on **Template:** This section shows you what your template looks like.

**38.**  Click **View in Designer.**

**39.**  Select **YAML,** and analyze the template.

**40.**  Click **Components** for a simpler view.

**41.**  **C**lick **Parameters** to view all the Parameters.

**42.**  Click **Mappings** to view the Mappings.

**43.**  Click **Conditions.** There are no Conditions in this template.

**44.**  Click **Metadata.** There is no Metadata.

**45.**  Click Outputs. Analyze the structure.

**46**.  Click **Close.**

### Resources Provisioned by Sample AWS CloudFormation Template

**1.**  On the top left corner, click on the **Services** button.

**2.**  Select **Compute** on the left side of the drop down menu.

**3.**  Select **EC2.**

**4.**  On the EC2 Instances dashboard, you should see the Instance and Security Group provisioned by your AWS CloudFormation Template.

**5.**  Click **Instances (running).**

**6.**  Click on the **InstanceID.**

**7.**  Public IPv4 address: Click **open address** or copy and paste the Public IPv4 address in your browser.

**8.**  You should see: **Welcome to the AWS CloudFormation PHP Sample** page. (If you don’t see the page, make sure you URL starts with HTTP and not HTTPS, because the Security Group allows HTTP Traffic on Port 80)

**9.**  On the left side of your screen, under **Network & Security,** select **Security Groups.**

**10.**  Click on the Security group provisioned by your Template.

**11.**  Observe the Inbound rules **HTTP (80) & SSH (22)**. Which means that you can privately access the instance through SSH and also access it publicly through HTTP.

Important: Clean Up Resources
-----------------------------

Don’t get a [**Bill Shock**](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/checklistforunwantedcharges.html) by leaving unnecessary resources running.

**1.**  Navigate back to CloudFormation.

**2.**  Select **myStack.**

**3.**  Click **Delete.**

**4.**  Confirm Deletion by clicking **Delete.**

**5.**  Status: **DELETE_IN_PROGRESS**

**6.**  Click refresh. Your stack, and all the resources provisioned will be deleted.

### End of Step by Step Guide

Conclusion
----------

Congratulations! In this **Step by Step Guide**, you created a sample AWS CloudFormation Template, and launched an EC2 Instance and Security Group using the Template.

…And theoretically, you touched upon the basic concepts of an AWS CloudFormation template. The more you work with AWS CloudFormation Templates and Stacks, you will eventually configure more robust templates and stacks that can be launched in multiple Availability Zones & Regions.

Blog Post Summary
-----------------

### Theory

Introduction to AWS CloudFormation.

### Practical

Launching resources using a sample AWS CloudFormation Template.
