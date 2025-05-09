#!/bin/bash
set -e
set -x
THIS_DIR=$(dirname "$0")
cd "${THIS_DIR}/.." || exit

./docker/temp.sh sh -c "npm run test:basic"
test_exit_code=$?
if [ ${test_exit_code} != 0 ]; then exit ${test_exit_code}; fi
