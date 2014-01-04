def nearest_larger(array, i)
  # itereate through array
  # find index of number in array that is closest to i
  result = nil

  array.each_with_index do |n, j|
    result = j if array[i] < array[j] && (result.nil? || (i - j).abs < (i - result).abs)
  end

  result
end