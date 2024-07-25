test:
	npm test;

check:
	make test | grep -E "\.tsx|\.ts" | grep -E " 0 \||[1-9] \|" > not-cover.txt
