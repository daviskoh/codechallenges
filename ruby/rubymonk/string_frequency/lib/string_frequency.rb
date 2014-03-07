# Given a sentence containing multiple words,
# find the frequency of a given word in that sentence.

def string_frequency(sentence, word)
  sentence.downcase.split(/\W+/).count(word.downcase)
end