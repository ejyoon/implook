#!/usr/bin/env sh
pushd /Users/ericang/implookGIT/mturk/aws-mturk-clt-1.3.1/bin
./loadHITs.sh $1 $2 $3 $4 $5 $6 $7 $8 $9 -label /Users/ericang/implookGIT//eyimplook -input /Users/ericang/implookGIT//eyimplook.input -question /Users/ericang/implookGIT//eyimplook.question -properties /Users/ericang/implookGIT//eyimplook.properties -maxhits 1
popd