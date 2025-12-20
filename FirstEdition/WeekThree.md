In traditional, on-premises data centers, networking consists of wires, lots of wires & cables. 
A network engineer or technician has to configure cables, switches, routers and servers… but, thankfully, all of this is abstracted by AWS when you configure Networking in the Cloud. Almost anyone can provision networking solutions, by simply clicking away!

Networking on AWS is primarily configured through the Virtual Private Cloud (Amazon VPC). The benefit of networking on AWS is that you get to take advantage of the highly available, resilient, global, scalable, elastic, agile, and secure infrastructure of AWS!

# Amazon VPC
Amazon VPC allows you to logically isolate your resources within the cloud, therefore, allowing you to have your own 'Private Cloud' within AWS, where you can decide if you want to configure the resources you have provisioned to be accessible through the internet with internet gateways and public routes or privately through gateways & endpoints. 

Not only that, you can also connect your VPC to your on-premises environments through various mechanisms such as Site-to-Site VPNs, Transit Gateways & Direct Connections (AWS Direct Connect), just to name a few. And yes, you can connect VPCs to each other through VPC peering.

Amazon VPCs are region specific, and are therefore confined to one region. Before you configure your VPC in a specific region, make sure the service you want to launch is supported by the region you intend to configure your VPC in. You can make your infrastructure highly available by launching multiple subnets in multiple Availability Zones, within each region.

AWS Provides you with a default VPC in each region, but we will create our own custom VPC, which is often considered a best practice, as you get to define your own CIDR blocks, as well as other various granular configurations.

VPC Cost? There are no costs to creating a VPC, however, you will be charged for the resources you launch into it, like virtual machines and databases.

## Basic Components of an Amazon VPC
At the basic level, the primary components of a VPC in order to configure a simple architecture, consist of the following: CIDR Blocks, subnets, security groups, network access control lists, connectivity options & resources within the VPC.

### 1. CIDR Blocks & IP Addresses
You get to choose which IP address ranges to choose when configuring your custom Amazon VPC, with the largest CIDR block allowed being /16. By the way, the smaller the netmask "/16" the more IP addresses you can have. This means that you can have as many as 65 536 IP addresses with a /16 netmask, and a /24 netmask gives you 256 IP addresses. The smallest netmask allowed on AWS is /28 which gives you 16 IP addresses.

The fundamental rule with CIDR blocks & IP addresses when configuring a VPC is that they should not overlap and they can't change once you've created them. So, you either need to plan properly before configuring your CIDR blocks, or else, you will have to create a whole new VPC.

The first and last IPs are reserved by AWS.

### 2. Subnets
Subnetting is basically dividing the network so you can launch resources in it, you can create public subnets and private subnets. A subnet is restricted to one Availability Zone.

**Public Subnets:** You should use public subnets if you want to make some resources publicly accessible, for example, a website.
**Private Subnets:** You would use private subnets to launch resources that don't require public access, for example, a database.

### 3. Route Tables
Route tables help direct traffic.

### 4. Security Groups
Security groups operate at the instance level. This means that they are a firewall that filters or controls traffic that tries to enter or leave an instance. Security groups are stateful, therefore, you don't necessarily have to configure deny rules or outbound rules, because if traffic is allowed in, it is also automatically allowed out.

With security groups, anything that is not explicitly allowed, is definitely, explicitly denied. All rules are evaluated before a decision to allow or deny traffic is made. A security group can reference another security group.

You can use multiple security groups on an instance, and vice versa, you can use one security group with multiple instances.
Security groups can span multiple availability zones.

### 5. Network Access Control Lists (NACLs)
Network Access Controls lists operate at the subnet level. This means that they are a firewall that filters or control traffic that tries to enter or leave a subnet. NACLs are stateless, therefore when you configure NACL rules, you need to explicitly specify both inbound and outbound rules, and these rules are evaluated and prioritized in numerical order from lowest to highest.

A subnet can have only one NACL. A NACL can be associated with many subnets.

Network Access Control Lists cannot span multiple Availability Zones.

### 6. Resources (Virtual Machines ) & Other Connectivity Options
Once you've launched your resources in your VPC, they can connect with each other, with other services outside the VPC, and with other VPCs through Endpoints & VPC Peering at a basic level, and at an intermediate, broader level you might use other services such as Transit Gateways, AWS PrivateLink and AWS Direct Connect.

#### 6.1 Endpoints
Endpoints are connections between other services and your VPC, they don't traverse the internet, and they don't require public IP addresses because they can't be accessed through the internet: this makes endpoints a secure connection option between your VPC and other resources.

I sounded really redundant there for a second, but endpoints are a security offering.

#### 6.2 VPC Peering
VPC Peering allows you to connect VPCs without traversing the internet, you can peer VPCs across regions. Just make sure that the VPCs you're trying to connect don't have overlapping CIDR blocks.

Most importantly, VPC Peering IS NOT transitive. In a case where you have three VPCs, each VPC will require a unique direct connection with each VPC, you can't connect a VPC through another.

#### 6.3 AWS Private Link
AWS Private Link provides a private connection between your VPCs and certain services, without exposing your services or traffic to the internet.

#### 6.4 AWS Direct Connect
AWS Direct Connect allows you to have a private connection from your AWS VPC to your on premises environment.

#### 6.5 AWS Transit Gateways
AWS Transit Gateway connects your VPC and on-premises networks in a hub-like manner.

# Creating A Custom Amazon VPC
Do you have a custom VPC?
**Yes?** Well, that's cool. See you in my next post then.
**No?** Ok, no big deal, let's create it quickly.

## Prerequisites
To create an A Custom Amazon VPC you will need:
(1) an AWS account to configure the resources

_Okay! Let's Build._

## Step by Step Guide
# How to Create a VPC on AWS (via the Management Console)
At this point I assume you have occasionally experimented with the AWS Management Console, and you're familiar with the interface because we will create a simple, basic VPC to practice the aforementioned theory. Lets, go.

## Create VPC
**1.** Login to the **AWS Management Console** using your IAM User Account or Alias.

**2.** On the top left corner, click on the **Services** button.

**3.** Select **Networking & Content Delivery** on the left side of the drop down menu.

**4.** Select **VPC.**

**5.** Since VPC is region specific, in this step by step guide we will be using the **Oregon (us-west-2) region**. So, on the top right navigation bar, make sure Oregon is selected.

**6.** Navigate to the left side and click the **Create VPC** button.

**7.** Select the **VPC Only** radio button.

**8.** Name tag - optional: **myVPC.** 
Naming your custom VPC will make it easy for your to differentiate it from the default VPC when it comes to further configurations.

**9.** IPv4 CIDR block: Select **IPv4 CIDR manual input.**

**10.** IPv4 CIDR: **10.0.0.0/16**

**11.** IPv6 CIDR: **No IPv6 CIDR block.**

**12.** Tenancy: **Default.**

**13.** Tags: These should be populated with Key: **Name** and Value: **myVPC.**

**14.** Click **Create VPC.**

Congratulations, you have successfully created a VPC.

## Create Subnets
**1.** Navigate to the left side of the menu, and click on **Subnets** below 'Your VPCs'.

**2.** Click **Create Subnet.**

**3.** Select VPC: **myVPC.**

**4.** Subnet name:** myPublicSubnet.**

**5.** Availability Zone: **us-west-2a.**

**6.** IPv4 subnet CIDR block: **10.0.1.0/24**

**7.** Click **Add new subnet**

**8.** Subnet name: **myPrivateSubnet.**

**9.** Availability Zone: **us-west-2b.**

**10.** IPv4 subnet CIDR block: **10.0.2.0/24**

**11.** Finally, click the orange **Create subnet** button.

Congratulations, you have successfully created two subnets

## Create Public Route Tables
**1.** **Create Public Route Table:**

**2.** Navigate to the left side of the page, and click on **Route Table** below 'Subnets'.

**3.** Click the **Create route table** button.

**4.** Name - optional: **myPublicRoute**
.
**5.** VPC: **myVPC.**

**6.** Tags: These should be populated with Key: **Name** and Value: **myPublicRoute.**

**7.** Click the **Create route table** button.

**8.** Click on **Subnet associations.**

**9.** Click on **Edit subnet associations.**

**10.** Check **myPublicSunet.**

**11.** Click the **Save associations** button.

**12.** **Create Private Route Table:**

**13.** Navigate to the left side of the page, and click on **Route Table** below 'Subnets'.

**14.** Click the **Create route table** button.

**15**. Name - optional: **myPrivateRoute.**

**16.** VPC: **myVPC.**

**17.** Tags: These should be populated with Key: **Name** and Value: **myPrivateRoute.**

**18.** Click the **Create route table** button.

**19.** Click on **Subnet associations.**

**20.** Click on **Edit subnet associations.**

**21.** Check **myPrivateSubnet.**

**22.** Click the **Save associations** button.

## Create Internet Gateway
**1.** Navigate to the left side of the page, and click on **Internet gateways** below 'Route tables'.

**2.** Click **Create internet gateway.**

**3.** Name tag: **myInternetGateway.**

**4.** Tags: These should be populated with Key: **Name** and Value: **myInternetGateway.**

**5.** Click **Create internet gateway.**

**6.** Click **Actions.**

**7.** Select **Attach to VPC.**

**8.** Available VPCs: **myVPC**.

**9.** Click **Attach internet gateway.**

**10.** Navigate back to **Route Tables.**

**11.** Select **myPublicRoute.**

**12.** Click **Edit routes.**

**13.** Click **Add route.**

**14.** Destination: **0.0.0.0/0**

**15.** Target: **Internet gateway.**

**16.**Choose **myInternetGateway.**

## Create Security Group
**1.** Navigate to the left side of the page, and click on **Security groups** underneath **Security.**

**2.** Click **Create security group**

**3.** Security group name: **mySecurityGroup.**

**4.** Description: **myVPC Security Group.**

**5.** VPC: **myVPC.**

**6.** Inbound rules: Click **Add rule.**

**7.** Select SSH. Source: **Anywhere - IPv4.**

**8.** Click **Add rul**e again.

**9.** Select HTTP. Source: **Anywhere - IPv4.**

**10.** Click **Create security group.**

## Create Virtual Machine Instances
**1.** **Create Public Instance (The Application Layer):**

**2.** On the top left corner, click on the **Services** button.

**3.** Select **Compute** on the left side of the drop down menu.

**4.** Select **EC2**.

**5.** Click **Launch Instance.**

**6.** Name: **myPublicServer.**

**7.** Application and OS Images (Amazon Machine Image): **Amazon Linux.**

**8.** Amazon Machine Image (AMI): **Amazon Linux 2023 AMI.**

**9.** Architecture: **64-bit (x86).**

**10.** Instance Type: **t2.micro**

**11.** Key pair (login): **Create new key pair.**

**12.** Key pair name: **myKeyPair.**

**13.** Key pair type: **RSA**

**14.** Private key file format: **.pem**

**15.** Click **Create key pair.**

**16.** Network settings: click the **Edit** button.

**17.** VPC: **myVPC.**

**18.** Subnet: **myPublicSubnet.**

**19.** Auto-assign public IP: **Enable.**

**20.** Firewall (Security groups): **Select existing security group.**

**21.** Common security groups: **mySecurityGroup.**

**22.** Leave everything else as default and click **Launch instance.**

**23.** Click **View all instances.**

**24.** Click **Launch instances.**

**25.** **Create Private Instance (The Data Layer):**

**26.** Name: **myPrivateServer.**

**27.** Application and OS Images (Amazon Machine Image): **Amazon Linux.**

**28.** Amazon Machine Image (AMI): **Amazon Linux 2023 AMI.**

**29.** Architecture: **64-bit (x86).**

**30.** Instance Type: **t2.micro**

**31.** Key pair (login): **myKeyPair**

**32.** Network settings: click the **Edit** button.

**33.** VPC: **myVPC.**

**34.** Subnet: **myPrivateSubnet.**

**35.** Auto-assign public IP: **Disable.**

**36.** Firewall (Security groups): **Select existing security group.**

**37.** Common security groups: **mySecurityGroup.**

**38.** Leave everything else as default and click **Launch instance.**

**39.** Click **View all instances.**

**40.** Wait until both instance are in their **running** state.

## Connect to the Internet from the Public Instance
**1.** Check **myPublicServer** and click **Connect.**
**2.** Select **EC2 Instance Connect.**
**3.** Click: **Connect using EC2 Instance Connect.**
**4.** Username: **ec2-user.**
**5.** Click **Connect.** This should launch new page in the browser, and establish a new connection.
**6.** Type: **ping google.com** and press enter. As this is a public instance, you will receive a response.
**7.** Navigate back to your instances.

## Connect to the Internet from the Private Instance
**1.** Check **myPrivateServer** and click **Connect.**
**2.** Select **EC2 Instance Connect.**
**3.** Click: Connect using EC2 Instance Connect.
**4.** You receive the following error or warning: "**The instance does not have a public IPv4 address.** To connect using the EC2 Instance Connect browser-based client, the instance must have a public IPv4 address."

Therefore, the Private Instance (**myPrivate Server**) does not traverse the internet because it doesn't have a public IP address. There will be no traffic coming in or going, and remember, we launched **myPrivateServer** in a Private Subnet, and the Route Table does not have an Internet Gateway nor a NAT Gateway attached that would allow it to connect to the internet.

## Important: Clean Up Resources
Make sure to terminate and delete everything you've launched in this guide, so that you don't get a Bill Shock.
## End of Step by Step Guide

# Conclusion
Congratulations! In this **Step by Step Guide**, you created a VPC and launched instances in a private and public subnet to demonstrate how you might configure an Application Layer or Front-End(a public instance that can access the internet vs a Data Layer or Back-End(an instance that cannot be accessed by the internet nor access it). For future reference, you might want to add your Web Applications in public subnets, and your Databases in private subnets, and configure the appropriate routes to connect them to each other…

…And theoretically, you have been introduced to the simple concepts and components of a VPC at a basic level. The more you work with VPC, you will come to find that you can configure more intermediate, complex, resilient and secure architectures that span multiple regions and multiple availability zones, as well as connect with on premises data centers.

Sounds awesome? You bet!

## Blog Post Summary
# Theory
Introduction to AWS Virtual Private Cloud.

# Practical
Creating an AWS VPC and launching Virtual Machines in it.

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Networking](https://ntombizakhona.medium.com/12-week-aws-workshop-challenge-d4c7eb595d80)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**17 January 2024**
