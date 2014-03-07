def fibo_finder(n)
  return n if n <= 1

  # iterate through 2 to n
  # fibo_num will be sum of last two values in the sequence
  # throw fibo_num into sequence
  # keep going until the count of sequence is == n

  sequence = [0, 1]

  (2..n).each do |n|
    sequence << sequence[-1] + sequence[-2]
  end
  
  sequence.last
end