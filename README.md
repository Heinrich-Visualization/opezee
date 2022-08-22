#Super Over Application

##Setup Instructions
**1. Prerequisites**
a. NodeJS(v10+)
b. MySQL(v5+)(Using Xampp/Lampp/MySQL server)
**2. Setup**
a. Go to project directory and run "npm install --production"
b. Create a database in MySQL name "spvr_db"
c. Update database credential in database config file inside project config folder
such as database port, url, user, password & database_name
d. To create requires tables in the database run command "npx sequelize-cli db:migrate"
**3. You are ready to run the application with port 3000**
sequelize migration:generate --name [name_of_your_migration]

