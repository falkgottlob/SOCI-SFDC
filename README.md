# SOCi Lightning Web Components Sample Application


SOCI-SFDC "SOCi Lightning Web Components" is a sample application that demonstrates how to connect SOCi with Lightning Web Components and integrate with Salesforce Experiences. 


This sample application is designed to run on Salesforce Platform. If you want to experience Lightning Web Components on any platform, please visit https://lwc.dev, and try out our Lightning Web Components sample application [LWC Recipes OSS](https://github.com/trailheadapps/lwc-recipes-oss).

## Table of contents

-   [Installing SOCI-SFDC using a scratch org](#installing-soci-sfdc-using-a-scratch-org)
-   [Installing SOCI-SFDC using a Developer Edition Org or a Trailhead Playground](#installing-e-bikes-using-a-developer-edition-org-or-a-trailhead-playground)
-   [Optional tool installation](#optional-tool-installation)
    -   [Code formatting](#code-formatting)
    -   [Code linting](#code-linting)
    -   [Pre-commit hook](#pre-commit-hook)
    -   [Lightning Web Component tests](#lightning-web-component-tests)
    -   [UI tests with UTAM](#ui-tests)
    -   [Code Tours](#code-tours)

## Installing SOCI-SFDC using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Enable Dev Hub in your Trailhead Playground
    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

    ```
    sf org login web -d -a myhuborg
    ```

1. Clone the repository:

    ```
    git clone https://github.com/trailheadapps/ebikes-lwc
    cd ebikes-lwc
    ```

1. Create a scratch org and provide it with an alias (**SOCi-SFDC** in the command below):

    ```
    sf org create scratch -d -f config/project-scratch-def.json -a ebikes
    ```

1. Push the app to your scratch org:

    ```
    sf project deploy start
    ```

1. Assign the **SOCi-SFDCs** permission set to the default user:

    ```
    sf org assign permset -n ebikes
    ```

1. Assign the **Walkthroughs** permission set to the default user:

    ```
    sf org assign permset -n Walkthroughs
    ```




1. Open the scratch org:

    ```
    sf org open
    ```

1. In **Setup**, under **Themes and Branding**, activate the **Lightning Lite** theme.

1. In App Launcher, select the **SOCi-SFDC** app.

## Installing SOCi-SFDC using a Developer Edition Org or a Trailhead Playground

Follow this set of instructions if you want to deploy the app to a more permanent environment than a Scratch org.
This includes non source-tracked orgs such as a [free Developer Edition Org](https://developer.salesforce.com/signup) or a [Trailhead Playground](https://trailhead.salesforce.com/).

Make sure to start from a brand-new environment to avoid conflicts with previous work you may have done.

1. Clone this repository:

    ```
    git clone https://github.com/trailheadapps/soci-sfdc
    cd soci-sfdc
    ```

1. Authorize your Trailhead Playground or Developer org and provide it with an alias (**mydevorg** in the command below):

    ```
    sf org login web -s -a mydevorg
    ```

1. Enable Experiences with the following steps:

    1. In your org, in **Setup**, select **Settings**, under **Digital Experiences**.
    1. Click the **Enable Digital Experiences** checkbox
    1. Click **Save** then **Ok**.
    1. Navigate back to **Settings** in Setup.
    1. Under **Experience Management Settings**, enable **Enable ExperienceBundle Metadata API**.
    1. Click **Save**

1. Configure the Experience Cloud site metadata file with the following steps:

    1. Edit the `force-app/main/default/sites/E_Bikes.site-meta.xml` file.
    1. Replace the value between the `<siteAdmin>` tags with your Playground username.
    1. Replace the value between the `<siteGuestRecordDefaultOwner>` tags with your Playground username.
    1. Replace the value between the `<subdomain>` tags with your domain name (not the full URL).
    1. Save the file.

1. Remove the `Product` custom field from the `Case` object with the following steps:

    1. In Setup, click the **Object Manager** tab.
    1. Click on the **Case** object.
    1. Click **Fields & Relationships**.
    1. Locate the **Product** picklist field and click **Delete** from the row menu.
    1. Confirm deletion by clicking **Delete**.

1. Deploy the App with these steps:

    1. Run this command in a terminal to deploy the app.

        ```
        sf project deploy start -d force-app
        ```

    1. Assign the **ebikes** permission set to the default user.

        ```
        sf org assign permset -n ebikes
        ```

    1. Import some sample data.

        ```
        sf data tree import -p ./data/sample-data-plan.json
        ```

    1. Publish the Experience Cloud site.

        ```
        sf community publish -n E-Bikes
        ```

    1. Deploy metadata for the Experience Cloud guest user profile:

        ```
        sf project deploy start --metadata-dir=guest-profile-metadata -w 10
        ```

    1. If your org isn't already open, open it now:

        ```
        sf org open
        ```

    1. In **Setup**, under **Themes and Branding**, activate the **Lightning Lite** theme.

    1. In App Launcher, select the **E-Bikes** app.

## Optional Demo Installation
