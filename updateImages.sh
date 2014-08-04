#!/bin/bash

#TODO: Incremental renaming instead of complete scanning...

rename 's/.jpg/.gif/' images/*
rename 's/.jpeg/.gif/' images/*

#rename files to hashes to prevent overwriting
for file in images/*
do
    if [ -f "$file" ]
    then
        base=${file##*/}
        noext=${base%.*}
        newfile=$(printf '%s' "$noext" | openssl sha1)
        mv "$file" "images/$newfile.gif"
    fi
done

#rename files to incrementing filenames
a=0
for i in images/*.gif; do
  mv "${i}" images/${a}.gif
  let a=a+1
done

rm ownJs/imageCount.js
echo "var imageCount = $a;"  > ownJs/imageCount.js
