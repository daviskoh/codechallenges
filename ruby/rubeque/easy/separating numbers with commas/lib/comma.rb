# turn to string
# reverse string
# every 3 digits: add comma
  # split every 3 characters
  # join with comma
# reverse and return

def separate_with_comma(n)
  result = n.to_s.reverse

  i = 0
  while i < result.length do 
    result.insert(i, ',') if i % 4 == 0
    i += 1
  end

  result.reverse[0..-2]
  # n.to_s.reverse.gsub('000', '000,').reverse
end