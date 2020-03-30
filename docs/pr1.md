---
id: pr1
title: Projects Overview
sidebar_label: Projects Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Projects

Once you click on ‘Projects’ on the navigation pane you have the option to Browse Projects, view Workflows, Categories, Statuses, Clients and Tags.
<img alt="Projects" src={useBaseUrl('img/browseProjects.png')}/>

## Browse Projects

This area allows you to oversee the Projects assigned to you.
You can navigate into each Project, ‘Add Project’ and filter to view Projects / Funds by Category.

Click on any project to view.
<img alt="Browse-Categories" src={useBaseUrl('img/allCat.png')}/>

## Create Project

Add a new Project by clicking ‘Add Project’ on the Browse Projects screen.

A pop-up screen will appear where you enter or select the following data:

- **Project Title**
- **Category**
- **Group**
- **Template**
- **Client**
- **Start Date**
- **Due Date**
- **Description**
- **Status**

:::important Note 
If category ‘Fund’ has been selected, a variety of Fund specific data fields will be displayed to be filled in.
:::

You can then click **‘Start Project’**.

## Project Details

In the screenshot below, we have clicked into the project ‘ABC Investment Funds plc’ displaying the underlying Project workflow which shows all tasks associated with that fund.


The left-hand column displays the Project / Fund Details.

<img alt="Static-Data" src={useBaseUrl('img/staticData.png')}/>


Click into any task to view its details.

## Drag and Drop

Drag and drop tasks into different stages of the workflow.

Users assigned to a task will receive email updates as you drag and drop their task into different stages of the workflow.
<img alt="Drag Tasks" src={useBaseUrl('img/drag.png')}/>





## Create a Task

Add a new task by clicking ‘**Add New**’ within a Workflow Stage.

A pop-up screen will appear where you enter or select the following data:

- **Task Title**
- **Milestone**
- **Repetition Time, i.e. Daily, Monthly, Annually**
- **Due Date**
- **Priority i.e. High, Low**
- **Description**


:::important Note 
At this point, you also have the ability to create a ***Checklist / To Do List***  within the task to track smaller related actions.
:::

You can then click ‘**Add Task**’.

<img alt="Drag Tasks" src={useBaseUrl('img/addNew.png')}/>


## Update Tasks

You can simply **click** on a task to view it.

When you’re on the Task View screen you can make updates by clicking on a specific field then clicking the Tick to save your changes.

Depending on your permission level, you can update the following: 
- **Title**
- **Status**
- **Due Date**
- **Add / Remove Assignees**
- **Milestone**
- **Repetition Time**
- **Description**

<img alt="Drag Tasks" src={useBaseUrl('img/taskEdit.png')}/>

**File Upload**
You can upload any files / documents related to the task by simply ‘**dragging and dropping**’ or clicking ‘**Drop files here to upload**’.

**Messaging**
You can leave a message on the right-hand side of the Task View screen, that all users assigned to the task can read.

**Checklist / To-Do List**
As mentioned above, you can create a Checklist / To Do List within the task to track smaller related items.

:::tip best practise
The Checklist / To-Do list functionality allows you to assign specific users to an individual checklist item.
:::

**Tags**
You can add multiple Tags to a task. This powerful functionality makes it easy to search for or aggregate across tasks for reporting purposes.

<img alt="Drag Tasks" src={useBaseUrl('img/tag&Upload.png')}/>


**Task Audit Trail**
Each task has its own audit trail which tracks all updates made to that specific task.

:::important Note
Audit trail stores all the addition and edit ever made to any project/task. There's a seperate tab available too if wish to just obtain audits on different project/task.
:::

<img alt="Drag Tasks" src={useBaseUrl('img/auditTrail.png')}/>

## Sub Tasks
A subtask is essentially just like a **regular task** and has all the same fields and functionality, except for ‘Repetition Time’.

You can create a subtask by clicking on ‘Add New Sub-task’ and following the steps above for creating a task.

**When should I create a subtask?**

You would create one or more subtasks on a parent task in a scenario where you have a **large bucket of work or group of related processes that can be broken down into more manageable chunks of work**.

On the GECKO platform, you **won’t be able to close the parent task until all underlying subtasks have been marked as Complete**.

<img alt="Subtasks" src={useBaseUrl('img/subtasks.png')}/>

## Recurring Tasks

The GECKO platform allows you to create an individual task that recurs at specified time intervals. 

**When should I create a recurring task?**

In contrast to the subtask functionality, you would use a recurring task if **you have a task or business process whereby similar work is carried out at frequent regular intervals**. E.g. filing a report to the Central Bank every month. 

**How do I create a recurring task?**

A task becomes a recurring task once you **select a Repetition Time when creating the task**. E.g. Repetition Time - Weekly.

**How do I trigger the task to recur?**

A task will automatically recur or repeat in two scenarios:

When the Due Date has been reached..

**OR**

When I click Complete on the task..

:::important note 
It’s worth noting here that if the original task contained any subtasks, the **same structure of ‘Parent task and its Subtasks’ will be created in the new task**.
:::

If the due date has been reached OR you have clicked Complete on a task, then **a new task will automatically be created with a new adjusted due date**. 

:::warning warning 
As the new task gets created, the previous task automatically gets **archived** and will be **removed** from the Project Workflow Stage, or column.
:::

## Archived Tasks

A task gets archived only if it has been set up as a recurring task and the **due date has been reached** or an **assignee of the task has clicked Complete**.

**How do I view Archived Tasks?**

You can view an archived task by clicking on the **current or ‘in progress’ task in a recurring series of tasks**, then clicking on the ‘Previous Archived’ tab.


## Workflows

Workflows give companies the opportunity to **examine their internal processes** and group them into **baskets or collections of related tasks**.

On the GECKO platform, we encourage our clients to sit down and take the time to **evaluate their internal business processes** and **group them into similar baskets**. These baskets become the ‘**Workflow Stages**’. In this way a task is generally only moved to another column after initial setup if it is more appropriate to group it in a different basket of work. 

You can create workflows by clicking the ‘**Add Workflow**’ button.

You can also Edit/Delete existing workflows.

All projects are created using workflows, you can use a workflow as a template when creating new Projects.

## Categories

A Category is essentially a '**type**' of **Project**. On the Browse Projects screen you can *filter **Projects** by Category*. 

Within the Categories section you can also create the milestones associated with your projects.

You can Add new Categories or update and delete existing Categories.


## Statuses

You can add new Task Statuses by clicking ‘**Add Status**’.

Filter your status search by using the search functionality.


## Clients

You can add new Clients by clicking ‘**Add Client**’.

Filter your client search by using the search functionality.


## Tag Management

You can add new Tags by clicking ‘**Add Tag**’.

Filter your tag search by using the search functionality.



