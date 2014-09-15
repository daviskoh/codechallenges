package count_string

import (
	"fmt"

	"strings"
)

func CountWord(sentence, word string) int {
	// find 1st occurrence of word in sentence
	if wordIndex := strings.Index(sentence, word); wordIndex == -1 {
		// if not occur then return 0
		return 0
	} else {
		// if occur then return 1 + CountWord(substring sentence)
		substring := sentence[wordIndex+len(word) : len(sentence)]
		fmt.Println(substring)
		return 1 + CountWord(substring, word)
	}
}
