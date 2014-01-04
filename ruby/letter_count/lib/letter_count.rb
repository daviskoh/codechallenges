def letter_count(string)
  str_array = string.gsub(' ', '').split('')
  str_array.each_with_object({}) { |letter, hash| hash[letter] = str_array.count(letter) }
end