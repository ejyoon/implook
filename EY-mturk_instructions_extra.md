Mturk
========================================================
Once you have your set of files ready to be posted on web:
Dan's instructions (https://www.stanford.edu/group/cocolab/cgi-bin/mediawiki/index.php/Mturk-tools) are really helpful, here are some elaborations on some of the steps for real beginners for all this html/java/mturk craze. (I'll be assuming you use Mac system)

* Configuring the Command Line Tools to use your AWS identifier information:

1. You should use a text editor program to open mturk.properties file.
2. To get your AWS identifier information.

  (a) set up a requestor account (on https://requester.mturk.com)
  (b) log in and go to: https://console.aws.amazon.com/console/home
  (c) click on your name on the top right corner of the page, and select 'security credentials' from the dropdown list
  (d) click on 'Access Keys (Access Key ID and Secret Access Key)'
  (e) if this is your first time, you will have to make a new access key (if there isn't one already)
  (f) this provides you with the access key and secret access key you will have to put in your mturk.properties file!
  
* setting up environment variables (like,what the heck does that mean!?)

You need to use Terminal program. If you click on the computer-screen-lookalike icon at the bottom (or open it from your Applications folder), this is what you'll see:

<img src='http://www.stanford.edu/~ejyoon/misc/terminal1.png'>

1. Terminal starts with a default working directory.
  a. Use *pwd* to see which directory it is
  b. Use *ls* to list the files in that directory
2. To change the working directory, use *cd*

<img src='http://www.stanford.edu/~ejyoon/misc/terminal2.png'>



