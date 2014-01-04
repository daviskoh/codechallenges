def pow(base, exp)
  result = 1

  exp.times { result *= base }
  
  result
end