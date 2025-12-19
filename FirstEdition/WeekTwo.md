Identity And Access Management (IAM), is an Authentication and Authorization service. 

**Authentication** verifies who you are. 
**Authorization** grants permissions to access services, this step usually happens after authentication. AWS IAM is therefore, at it's most basic and introductory level, a service that allows you to create users, and grant them permissions, using the Principle of Least Privilege.

## What is the Principle of Least Privilege?
The Principle of Least Privilege is a practice whereby you only grant the user basic, minimum permissions based on their role, and the task that they need to do. It is a good idea, and best practice to use an IAM user for everyday tasks, instead of the Root User.

So we will create an IAM User, assign it a role, and enable Multi Factor Authentication.

Before we create an IAM User, I assume you already have an AWS Account that you access using the administrative Root User, if you don't have an AWS Account, create one by following the instructions in my previous post.

## Creating an IAM User
Do you have an IAM User setup with relevant roles and multifactor authentication?
**Yes?** Well, that's cool. See you in my next post then.
**No?** Ok, no big deal, let's create it quickly.

## Prerequisites
To create an IAM User you will need
(1) to know what roles this user will perform, so that you know what roles and privileges to grant and assign to the user.

*Okay! Let's Build.*

## How to Create an IAM (Identity And Access Management) User And Enable MFA (Multifactor Authentication)
### Step by Step Guide
1. Login to the AWS Management Console using your Root User Email Account and Password.

2. On the top left corner, click on the Services button.

3. Select Security, Identity & Compliance on the left side of the drop down menu.

4. Select IAM.
You should be redirected to the IAM Dashboard.

5. Navigate to the left side, under Access Management, select Users.

6. Click the Create Users button

7. Specify User Details.
7.1 Create a relevant user name.
7.2 "Are you providing console access to a person?"
Click I want to create an IAM User.
7.3 Console Password.
Select a Custom Password, that follows the password principles, that you can see below the text-area.
7.4 Users must create a new password at next sign-in - Recommended: make sure that this is checked, and click Next.

8. You are now in the Set Permissions screen.
It is best practice to attach policies to a group, but since we're creating our first user, and have no groups yet.
Select Attach Policies directly.

9. Select AdministratorAccess.
Click Next.

10. Review and Create your User Details and Permissions summary, and click Create User.

11. Congratulations. You have created an IAM User.

12. Copy the Console Sign-In URL, Username and Password.

13. Enter the Console Sign-In URL in your browser, so that you can sign in as the IAM user you just created.
Note: if you are using one browser, you will be signed out of your previous session as a root user.

14. Sign in as IAM User.
Enter the Account Alias or AccountID.
Enter the IAM Username.
Enter the Password.
Click Sign In

15. Since we selected : "Users must create a new password at next sign-in'' in step 7.4. You must change you password to continue.
Enter the Old Password.
Create Your New Password.
Confirm Password and Sign-in.

16. Welcome to the AWS Management Console as an IAM user.
How do you know that you're logged in as an IAM User?
Check the top right corner, it should say username@accountname, if you click on it, you will see the Account ID, and your IAM Username.
Enabling Multifactor Authentication.

17. On the top left corner, click on the Services button.

18. Select Security, Identity & Compliance on the left side of the drop down menu.

19. Select IAM.

20. Navigate to the left side, under Access Management, select Users.

21. Click on the User you just created.

22. Navigate to the Security Credentials Tab.

23. Click Assign MFA device.

24. Give your device a name in Device Name.

25. Under MFA Device, select Authenticator App.
Click Next.

26. Set Up Device: Download an authentication application.
Personally, I recommend Authy because you can seamlessly access it from multiple devices, but you can choose from the recommendations presented to you.

27. Scan the QR code.

28. Enter two Consecutive Codes from your MFA device to validate it.

29. Click Add MFA Device.

30. Congratulations: MFA Device Assigned.
### End of Step by Step Guide

## Conclusion
Now You Have Authenticated and Authorized Access to Your AWS Account.

Enable MFA for your root user account by following Step 17 to Step 30.
Now that you have a MFA-enabled IAM User account, as best practice, you should use this account for tasks, and use the Root User account only when necessary and for Administrative tasks, such as Billing & Payments.

Once again, remember to secure and protect your Root User account, by enabling MFA for it as well (Step 17 to Step 30)

# Blog Post Summary
## Theory
Introduction to AWS Identity & Access Management
## Practical
Creating an IAM User & Enabling Multifactor Authentication.
