/* Write a regex to validate a 24 hours time string. See examples to figure out what you should check for:

Accepted: 01:00, 1:00, 00:00

Not accepted: 24:00, 13:1, 12:60

You should check for correct length and no spaces.

 */

//solution

const validateTime = time => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(time)
