# Docker files - images and container setup

Make sure you have the <a href="https://docs.docker.com/engine/install/">Docker Engine</a> installed.

## Basic setup

1. Run the command

```bash
docker build -t your-project-image-name .
```
2. Once the image is built, run the command
```bash
docker-compose up -d
```
The Docker Compose configuration allows you to define multiple services and their configurations, enabling you to run and manage multiple containers as a single application.

The `-d` flag stands for "detached" and instructs Docker Compose to run the containers in the background, allowing you to continue using the command line without being attached to the container logs.

### Other commands to manage running containers

To stop and remove containers

```bash
docker-compose down
```

To stop containers without removing them
```bash
docker-compose stop
```