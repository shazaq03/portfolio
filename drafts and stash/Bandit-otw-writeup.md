## Bandit - OverTheWire Writeup

### General instruction:

* ssh -p < portnumber> bandit< levelNumber>@bandit.labs.overthewire.org
* example: `ssh -p 2220 bandit1@bandit.labs.overthewire.org`
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

* this file has some parts as human readable but most as binary.
* things like `cat` doesnt parse or work correctly.
* use `strings` and `grep` to get the line with a lot of `=` sign.
* thus `strings data.txt | grep "==="` .
* FLAG: `B0s2khmbT9u0geKuOoVGW3JZKhndE3BG` .

---

#### level 10 --> level 11

* light work, level page says the the file is encodes in base64.
* use `base64 -d data.txt` to get the flag.
* FLAG: `pYfOY6HwUsDj5rL9UvyhU7MCmv8vN5Ro` .

---

#### level 11 --> level 12

* the data is file is in ROT13 cipher.
* decrypt it by using `tr`(translate)command with the translated alphabet order.
* thus `cat data.txt | tr A-Za-z N-ZA-Mn-za-m` to get the flag.
* FLAG: `GROozWPO8QyN0mGrjUkID0WCYkZiQxrN` .

---

#### level 12 --> level 13

* this level is ball breaker, copy the actual data file to a seperate new directory like `tmp/cutomName/data.txt` .
* now inside the new directory start working. the file is compressed multiple times by different algorithms.
* the method is to use `file` to find the algorithm then revert the algorithm using the appropriate tool till we arrive at the flag.

| `file` says...        | Use...         | What it does                          |
| --------------------- | -------------- | ------------------------------------- |
| `ASCII text`          | `xxd -r`       | Converts a hex dump back to binary    |
| `gzip compressed`     | `gunzip -c`    | Decompresses a gzip file              |
| `bzip2 compressed`    | `bunzip2 -c`   | Decompresses a bzip2 file             |
| `POSIX tar archive`   | `tar -xf`      | Extracts files from a tar archive     |
| `XZ compressed`       | `xz -dc`       | Decompresses an XZ-compressed file    |

* FLAG: `qQYQiHOBPR8zR61qxYqX45quvihF2uzk` .

---

#### level 13 --> level 14

* this level gives ssh key file instead of the usual flag. it is simply available in home directory.
* `cat` the ssh file. copy the text in clipboard and logout from the level.
* now in your regular terminal in local machine outside of bandit's server.
* now make a local file using `nano` and paste the key contents in it.
* use `chmod 600 filename` to set the permission such thgat only the owner can read since the bandit command next will expect that.
* now try to login to the next `bandit14` by passing the key file to `ssh` command.
* thus `ssh -i path/to/ssh_key_file -p 2220 bandit14@bandit.labs.overthewire.org` to log in to bandit14 .

---

#### level 14 --> level 15

* remember that `level 13` webpage said there exists a file in `/etc/bandit_pass/bandit14` that only bandit14 can read.
* the task is to read that file now that we are in bandit14. and pass the password to `localhost 127.0.0.1` at port `30000` .
* thus `nc -N 127.0.0.1 30000` then paste the content from the `etc/bandit_pass/bandit14` file to get the flag.
* also note that there is an `authorized_keys` file in the `.ssh` in home directory. may come in handy later.
* FLAG: `pbLYuZtTg4MgaqfJx8jbA9gKKGqM68A7` .

---

#### level 15 --> level 16

* simple enough, just use `openssl s_client 127.0.0.1:30001` and when prompt wait paste the flag you used for 14 --> 15. that will give the flag.
* FLAG: `kS0Hf0u5HiXFwKMKFqXvPdOTNGGa0X8V` .

---

#### level 16 ---> level 17

* A bit tricky, first scan with `nmap` to find which ports are open also using `-sV` flag gives which of the ports are running `ssl`.
* on the ports running ssl, use the same `openssl` command but use the `-adv` (advanced) flag with it, like so, `openssl s_client -adv 127.0.0.1:31790` now paste the they flag of 15 --> 16, this will give you an ssh private key, copy and paste it in a local file.
* In the local machine change the permission to `chmod 600 filename` then use it to log in to bandit 17.

---

#### level 17 ---> level 18

* Simply diff the files `password.new` and `password.old` the new one contains the flag.
* FLAG: `OQxXZjELndr90zuhOTDYBEomI0SZITXI` .

---

#### level 18 ---> level 19

* The flag is in the `readme` file in the home directory but if you try to log in with the regular ssh command, it will log in then immediately log you out.
* The trick is pass the command to `cat readme` along with `ssh` as an argument.
* like so, `ssh -p 2220 bandit18@bandit.labs.overthewire.org cat readme` , this will give the flag before closing the session.
* FLAG: `KpsOfPkcP7i1FlIExk2QEjyt6dw8dxZI` .

---

#### level 19 ---> level 20

* The home directory has an executable file. check its permission, it shoud be `rws` for the owner. which means the file executes with the permissions of the file owner rather than the user running the command.
* Now as for the contents of the file, as the page says simply drey run it, it will show you how to use it, we simply pass a command to it and it executes it as bandit20.
* Now we know the password is in `/etc/bandit_pass/bandit20` now use the executable to run the `cat` command on the password file as `bandit20` like so `./bandit20-do cat /etc/bandit_pass/bandit20`, this gives the flag.
* FLAG: `4pIjcunZ0fK2vmp3IwfG8Vf7VhxD6pOA` .

---

#### level 20 ---> level 21

* Need two terminal sessions for this, log in two different terminals.
* run `netcat` listen at on terminal at a port of choice like so, `nc -l 127.0.0.1 51000` .
* On the other terminal run the executable with the port number `netcat` is listening on, like so `./suconnect 51000` .
* Now on the netcat paste the current flag and that will cause the `suconnect` to give you the new flag.
* FLAG: `bW9kBv5WC3P4yoDyf12LSdGuNz5ka6hY` .

---

#### level 21 ---> level 22

* simple enough, follow the given directory find the file for `bandit22` .
* then `cat` the file to see what it is doing. it would running another `.sh` file and look at that `.sh` file and you can see it writes the flag to a `/tmp/` file. `cat` the `/tmp/` and that would give the flag.
* FLAG: `RYVux2rHEm9tiXHmLFzuR7Vhx6AZQMEz` .

---

#### level 22 --> level 23

* same as before except when you find the `.sh` file. you should set the two shell variables `myname` and `mytarget` manually. but change `myname` as `bandit23` instead of `whoami` .
* the you can get the `mytarget` and then use that hash for the filename in `/tmp/filname` . then `cat` the file and that will give the flag.
* FLAG: `gKXDTAXnIz3OBxiPjRZ2uqutUlPZrBsw` .

---

#### level 23 ---> level 24

* same as before, find the `.sh` file and read it. you will find that, that file reads and executes any file in a certain directory than deletes it `/var/spool/$myname/foo` set `myname` as `bandit24` and then navigate to `/var/spool/bandit24/foo` there you can place a script and wait for the cronjob to execute it and delete it.
* the script should be something like
```
#!/bin/bash
cat /etc/bandit_pass/bandit24 > /tmp/flag

```
* then you can wait for sometime till the script is deleted in the directory then try `cat /tmp/flag` , that should give you the flag.
* FLAG: `gKXDTAXnIz3OBxiPjRZ2uqutUlPZrBsw` .

---

#### level 24 ---> level 25

*
