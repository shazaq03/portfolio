## Bandit - OverTheWire Writeup

### General instruction:

* ssh -p < portnumber> bandit< levelNumber>@bandit.labs.overthewire.org
* example: ssh -p 2220 bandit1@bandit.overthewire.org
* you will be prompted to enter password which is the flag captured from the previous round.
* the flags here may expire and when they do you have to start from the beginning.
* personal note: finish the entire bandit on a single weekend sitting.

---


#### level 0 --> level 1

* Log in using `ssh -p 2220 bandit0@bandit.labs.overthewire.org`
* enter the password bandit0 when prompted.
* once in,  `ls` and then `cat readme` .
* FLAG: `6y2kwnwK6grgvwvpvLaa2T1cpFEKOhNR` .

---

#### level 1 --> level 2

* `ls` to view the file with name as `-` (dashed filename).
* use full path in cat to view the contents `cat ./-`
* FLAG: `PK8fYLZg2hnHSz83plBL1iEPKdD3QToB` .

---

#### level 2 --> level 3

* `ls` to find dashed filename with spaces in the name.
* use full path like before along with escape character (`\`) to escape the spaces.
* `cat ./--spaces\ in\ the\ filename--`
* FLAG: `7ZZ2LFrykP2zEyvBl4m3clcL7tGYJPME` .

---

#### level 3 --> level 4

* use `ls` to find the `inhere` directory and `cd` into it.
* once in, use `ls -a` to find the hidden `...Hiding-from-you` file.
* then simply `cat` to get the flag.
* FLAG: `xzTXq1rDJQVVAzdv5cHq1TQytTWufAMq` .

---

#### level 4 --> level 5

* many files in `inhere`. Task is to find the human-readable plain text file which has the flag.
* `file` command has `--mime-type` flag that gives the fiel type of the files passes as input.
* to pass a bunch of file with similar name at the sam time use wildcard (`*`) like `file --mime-type ./file0*` .
* this will give file types of all files and to filter only the plain text files use grep like `grep *text*` .
* pipline the output from file command to grep you get `file --mime-type ./file0* | grep "*text*"` .
* this will only a handful of files that you can cat one by one to find the flag.
* FLAG: `6C7h9GD8M6ai5nr7wo1RonrzFjj9yIrG` .

---

#### level 5 --> level 6

* many directories and each having many files in `inhere` .
* `find` command has `-type f` for regualr file types and `-size 1033c` for file with 1033 bytes size.
* thus you get `find -type f -size 1033c`
* FLAG: `pXa26xhMWaC2SvDotA4r9EgZkulOeSBW` .

---

#### level 6 --> level 7

* task is to find a file anywhere on the server with user,group and size specs.
* use `find` on the root directory `/` , along with `-user` , `-group` and `-size` flags.
* you will get a lot of permission denied errors. redirect them by `2>/dev/null` .
* thus `find / -user bandit7 -group group6 -size 33c 2>/dev/null` .
* `cat` the resulting file to get the flag.
* FLAG: `Bmnnvf82KzQlfxgAI2d1zYbr1u9pr3E3` .

---

#### level 7 --> level 8

* light work, simple `cat` and `grep` .
* FLAG: `VR1ljMayciFxbnUokuQmJFw6QC9VKtub` .

---

#### level 8 --> level 9

* task is to find a unique line.
* `uniq` command helps with its `-u` flag but that flag does not detect repeated line that are not adjacent.
* so first `sort` the file then pipeline through `uniq -u`.
* thus you do `sort data.txt | uniq -u` to get the flag.
* FLAG: `EjmOSvuAu7sGAHqHVcBDPirRe9T03kxl` .

---

#### level 9 --> level 10

* 



