---
title: Docs Integration Request Form
---

# Your Project Name

:::info
- Create a new branch of astar-docs for your update/addition. 

- Within the new branch, copy and rename this file to something meaningful (ie: *projectname-oracle.md* or *widgetzyx-nft-api.md*) and move it to the most appropriate section of Astar docs. If you're unsure about where that might be in the end, please submit a PR anyways; we will find a home for it prior to merging. 

- If your tutorial includes images or screenshots, which are **highly encouraged**, please add them to a new or existing `img` folder located within the same folder as your .md file, and link to them using the following:

    At top of .md file add this exactly:

    `import Figure from '/src/components/figure'`

    and in reference to each image, as one example:

    `<Figure caption="This is a picture of Cody McCodeface, Degen" src={require('./img/cody_mccodeface.png').default } width="100%"/>`

    or another example without a caption; width reduced:

    `<Figure src={require('./img/Alice_und_Bob_only_slimmer.png').default } width="65%"/>`

- When your document or tutorial is finished, submit a pull request to the [astar-docs](https://github.com/AstarNetwork/astar-docs) repo on Github. Thank you!
:::

## Introduction

Write a short description in just a few paragraphs about your solution and how Astar developers can leverage it. 

#### Example: 
GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It provides an efficient and powerful alternative to REST and offers significant advantages when dealing with complex data models.

GraphQL allows clients to define the structure of the responses they receive. This means that instead of receiving a fixed data structure from a server, clients can request specific data they need, leading to more efficient data loading and a reduction in data over-fetching.

## Prerequisites

List the prerequisites necessary to work with your solution. Mention all required libraries, SDKs, plugins, etc. and the corresponding versions that should be installed, in list format. Link to external documentation if necessary. 

#### Example:
 - The latest version of `[Node.js](https://link.to.download.com)`.
 - Swanky v1.x.x.x.
 - A local development node.
 - Basic JavaScript knowledge.

## Getting started

Here you should provide a step-by step tutorial about how developers can use your solution on Astar. 

### Step 1
### Step 2
### Step...

## Addresses/Endpoints

Here you can provide a list of Gateways, Endpoints, or any other supporting information, in list form. Feel free to change the name of this heading to something more appropriate, or remove it entirely.

## Troubleshooting
List common implementation issues, causes, and solutions.

#### Example: 
**I receive Error *X* after running *Y***

This occurs due to *Z* which can be resolved by following *ABC.* 

:::note
This *something* is for **advanced users**, only.
:::

:::danger
This *something* you **REALLY** don't want to do!!
:::

## Learn more

Here you can provide links to your own documentation and related resources. 