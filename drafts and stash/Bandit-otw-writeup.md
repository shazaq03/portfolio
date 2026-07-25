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

*




