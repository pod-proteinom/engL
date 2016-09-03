#!/bin/bash 
if [ "$1" == "dev" ]; then
	VOLUME="devdata"
elif [ "$1" == "prod" ]; then
	VOLUME="dbdata"
else
	exit -1
fi

if !(docker volume ls | grep $VOLUME &>/dev/null;)
then
	docker run -v $VOLUME:/data/db --name mongod -d mongo --directoryperdb
	docker exec mongod mongo admin --eval "db.createUser({user: 'dev', pwd: 'dev', roles: [ 'root' ]})"
	docker stop mongod
	docker rm mongod
fi
