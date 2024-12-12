#### **Already Own the Domain "staxx.in"**
1. Go to your Hostinger dashboard:
   - Click on **Domains** > **Add Existing Domain**.
2. Update the domain’s **DNS nameservers** to point to Hostinger:
   - Login to your domain registrar’s account (e.g., GoDaddy, Namecheap, etc.).
   - Find the **DNS settings** or **Nameservers** section.
   - Replace the current nameservers with Hostinger’s:
     - `ns1.dns-parking.com`
     - `ns2.dns-parking.com`
   - Save changes. Propagation may take up to 24 hours, but it’s usually faster.

### ** Install a Website Platform**

#### **Use WordPress **  
1. Go to your Hosting Dashboard.
2. Navigate to **Hosting > Manage > Auto Installer**.
3. Select **WordPress**.
4. Fill out the required fields:
   - **Website Title:** Enter your site name (e.g., “Staxx”).
   - **Admin Username & Password:** Create a login for managing your WordPress site.
   - **Admin Email:** Enter your email.
   - Click **Install** and wait for the installation to complete.

#### **Upload Custom Files (If Have a Prebuilt Website)**  
1. From the Hosting Dashboard, open **File Manager**.
2. Go to the **public_html** folder.
3. Delete any default files (like `index.php` or `default.html`).
4. Upload your website files (HTML, CSS, JavaScript) to the **public_html** directory.
5. Ensure your homepage is named `index.html` or `index.php`.

### ** Secure Your Website with SSL**
1. Go to **Hosting Dashboard**.
2. Under **Security**, click on **SSL**.
3. Enable the **Free SSL Certificate** for your domain **staxx.in**.
4. After activation, ensure your website redirects to HTTPS:
   - Edit your `.htaccess` file (found in **public_html**) and add the following code:  
     ```apache
     RewriteEngine On
     RewriteCond %{HTTPS} !=on
     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
     ```
   - Save and exit.

### **Configure DNS and Email Settings (Optional)**
1. If you plan to use email (e.g., `admin@staxx.in`), set up email hosting from the Hostinger dashboard.
2. If using custom DNS records (e.g., subdomains or email providers like Google Workspace), navigate to **Domains > DNS Zone Editor**:
   - Add the required A, CNAME, or MX records based on your email or subdomain provider's instructions.

### **Optimize Hosting Settings**
1. Access **Cloud Hosting Settings** in the Hostinger Dashboard:
   - Adjust the PHP version (use the latest stable version, e.g., 8.x).
   - Enable caching for better performance.
   - Set up a database if needed (for WordPress, this is automatic).
2. Use **Hostinger’s hPanel** to enable or disable features like Hotlink Protection or GZIP Compression for better security and performance.

### **Test Your Website**
1. Open **https://staxx.in** in your browser.
2. Verify that your site loads correctly:
   - If using WordPress, log in to your admin panel at `https://staxx.in/wp-admin`.
   - If using custom files, ensure all links, images, and scripts load properly.

3. If there are errors:
   - Use Hostinger’s **File Manager** or **Error Logs** to debug.
   - Contact Hostinger’s customer support for assistance.

##Need to Change/Write:
1. **DNS Settings:** Update nameservers to `ns1.dns-parking.com` and `ns2.dns-parking.com`.  
2. **File Structure:** Ensure your main file is `index.html` or `index.php`.  
3. **SSL Configuration:** Redirect HTTP traffic to HTTPS using `.htaccess`.  
4. **WordPress/Admin Details:** Set up admin credentials during the WordPress installation.  
5. **Testing:** Ensure all settings and files are working properly on your live domain.

Let me know if you need help with any specific step!
