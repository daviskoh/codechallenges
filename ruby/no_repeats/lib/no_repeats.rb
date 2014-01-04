def no_repeat?(year)
  arr_form = year.to_s.split('')
  arr_form.all? { |n| arr_form.count(n) == 1 }
end

def no_repeats(start_year, end_year)
  # iterate through start & end
  # throw into array if not include repeated
  (start_year..end_year).each_with_object([]) { |year, arr| arr << year if no_repeat?(year) }
end