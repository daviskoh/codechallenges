# iterate over 0 to s.length count
  # check groups of string and add to result if 
    # length is greater than result
    # it equals reverse of itself

def longest_palindrome(s)
  result = ''
  
  for i in (0..s.length-1) do
    for j in (i..s.length-1) do 
      result = s[i..j] if s[i..j].length > result.length && s[i..j] == s[i..j].reverse
    end
  end
  
  result
end