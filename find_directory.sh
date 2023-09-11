#!/bin/bash

#shopt -s nullglob
#PATH=$1
KEY=$2

walk_dir(){
#    shopt -s nullglob dotglob
    for file in "$1"/*
    do
        if [ -d "$file" ]; then
            walk_dir "$file"
        #    echo "$file"
        else
            # echo "filename: $file"
             if  grep -q  "$KEY" "$file" ;then
                 echo "$file"
             fi
        fi

    done

}

walk_dir $1