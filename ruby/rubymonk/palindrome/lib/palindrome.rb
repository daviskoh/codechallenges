# Given a sentence, return true if the sentence is a palindrome.
# palindrome === word that is same when reversed

def palindrome?(string)
  string.downcase.gsub(/\s+/, '') === string.downcase.gsub(/\s+/, '').reverse
end