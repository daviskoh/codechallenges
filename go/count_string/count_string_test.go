package count_string

import (
	"fmt"
	"testing"
)

/**
 * Given a sentence containing multiple words, find the frequency of a given word in that sentence.
 */

func TestCountZeroInstance(t *testing.T) {
	sentence := "meow"
	word := "dude"

	if CountWord(sentence, word) == 0 {
		t.Log("Handles 0 occurrence")
	} else {
		t.Error("Does not handle 0 occurrence")
	}
}

func TestCountOneInstance(t *testing.T) {
	sentence := "meow"
	word := "meow"

	if CountWord(sentence, word) == 1 {
		t.Log("Handles 1 occurrence")
	} else {
		t.Error("Does not handle 1 occurrence")
	}
}

func TestCaseInsensitive(t *testing.T) {
	sentence := "Meow"
	word := "meow"

	if CountWord(sentence, word) == 0 {
		t.Log("Is case insensitive")
	} else {
		t.Error("Is not case insensitive")
	}
}

func TestHandlesMultipleInstances(t *testing.T) {
	sentence := "Meow there my friend and friend kinda thing"
	word := "friend"

	if CountWord(sentence, word) == 2 {
		t.Log("Handles multiple instances")
	} else {
		fmt.Println("HERERHEREHREHREHREHRHRH")
		fmt.Println(CountWord(sentence, word))
		t.Error("Does not handle multiple instances")
	}
}

func TestIgnoresPunctuation(t *testing.T) {
	sentence := "Meow there my friend, and friend kinda thing. And to you as well my friend."
	word := "friend"

	if CountWord(sentence, word) == 3 {
		t.Log("Ignores punctuation")
	} else {
		t.Error("Ignores punctuation")
	}
}
