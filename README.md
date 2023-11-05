
# Site

Instructions how to run this website

## Docker and docker compose installation

Ubuntu server:

```bash
sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get install -y htop apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && sudo apt-key fingerprint 0EBFCD88 && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" && sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose -y
```

If using non root user - add this user to docker group to allow using docker:

```bash
sudo usermod -aG docker $USER
```
Keep in mind that you need to relogin to apply changes.

## Deploy, init, start

Clone repository to somewhere:

```bash
git clone git@github.com:AlenaYarmak/your-it.git
```
Go to clonned directory
```bash
cd ./your-it
```

Change ```yourdomain.name``` domain name and email ```admin@example.com``` in Caddyfile to yours:

```
{
    email admin@example.com
}

yourdomain.name {
    root * /srv
    file_server
    reverse_proxy /api http://backend:3000
}
```

Go to root of repository (you should be in same directory with docker-compose.yml file) and run docker-compose stack with command:

```bash
docker-compose up -d
```

After that wait for docker images to download and builds and a few seconds after running while SSL certificates obtaining.
