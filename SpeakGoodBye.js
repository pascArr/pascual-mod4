// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1


// DO NOT attach the speakWord variable to the 'byeSpeaker' object.


// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2


<<<<<<< HEAD
<<<<<<< HEAD
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name );

}

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.

	window.byeSpeaker = byeSpeaker;
=======
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.

=======
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.

>>>>>>> 5c4ea184a5493dd39744361719cbe7e04d00af2c

(function (window){

var byeSpeaker = {};

var speakWord = "Good Bye";

byeSpeaker.speak = function (name) {
	console.log(speakWord + " " + name + '\n');
}

window.byeSpeaker = byeSpeaker.speak;
<<<<<<< HEAD
>>>>>>> 5c4ea184a5493dd39744361719cbe7e04d00af2c
=======
>>>>>>> 5c4ea184a5493dd39744361719cbe7e04d00af2c
	
})(window);