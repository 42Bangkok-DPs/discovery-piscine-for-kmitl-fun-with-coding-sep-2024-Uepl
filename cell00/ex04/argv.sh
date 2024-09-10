#!/bin/bash
if [ $# -eq 0 ]; then
	echo "No arguments supplied"
else
	count=0
	for test in "$@"; do
		 if [ $count -lt 3 ]; then 
			count=$[count+1] 
			echo "$test"
		fi 
	done
fi
