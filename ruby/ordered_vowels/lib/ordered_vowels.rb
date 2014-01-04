def ordered_vowel_word?(word)
  # remove all non vowels
  word.scan(/(a|e|i|o|u)/).flatten == word.scan(/(a|e|i|o|u)/).flatten.sort
end

def ordered_vowel_words(string)
  string.split(/\W+/).map do |word|
    word if ordered_vowel_word?(word)
  end.compact.join(' ')
end