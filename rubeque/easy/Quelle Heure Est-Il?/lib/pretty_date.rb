def pretty_date(date)
  # split by any non-word character
    # if begin w/ leter
    # if begin w/ 4 digit n
    # else it is already in standard format
    # match to hash
    # interpolate into standard format

  months = {'1' => 'Jan', 
  '2' => 'Feb', 
  '3' => 'Mar', 
  '4' => 'Apr', 
  '5' => 'May', 
  '6' => 'Jun', 
  '7' => 'Jul', 
  '8' => 'Aug', 
  '9' => 'Sep', 
  '10' => 'Oct', 
  '11' => 'Nov', 
  '12' => 'Dec'}

  date_array = date.split(/\W+/)

  if date_array[0].to_i == 0 # start w/ letter
    date_array[0] = months.key(date_array.first[0..-2])
  elsif date_array.first.length == 4 # start w/ year
    date_array.sort!
  end

  "#{months[date_array.first]} #{date_array[1]}, #{date_array.last}"
end