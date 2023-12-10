#!/bin/bash

# Docker Tool

build() {
    local image_name=$1
    local dockerfile_path=$2
    docker build -t "$image_name" "$dockerfile_path"
}

run() {
    local host_port=$1
    local container_name=$2
    local image_name=$3
    docker run -it -p "$host_port" --name "$container_name" "$image_name"
}

stop() {
    local container_name=$1
    docker stop "$container_name"
}

dumpdb() {
    local container_name=$1
    local output_file=$2
    docker exec "$container_name" sh -c 'exec python manage.py dumpdata' > "$output_file"
}

# Main execution

case "$1" in
    "build")
        build "$2" "$3"
        ;;
    "run")
        run "$2" "$3" "$4"
        ;;
    "stop")
        stop "$2"
        ;;
    "dumpdb")
        dumpdb "$2" "$3"
        ;;
    *)
        echo "Usage: $0 {build|run|stop|dumpdb}"
        exit 1
        ;;
esac

exit 0
