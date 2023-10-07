
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
git clone git@github.com:AlenaYarmak/landing-page.git
```
Go to clonned directory
```bash
cd ./landing-page

chmod +x init.sh
chmod +x start.sh
chmod +x rebuild.sh

./init.sh example.com  // replace example.com with your domain name
./start.sh
```

If changes in site sources:

```bash
./rebuild.sh
```
