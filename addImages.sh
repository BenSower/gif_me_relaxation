#!/bin/bash

rename 's/.jpg/.gif/' images/*
rename 's/.jpeg/.gif/' images/*

a=1
for i in images/*.gif; do
  mv ${i} images/${a}.gif
  let a=a+1
done

rm ownJs/imageCount.js
echo "var imageCount = $a;"  > ownJs/imageCount.js
