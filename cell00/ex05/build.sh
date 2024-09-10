#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
else
	for test in "$@"; do
		echo "test$test" | xargs mkdir
	done
fi
