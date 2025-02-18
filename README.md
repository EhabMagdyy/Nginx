## 1. Nginx as Web Server
### Files locations (in ubuntu)
```bash
# nginx.conf
/etc/nginx

# default
/etc/nginx/sites-enabled

# ehab.html
/var/www/html
```

### Run in the browser
```bash
# <ipAddr>:Port
localhost:81
```

#### Output
> ![Image](https://github.com/user-attachments/assets/cb6f21b1-342e-4f8d-91c1-da5471ad6bdf)

---

## 2. Nginx as ReverseProxy and Load Balancer
### Files locations (in ubuntu)
```bash
# nginx.conf
/etc/nginx

# default
/etc/nginx/sites-enabled

# server.js -> anywhere
```

### Run the project
> #### Run the server
```bash
# Run server.js multiple times, for testing load balancing on multiple servers
node server.js 3001 &
node server.js 3002 &
node server.js 3003 &
node server.js 3004 &
```

> #### request in the web browser
```bash
# <ipAddr>:Port
localhost:82
```

#### in this example, i'm using "least connection" in load balancing
> #### output:
> ![Image](https://github.com/user-attachments/assets/e6d89798-c151-451b-ac23-cf690d093928)
> ![Image](https://github.com/user-attachments/assets/d346ab2d-e882-4aae-bc6e-f1695a76f2fc)
> ![Image](https://github.com/user-attachments/assets/4ed949e0-ebc5-4e67-9d16-fe058f6de3ce)
> ![Image](https://github.com/user-attachments/assets/461a7574-f6e0-444d-8e56-526367971051)
