# Ping-pong

#### _Count ping by pong_

### By _**Ethan Law**_

### Description

_This website will take a user-given number and return a list of numbers counting up to it one by one. However, numbers divisible by 3 will be replaced with the word "ping," and numbers divisible by 5 will be replaced by the word "pong".  Meanwhile, numbers divisible by 15 will read "ping-pong"._

### Setup

* _Clone from Github_
* _Run on a web browser_
* _View_

_or just click [here](https://ejlaw01.github.io/ping-pong/)_

### Technologies used

_HTML, CSS, Bootstrap, JavaScript and jQuery_

### License

_Default_

## BDD

* The program will display the number a user submits.
  * Input: 7
  * Output: 7
* The program can count up by ones to that number.
  * Input: 3
  * Output: [1, 2, 3]
* It can put each number in the count into an unordered list.
  * Input: 3
  * Output:
      * 1
      * 2
      * 3
* It can detect numbers divisible by 3, 5, and 15 using modulos, e.g. if 5% === 0, then true.
  * Input: 15
  * Output: True
* It can replace certain numbers with words.
  * Input: 3
  * Output: 1   2   ping
* It will clear fields so that user can reuse the software without refreshing page.
  * 5, and then 3
  * 1     2     ping
* It will alert user to inappropriate types of input.
  * Input: -3
  * Output: Please enter a positive integer
