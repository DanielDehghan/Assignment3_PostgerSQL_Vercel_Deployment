# Node.js API Deployment with PostgreSQL on Vercel

## Project Overview

This project is a Node.js API that connects to a PostgreSQL database. It allows users to request greetings based on the time of day, language, and tone. The API is deployed on Vercel and interacts with a cloud-hosted PostgreSQL database.

## Live API URL

The live API can be accessed at the following URL:

[https://assignment3-postger-sql-vercel-deployment.vercel.app/](https://assignment3-postger-sql-vercel-deployment.vercel.app/)

## API Endpoints

### 1. `POST /api/greetings/greet`

This endpoint allows users to get a greeting message based on the time of day, language, and tone.

#### Request Body (JSON)

```json
{
  "timeOfDay": "Morning",
  "language": "English",
  "tone": "Formal"
}

Response (JSON)

{
  "greetingMessage": "Good Morning",
  "tone": "Formal"
}

    timeOfDay (string): The time of day, e.g., "Morning", "Afternoon", "Evening".
    language (string): The language of the greeting, e.g., "English", "Spanish", "French".
    tone (string): The tone of the greeting, e.g., "Formal", "Casual".

If any required parameters are missing or if there is an error with the request, a 400 or 404 status with an error message will be returned.
2. GET /api/greetings/getAllTimesOfDay

This endpoint returns a list of all distinct timeOfDay values from the database.
Response (JSON)

[
  "Morning",
  "Afternoon",
  "Evening"
]

3. GET /api/greetings/getSupportedLanguages

This endpoint returns a list of all distinct languages supported by the API.
Response (JSON)

[
  "English",
  "Spanish",
  "French"
]

- Console Client
Overview

The console client allows users to interact with the deployed API via a terminal. Users can input the time of day, language, and tone to receive the corresponding greeting message.
Usage

    Clone the repository or download the project files.

    Navigate to the project directory.

    Install the necessary dependencies by running:

npm install

Run the client by executing:

    node greetingClient.js

    Follow the prompts to enter the time of day, language, and tone.

Example:

Enter a time of day (e.g., Morning, Evening or Afternoon) or type 'exit' to quit: Morning
Enter a language (e.g., English, Spanish or French) or type 'exit' to quit: English
Enter Tone (Formal/Casual) or type 'exit' to quit: Formal
Greeting: Good Morning
Tone: Formal

You can type exit at any time to quit the application.
Database Setup

The PostgreSQL database is hosted on Neon, and the DATABASE_URL is stored in the .env file.
Database Connection Configuration

In the .env file:

DATABASE_URL=postgresql://neondb_owner:zLruTWDv13ZC@ep-frosty-surf-a55nlae0.us-east-2.aws.neon.tech/neondb?sslmode=require

    The DATABASE_URL is used to connect to the remote PostgreSQL instance.
    The database is seeded with sample greeting data upon initialization, which is used to respond to API requests.

Seed Data

The database is seeded with greeting data, such as:

    Morning, English, Formal: "Good Morning"
    Evening, Spanish, Casual: "¡Qué tal!"

These greetings are retrieved when users make a request based on their input.
Vercel Deployment

The application is deployed on Vercel, a serverless deployment platform, which automatically handles scaling and hosting for you. All routes are configured to be handled by server.js.
Deployment Steps

    Clone this repository to your local machine.
    Deploy the project to Vercel via the Vercel dashboard or by using the Vercel CLI.
    Add the DATABASE_URL as an environment variable in Vercel's project settings to connect to the PostgreSQL database.
    Verify that the API is running by visiting the live URL provided above.

Troubleshooting

    404 Error on API Request: This may occur if the requested greeting combination (time of day, language, tone) does not exist in the database. Ensure that your inputs are correct.
    Database Connection Issues: Check the DATABASE_URL environment variable to ensure it's correct in both the .env file and Vercel settings.
    Client Interaction Errors: Ensure your console client is pointing to the live API URL.


This version uses Markdown headers and properly structures the documentation with `#` for top-level 