## Overview

The Docker Tool is a utility script designed to simplify common Docker commands for building, running, and stopping Docker containers. It provides a convenient interface for developers to manage Docker-related tasks within their projects.

## Prerequisites

Before using the Docker Tool, ensure the following prerequisites are met:

- Docker is installed on your machine.
- You have the necessary permissions to run Docker commands.

## Usage

### Running the Script

Make the script executable:

```bash
chmod +x tool.sh
```

### Commands

#### Build

Build a Docker image:

```bash
./tool.sh build <image_name> <dockerfile_path>
```

- `<image_name>`: The desired name for the Docker image.
- `<dockerfile_path>`: The path to the Dockerfile for the image.

#### Run

Run a Docker container:

```bash
./tool.sh run <host_port>:<container_port> <container_name> <image_name>
```

- `<host_port>`: The host port to map to the container.
- `<container_port>`: The port exposed by the container.
- `<container_name>`: The desired name for the Docker container.
- `<image_name>`: The name of the Docker image to use.

#### Stop

Stop a running Docker container:

```bash
./tool.sh stop <container_name>
```

- `<container_name>`: The name of the Docker container to stop.

#### Dump Database

Dump database from a running Docker container:

```bash
./tool.sh dumpdb <container_name> <output_file>
```

- `<container_name>`: The name of the Docker container to stop.
- `<output_file>`: Path and file name for storing the output file(with extension).

### Examples

#### Build Example

```bash
./tool.sh build my-image ./path/to/Dockerfile
```

#### Run Example

```bash
./tool.sh run 8000:80 my-container my-image
```

#### Stop Example

```bash
./tool.sh stop my-container
```

#### Dump Database Example

```bash
./tool.sh dumpdb my-container output_file
```
