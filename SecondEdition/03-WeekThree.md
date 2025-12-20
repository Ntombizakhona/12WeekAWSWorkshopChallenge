_Week Three_

# Network Architecture & Security

## The 12-Week AWS Workshop Challenge with Mama Kebe
-------------------------------------------------

After mastering [Compute Services](https://medium.com/compute-services-ec2-mastery-1eac3c13e10c) — EC2 instances, Auto Scaling Groups, Load Balancers, Lambda, and Elastic Beanstalk — the next critical layer to understand is the _network infrastructure_ that connects everything together.

You can deploy the most optimized compute resources, but without proper network architecture, your applications won’t communicate securely or scale reliably.

Network design is where theory meets reality in AWS. You can launch Lambda functions and RDS databases all day, but if your VPC design is flawed, your subnets are misconfigured, or your security groups are too permissive, you’re building on shaky ground.

This week’s focus on VPC design, subnets, routing, security controls, and hybrid connectivity represents the foundational infrastructure layer that everything else depends on. Get this right, and your applications scale securely. Get it wrong, and you’re fighting infrastructure fires instead of shipping features.

Rather than explaining networking concepts, this article challenges you with 20 carefully crafted questions that test your ability to make real architectural decisions. These aren’t theoretical — they’re the questions you’ll face when designing production environments, troubleshooting connectivity issues, or explaining security posture to auditors.

Try answering each question before diving into documentation. Better yet, diagram your answers and publish them as your own article, if you want…

20 Essential Questions on AWS Network Architecture & Security
-------------------------------------------------------------

### VPC Design and Configuration

**1.** You’re architecting a multi-account AWS Organization with dev, staging, and production environments. Should you use one VPC per account, one shared VPC for all environments, or multiple VPCs per account? What factors influence this decision, and how does blast radius affect your choice?

**2.** Your company is planning to acquire another business that uses the 10.0.0.0/8 range, which overlaps with your current VPC CIDR. How do you design your VPC CIDR blocks today to avoid future conflicts with acquisitions, on-premises networks, and other AWS accounts?

**3.** A critical application must survive the loss of an entire Availability Zone without downtime. What specific VPC components (subnets, NAT Gateways, route tables, load balancers) need to be deployed across multiple AZs, and which components remain single-AZ by design?

**4.** You need to connect 15 VPCs across multiple accounts and regions. When would you choose AWS Transit Gateway over VPC Peering, and how do cost , routing complexity, and future growth factor into your decision?

**5.** Your security team wants to eliminate all public internet traffic to S3 and DynamoDB from your VPCs. How do Gateway VPC Endpoints differ from Interface VPC Endpoints, which services support each type, and how do endpoint policies add an additional security layer?

### Subnets, Route Tables, and Gateways

**6.** A subnet with CIDR 10.0.1.0/24 has a route table pointing 0.0.0.0/0 to an Internet Gateway. Another subnet with 10.0.2.0/24 routes 0.0.0.0/0 to a NAT Gateway. What makes the first subnet “public” and the second “private,” and what happens to instances in each subnet when they try to reach the internet?

**7.** You’re deploying a highly available web application across three Availability Zones. How many NAT Gateways should you provision for true HA, where should they be placed, and what’s the cost-versus-resilience tradeoff? When would you consider a NAT Instance despite the operational overhead?

**8.** Your VPC has 6 subnets, 4 route tables, VPN connections, Transit Gateway attachments, and VPC peering. How do you prevent asymmetric routing and accidental black holes when adding new routes? What documentation and naming conventions prevent routing mistakes?

**9.** You’re implementing dual-stack (IPv4 + IPv6) for a modern application. How does outbound IPv6 traffic routing differ from IPv4 NAT (hint: Egress-Only Internet Gateway), and what are the implications for security groups and NACLs when supporting both protocols?

**10.** Your hybrid environment requires private DNS resolution between on-premises and AWS, with split-horizon DNS where internal names resolve differently than external ones. How do you design Route 53 private hosted zones, resolver rules, and conditional forwarding without creating resolution loops or DNS leaks?

### Security Groups and Network ACLs

**11.** Your security auditor asks why you’re not using Network ACLs (NACLs) when Security Groups (SGs) seem sufficient. In what specific scenarios do NACLs add meaningful security that SGs cannot provide? Provide a concrete example where NACLs prevented a security incident that SGs alone would have missed.

**12.** You have a three-tier application: Application Load Balancer → EC2 web servers → RDS database. How do you design Security Group rules using referencing (SG-to-SG rules) rather than CIDR blocks to enforce true network segmentation and implement least privilege at each layer?

**13.** A developer accidentally pushed a container with a crypto-mining backdoor that attempts outbound connections to suspicious IPs. How do you design egress controls (SG egress rules, NACLs, VPC endpoints, proxy servers, AWS Network Firewall) to detect and block this while maintaining developer productivity and system patching?

**14.** An application works perfectly when traffic goes from App Server A to Database B, but fails when you reverse the direction. How do the stateful nature of Security Groups and stateless nature of NACLs explain this asymmetric behavior, and how do you troubleshoot it using VPC Flow Logs?

**15.** You manage 50 AWS accounts, and several teams have created overly permissive Security Group rules (0.0.0.0/0 on sensitive ports). What AWS services and tools (AWS Config, Security Hub, AWS Firewall Manager, custom Lambda) can automatically detect and remediate dangerous SG configurations at scale?

### VPN and Direct Connect (Hybrid Connectivity)

**16.** Your company needs hybrid connectivity between AWS and an on-premises data center. When is Site-to-Site VPN “good enough” (encryption, quick setup, lower cost), and when should you invest in AWS Direct Connect (dedicated bandwidth, consistent latency, higher throughput)? How do SLA requirements and total cost of ownership influence the decision?

**17.** Your business requires 99.9% uptime for hybrid connectivity. How do you design high availability for Site-to-Site VPN (dual tunnels, multiple customer gateways, multiple VPNs), and how does Direct Connect HA differ (dedicated vs. hosted connections, LAG, multiple DX locations, multiple partners)?

**18.** You’re connecting on-premises networks to AWS using Transit Gateway, VPN, and Direct Connect. Should you use static routing or BGP, and how do you prevent route leaks where private routes accidentally propagate to the internet or asymmetric routing where traffic goes out one path and returns via another?

**19.** You want to access AWS managed services (S3, DynamoDB, Lambda) from on-premises without traversing the public internet. How do you combine Direct Connect/VPN with VPC Endpoints, AWS PrivateLink, and Transit Gateway routing to keep all traffic private while still reaching public AWS services?

**20.** You’re managing connectivity for a large enterprise with multiple business units, environments (dev/staging/prod), and compliance zones (PCI, HIPAA, general). How do you segment hybrid connectivity using Transit Gateway route tables, shared services VPCs, or network appliance VPCs, and how do you enforce guardrails to prevent unauthorized cross-environment traffic?

Additional Resources
--------------------

### [Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

> With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you’ve defined.
> 
> This virtual network closely resembles a traditional network that you’d operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

### [Hybrid Connectivity](https://docs.aws.amazon.com/whitepapers/latest/hybrid-connectivity/hybrid-connectivity.html)

> Many organizations need to connect their on-premises data centers, remote sites, and the cloud. A hybrid network connects these different environments.
> 
> This whitepaper describes AWS building blocks and the key requirements to consider when deciding which hybrid connectivity model is right for you.
> 
> To help you determine the best solution for your business and technical requirements, we provide decision trees to guide you through the logical selection process.

### [AWS Networking Workshop](https://catalog.workshops.aws/networking/en-US)

> The intent of the workshops is to educate users about AWS Networking.
> 
> A background in Networking (IP Addressing, Subnetting, VPN, Security, and Routing) is useful but not required.
> 
> There are three workshops:
> 
> [**Foundational**](https://catalog.workshops.aws/networking/en-US/foundational): Overview of AWS Networking; covering VPCs, connecting VPCs and data centers, security controls, and network monitoring.
> 
> [**AWS Gateway Load Balancer**](https://catalog.workshops.aws/networking/en-US/advanced/gwlb): transparently deploy and scale appliances, such as firewalls, in the AWS network.
> 
> [**AWS Transit Gateway Multicast**](https://catalog.workshops.aws/networking/en-US/advanced/multicast): Explore how Transit gateway can act as a rendezvous point for multicast sources and receivers within your AWS VPCs.

### [Mama Kebe](https://www.linkedin.com/in/mamadou-amadou-kebe-994aa95a/?originalSubdomain=sn)

> With a strong focus on Cloud Operations in AWS, I am driven by the power of technology to transform businesses and empower individuals.
> 
> My expertise lies in optimizing cloud environments, ensuring scalability, security, and efficiency while aligning with organizational goals.

Concluding Remarks
------------------

The true transformation in your AWS journey happens at the intersection of three practices: hands-on experimentation, targeted research, and community engagement.

Don’t just read about VPCs — create them, deploy resources across subnets, test connectivity, and watch VPC Flow Logs to understand traffic patterns.

When you encounter concepts you don’t fully grasp, dive into AWS documentation, whitepapers, and Well-Architected reviews to build deeper understanding.

But here’s where the magic multiplies: bring your questions to learning communities, engage in discussions, and most importantly, answer questions from fellow learners.

Teaching is the ultimate test of understanding — when you can explain why Transit Gateway is better than VPC Peering for hub-and-spoke architectures or walk someone through troubleshooting asymmetric routing, you’re not just helping them; you’re cementing your own expertise.

**…and most importantly: leverage the AWS Community to gain Cloud Skills!**

_The AWS community isn’t just a support system; it’s an accelerator that turns individual learning into collective wisdom._

# The Original

**Blog:** [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona)
<br>
**Article Link:** [Network Architecture & Security](https://ntombizakhona.medium.com/network-architecture-security-5af48766ee41)
<br>
Originally Published by [Ntombizakhona Mabaso](https://medium.com/@ntombizakhona) 
<br>
**23 October 2025**
