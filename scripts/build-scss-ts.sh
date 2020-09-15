#!/usr/bin/env bash

set -e

sassfiles=(`find packages -name "*.scss"`)

for sassfile in ${sassfiles[@]}; do
  cssts=`echo ${sassfile} | sed -e 's/.scss/-css.ts/'`
  lastdir=`basename $(dirname ${cssts})`
  # skip sass files outside of src folders
  if [[ ${lastdir} != "src" ]]; then
    continue
  fi
  echo "Generating ${cssts}"
  node scripts/build-scss.js -s ${sassfile} -o ${cssts}
done
