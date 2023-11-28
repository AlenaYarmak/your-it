
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

Go to root of repository (you should be in same directory with docker-compose.yml file) and run docker-compose stack with command:

```bash
docker-compose up -d
```

After that wait for docker images to download and builds and a few seconds after running while SSL certificates obtaining.

## Configuration

Create a .env file in the root directory and add the following configuration:

#### Backend config

| Name variable            | Desciption                                                              |
| ----------------- | ------------------------------------------------------------------ |
| SEND_EMAIL_PERIOD_HOURS | Set the time period (in hours) in which a user can send a specified number of emails |
| SEND_EMAIL_TIMES_DAY | Set the maximum number of emails a user can send in a time period (day in our case) |

#### SMTP Configuration

| Name variable            | Desciption                                                              |
| ----------------- | ------------------------------------------------------------------ |
| EMAIL_FROM | The email address from which emails will be sent |
| EMAIL_TO | The email address where received emails will be forwarded |
| SMTP_HOST | The hostname of the SMTP server |
| SMTP_PASSWORD | The password for accessing the SMTP server |
| SMTP_PORT | The port number for the SMTP server |
| SMTP_SECURE | Use true if the SMTP server requires a secure connection, false otherwise |
| SMTP_USER | The username for accessing the SMTP server |

#### Example

```bash
SEND_EMAIL_PERIOD_HOURS=24
SEND_EMAIL_TIMES_DAY=3

EMAIL_FROM=info@example.com
EMAIL_TO=requests@example.com
SMTP_HOST=smtp.eu.mailgun.org
SMTP_PASSWORD=pass
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@example.com
```