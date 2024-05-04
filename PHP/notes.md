# Running PHP files
## Without Wamp or Xampp
Setting up a local server environment on your Windows PC using PHP without relying on tools like Wamp or XAMPP

1. Install PHP (if not yet installed)
2. Configure PHP (if not yet configured)
3. Start a Local Server: Navigating to the directory where your PHP files are located and run the following command (run the command using either command prompt or using vs code terminal)
```cmd
php -S localhost:8000
```
This command starts a local server on port 8000.

4. Access Your PHP Files: Open a web browser and navigate to http://localhost:8000 You should see your PHP files rendered by the PHP built-in server.

## With Wamp or Xampp

1. Download and install all necessary microsoft C++ Redistributable packages from https://wampserver.aviatechno.net/
2. Download and install Wamp (https://wampserver.aviatechno.net/) or Xampp (https://www.apachefriends.org/download.html) on your pc
3. Create a new project (folder that conatins your php project)
- For Wamp: Navigate to Your PC > Local Disk > wamp64 > www and create the project folder in the www directory
- For Xampp: Navigate to Your PC > Local Disk > xampp > htdocs and create the project folder in the htdocs directory
4. Access your project through your browser via http://localhost/your_project_folder_name