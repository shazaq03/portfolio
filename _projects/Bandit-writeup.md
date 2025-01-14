---
title: Bandit-writeup
layout: project-post-layout
---
=======================================================
General:

ssh bandit[level number]@bandit.labs.overthewire.org

=======================================================
Passwords: {these can change periodically, if they do, you have to start over}

lvl 1 > bandit0
lvl 1 ---> lvl 1 > ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If
lvl 2 ---> lvl 2 > 263JGJPfgU6LtdEvgfWU1XP5yac29mFx
lvl 3 ---> lvl 3 > MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx
lvl 4 ---> lvl 4 > 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ
lvl 5 ---> lvl 5 > 4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw 
lvl 6 ---> lvl 6 > HWasnPhtq9AVKe0dmk45nxy20cvUa6EG
lvl 7 ---> lvl 7 > morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj
lvl 8 ---> lvl 8 > dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc
lvl 9 ---> lvl 9 > 4CKMh1JI91bUIZZPXDqGanal4xvAg0JM 
lvl 10 ---> lvl 10 > FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey
lvl 11 ---> lvl 11 > dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr
lvl 12 ---> lvl 12 > 7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4
lvl 13 ---> lvl 13 > FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn
lvl 14 ---> lvl 14 >
=======================================================
lvl 1 ---> lvl 1

* first 'ls' to list all files.
* then, 'cat' the 'readme' file to get the password for the next level

=======================================================
lvl 2 ---> lvl 2

* use 'ls' to list all files.
* you can find a file named '-'(dashed filename).
* this messes with 'cat' since the 'cat' command reads standard input if no file is passed or '-' is passed as its argument.
* you can make it work by using the path of the dashed file to then cat it i.e., "cat ./-" .
* this will give you password for next level.

=======================================================
lvl 3 ---> lvl 3

* use 'ls' to list all files.
* you find a file named "spaces in this filename".
* run the cat command by escaping the space characters by using '\'(escape character). i.e., 'cat spaces\ in\ this\ filename' .
* this will give you password for the next level.

=======================================================
lvl 3 ---> lvl 4

* use 'ls' to list files and directories.
* 'cd' into 'inhere' directory i.e., 'cd inhere/' .
* 'ls -a' to find the hidden file(begins with . in its filename).
* cat the '...Hiding-From-You' file to get the password for next level.

=======================================================
lvl 4 ---> lvl 5

* use 'ls' to list fiels and directories.
* cd into 'inhere' directory.
* in there list all files using 'ls -a'.
* you will 10 dashed name files (from 00 to 09). 
* cat these one by one using the path "./file03" .
* only one of the files will contain the flag others will have binary unintelligible content.
* or you can use the command "find -readable"

=======================================================

lvl 5 ---> lvl 6
 
 * cd into the inhere directory.
 * It is given in website that the flag file is human-readable, of size 1033 bytes and is not executable. Search for each of these in man page for find command
 * you will end up in the following command "find -readable -size 1033c \! -executable".
 * running the above command will give you the flag file, in my case "./maybehere07/.file2".

=======================================================

lvl 6 ---> lvl 7

 * The website for this level says the flag file is owned by the user bandit7 and group bandit6 and of size 33 bytes.
 * as the above question look at man page for -user, -group and -size.
 * also since the file can be anywhere in th server not just the pwd use 'find /' to start search from root directory.
 * one good addition is use of "-type f" since we are looking for a 'file'.
 * so the command would be "find / -type f -group bandit6 -user bandit7 -size 33c".
 * this will give you a lot of errors since we dont have permission to read a lot of files.
 * we have send those errors to the black hole file using '2>/dev/null/' {2 being standard code for standard error, 0 for input, 1 for output}.
 * so now "find / -type f -group bandit6 -user bandit7 -size 33c 2>/dev/null/".
 * this will give you the location of the file and use cat to get the flag.

=======================================================

lvl 7 ---> lvl 8

 * The webpage says the flag is in data.txt file next to the word "millionth".
 * ls to find file 'data.txt'
 * cat the file to get a crap load of false flags along with correct one.
 * pipe line the output to grep the word "millionth", thus getting the correct flag.
 * the command is 'cat data.txt | grep "millionth" '.

=======================================================

lvl 8 ---> lvl 9

 * the webpage says the flag is in the data.txt file and that it is the onlhy line that is unique.
 * to find this use the uniq command with -u flag to display only elements that occur once.
 * but the problem with this is tha that the uniq commn donly looks for adjacent duplicates so first just sort it using sort command.
 * 'sort data.txt | uniq -u'

=======================================================

lvl 9 ---> lvl 10

 * the flag file is a binary file with a few readable strings.
 * use strings command since cat command cant read binary file. string command prints all printable characters.
 * this gives a lot of them, the webpagea also says that the flag is preceeded by many '=' signs.
 * use grep to filter it out. don't use "^==" to check that it starts with = sign it is a misunderstanding.
 * just use strings data.txt | grep "=="
 * this gives the flag.

=======================================================

lvl 10 ---> lvl 11

* the command base64 is used to encode and decode base64.
* use -d flag to decode
* "cat data.txt | base64 -d" this gives the flag.

=======================================================

lvl 11 ---> lvl 12

* The webpage said the password in data.txt is encoded using ROT-13. Its basically ceaser cipher with 13 as the shift.
* cat the data.txt to find encoded text. you can use an online decoder or use tr command.
* cat data.txt | tr 'N-ZA-Mn-za-m' 'A-Za-z'
* this command translates uppercase and lowercase rot-13 letter. A is mapped to N M is mapped to Z.

=======================================================

lvl 12 ---> lvl 13

* This level is a bit of a pain. the data.txt file is compressed multiple times using several algorithms then converted to hexdump.
* first as per the instruction on the webpage lets create a temp directory in the /tmp (you will need it to work out the mess).
* copy the data.txt file from home dir to this new dir. Once thats done we can get to work.
* use xxd data.txt | head to view the hex dump, you can take the first few characters to compare it to a hex dump reference in wikipedia or anything else to find what type of file it is.
* now decode the hexdump to non-readable compressed content using xxd -r data.txt compressed0.
* now you use the wikipedia refernce or alternatively you can use the file command to know the type of file.
* if it is 'gzip' then cp the compressed to compressed.gz then decode it using 'gzip -d compressed.gz'
* if it is 'bzip2' then decode it using 'bzip2 compressed'.
* if it is 'POSIX (GNU)' it will have a payload aka a file archived in it. chage the name to 'filename.tar' then extract the file using 'tar -xf filname.tar'. now 'ls' to find the extracted file then use that file from now on.
* find the file type again and repeat until you arrived at an ascii text file, whcih uon using 'cat' will give you the password.