# Digital-Garage

This tutorial will go through how to deploy your code with Digital Garage. Digital Garage uses Docker, Kubernetes, and Open Shift to deploy your code.  This simple guide provides some information to quickly get an app up and running quickly.

This setup assumes you have: 
- A working app on your git versioning service.
- Your app server is listening @ port 8080
- Since we are using Node, entry point is 'index.js'

---

### Login & Dashboard

First let's log into [Digital Garage](http://www.thedigitalgarage.io) 
![Login](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/login.png)

After logging in, you will be on your dashboard. Your dashboard displays all your projects, whether they are deployed or not.
![Dashboard](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/dashboard.png)

Click on the orange folder in the top-right-hand corner to create your new project. This will bring you to the project creation.

---

### Project Creation

This is the project creation form:
![Create Project](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/createProject.png)

- **Name**: The name must be lowercase, and my not contain spaces or uppercase.
- **Display Name**: The name of your project, as will appear on your dashboard.
- **Description**: A discription of the project you are creating.

After clicking the ![Create](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/create.png) button, Digital Garage will bring you to the specifics of building your app.

---

### Environment Selection

Digital Garage needs to know what type of app you are building. The catalog page provides a list of enviroments for you to use.
![Browse Catalog](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/building.png)

- **Browse Catalog**: Simply find a build that corresponds to your environment and click to begin the builder.
- **Deploy Image**: If you have an image of your build, you can deploy it through here.
- **Import YAML/JSON**: Using a YAML or a JSON template you can contruct your build and parameters here.

We will be using the node 6.3.1 builder provided by Digital Garage for this build.
![Filtered Search](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/building2.png)
You can use the search to quickly filter the list of enviroments to find your desired enviroment.

After selecting your build environment, Digital Garage will need some details.

---

### Build Details

You can decribe the details about your app here, and setup a connection to your github
![Node Builder](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/nodebuilder2.png)

- **Name**: Only lowercase, no symbols, spine-case accepted.
- **Git Repository URL**: The URL where your git repository, with your app, is located.

If your entry point is on a particular branch or subfolder, you can click the ![Options Link](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/optionsLink.png) link.

- **Git Reference**: If you want to deploy from a specific branch, specify the branch here.
- **Context Dir**: If your app's 'index.js' is in a subfolder, specify its location here.

Scroll to the bottom and click ![Create](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/create.png) button to begin building your app!


Digital Garage will direct you to an "Application Created" page, where your project will begin building.
![App Created](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/appcreated.png)

Clicking ![Continue To Overview](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/continue.png) will bring you the overview of your app and give you access to more options.
![Overview](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/overview.png)

---

### Logs

Digital Garage allows you to watch your logs while it builds your app. Select the "View Log" and view your logs as it builds.
![Log](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/log.png)

Once the app is done building, you will see ![Push Successful](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/pushSuccess.png) in the logs. 

Select the "Overview" in the sidebar menu to go back to the overview.

![Overview](https://github.com/hwatersiv/Digital-Garage/blob/master/nodejs-quickstart/img/tutorial/overview2.png)

Your app should now be deployed!

Click the link in the top-right corner of the of the build and view your newly deployed app!