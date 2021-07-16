
Please, develop an application which creates a hierarchy table from variable input data in JSON format and allows basic user interaction.

In the attachment, you can see an example of such data in JSON and an example screenshot of the hierarchy table component. Do not try to hardcode the app to fit the sample data, it has to work with any supplied data respecting the data schema described below.

Every array item in the JSON file consists of its own data and kids properties. The data object represents table columns and can have a variable number of key-value pairs but you can expect that all rows in a single table will use the same keyset. The kids object represents nested tables and can also have a variable number of keys where key is the title of the nested table and value is an object with a single records property under which you will find the recursive data.

To illustrate such schema, similar TypeScript interface might be used:

`interface TableRow {
  data: Record<string, string>;
  kids: Record<string, { records: TableRow[] }>;
}`

Use the attached data.json and create the hierarchy table application (similar to the screenshot). Implement **data and view layers**, which are clearly separated. For each row, provide a remove button, which deletes an item in the data and view layer in your application. If an item has child items, they have to be deleted as well. When you click on an item, direct child **items are hidden/shown**.

The only tech stack requirement that we have is to use **React** or **Vue**. The choice of state management library, UI styling solution and everything else is up to you.

Please, approach this task as you would approach a medium-size production application - flex your software engineering muscle a little bit.

**What is important**: performance, fast and bug-free user interactions, code quality, respecting the recursive data schema

**What is less important**: UI design

**Submission**: Submission date is as per the email. Please share your work with us privately through a
link on GitHub with the following users:

● smajl   

● tonysmid

● palasjir

● miromarchi

**Final Comments**: We truly appreciate you taking the time to complete this assignment. We do not want you to spend more than one evening on this. We are not looking for perfection. We are only curious about finding out more about your understanding of concepts we use daily at GraphAware. Please feel free to reach out if you have any doubts or questions.

![image](https://user-images.githubusercontent.com/16309665/125915200-1ab84d66-956e-42cf-9192-a3caa0c50003.png)
